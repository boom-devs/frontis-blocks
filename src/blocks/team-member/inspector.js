import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	TextControl,
	ToggleControl,
	Button,
	SelectControl,
	ResponsiveWrapper, __experimentalHStack as HStack,
	TextareaControl,
} from '@wordpress/components';

import { useEffect, memo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import {
	BADGE_ALIGNMENT, 
	BADGE_POSITION, 
	BORDER_STYLES, 
	CARD_WRAP_ALIGNMENT, 
	CONTENT_POSITION, 
	CONTENT_SOCIAL_ICON_POSITION, 
	IMAGE_SOCIAL_ICON_POSITION, 
	OVERFLOW_OP, 
	SEPARATOR_POSITION, 
	SOCIAL_ICON_ANIMATION, 
	SOCIAL_ICON_TYPE
} from '@Constants/fbConstants';

import SortableItem from './sortableItem.js';
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_TypographyControl from '@Components/typography-control';
import FB_ColorControl from '@Components/color-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import FB_SwitcherControl from '@Components/switcher-control';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ImageControl from '@Components/image-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {

	const {
		blockID,
		blockStyle,
		
		// Photo
		teamMemberImageAlignment,
		teamMemberImageUrl,
		teamMemberImageAlt,
		teamMemberImageID,
		teamMemberImagePosition,
		teamMemberImageAttachment,
		teamMemberImageRepeat,
		teamMemberImageSize,

		teamMemberImageWidthUnits,
		teamMemberImageWidth,

		teamMemberImageHeightUnits,
		teamMemberImageHeight,

		// Team Image Margin
		teamMemberImageMarginUnits,
		teamMemberImageMarginDesktop,
		teamMemberImageMarginTab,
		teamMemberImageMarginMobile,
		teamMemberImageMarginLink,

		// Team Image Border Type
		teamMemberImageBorder,
		teamMemberImageBorderColorSwitcher,
		teamMemberImageBorderColor,
		teamMemberImageBorderHoverColor,
		teamMemberImageBGColor,
		teamMemberImageBGHoverColor,
		teamMemberImageOverlayOpacity,

		//overlay color
		teamMemberImageOverlaySwitcher,
		teamMemberImageBGColorSwitcher,
		teamMemberImageBgType,
		teamMemberImageBgClassicColor,
		teamMemberImageBgGradientColor,
		teamMemberImageBgCustomGradientSwitcher,
		teamMemberImageBgCustomGradientInputValue,
		teamMemberImageBgHoverType,
		teamMemberImageBgHoverClassicColor,
		teamMemberImageBgHoverGradientColor,
		teamMemberImageBgHoverCustomGradientSwitcher,
		teamMemberImageBgHoverCustomGradientInputValue,

		teamMemberImageBorderUnits,
		teamMemberImageBorderDesktop,
		teamMemberImageBorderTab,
		teamMemberImageBorderMobile,
		teamMemberImageBorderLink,

		// Team Image Border Radius
		teamMemberImageBorderRadiusUnits,
		teamMemberImageBorderRadiusDesktop,
		teamMemberImageBorderRadiusTab,
		teamMemberImageBorderRadiusMobile,
		teamMemberImageBorderRadiusLink,

		// Content
		teamMemberContentPosition,
		teamMemberCardAlignment,

		// Badge
		teamMemberBadgeSwitcher,
		teamMemberBadge,
		teamMemberBadgePosition,
		teamMemberBadgeAlignment,

		teamMemberBadgeColorSwitcher,
		teamMemberBadgeColor,
		teamMemberBadgeHoverColor,
		teamMemberBadgeBgColorSwitcher,
		teamMemberBadgeBgColor,
		teamMemberBadgeBgHoverColor,

		teamMemberBadgeTypographyData,
		teamMemberBadgeTypoSwitcher,
		teamMemberBadgeTypoType,
		teamMemberBadgeTypoOption,
		teamMemberBadgeFontFamily,
		teamMemberBadgeFontSize,
		teamMemberBadgeFontSizeUnits,
		teamMemberBadgeFontWeight,
		teamMemberBadgeFontStyle,
		teamMemberBadgeTextTransform,
		teamMemberBadgeTextDecoration,
		teamMemberBadgeLetterSpacing,
		teamMemberBadgeLetterSpacingUnits,
		teamMemberBadgeLineHeight,
		teamMemberBadgeLineHeightUnits,
		teamMemberBadgeLoadGoogleFonts,

		teamMemberBadgeMarginUnits,
		teamMemberBadgeMarginDesktop,
		teamMemberBadgeMarginTablet,
		teamMemberBadgeMarginMobile,
		teamMemberBadgeMarginLink,

		teamMemberBadgePaddingUnits,
		teamMemberBadgePaddingDesktop,
		teamMemberBadgePaddingTablet,
		teamMemberBadgePaddingMobile,
		teamMemberBadgePaddingLink,

		teamMemberBadgeBorder,
		teamMemberBadgeBorderColorSwitcher,
		teamMemberBadgeBorderColor,
		teamMemberBadgeBorderHoverColor,

		teamMemberBadgeBorderUnits,
		teamMemberBadgeBorderDesktop,
		teamMemberBadgeBorderTablet,
		teamMemberBadgeBorderMobile,
		teamMemberBadgeBorderLink,

		teamMemberBadgeBorderRadiusUnits,
		teamMemberBadgeBorderRadiusDesktop,
		teamMemberBadgeBorderRadiusTablet,
		teamMemberBadgeBorderRadiusMobile,
		teamMemberBadgeBorderRadiusLink,		
		



		// Team Name
		teamMemberName,
		teamMemberNameHeadingTag,

		teamMemberNameColorSwitcher,
		teamMemberNameColor,
		teamMemberNameHoverColor,

		teamMemberNameGlobalTypoSwitcher,
		teamMemberNameGlobalTypographyData,
		teamMemberNameGlobalTypoType,
		teamMemberNameGlobalTypoOption,
		teamMemberNameFontFamily,
        teamMemberNameFontSize,
        teamMemberNameFontSizeUnits,
        teamMemberNameFontWeight,
        teamMemberNameFontStyle,
        teamMemberNameTextTransform,
        teamMemberNameTextDecoration,
        teamMemberNameLetterSpacing,
        teamMemberNameLetterSpacingUnits,
        teamMemberNameLineHeight,
        teamMemberNameLineHeightUnits,
		teamMemberNameLoadGoogleFonts,

		// Team Name Margin
		teamMemberNameMarginUnits,
		teamMemberNameMarginDesktop,
		teamMemberNameMarginTab,
		teamMemberNameMarginMobile,
		teamMemberNameMarginLink,

		// Team Designation Typography
		teamMemberDesignation,
		teamMemberDesignationHeadingTag,
		teamMemberDesignationColorSwitcher,
		teamMemberDesignationColor,
		teamMemberDesignationHoverColor,
		teamMemberDesignationLoadGoogleFonts,
		teamMemberDesignationGlobalTypoSwitcher,
		teamMemberDesignationGlobalTypographyData,
		teamMemberDesignationGlobalTypoType,
		teamMemberDesignationGlobalTypoOption,
		teamMemberDesignationFontFamily,
        teamMemberDesignationFontSize,
        teamMemberDesignationFontSizeUnits,
        teamMemberDesignationFontWeight,
        teamMemberDesignationFontStyle,
        teamMemberDesignationTextTransform,
        teamMemberDesignationTextDecoration,
        teamMemberDesignationLetterSpacing,
        teamMemberDesignationLetterSpacingUnits,
        teamMemberDesignationLineHeight,
        teamMemberDesignationLineHeightUnits,

		// Team Designation Margin
		teamMemberDesignationMarginUnits,
		teamMemberDesignationMarginDesktop,
		teamMemberDesignationMarginTab,
		teamMemberDesignationMarginMobile,
		teamMemberDesignationMarginLink,
		

		// Team Desc
		teamMemberDescSwitcher,
		teamMemberDesc,
		teamMemberDescColorSwitcher,
		teamMemberDescColor,
		teamMemberDescHoverColor,
		teamMemberDescLoadGoogleFonts,
		teamMemberDescGlobalTypoSwitcher,
		teamMemberDescGlobalTypographyData,
		teamMemberDescGlobalTypoType,
		teamMemberDescGlobalTypoOption,
		teamMemberDescFontFamily,
        teamMemberDescFontSize,
        teamMemberDescFontSizeUnits,
        teamMemberDescFontWeight,
        teamMemberDescFontStyle,
        teamMemberDescTextTransform,
        teamMemberDescTextDecoration,
        teamMemberDescLetterSpacing,
        teamMemberDescLetterSpacingUnits,
        teamMemberDescLineHeight,
        teamMemberDescLineHeightUnits,

		// Team Desc Margin
		teamMemberDescMarginUnits,
		teamMemberDescMarginDesktop,
		teamMemberDescMarginTab,
		teamMemberDescMarginMobile,
		teamMemberDescMarginLink,

		// Team Content
		teamMemberContentAlignment,

		// Team Content Padding
		teamMemberContentPaddingUnits,
		teamMemberContentPaddingDesktop,
		teamMemberContentPaddingTab,
		teamMemberContentPaddingMobile,
		teamMemberContentPaddingLink,

		// Team Content Margin
		teamMemberContentMarginUnits,
		teamMemberContentMarginDesktop,
		teamMemberContentMarginTab,
		teamMemberContentMarginMobile,
		teamMemberContentMarginLink,

		// Team Content Border
		teamMemberContentBorder,
		teamMemberContentBorderColorSwitcher,
		teamMemberContentBorderColor,
		teamMemberContentBorderHoverColor,
		teamMemberContentBorderUnits,
		teamMemberContentBorderDesktop,
		teamMemberContentBorderTab,
		teamMemberContentBorderMobile,
		teamMemberContentBorderLink,

		// Team Content Border Radius
		teamMemberContentBorderRadiusUnits,
		teamMemberContentBorderRadiusDesktop,
		teamMemberContentBorderRadiusTab,
		teamMemberContentBorderRadiusMobile,
		teamMemberContentBorderRadiusLink,

		// Social Icons
		teamMemberSocialProfileSwitcher,
		teamMemberIconsAlignment,
		teamMemberIconStyleSwitcher,
        teamMemberIconsSize,
        teamMemberIconsSizeUnits,
        teamMemberIconsSpacing,
        teamMemberIconsSpacingUnits,
		teamMemberIconsColorSwitcher,
		teamMemberIconsColor,
		teamMemberIconsHoverColor,
		teamMemberIconsBGColorSwitcher,
		teamMemberIconsBGColor,
		teamMemberIconsBGHoverColor,
		teamMemberIconsBorder,
		teamMemberIconsBorderColor,
		teamMemberIconsBorderHoverColor,
		teamMemberIconsBorderColorSwitcher,
		teamMemberSocialProfileBorder,
		teamMemberSocialProfileBorderColor,
		teamMemberSocialProfileBorderHoverColor,
		teamMemberSocialProfileBorderColorSwitcher,
		teamMemberIconsPaddingUnits,
		teamMemberIconsDesktopPadding,
		teamMemberIconsTabPadding,
		teamMemberIconsMobilePadding,
		teamMemberIconsPaddingLink,
		teamMemberIconsMarginUnits,
		teamMemberIconsDesktopMargin,
		teamMemberIconsTabMargin,
		teamMemberIconsMobileMargin,
		teamMemberIconsMarginLink,
		teamMemberIconsBorderUnits,
		teamMemberIconsDesktopBorderWidth,
		teamMemberIconsTabBorderWidth,
		teamMemberIconsMobileBorderWidth,
		teamMemberIconsBorderLink,
		teamMemberIconsBorderRadiusUnits,
		teamMemberIconsDesktopBorderRadiusWidth,
		teamMemberIconsTabBorderRadiusWidth,
		teamMemberIconsMobileBorderRadiusWidth,
		teamMemberIconsBorderRadiusLink,
		teamMemberSocialProfileBorderUnits,
		teamMemberSocialProfileDesktopBorderWidth,
		teamMemberSocialProfileTabBorderWidth,
		teamMemberSocialProfileMobileBorderWidth,
		teamMemberSocialProfileBorderLink,

		// Team Member
		teamMemberZIndex,
		teamMemberOverflow,
		teamMemberPaddingUnits,
		teamMemberDesktopPadding,
		teamMemberTabPadding,
		teamMemberMobilePadding,
		teamMemberPaddingLink,
		teamMemberMarginUnits,
		teamMemberDesktopMargin,
		teamMemberTabMargin,
		teamMemberMobileMargin,
		teamMemberMarginLink,
		teamMemberBorder,
		teamMemberBorderColor,
		teamMemberBorderHoverColor,
		teamMemberBorderColorSwitcher,
		teamMemberBorderUnits,
		teamMemberDesktopBorderWidth,
		teamMemberTabBorderWidth,
		teamMemberMobileBorderWidth,
		teamMemberBorderLink,
		teamMemberBorderRadiusUnits,
		teamMemberDesktopBorderRadiusWidth,
		teamMemberTabBorderRadiusWidth,
		teamMemberMobileBorderRadiusWidth,
		teamMemberBorderRadiusLink,
		teamMemberDesktopSwitcher,
		teamMemberTabletSwitcher,
		teamMemberMobileSwitcher,

		// Social Profile
		teamMemberSocialItems,
		frontendTeamMemberSocialItems,
		teamMemberSocialType,
		teamMemberSocialPosition,
		teamMemberSocialAlignment,
		socialIconBtnSwitcher,
		teamMemberSocialIconAnimationType,

		// Social Icon Wrapper Btn
		socialIconBtnIcon,
		frontendSocialIconBtnIcon,
		socialIconBtnIconSize,
		socialIconBtnIconSizeUnits,
		socialIconBtnColorSwitcher,
		socialIconBtnColor,
		socialIconBtnHoverColor,
		socialIconBtnBGColorSwitcher,
		socialIconBtnBGColor,
		socialIconBtnBGHoverColor,
		socialIconBtnBorder,
		socialIconBtnBorderColor,
		socialIconBtnBorderHoverColor,
		socialIconBtnBorderColorSwitcher,
		socialIconBtnPaddingUnits,
		socialIconBtnDesktopPadding,
		socialIconBtnTabPadding,
		socialIconBtnMobilePadding,
		socialIconBtnPaddingLink,
		socialIconBtnMarginUnits,
		socialIconBtnDesktopMargin,
		socialIconBtnTabMargin,
		socialIconBtnMobileMargin,
		socialIconBtnMarginLink,
		socialIconBtnBorderUnits,
		socialIconBtnDesktopBorderWidth,
		socialIconBtnTabBorderWidth,
		socialIconBtnMobileBorderWidth,
		socialIconBtnBorderLink,
		socialIconBtnBorderRadiusUnits,
		socialIconBtnDesktopBorderRadiusWidth,
		socialIconBtnTabBorderRadiusWidth,
		socialIconBtnMobileBorderRadiusWidth,
		socialIconBtnBorderRadiusLink,

		// Advance Backgorund
		teamMemberBgColorSwitcher,
		teamMemberBgType,
		teamMemberBgClassicColor,
		teamMemberBgGradientColor,
		teamMemberBgCustomGradientSwitcher,
		teamMemberBgCustomGradientInputValue,
		teamMemberBgImageUrl,
		teamMemberBgImageAlt,
		teamMemberBgImageID,
		teamMemberBgImagePosition,
		teamMemberBgImageAttachment,
		teamMemberBgImageRepeat,
		teamMemberBgImageSize,
		teamMemberBgHoverType,
		teamMemberBgHoverClassicColor,
		teamMemberBgHoverGradientColor,
		teamMemberBgHoverCustomGradientSwitcher,
		teamMemberBgHoverCustomGradientInputValue,
		teamMemberBgHoverImageUrl,
		teamMemberBgHoverImageAlt,
		teamMemberBgHoverImageID,
		teamMemberBgHoverImagePosition,
		teamMemberBgHoverImageAttachment,
		teamMemberBgHoverImageRepeat,
		teamMemberBgHoverImageSize,

		// Content Backgorund
		teamMemberContentBgColorSwitcher,
		teamMemberContentBgType,
		teamMemberContentBgClassicColor,
		teamMemberContentBgGradientColor,
		teamMemberContentBgCustomGradientSwitcher,
		teamMemberContentBgCustomGradientInputValue,
		teamMemberContentBgImageUrl,
		teamMemberContentBgImageAlt,
		teamMemberContentBgImageID,
		teamMemberContentBgImagePosition,
		teamMemberContentBgImageAttachment,
		teamMemberContentBgImageRepeat,
		teamMemberContentBgImageSize,
		teamMemberContentBgHoverType,
		teamMemberContentBgHoverClassicColor,
		teamMemberContentBgHoverGradientColor,
		teamMemberContentBgHoverCustomGradientSwitcher,
		teamMemberContentBgHoverCustomGradientInputValue,
		teamMemberContentBgHoverImageUrl,
		teamMemberContentBgHoverImageAlt,
		teamMemberContentBgHoverImageID,
		teamMemberContentBgHoverImagePosition,
		teamMemberContentBgHoverImageAttachment,
		teamMemberContentBgHoverImageRepeat,
		teamMemberContentBgHoverImageSize,
		
		// Social profile Separator
		teamMemberSocialProfileSeparator,
		teamMemberSocialProfileSeparatorPosition,
		socialProfileSeparatorAlignment,
		socialProfileSeparatorWidth,
		socialProfileSeparatorWidthUnits,
		socialProfileSeparatorHeight,
		socialProfileSeparatorHeightUnits,
		socialProfileSeparatorColorSwitcher,
		socialProfileSeparatorColor,
		socialProfileSeparatorHoverColor,
		socialProfileSeparatorMarginUnits,
		socialProfileSeparatorMarginDesktop,
		socialProfileSeparatorMarginTab,
		socialProfileSeparatorMarginMobile,
		socialProfileSeparatorMarginLink,

		// Position
		teamMemberPositionType,
		teamMemberHZOrientationType,
		teamMemberVROrientationType,
		teamMemberHZLeftOffset,
		teamMemberHZLeftOffsetUnits,
		teamMemberHZRightOffset,
		teamMemberHZRightOffsetUnits,
		teamMemberVRTopOffset,
		teamMemberVRTopOffsetUnits,
		teamMemberVRBottomOffset,
		teamMemberVRBottomOffsetUnits,

		// Global Setting
		teamMemberCustomCSS,
		teamMemberGlobalWraperID,
		teamMemberGlobalWraperClass,

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
		/** End Dynamic Team Member Designation Text */

	} = attributes;

	const deviceType= useDeviceType();

	/** Start Team Member Social Drag And Drop Handle Control */
	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = teamMemberSocialItems.findIndex(item => item.id === active.id);
			const newIndex = teamMemberSocialItems.findIndex(item => item.id === over.id);
			const updatedItems = arrayMove(teamMemberSocialItems, oldIndex, newIndex);
			setAttributes({ teamMemberSocialItems: updatedItems });
		}
	};
	/** End Team Member Social Drag And Drop Handle Control */


	const handleAddItem = () => {
		const newItem = {
			id: `item-${teamMemberSocialItems.length + 1}`,
			Title: `Item ${teamMemberSocialItems.length + 1}`,
			link: '#',
			teamMemberSocialIcon: 'facebook'
		};
		setAttributes({ teamMemberSocialItems: [...teamMemberSocialItems, newItem] });
	};

	const handleChangeItem = (id, key, value) => {
		const updatedItems = teamMemberSocialItems.map(item =>
			item.id === id ? { ...item, [key]: value } : item
		);
		setAttributes({ teamMemberSocialItems: updatedItems });
	};

	const handleDeleteItem = (id) => {
		const updatedItems = teamMemberSocialItems.filter(item => item.id !== id);
		setAttributes({ teamMemberSocialItems: updatedItems });
	};

	/** Member Image */
	let defaultImageUrl = '';
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/avatar.png';
	}

	// Set default value for teamMemberBackgroundImageUrl
	useEffect(() => {
		if (!teamMemberImageUrl) {
			setAttributes({ teamMemberImageUrl: defaultImageUrl });
		}
	}, []);


	const handleTeamMemberMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberMobileMargin: {
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
					setAttributes( {teamMemberDesktopMargin: {...teamMemberDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberTabMargin: {...teamMemberTabMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberMobileMargin: {...teamMemberMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}
	
	}
	
	const handleTeamMemberMarginCombineBtn = () => {
		setAttributes( {teamMemberMarginLink: !teamMemberMarginLink} );
	}
	
	const handleTeamMemberMarginUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberMarginUnits: {
				...teamMemberMarginUnits,
				[deviceType]: unit
			}
		})
	}
	
	// teamMember Padding Functionb
	const handleTeamMemberPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberMobilePadding: {
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
					setAttributes( {teamMemberDesktopPadding: {...teamMemberDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberTabPadding: {...teamMemberTabPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberMobilePadding: {...teamMemberMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}
	
	}
	
	const handleTeamMemberPaddingCombineBtn = () => {
		setAttributes( {teamMemberPaddingLink: !teamMemberPaddingLink} );
	}
	
	const handleTeamMemberPaddingUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberPaddingUnits: {
				...teamMemberPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	
	// teamMember BorderWidth Function
	const handleTeamMemberBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberMobileBorderWidth: {
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
					setAttributes( {teamMemberDesktopBorderWidth: {...teamMemberDesktopBorderWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberTabBorderWidth: {...teamMemberTabBorderWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberMobileBorderWidth: {...teamMemberMobileBorderWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}
	
	}
	
	const handleTeamMemberBorderCombineBtn = () => {
		setAttributes( {teamMemberBorderLink: !teamMemberBorderLink} );
	}
	
	const handleTeamMemberBorderUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberBorderUnits: {
				...teamMemberBorderUnits,
				[deviceType]: unit
			}
		})
	}
	
	// teamMember BorderRadiusWidth Function
	const handleTeamMemberBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberMobileBorderRadiusWidth: {
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
					setAttributes( {teamMemberDesktopBorderRadiusWidth: {...teamMemberDesktopBorderRadiusWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberTabBorderRadiusWidth: {...teamMemberTabBorderRadiusWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberMobileBorderRadiusWidth: {...teamMemberMobileBorderRadiusWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}
	
	}
	
	const handleTeamMemberBorderRadiusCombineBtn = () => {
		setAttributes( {teamMemberBorderRadiusLink: !teamMemberBorderRadiusLink} );
	}
	
	const handleTeamMemberBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberBorderRadiusUnits: {
				...teamMemberBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	{/* Team Member Content Border and Border Radius */}
	const handleContentBorderUnit = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberContentBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberContentBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberContentBorderTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberContentBorderMobile: {
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
					setAttributes( {teamMemberContentBorderDesktop: {...teamMemberContentBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberContentBorderTab: {...teamMemberContentBorderTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberContentBorderMobile: {...teamMemberContentBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const handleContentBorderCombineBtn = () => {
		setAttributes( {teamMemberContentBorderLink: !teamMemberContentBorderLink} );
	}

	const handleContentBorderUnitChange = (unit) => {
		setAttributes( {
			teamMemberContentBorderUnits: {
				...teamMemberContentBorderUnits,
				[deviceType]: unit
			}
		})
	}

	const handleContentBorderRadiusUnit = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberContentBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberContentBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberContentBorderRadiusTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberContentBorderRadiusMobile: {
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
					setAttributes( {teamMemberContentBorderRadiusDesktop: {...teamMemberContentBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberContentBorderRadiusTab: {...teamMemberContentBorderRadiusTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberContentBorderRadiusMobile: {...teamMemberContentBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const handleContentBorderRadiusCombineBtn = () => {
		setAttributes( {teamMemberContentBorderRadiusLink: !teamMemberContentBorderRadiusLink} );
	}

	const handleContentBorderRadiusUnitChange = (unit) => {
		setAttributes( {
			teamMemberContentBorderRadiusUnits: {
				...teamMemberContentBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	const handleContentMarginUnit = ( event, position ) => {
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
	const handleContentMarginCombineBtn = () => {
		setAttributes( {teamMemberContentMarginLink: !teamMemberContentMarginLink} );
	}

	const handleContentMarginUnitChange = (unit) => {
		setAttributes( {
			teamMemberContentMarginUnits: {
				...teamMemberContentMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const handleContentPaddingUnit = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberContentPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberContentPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberContentPaddingTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberContentPaddingMobile: {
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
					setAttributes( {teamMemberContentPaddingDesktop: {...teamMemberContentPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberContentPaddingTab: {...teamMemberContentPaddingTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberContentPaddingMobile: {...teamMemberContentPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const handleContentPaddingCombineBtn = () => {
		setAttributes( {teamMemberContentPaddingLink: !teamMemberContentPaddingLink} );
	}

	const handleContentPaddingUnitChange = (unit) => {
		setAttributes( {
			teamMemberContentPaddingUnits: {
				...teamMemberContentPaddingUnits,
				[deviceType]: unit
			}
		})
	}


	// Image Border
	const handleImageBorderUnit = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberImageBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberImageBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberImageBorderTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberImageBorderMobile: {
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
					setAttributes( {teamMemberImageBorderDesktop: {...teamMemberImageBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberImageBorderTab: {...teamMemberImageBorderTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberImageBorderMobile: {...teamMemberImageBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const handleImageBorderCombineBtn = () => {
		setAttributes( {teamMemberImageBorderLink: !teamMemberImageBorderLink} );
	}

	const handleImageBorderUnitChange = (unit) => {
		setAttributes( {
			teamMemberImageBorderUnits: {
				...teamMemberImageBorderUnits,
				[deviceType]: unit
			}
		})
	}

	// Image Border Radius
	const handleImageBorderRadiusUnit = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberImageBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberImageBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberImageBorderRadiusTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberImageBorderRadiusMobile: {
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
					setAttributes( {teamMemberImageBorderRadiusDesktop: {...teamMemberImageBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberImageBorderRadiusTab: {...teamMemberImageBorderRadiusTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberImageBorderRadiusMobile: {...teamMemberImageBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const handleImageBorderRadiusCombineBtn = () => {
		setAttributes( {teamMemberImageBorderRadiusLink: !teamMemberImageBorderRadiusLink} );
	}

	const handleImageBorderRadiusUnitChange = (unit) => {
		setAttributes( {
			teamMemberImageBorderRadiusUnits: {
				...teamMemberImageBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	// Image Margin
	const handleImageMarginUnit = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberImageMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberImageMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberImageMarginTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberImageMarginMobile: {
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
					setAttributes( {teamMemberImageMarginDesktop: {...teamMemberImageMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberImageMarginTab: {...teamMemberImageMarginTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberImageMarginMobile: {...teamMemberImageMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}
	const handleImageMarginCombineBtn = () => {
		setAttributes( {teamMemberImageMarginLink: !teamMemberImageMarginLink} );
	}

	const handleImageMarginUnitChange = (unit) => {
		setAttributes( {
			teamMemberImageMarginUnits: {
				...teamMemberImageMarginUnits,
				[deviceType]: unit
			}
		})
	}


	// Name Margin Function
	const handleNameMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (teamMemberNameMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						teamMemberNameMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						teamMemberNameMarginTab: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						teamMemberNameMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						teamMemberNameMarginDesktop: {
							...teamMemberNameMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						teamMemberNameMarginTab: {
							...teamMemberNameMarginTab,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						teamMemberNameMarginMobile: {
							...teamMemberNameMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleNameMarginCombineBtn = () => {
		setAttributes({ teamMemberNameMarginLink: !teamMemberNameMarginLink });
	};

	const handleNmeMarginUnitsHandler = (unit) => {
		setAttributes({
			teamMemberNameMarginUnits: {
				...teamMemberNameMarginUnits,
				[deviceType]: unit,
			},
		});
	};


	// Designation Margin Functionb
    const handleDesiMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( teamMemberDesignationMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        teamMemberDesignationMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        teamMemberDesignationMarginTab: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        teamMemberDesignationMarginMobile: {
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
                    setAttributes( {teamMemberDesignationMarginDesktop: {...teamMemberDesignationMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {teamMemberDesignationMarginTab: {...teamMemberDesignationMarginTab, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {teamMemberDesignationMarginMobile: {...teamMemberDesignationMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleDesiMarginCombineBtn = () => {
        setAttributes( {teamMemberDesignationMarginLink: !teamMemberDesignationMarginLink} );
    }

    const handleDesiMarginUnitsHandler = (unit) => {
        setAttributes( {
            teamMemberDesignationMarginUnits: {
                ...teamMemberDesignationMarginUnits,
                [deviceType]: unit
            }
        })
    }

	// Description Margin Functionb
	const handleDescMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberDescMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberDescMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberDescMarginTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberDescMarginMobile: {
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
					setAttributes( {teamMemberDescMarginDesktop: {...teamMemberDescMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberDescMarginTab: {...teamMemberDescMarginTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberDescMarginMobile: {...teamMemberDescMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleDescMarginCombineBtn = () => {
		setAttributes( {teamMemberDescMarginLink: !teamMemberDescMarginLink} );
	}

	const handleDescMarginUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberDescMarginUnits: {
				...teamMemberDescMarginUnits,
				[deviceType]: unit
			}
		})
	}
	{/* Team Member Description Control */}

	// socialIconBtn Padding Functionb
	const handleSocialIconBtnPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialIconBtnPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialIconBtnDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialIconBtnTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialIconBtnMobilePadding: {
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
					setAttributes( {socialIconBtnDesktopPadding: {...socialIconBtnDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialIconBtnTabPadding: {...socialIconBtnTabPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialIconBtnMobilePadding: {...socialIconBtnMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSocialIconBtnPaddingCombineBtn = () => {
		setAttributes( {socialIconBtnPaddingLink: !socialIconBtnPaddingLink} );
	}

	const handleSocialIconBtnPaddingUnitsHandler = (unit) => {
		setAttributes( {
			socialIconBtnPaddingUnits: {
				...socialIconBtnPaddingUnits,
				[deviceType]: unit
			}
		})
	}

	// socialIconBtn Margin Functionb
	const handleSocialIconBtnMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialIconBtnMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialIconBtnDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialIconBtnTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialIconBtnMobileMargin: {
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
					setAttributes( {socialIconBtnDesktopMargin: {...socialIconBtnDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialIconBtnTabMargin: {...socialIconBtnTabMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialIconBtnMobileMargin: {...socialIconBtnMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSocialIconBtnMarginCombineBtn = () => {
		setAttributes( {socialIconBtnMarginLink: !socialIconBtnMarginLink} );
	}

	const handleSocialIconBtnMarginUnitsHandler = (unit) => {
		setAttributes( {
			socialIconBtnMarginUnits: {
				...socialIconBtnMarginUnits,
				[deviceType]: unit
			}
		})
	}

	// socialIconBtn BorderWidth Function
	const handleSocialIconBtnBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialIconBtnBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialIconBtnDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialIconBtnTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialIconBtnMobileBorderWidth: {
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
					setAttributes( {socialIconBtnDesktopBorderWidth: {...socialIconBtnDesktopBorderWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialIconBtnTabBorderWidth: {...socialIconBtnTabBorderWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialIconBtnMobileBorderWidth: {...socialIconBtnMobileBorderWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSocialIconBtnBorderCombineBtn = () => {
		setAttributes( {socialIconBtnBorderLink: !socialIconBtnBorderLink} );
	}

	const handleSocialIconBtnBorderUnitsHandler = (unit) => {
		setAttributes( {
			socialIconBtnBorderUnits: {
				...socialIconBtnBorderUnits,
				[deviceType]: unit
			}
		})
	}

	// socialIconBtn BorderRadiusWidth Function
	const handleSocialIconBtnBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialIconBtnBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialIconBtnDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialIconBtnTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialIconBtnMobileBorderRadiusWidth: {
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
					setAttributes( {socialIconBtnDesktopBorderRadiusWidth: {...socialIconBtnDesktopBorderRadiusWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialIconBtnTabBorderRadiusWidth: {...socialIconBtnTabBorderRadiusWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialIconBtnMobileBorderRadiusWidth: {...socialIconBtnMobileBorderRadiusWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSocialIconBtnBorderRadiusCombineBtn = () => {
		setAttributes( {socialIconBtnBorderRadiusLink: !socialIconBtnBorderRadiusLink} );
	}

	const handleSocialIconBtnBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			socialIconBtnBorderRadiusUnits: {
				...socialIconBtnBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	// teamMemberIcons Padding Function
	const handleTeamMemberIconsPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberIconsPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberIconsDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberIconsTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberIconsMobilePadding: {
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
					setAttributes( {teamMemberIconsDesktopPadding: {...teamMemberIconsDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberIconsTabPadding: {...teamMemberIconsTabPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberIconsMobilePadding: {...teamMemberIconsMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleTeamMemberIconsPaddingCombineBtn = () => {
		setAttributes( {teamMemberIconsPaddingLink: !teamMemberIconsPaddingLink} );
	}

	const handleTeamMemberIconsPaddingUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberIconsPaddingUnits: {
				...teamMemberIconsPaddingUnits,
				[deviceType]: unit
			}
		})
	}

	// teamMemberIcons Margin Function
	const handleTeamMemberIconsMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberIconsMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberIconsDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberIconsTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberIconsMobileMargin: {
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
					setAttributes( {teamMemberIconsDesktopMargin: {...teamMemberIconsDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberIconsTabMargin: {...teamMemberIconsTabMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberIconsMobileMargin: {...teamMemberIconsMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleTeamMemberIconsMarginCombineBtn = () => {
		setAttributes( {teamMemberIconsMarginLink: !teamMemberIconsMarginLink} );
	}

	const handleTeamMemberIconsMarginUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberIconsMarginUnits: {
				...teamMemberIconsMarginUnits,
				[deviceType]: unit
			}
		})
	}

	// teamMemberIcons BorderWidth Function
	const handleTeamMemberIconsBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberIconsBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberIconsDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberIconsTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberIconsMobileBorderWidth: {
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
					setAttributes( {teamMemberIconsDesktopBorderWidth: {...teamMemberIconsDesktopBorderWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberIconsTabBorderWidth: {...teamMemberIconsTabBorderWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberIconsMobileBorderWidth: {...teamMemberIconsMobileBorderWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleTeamMemberIconsBorderCombineBtn = () => {
		setAttributes( {teamMemberIconsBorderLink: !teamMemberIconsBorderLink} );
	}

	const handleTeamMemberIconsBorderUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberIconsBorderUnits: {
				...teamMemberIconsBorderUnits,
				[deviceType]: unit
			}
		})
	}

	// teamMemberIcons BorderRadiusWidth Function
	const handleTeamMemberIconsBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberIconsBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberIconsDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberIconsTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberIconsMobileBorderRadiusWidth: {
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
					setAttributes( {teamMemberIconsDesktopBorderRadiusWidth: {...teamMemberIconsDesktopBorderRadiusWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberIconsTabBorderRadiusWidth: {...teamMemberIconsTabBorderRadiusWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberIconsMobileBorderRadiusWidth: {...teamMemberIconsMobileBorderRadiusWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleTeamMemberIconsBorderRadiusCombineBtn = () => {
		setAttributes( {teamMemberIconsBorderRadiusLink: !teamMemberIconsBorderRadiusLink} );
	}

	const handleTeamMemberIconsBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberIconsBorderRadiusUnits: {
				...teamMemberIconsBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}

	// teamMemberSocialProfile BorderWidth Function
	const handleTeamMemberSocialProfileBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberSocialProfileBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberSocialProfileDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberSocialProfileTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberSocialProfileMobileBorderWidth: {
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
					setAttributes( {teamMemberSocialProfileDesktopBorderWidth: {...teamMemberSocialProfileDesktopBorderWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberSocialProfileTabBorderWidth: {...teamMemberSocialProfileTabBorderWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberSocialProfileMobileBorderWidth: {...teamMemberSocialProfileMobileBorderWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleTeamMemberSocialProfileBorderCombineBtn = () => {
		setAttributes( {teamMemberSocialProfileBorderLink: !teamMemberSocialProfileBorderLink} );
	}

	const handleTeamMemberSocialProfileBorderUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberSocialProfileBorderUnits: {
				...teamMemberSocialProfileBorderUnits,
				[deviceType]: unit
			}
		})
	}

	// Separator Margin
	const handleSocialProfileSeparatorMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( socialProfileSeparatorMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						socialProfileSeparatorMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						socialProfileSeparatorMarginTab: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						socialProfileSeparatorMarginMobile: {
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
					setAttributes( {socialProfileSeparatorMarginDesktop: {...socialProfileSeparatorMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {socialProfileSeparatorMarginTab: {...socialProfileSeparatorMarginTab, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {socialProfileSeparatorMarginMobile: {...socialProfileSeparatorMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSocialProfileSeparatorMarginCombineBtn = () => {
		setAttributes( {socialProfileSeparatorMarginLink: !socialProfileSeparatorMarginLink} );
	}

	const handleSocialProfileSeparatorMarginUnitsHandler = (unit) => {
		setAttributes( {
			socialProfileSeparatorMarginUnits: {
				...socialProfileSeparatorMarginUnits,
				[deviceType]: unit
			}
		})
	}
	
	// Badge Margin
	const handleBadgeMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberBadgeMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberBadgeMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberBadgeMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberBadgeMarginMobile: {
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
					setAttributes( {teamMemberBadgeMarginDesktop: {...teamMemberBadgeMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberBadgeMarginTablet: {...teamMemberBadgeMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberBadgeMarginMobile: {...teamMemberBadgeMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleBadgeMarginCombineBtn = () => {
		setAttributes( {teamMemberBadgeMarginLink: !teamMemberBadgeMarginLink} );
	}

	const handleBadgeMarginUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberBadgeMarginUnits: {
				...teamMemberBadgeMarginUnits,
				[deviceType]: unit
			}
		})
	}
	
	// Badge padding
	const handleBadgePaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberBadgePaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberBadgePaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberBadgePaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberBadgePaddingMobile: {
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
					setAttributes( {teamMemberBadgePaddingDesktop: {...teamMemberBadgePaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberBadgePaddingTablet: {...teamMemberBadgePaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberBadgePaddingMobile: {...teamMemberBadgePaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleBadgePaddingCombineBtn = () => {
		setAttributes( {teamMemberBadgePaddingLink: !teamMemberBadgePaddingLink} );
	}

	const handleBadgePaddingUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberBadgePaddingUnits: {
				...teamMemberBadgePaddingUnits,
				[deviceType]: unit
			}
		})
	}
	
	// Badge Border
	const handleBadgeBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberBadgeBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberBadgeBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberBadgeBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberBadgeBorderMobile: {
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
					setAttributes( {teamMemberBadgeBorderDesktop: {...teamMemberBadgeBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberBadgeBorderTablet: {...teamMemberBadgeBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberBadgeBorderMobile: {...teamMemberBadgeBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleBadgeBorderCombineBtn = () => {
		setAttributes( {teamMemberBadgeBorderLink: !teamMemberBadgeBorderLink} );
	}

	const handleBadgeBorderUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberBadgeBorderUnits: {
				...teamMemberBadgeBorderUnits,
				[deviceType]: unit
			}
		})
	}
	
	// Badge Border Radius
	const handleBadgeBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberBadgeBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						teamMemberBadgeBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						teamMemberBadgeBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						teamMemberBadgeBorderRadiusMobile: {
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
					setAttributes( {teamMemberBadgeBorderRadiusDesktop: {...teamMemberBadgeBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {teamMemberBadgeBorderRadiusTablet: {...teamMemberBadgeBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {teamMemberBadgeBorderRadiusMobile: {...teamMemberBadgeBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleBadgeBorderRadiusCombineBtn = () => {
		setAttributes( {teamMemberBadgeBorderRadiusLink: !teamMemberBadgeBorderRadiusLink} );
	}

	const handleBadgeBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberBadgeBorderUnits: {
				...teamMemberBadgeBorderUnits,
				[deviceType]: unit
			}
		})
	}

	/**
     * Generate SVG Icons for Icon
     */
	useEffect(() => {
		if ( !Array.isArray(teamMemberSocialItems) ) {
		  if (frontendTeamMemberSocialItems.length) {
			setAttributes({ frontendTeamMemberSocialItems: [] });
		  }
		  return;
		}
	
		// Map items -> add svg from slug
		const next = teamMemberSocialItems.map(item => ({
		  ...item,
		  svg: generateSvgIcon(item?.teamMemberSocialIcon || ''),
		}));
	
		// Prevent infinite loop: only set if changed
		const same =
		  JSON.stringify(next) === JSON.stringify(frontendTeamMemberSocialItems || []);
	
		if (!same) {
		  setAttributes({ frontendTeamMemberSocialItems: next });
		}
	}, [teamMemberSocialItems, generateSvgIcon]); // if generateSvgIcon is not memoized, add to deps

	useEffect(() => {
		setAttributes({
			frontendSocialIconBtnIcon: generateSvgIcon(socialIconBtnIcon), 
		})
	}, [socialIconBtnIcon]);



	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("Avatar", "frontis-blocks")} initialOpen={true}>
				<FB_ImageControl 
					globalImageUrl={teamMemberImageUrl}
					setglobalImageUrl={(value) => setAttributes({ teamMemberImageUrl: value })}
					globalImageAlt={teamMemberImageAlt}
					setglobalImageAlt={(value) => setAttributes({ teamMemberImageAlt: value })}
					globalImageID={teamMemberImageID}
					setglobalImageID={(value) => setAttributes({ teamMemberImageID: value })}
					globalImageSize={teamMemberImageSize}
					setglobalImageSize={(value) => setAttributes({ teamMemberImageSize: value })}
				/>

				<ToggleControl
					label={__("Image Overlay", "frontis-blocks")}
					className="fb-setting-responsive-control"
					checked={teamMemberImageOverlaySwitcher}
					onChange={(value) => setAttributes({ teamMemberImageOverlaySwitcher: value })}
				/>
			</PanelBody>

			<PanelBody title={__("Content", "frontis-blocks")} initialOpen={false}>
				<SelectControl
					label={__("Content Position", "frontis-blocks")}
					value={teamMemberContentPosition}
					options={CONTENT_POSITION}
					onChange={(value) => setAttributes({ teamMemberContentPosition: value })}
				/>

				{teamMemberContentPosition === 'left' || teamMemberContentPosition === 'right' ? 
					<SelectControl
						label={__("Card Alignment", "frontis-blocks")}
						value={teamMemberCardAlignment}
						options={CARD_WRAP_ALIGNMENT}
						onChange={(value) => setAttributes({ teamMemberCardAlignment: value })}
					/>
				: ''}
			</PanelBody>

			<PanelBody title={__("Badge", "frontis-blocks")} initialOpen={false}>
				<ToggleControl
					label={__("Badge Switcher", "frontis-blocks")}
					className="fb-setting-responsive-control"
					checked={teamMemberBadgeSwitcher}
					onChange={(value) => setAttributes({ teamMemberBadgeSwitcher: value })}
				/>

				{teamMemberBadgeSwitcher && (<>
					<TextControl
						label={__('Badge Text', 'frontis-blocks')}
						value={teamMemberBadge}
						onChange={(value) => setAttributes({ teamMemberBadge: value })}
						placeholder={__('Badge', 'frontis-block')}
					/>

					<SelectControl
						label={__("Badge Position", "frontis-blocks")}
						value={teamMemberBadgePosition}
						options={BADGE_POSITION}
						onChange={(value) => setAttributes({ teamMemberBadgePosition: value })}
					/>

					<SelectControl
						label={__("Badge Alignment", "frontis-blocks")}
						value={teamMemberBadgeAlignment}
						options={BADGE_ALIGNMENT}
						onChange={(value) => setAttributes({ teamMemberBadgeAlignment: value })}
					/>
				</>)}
			</PanelBody>

			<PanelBody title={__("Name & Designation", "frontis-blocks")} initialOpen={false}>

				<ToggleControl
					label={__('Dynamic Team Member Name', 'frontis-blocks')}
					checked={dynamicTeamMemberNameEnabled}
					onChange={(value) => setAttributes({ dynamicTeamMemberNameEnabled: value })}
				/>

				<DynamicDataSourceControl
					enabled={dynamicTeamMemberNameEnabled}  
					
					source={dynamicTeamMemberNameSource} 
					setSource={(value) => setAttributes({ dynamicTeamMemberNameSource: value })}   
					postId={dynamicTeamMemberNamePostId}
					setPostId={(value) => setAttributes({ dynamicTeamMemberNamePostId: value })}
					postType={dynamicTeamMemberNamePostType}
					setPostType={(value) => setAttributes({ dynamicTeamMemberNamePostType: value })}
					postLabel={dynamicTeamMemberNamePostLabel}
					setPostLabel={(value) => setAttributes({ dynamicTeamMemberNamePostLabel: value })}

					field={dynamicTeamMemberNameField}
					setField={(value) => setAttributes({ dynamicTeamMemberNameField: value })}
					featuredImageField={dynamicTeamMemberNameFeaturedImageField}
					setFeaturedImageField={(value) => setAttributes({ dynamicTeamMemberNameFeaturedImageField: value })}

					dateType={dynamicTeamMemberNameDateType}
					setDateType={(value) => setAttributes({ dynamicTeamMemberNameDateType: value })}
					dateFormat={dynamicTeamMemberNameDateFormat}
					setDateFormat={(value) => setAttributes({ dynamicTeamMemberNameDateFormat: value })}
					timeType={dynamicTeamMemberNameTimeType}
					setTimeType={(value) => setAttributes({ dynamicTeamMemberNameTimeType: value })}
					timeFormat={dynamicTeamMemberNameTimeFormat}
					setTimeFormat={(value) => setAttributes({ dynamicTeamMemberNameTimeFormat: value })}

					commentsZeroText={dynamicTeamMemberNameCommentsZeroText}
					setCommentsZeroText={(value) => setAttributes({ dynamicTeamMemberNameCommentsZeroText: value })}
					commentsOneText={dynamicTeamMemberNameCommentsOneText}
					setCommentsOneText={(value) =>setAttributes({ dynamicTeamMemberNameCommentsOneText: value })}
					commentsManyText={dynamicTeamMemberNameCommentsManyText}
					setCommentsManyText={(value) =>setAttributes({ dynamicTeamMemberNameCommentsManyText: value })}

					termsTaxonomy={dynamicTeamMemberNameTermsTaxonomy}
					setTermsTaxonomy={(value) => setAttributes({ dynamicTeamMemberNameTermsTaxonomy: value })}
					termsSeparator={dynamicTeamMemberNameTermsSeparator}
					setTermsSeparator={(value) => setAttributes({ dynamicTeamMemberNameTermsSeparator: value })}
				/>

				{dynamicTeamMemberNameEnabled && ( 
					<DynamicDataLinkControl
						enableLink={dynamicTeamMemberNameEnableLink}
						setEnableLink={(value) => setAttributes({ dynamicTeamMemberNameEnableLink: value })}
						linkSource={dynamicTeamMemberNameLinkSource}
						setLinkSource={(value) => setAttributes({ dynamicTeamMemberNameLinkSource: value })}
					/>
				)}

				{!dynamicTeamMemberNameEnabled && (
					<TextControl
						tagName={teamMemberNameHeadingTag}
						label={__('Name', 'frontis-blocks')}
						value={teamMemberName}
						onChange={(value) => setAttributes({ teamMemberName: value })}
						placeholder={__('Wade Warren', 'frontis-block')}
					/>
				)}

				<FB_HtmlTagControl
					label={__("Name Tag", "frontis-block")}
					globalHtmlTag={teamMemberNameHeadingTag}
					setGlobalHtmlTag={(value) => setAttributes({ teamMemberNameHeadingTag: value })}
				/>

				<ToggleControl
					label={__('Dynamic Team Member Designation', 'frontis-blocks')}
					checked={dynamicTeamMemberDesignationEnabled}
					onChange={(value) => setAttributes({ dynamicTeamMemberDesignationEnabled: value })}
				/>

				<DynamicDataSourceControl
					enabled={dynamicTeamMemberDesignationEnabled}  
					
					source={dynamicTeamMemberDesignationSource} 
					setSource={(value) => setAttributes({ dynamicTeamMemberDesignationSource: value })}   
					postId={dynamicTeamMemberDesignationPostId}
					setPostId={(value) => setAttributes({ dynamicTeamMemberDesignationPostId: value })}
					postType={dynamicTeamMemberDesignationPostType}
					setPostType={(value) => setAttributes({ dynamicTeamMemberDesignationPostType: value })}
					postLabel={dynamicTeamMemberDesignationPostLabel}
					setPostLabel={(value) => setAttributes({ dynamicTeamMemberDesignationPostLabel: value })}

					field={dynamicTeamMemberDesignationField}
					setField={(value) => setAttributes({ dynamicTeamMemberDesignationField: value })}
					featuredImageField={dynamicTeamMemberDesignationFeaturedImageField}
					setFeaturedImageField={(value) => setAttributes({ dynamicTeamMemberDesignationFeaturedImageField: value })}

					dateType={dynamicTeamMemberDesignationDateType}
					setDateType={(value) => setAttributes({ dynamicTeamMemberDesignationDateType: value })}
					dateFormat={dynamicTeamMemberDesignationDateFormat}
					setDateFormat={(value) => setAttributes({ dynamicTeamMemberDesignationDateFormat: value })}
					timeType={dynamicTeamMemberDesignationTimeType}
					setTimeType={(value) => setAttributes({ dynamicTeamMemberDesignationTimeType: value })}
					timeFormat={dynamicTeamMemberDesignationTimeFormat}
					setTimeFormat={(value) => setAttributes({ dynamicTeamMemberDesignationTimeFormat: value })}

					commentsZeroText={dynamicTeamMemberDesignationCommentsZeroText}
					setCommentsZeroText={(value) => setAttributes({ dynamicTeamMemberDesignationCommentsZeroText: value })}
					commentsOneText={dynamicTeamMemberDesignationCommentsOneText}
					setCommentsOneText={(value) =>setAttributes({ dynamicTeamMemberDesignationCommentsOneText: value })}
					commentsManyText={dynamicTeamMemberDesignationCommentsManyText}
					setCommentsManyText={(value) =>setAttributes({ dynamicTeamMemberDesignationCommentsManyText: value })}

					termsTaxonomy={dynamicTeamMemberDesignationTermsTaxonomy}
					setTermsTaxonomy={(value) => setAttributes({ dynamicTeamMemberDesignationTermsTaxonomy: value })}
					termsSeparator={dynamicTeamMemberDesignationTermsSeparator}
					setTermsSeparator={(value) => setAttributes({ dynamicTeamMemberDesignationTermsSeparator: value })}
				/>

				{dynamicTeamMemberDesignationEnabled && ( 
					<DynamicDataLinkControl
						enableLink={dynamicTeamMemberDesignationEnableLink}
						setEnableLink={(value) => setAttributes({ dynamicTeamMemberDesignationEnableLink: value })}
						linkSource={dynamicTeamMemberDesignationLinkSource}
						setLinkSource={(value) => setAttributes({ dynamicTeamMemberDesignationLinkSource: value })}
					/>
				)}
				{!dynamicTeamMemberDesignationEnabled && (
					<TextControl
						label={__('Designation', 'frontis-blocks')}
						value={teamMemberDesignation}
						onChange={(value) => setAttributes({ teamMemberDesignation: value })}
					/>
				)}
			</PanelBody>

			<PanelBody title={__("Description", "frontis-blocks")} initialOpen={false}>
				<ToggleControl
					label={__("Description Switcher", "frontis-blocks")}
					className="fb-setting-responsive-control"
					checked={teamMemberDescSwitcher}
					onChange={(value) => setAttributes({ teamMemberDescSwitcher: value })}
				/>

				<ToggleControl
					label={__('Dynamic Content', 'frontis-blocks')}
					checked={dynamicDescriptionEnabled}
					onChange={(value) => setAttributes({ dynamicDescriptionEnabled: value })}
				/>

				<DynamicDataSourceControl
					enabled={dynamicDescriptionEnabled}
					
					source={dynamicDescriptionSource}
					setSource={(value) => setAttributes({ dynamicDescriptionSource: value })}
					postId={dynamicDescriptionPostId}
					setPostId={(value) => setAttributes({ dynamicDescriptionPostId: value })}
					postType={dynamicDescriptionPostType}
					setPostType={(value) => setAttributes({ dynamicDescriptionPostType: value })}
					postLabel={dynamicDescriptionPostLabel}
					setPostLabel={(value) => setAttributes({ dynamicDescriptionPostLabel: value })}

					field={dynamicDescriptionField}
					setField={(value) => setAttributes({ dynamicDescriptionField: value })}
					featuredImageField={dynamicDescriptionFeaturedImageField}
					setFeaturedImageField={(value) => setAttributes({ dynamicDescriptionFeaturedImageField: value })}

					dateType={dynamicDescriptionDateType}
					setDateType={(value) => setAttributes({ dynamicDescriptionDateType: value })}
					dateFormat={dynamicDescriptionDateFormat}
					setDateFormat={(value) => setAttributes({ dynamicDescriptionDateFormat: value })}
					timeType={dynamicDescriptionTimeType}
					setTimeType={(value) => setAttributes({ dynamicDescriptionTimeType: value })}
					timeFormat={dynamicDescriptionTimeFormat}
					setTimeFormat={(value) => setAttributes({ dynamicDescriptionTimeFormat: value })}

					commentsZeroText={dynamicDescriptionCommentsZeroText}
					setCommentsZeroText={(value) => setAttributes({ dynamicDescriptionCommentsZeroText: value })}
					commentsOneText={dynamicDescriptionCommentsOneText}
					setCommentsOneText={(value) =>setAttributes({ dynamicDescriptionCommentsOneText: value })}
					commentsManyText={dynamicDescriptionCommentsManyText}
					setCommentsManyText={(value) =>setAttributes({ dynamicDescriptionCommentsManyText: value })}

					termsTaxonomy={dynamicDescriptionTermsTaxonomy}
					setTermsTaxonomy={(value) => setAttributes({ dynamicDescriptionTermsTaxonomy: value })}
					termsSeparator={dynamicDescriptionTermsSeparator}
					setTermsSeparator={(value) => setAttributes({ dynamicDescriptionTermsSeparator: value })}
				/>

				{dynamicDescriptionEnabled && ( 
					<DynamicDataLinkControl
						enableLink={dynamicDescriptionEnableLink}
						setEnableLink={(value) => setAttributes({ dynamicDescriptionEnableLink: value })}
						linkSource={dynamicDescriptionLinkSource}
						setLinkSource={(value) => setAttributes({ dynamicDescriptionLinkSource: value })}
					/>
				)}

				{ !dynamicDescriptionEnabled && teamMemberDescSwitcher === true && (
					<TextareaControl
						label={__('Description', 'frontis-blocks')}
						value={teamMemberDesc}
						onChange={(value) => setAttributes({ teamMemberDesc: value })}
					/>
				)}

			</PanelBody>

			<PanelBody title={__("Social Profiles", "frontis-blocks")} initialOpen={false}>
				<ToggleControl
					label={__("Social Profile Switcher", "frontis-blocks")}
					className="fb-setting-responsive-control"
					checked={teamMemberSocialProfileSwitcher}
					onChange={(value) => setAttributes({ teamMemberSocialProfileSwitcher: value })}
				/>

				{teamMemberSocialProfileSwitcher === true && 
				<>

					<SelectControl
						label={__("Icon Display", "frontis-blocks")}
						value={teamMemberSocialType}
						options={SOCIAL_ICON_TYPE}
						onChange={(value) => setAttributes({ teamMemberSocialType: value })}
					/>

					{ teamMemberSocialType === 'content' &&
						<FB_ResponsiveAlignmentControl
							label={__("Alignment", "frontis-blocks")}
							globalAlignment={teamMemberIconsAlignment}
							setGlobalAlignment={(value) => setAttributes({ teamMemberIconsAlignment: value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
						/>
					}

					<SelectControl
						label={__("Icon Position", "frontis-blocks")}
						value={teamMemberSocialPosition}
						options={teamMemberSocialType === 'content' ? CONTENT_SOCIAL_ICON_POSITION : IMAGE_SOCIAL_ICON_POSITION}
						onChange={(value) => setAttributes({ teamMemberSocialPosition: value })}
					/>

					{teamMemberSocialPosition === 'left' || teamMemberSocialPosition === 'right' ? 
						<SelectControl
							label={__("Alignment", "frontis-blocks")}
							value={teamMemberSocialAlignment}
							options={CARD_WRAP_ALIGNMENT}
							onChange={(value) => setAttributes({ teamMemberSocialAlignment: value })}
						/>
					: ''}

					<ToggleControl
						label={__("Icon Wrapper Button", "frontis-blocks")}
						className="fb-setting-responsive-control"
						checked={socialIconBtnSwitcher}
						onChange={(value) => setAttributes({ socialIconBtnSwitcher: value })}
					/>

					<div className="fb-feature-wrapper">
						<DndContext
							collisionDetection={closestCenter}
							onDragEnd={handleDragEnd}
						>
							<SortableContext items={teamMemberSocialItems.map(item => item.id)}>
								<ul className='dnd-items-wrapper'>
									{teamMemberSocialItems.map((item) => (
										<SortableItem
											key={item.id}
											id={item.id}
											item={item}
											handleChangeItem={handleChangeItem}
											handleDeleteItem={handleDeleteItem}
										/>
									))}
								</ul>
							</SortableContext>
							<Button isPrimary onClick={handleAddItem}>
								{__("Add Social Profile", "frontis-blocks")}
							</Button>
						</DndContext>
					</div>

					{teamMemberSocialType === 'content' && (teamMemberSocialPosition === 'top' || teamMemberSocialPosition === 'bottom') ? (<>
						<ToggleControl
							label={__("Separator Switcher", "frontis-blocks")}
							className="fb-setting-responsive-control"
							checked={teamMemberSocialProfileSeparator}
							onChange={(value) => setAttributes({ teamMemberSocialProfileSeparator: value })}
						/>
						

						{teamMemberSocialProfileSeparator === true &&
							<SelectControl
								label={__("Separator Position", "frontis-blocks")}
								value={teamMemberSocialProfileSeparatorPosition}
								options={SEPARATOR_POSITION}
								onChange={(value) => setAttributes({ teamMemberSocialProfileSeparatorPosition: value })}
							/>
						}

					</>) : ''}
				</>
				}
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody
				title={__("Avatar", "frontis-blocks")}
				initialOpen={true}
				className="fb-setting-border-setting-wrapper"
			>
				<FB_ResponsiveAlignmentControl
					label={__("Alignment", "frontis-blocks")}
					globalAlignment={teamMemberImageAlignment}
					setGlobalAlignment={(value) => setAttributes({ teamMemberImageAlignment: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_Range
					min={1}
					max={teamMemberImageWidthUnits[deviceType] === '%' ? 100 : 1000}
					label={__("Width", "frontis-blocks")}
					rangeValue={teamMemberImageWidth}
					onChangeHandler={(value) => setAttributes({ teamMemberImageWidth: value })}
					rangeUnitHandler={(value) => setAttributes({ teamMemberImageWidthUnits: value })}
					deviceType={deviceType}
					units={teamMemberImageWidthUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={100}
				/>

				<FB_Range
					min={1}
					max={teamMemberImageHeightUnits[deviceType] === '%' ? 100 : 1000}
					label={__("Height", "frontis-blocks")}
					rangeValue={teamMemberImageHeight}
					onChangeHandler={(value) => setAttributes({ teamMemberImageHeight: value })}
					rangeUnitHandler={(value) => setAttributes({ teamMemberImageHeightUnits: value })}
					deviceType={deviceType}
					units={teamMemberImageHeightUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={100}
				/>

				{ teamMemberImageOverlaySwitcher === true && 
				<>
					<FB_BackgroundColorControl
						label={__("Overlay Color", "frontis-blocks")}
						bgColorSwitcher={teamMemberImageBGColorSwitcher}
						setBgColorSwitcher={(value) =>
							setAttributes({ teamMemberImageBGColorSwitcher: value })
						}
						normalBackgroundType={teamMemberImageBgType}
						setNormalBackgroundType={(value) =>
							setAttributes({ teamMemberImageBgType: value })
						}
						normalClassicColor={teamMemberImageBgClassicColor}
						setNormalClassicColor={(value) =>
							setAttributes({ teamMemberImageBgClassicColor: value === undefined ? '' : value })
						}
						normalGradientColor={teamMemberImageBgGradientColor}
						setNormalGradientColor={(value) =>
							setAttributes({ teamMemberImageBgGradientColor: value === undefined ? null : value })
						}
						normalCustomGradientSwitcher={
							teamMemberImageBgCustomGradientSwitcher
						}
						setNormalCustomGradientSwitcher={(value) =>
							setAttributes({
								teamMemberImageBgCustomGradientSwitcher: value,
							})
						}
						normalCustomGradientInputValue={
							teamMemberImageBgCustomGradientInputValue
						}
						setNormalCustomGradientInputValue={(value) =>
							setAttributes({
								teamMemberImageBgCustomGradientInputValue: value,
							})
						}
						normalBackgroundImageUrl=""
						normalBackgroundImageAlt=""
						normalBackgroundImageID=""
						normalBackgroundImagePosition=""
						normalBackgroundImageAttachment=""
						normalBackgroundImageRepeat=""
						normalBackgroundImageSize=""
						hoverBackgroundType={teamMemberImageBgHoverType}
						setHoverBackgroundType={(value) =>
							setAttributes({ teamMemberImageBgHoverType: value })
						}
						hoverClassicColor={teamMemberImageBgHoverClassicColor}
						setHoverClassicColor={(value) =>
							setAttributes({ teamMemberImageBgHoverClassicColor: value === undefined ? '' : value })
						}
						hoverGradientColor={teamMemberImageBgHoverGradientColor}
						setHoverGradientColor={(value) =>
							setAttributes({ teamMemberImageBgHoverGradientColor: value === undefined ? null : value })
						}
						hoverCustomGradientSwitcher={
							teamMemberImageBgHoverCustomGradientSwitcher
						}
						setHoverCustomGradientSwitcher={(value) =>
							setAttributes({
								teamMemberImageBgHoverCustomGradientSwitcher: value,
							})
						}
						hoverCustomGradientInputValue={
							teamMemberImageBgHoverCustomGradientInputValue
						}
						setHoverCustomGradientInputValue={(value) =>
							setAttributes({
								teamMemberImageBgHoverCustomGradientInputValue: value,
							})
						}
						hoverBackgroundImageUrl=""
						hoverBackgroundImageAlt=""
						hoverBackgroundImageID=""
						hoverBackgroundImagePosition=""
						hoverBackgroundImageAttachment=""
						hoverBackgroundImageRepeat=""
						hoverBackgroundImageSize=""
						isBackgroundImage={false}
					/>
					<FB_Range
						label={__("Opacity", "frontis-blocks")}
						min={0}
						max={1}
						rangeValue={teamMemberImageOverlayOpacity}
						onChangeHandler={(value) => setAttributes({ teamMemberImageOverlayOpacity: value })}
						deviceType={deviceType}
						setAttributes={setAttributes}
						rangeStep={0.1}
						resetFallbackValue={0.5}
						isRangeUnit={false}
					/>
					{/* <FB_SwitcherControl
						label={__("Overlay Color", "frontis-blocks")}
						globalSwitcher={teamMemberImageBGColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ teamMemberImageBGColorSwitcher: value })}
					/>
							
					{teamMemberImageBGColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={teamMemberImageBGColor}
							setGlobalColor={(value) => setAttributes({ teamMemberImageBGColor: value === undefined ? '' : value })}
						/>
					)}
							
					{teamMemberImageBGColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={teamMemberImageBGHoverColor}
							setGlobalColor={(value) => setAttributes({ teamMemberImageBGHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_Range
						label={__("Opacity", "frontis-blocks")}
						min={0}
						max={1}
						rangeValue={teamMemberImageOverlayOpacity}
						onChangeHandler={(value) => setAttributes({ teamMemberImageOverlayOpacity: value })}
						deviceType={deviceType}
						setAttributes={setAttributes}
						rangeStep={0.1}
						resetFallbackValue={0.5}
						isRangeUnit={false}
					/> */}
				</>
				}

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={teamMemberImageBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ teamMemberImageBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={teamMemberImageBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ teamMemberImageBorderColorSwitcher: value })}
				/>
						
				{teamMemberImageBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={teamMemberImageBorderColor}
						setGlobalColor={(value) => setAttributes({ teamMemberImageBorderColor: value === undefined ? '' : value })}
					/>
				)}
						
				{teamMemberImageBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={teamMemberImageBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ teamMemberImageBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={ 'Border' }
					deviceType={deviceType}
					spacingUnitsHandler={handleImageBorderUnitChange}
					spacingUnits={teamMemberImageBorderUnits}
					spacingDesktop={teamMemberImageBorderDesktop}
					spacingTablet={teamMemberImageBorderTab}
					spacingMobile={teamMemberImageBorderMobile}
					handleSpacingUnitHandler={handleImageBorderUnit}
					spacingCombineBtn={teamMemberImageBorderLink}
					spacingCombineBtnHandler={handleImageBorderCombineBtn} 
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={ 'Border Radius' }
					deviceType={deviceType}
					spacingUnitsHandler={handleImageBorderRadiusUnitChange}
					spacingUnits={teamMemberImageBorderRadiusUnits}
					spacingDesktop={teamMemberImageBorderRadiusDesktop}
					spacingTablet={teamMemberImageBorderRadiusTab}
					spacingMobile={teamMemberImageBorderRadiusMobile}
					handleSpacingUnitHandler={handleImageBorderRadiusUnit}
					spacingCombineBtn={teamMemberImageBorderRadiusLink}
					spacingCombineBtnHandler={handleImageBorderRadiusCombineBtn} 
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={ 'Margin' }
					deviceType={deviceType}
					spacingUnitsHandler={handleImageMarginUnitChange}
					spacingUnits={teamMemberImageMarginUnits}
					spacingDesktop={teamMemberImageMarginDesktop}
					spacingTablet={teamMemberImageMarginTab}
					spacingMobile={teamMemberImageMarginMobile}
					handleSpacingUnitHandler={handleImageMarginUnit}
					spacingCombineBtn={teamMemberImageMarginLink}
					spacingCombineBtnHandler={handleImageMarginCombineBtn} 
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__("Content", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_ResponsiveAlignmentControl
					label={__("Alignment", "frontis-blocks")}
					globalAlignment={teamMemberContentAlignment}
					setGlobalAlignment={(value) => setAttributes({ teamMemberContentAlignment: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={teamMemberContentBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ teamMemberContentBgColorSwitcher: value })
					}
					normalBackgroundType={teamMemberContentBgType}
					setNormalBackgroundType={(value) =>
						setAttributes({ teamMemberContentBgType: value })
					}
					normalClassicColor={teamMemberContentBgClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({ teamMemberContentBgClassicColor: value === undefined ? '' : value })
					}
					normalGradientColor={teamMemberContentBgGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({ teamMemberContentBgGradientColor: value === undefined ? null : value })
					}
					normalCustomGradientSwitcher={
						teamMemberContentBgCustomGradientSwitcher
					}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({
							teamMemberContentBgCustomGradientSwitcher: value,
						})
					}
					normalCustomGradientInputValue={
						teamMemberContentBgCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({
							teamMemberContentBgCustomGradientInputValue: value,
						})
					}
					normalBackgroundImageUrl={teamMemberContentBgImageUrl}
					setNormalBackgroundImageUrl={(value) =>
						setAttributes({ teamMemberContentBgImageUrl: value })
					}
					normalBackgroundImageAlt={teamMemberContentBgImageAlt}
					setNormalBackgroundImageAlt={(value) =>
						setAttributes({ teamMemberContentBgImageAlt: value })
					}
					normalBackgroundImageID={teamMemberContentBgImageID}
					setNormalBackgroundImageID={(value) =>
						setAttributes({ teamMemberContentBgImageID: value })
					}
					normalBackgroundImagePosition={
						teamMemberContentBgImagePosition
					}
					setNormalBackgroundImagePosition={(value) =>
						setAttributes({
							teamMemberContentBgImagePosition: value,
						})
					}
					normalBackgroundImageAttachment={
						teamMemberContentBgImageAttachment
					}
					setNormalBackgroundImageAttachment={(value) =>
						setAttributes({
							teamMemberContentBgImageAttachment: value,
						})
					}
					normalBackgroundImageRepeat={
						teamMemberContentBgImageRepeat
					}
					setNormalBackgroundImageRepeat={(value) =>
						setAttributes({
							teamMemberContentBgImageRepeat: value,
						})
					}
					normalBackgroundImageSize={teamMemberContentBgImageSize}
					setNormalBackgroundImageSize={(value) =>
						setAttributes({ teamMemberContentBgImageSize: value })
					}
					hoverBackgroundType={teamMemberContentBgHoverType}
					setHoverBackgroundType={(value) =>
						setAttributes({ teamMemberContentBgHoverType: value })
					}
					hoverClassicColor={teamMemberContentBgHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({ teamMemberContentBgHoverClassicColor: value === undefined ? '' : value })
					}
					hoverGradientColor={teamMemberContentBgHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({ teamMemberContentBgHoverGradientColor: value === undefined ? null : value })
					}
					hoverCustomGradientSwitcher={
						teamMemberContentBgHoverCustomGradientSwitcher
					}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({
							teamMemberContentBgHoverCustomGradientSwitcher: value,
						})
					}
					hoverCustomGradientInputValue={
						teamMemberContentBgHoverCustomGradientInputValue
					}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({
							teamMemberContentBgHoverCustomGradientInputValue: value,
						})
					}
					hoverBackgroundImageUrl={teamMemberContentBgHoverImageUrl}
					setBgHoverImageUrl={(value) =>
						setAttributes({ teamMemberContentBgHoverImageUrl: value })
					}
					hoverBackgroundImageAlt={teamMemberContentBgHoverImageAlt}
					setBgHoverImageAlt={(value) =>
						setAttributes({ teamMemberContentBgHoverImageAlt: value })
					}
					hoverBackgroundImageID={teamMemberContentBgHoverImageID}
					setBgHoverImageID={(value) =>
						setAttributes({ teamMemberContentBgHoverImageID: value })
					}
					hoverBackgroundImagePosition={
						teamMemberContentBgHoverImagePosition
					}
					setBgHoverImagePosition={(value) =>
						setAttributes({
							teamMemberContentBgHoverImagePosition: value,
						})
					}
					hoverBackgroundImageAttachment={
						teamMemberContentBgHoverImageAttachment
					}
					setBgHoverImageAttachment={(value) =>
						setAttributes({
							teamMemberContentBgHoverImageAttachment: value,
						})
					}
					hoverBackgroundImageRepeat={
						teamMemberContentBgHoverImageRepeat
					}
					setBgHoverImageRepeat={(value) =>
						setAttributes({
							teamMemberContentBgHoverImageRepeat: value,
						})
					}
					hoverBackgroundImageSize={teamMemberContentBgHoverImageSize}
					setBgHoverImageSize={(value) =>
						setAttributes({ teamMemberContentBgHoverImageSize: value })
					}
				/>

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={teamMemberContentBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ teamMemberContentBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={teamMemberContentBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ teamMemberContentBorderColorSwitcher: value })}
				/>
						
				{teamMemberContentBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={teamMemberContentBorderColor}
						setGlobalColor={(value) => setAttributes({ teamMemberContentBorderColor: value === undefined ? '' : value })}
					/>
				)}
						
				{teamMemberContentBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={teamMemberContentBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ teamMemberContentBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={ 'Border' }
					deviceType={deviceType}
					spacingUnitsHandler={handleContentBorderUnitChange}
					spacingUnits={teamMemberContentBorderUnits}
					spacingDesktop={teamMemberContentBorderDesktop}
					spacingTablet={teamMemberContentBorderTab}
					spacingMobile={teamMemberContentBorderMobile}
					handleSpacingUnitHandler={handleContentBorderUnit}
					spacingCombineBtn={teamMemberContentBorderLink}
					spacingCombineBtnHandler={handleContentBorderCombineBtn} 
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={ 'Border Radius' }
					deviceType={deviceType}
					spacingUnitsHandler={handleContentBorderRadiusUnitChange}
					spacingUnits={teamMemberContentBorderRadiusUnits}
					spacingDesktop={teamMemberContentBorderRadiusDesktop}
					spacingTablet={teamMemberContentBorderRadiusTab}
					spacingMobile={teamMemberContentBorderRadiusMobile}
					handleSpacingUnitHandler={handleContentBorderRadiusUnit}
					spacingCombineBtn={teamMemberContentBorderRadiusLink}
					spacingCombineBtnHandler={handleContentBorderRadiusCombineBtn} setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={ 'Margin' }
					deviceType={deviceType}
					spacingUnitsHandler={handleContentMarginUnitChange}
					spacingUnits={teamMemberContentMarginUnits}
					spacingDesktop={teamMemberContentMarginDesktop}
					spacingTablet={teamMemberContentMarginTab}
					spacingMobile={teamMemberContentMarginMobile}
					handleSpacingUnitHandler={handleContentMarginUnit}
					spacingCombineBtn={teamMemberContentMarginLink}
					spacingCombineBtnHandler={handleContentMarginCombineBtn} setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={ 'Padding' }
					deviceType={deviceType}
					spacingUnitsHandler={handleContentPaddingUnitChange}
					spacingUnits={teamMemberContentPaddingUnits}
					spacingDesktop={teamMemberContentPaddingDesktop}
					spacingTablet={teamMemberContentPaddingTab}
					spacingMobile={teamMemberContentPaddingMobile}
					handleSpacingUnitHandler={handleContentPaddingUnit}
					spacingCombineBtn={teamMemberContentPaddingLink}
					spacingCombineBtnHandler={handleContentPaddingCombineBtn} 
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__("Name", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-gallery-button-wrapper"
			>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={teamMemberNameGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ teamMemberNameGlobalTypographyData: value })}

					globalTypoType={teamMemberNameGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({ 
							teamMemberNameGlobalTypoType: value, 
							teamMemberNameGlobalTypoSwitcher: value === 'default' ? {...teamMemberNameGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...teamMemberNameGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
						})
					}}

					globalTypoOption={teamMemberNameGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ teamMemberNameGlobalTypoOption: value })}

					fontFamily={teamMemberNameFontFamily}
					onChangeFontFamily={(value) => setAttributes({ teamMemberNameFontFamily: value, teamMemberNameGlobalTypoSwitcher: {...teamMemberNameGlobalTypoSwitcher, fontFamily: value && false} })}

					fontSize={teamMemberNameFontSize}
					onChangeFontSize={(value) => setAttributes({ teamMemberNameFontSize: value, teamMemberNameGlobalTypoSwitcher: {...teamMemberNameGlobalTypoSwitcher, fontSize: value && false} })}

					fontSizeUnits={teamMemberNameFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ teamMemberNameFontSizeUnits: value })}

					fontWeight={teamMemberNameFontWeight}
					onChangeFontWeight={(value) => setAttributes({ teamMemberNameFontWeight: value, teamMemberNameGlobalTypoSwitcher: {...teamMemberNameGlobalTypoSwitcher, fontWeight: value && false} })}

					fontStyle={teamMemberNameFontStyle}
					onChangeFontStyle={(value) => setAttributes({ teamMemberNameFontStyle: value, teamMemberNameGlobalTypoSwitcher: {...teamMemberNameGlobalTypoSwitcher, fontStyle: value && false} })}

					textTransform={teamMemberNameTextTransform}
					onChangeTextTransform={(value) => setAttributes({ teamMemberNameTextTransform: value, teamMemberNameGlobalTypoSwitcher: {...teamMemberNameGlobalTypoSwitcher, textTransform: value && false} })}

					textDecoration={teamMemberNameTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ teamMemberNameTextDecoration: value, teamMemberNameGlobalTypoSwitcher: {...teamMemberNameGlobalTypoSwitcher, textDecoration: value && false} })}

					letterSpacing={teamMemberNameLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ teamMemberNameLetterSpacing: value, teamMemberNameGlobalTypoSwitcher: {...teamMemberNameGlobalTypoSwitcher, letterSpacing: value && false} })}

					letterSpacingUnits={teamMemberNameLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ teamMemberNameLetterSpacingUnits: value })}

					lineHeight={teamMemberNameLineHeight}
					onChangeLineHeight={(value) => setAttributes({ teamMemberNameLineHeight: value, teamMemberNameGlobalTypoSwitcher: {...teamMemberNameGlobalTypoSwitcher, lineHeight: value && false} })}

					lineHeightUnits={teamMemberNameLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ teamMemberNameLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={teamMemberNameColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ teamMemberNameColorSwitcher: value })}
				/>
						
				{teamMemberNameColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={teamMemberNameColor}
						setGlobalColor={(value) => setAttributes({ teamMemberNameColor: value === undefined ? '' : value })}
					/>
				)}
						
				{teamMemberNameColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={teamMemberNameHoverColor}
						setGlobalColor={(value) => setAttributes({ teamMemberNameHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleNmeMarginUnitsHandler}
					spacingUnits={teamMemberNameMarginUnits}
					spacingDesktop={teamMemberNameMarginDesktop}
					spacingTablet={teamMemberNameMarginTab}
					spacingMobile={teamMemberNameMarginMobile}
					handleSpacingUnitHandler={handleNameMarginUnitChange}
					spacingCombineBtn={teamMemberNameMarginLink}
					spacingCombineBtnHandler={handleNameMarginCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			{teamMemberBadgeSwitcher && <PanelBody
				title={__("Badge", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-gallery-button-wrapper"
			>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={teamMemberBadgeTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ teamMemberBadgeTypographyData: value })}

					globalTypoType={teamMemberBadgeTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({ 
							teamMemberBadgeTypoType: value, 
							teamMemberBadgeTypoSwitcher: value === 'default' ? {...teamMemberBadgeTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...teamMemberBadgeTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
						})
					}}

					globalTypoOption={teamMemberBadgeTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ teamMemberBadgeTypoOption: value })}

					fontFamily={teamMemberBadgeFontFamily}
					onChangeFontFamily={(value) => setAttributes({ teamMemberBadgeFontFamily: value, teamMemberBadgeTypoSwitcher: {...teamMemberBadgeTypoSwitcher, fontFamily: value && false} })}

					fontSize={teamMemberBadgeFontSize}
					onChangeFontSize={(value) => setAttributes({ teamMemberBadgeFontSize: value, teamMemberBadgeTypoSwitcher: {...teamMemberBadgeTypoSwitcher, fontSize: value && false} })}

					fontSizeUnits={teamMemberBadgeFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ teamMemberBadgeFontSizeUnits: value })}

					fontWeight={teamMemberBadgeFontWeight}
					onChangeFontWeight={(value) => setAttributes({ teamMemberBadgeFontWeight: value, teamMemberBadgeTypoSwitcher: {...teamMemberBadgeTypoSwitcher, fontWeight: value && false} })}

					fontStyle={teamMemberBadgeFontStyle}
					onChangeFontStyle={(value) => setAttributes({ teamMemberBadgeFontStyle: value, teamMemberBadgeTypoSwitcher: {...teamMemberBadgeTypoSwitcher, fontStyle: value && false} })}

					textTransform={teamMemberBadgeTextTransform}
					onChangeTextTransform={(value) => setAttributes({ teamMemberBadgeTextTransform: value, teamMemberBadgeTypoSwitcher: {...teamMemberBadgeTypoSwitcher, textTransform: value && false} })}

					textDecoration={teamMemberBadgeTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ teamMemberBadgeTextDecoration: value, teamMemberBadgeTypoSwitcher: {...teamMemberBadgeTypoSwitcher, textDecoration: value && false} })}

					letterSpacing={teamMemberBadgeLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ teamMemberBadgeLetterSpacing: value, teamMemberBadgeTypoSwitcher: {...teamMemberBadgeTypoSwitcher, letterSpacing: value && false} })}

					letterSpacingUnits={teamMemberBadgeLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ teamMemberBadgeLetterSpacingUnits: value })}

					lineHeight={teamMemberBadgeLineHeight}
					onChangeLineHeight={(value) => setAttributes({ teamMemberBadgeLineHeight: value, teamMemberBadgeTypoSwitcher: {...teamMemberBadgeTypoSwitcher, lineHeight: value && false} })}

					lineHeightUnits={teamMemberBadgeLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ teamMemberBadgeLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={teamMemberBadgeColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ teamMemberBadgeColorSwitcher: value })}
				/>
						
				{teamMemberBadgeColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={teamMemberBadgeColor}
						setGlobalColor={(value) => setAttributes({ teamMemberBadgeColor: value === undefined ? '' : value })}
					/>
				)}
						
				{teamMemberBadgeColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={teamMemberBadgeHoverColor}
						setGlobalColor={(value) => setAttributes({ teamMemberBadgeHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_SwitcherControl
					label={__("Background Color", "frontis-blocks")}
					globalSwitcher={teamMemberBadgeBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ teamMemberBadgeBgColorSwitcher: value })}
				/>
						
				{teamMemberBadgeBgColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={teamMemberBadgeBgColor}
						setGlobalColor={(value) => setAttributes({ teamMemberBadgeBgColor: value === undefined ? '' : value })}
					/>
				)}
						
				{teamMemberBadgeBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={teamMemberBadgeBgHoverColor}
						setGlobalColor={(value) => setAttributes({ teamMemberBadgeBgHoverColor: value === undefined ? '' : value })}
					/>
				)}

					<SelectControl
						label={__("Border Style", "frontis-blocks")}
						value={teamMemberBadgeBorder}
						options={BORDER_STYLES}
						onChange={(value) => setAttributes({ teamMemberBadgeBorder: value })}
					/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={teamMemberBadgeBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ teamMemberBadgeBorderColorSwitcher: value })}
				/>

				{teamMemberBadgeBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={teamMemberBadgeBorderColor}
						setGlobalColor={(value) => setAttributes({ teamMemberBadgeBorderColor: value === undefined ? '' : value })}
					/>
				)}	

				{teamMemberBadgeBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={teamMemberBadgeBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ teamMemberBadgeBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={__("Border Width", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleBadgeBorderUnitsHandler}
					spacingUnits={teamMemberBadgeBorderUnits}
					spacingDesktop={teamMemberBadgeBorderDesktop}
					spacingTablet={teamMemberBadgeBorderTablet}
					spacingMobile={teamMemberBadgeBorderMobile}
					handleSpacingUnitHandler={handleBadgeBorderUnitChange}
					spacingCombineBtn={teamMemberBadgeBorderLink}
					spacingCombineBtnHandler={handleBadgeBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleBadgeBorderRadiusUnitsHandler}
					spacingUnits={teamMemberBadgeBorderRadiusUnits}
					spacingDesktop={teamMemberBadgeBorderRadiusDesktop}
					spacingTablet={teamMemberBadgeBorderRadiusTablet}
					spacingMobile={teamMemberBadgeBorderRadiusMobile}
					handleSpacingUnitHandler={handleBadgeBorderRadiusUnitChange}
					spacingCombineBtn={teamMemberBadgeBorderRadiusLink}
					spacingCombineBtnHandler={handleBadgeBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleBadgeMarginUnitsHandler}
					spacingUnits={teamMemberBadgeMarginUnits}
					spacingDesktop={teamMemberBadgeMarginDesktop}
					spacingTablet={teamMemberBadgeMarginTablet}
					spacingMobile={teamMemberBadgeMarginMobile}
					handleSpacingUnitHandler={handleBadgeMarginUnitChange}
					spacingCombineBtn={teamMemberBadgeMarginLink}
					spacingCombineBtnHandler={handleBadgeMarginCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleBadgePaddingUnitsHandler}
					spacingUnits={teamMemberBadgePaddingUnits}
					spacingDesktop={teamMemberBadgePaddingDesktop}
					spacingTablet={teamMemberBadgePaddingTablet}
					spacingMobile={teamMemberBadgePaddingMobile}
					handleSpacingUnitHandler={handleBadgePaddingUnitChange}
					spacingCombineBtn={teamMemberBadgePaddingLink}
					spacingCombineBtnHandler={handleBadgePaddingCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>}

			<PanelBody
				title={__("Designation", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-gallery-button-wrapper"
			>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={teamMemberDesignationGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ teamMemberDesignationGlobalTypographyData: value })}

					globalTypoType={teamMemberDesignationGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({ 
							teamMemberDesignationGlobalTypoType: value, 
							teamMemberDesignationGlobalTypoSwitcher: value === 'default' ? {...teamMemberDesignationGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...teamMemberDesignationGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
						})
					}}

					globalTypoOption={teamMemberDesignationGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ teamMemberDesignationGlobalTypoOption: value })}

					fontFamily={teamMemberDesignationFontFamily}
					onChangeFontFamily={(value) => setAttributes({ teamMemberDesignationFontFamily: value, teamMemberDesignationGlobalTypoSwitcher: {...teamMemberDesignationGlobalTypoSwitcher, fontFamily: value && false} })}

					fontSize={teamMemberDesignationFontSize}
					onChangeFontSize={(value) => setAttributes({ teamMemberDesignationFontSize: value, teamMemberDesignationGlobalTypoSwitcher: {...teamMemberDesignationGlobalTypoSwitcher, fontSize: value && false} })}

					fontSizeUnits={teamMemberDesignationFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ teamMemberDesignationFontSizeUnits: value })}

					fontWeight={teamMemberDesignationFontWeight}
					onChangeFontWeight={(value) => setAttributes({ teamMemberDesignationFontWeight: value, teamMemberDesignationGlobalTypoSwitcher: {...teamMemberDesignationGlobalTypoSwitcher, fontWeight: value && false} })}

					fontStyle={teamMemberDesignationFontStyle}
					onChangeFontStyle={(value) => setAttributes({ teamMemberDesignationFontStyle: value, teamMemberDesignationGlobalTypoSwitcher: {...teamMemberDesignationGlobalTypoSwitcher, fontStyle: value && false} })}

					textTransform={teamMemberDesignationTextTransform}
					onChangeTextTransform={(value) => setAttributes({ teamMemberDesignationTextTransform: value, teamMemberDesignationGlobalTypoSwitcher: {...teamMemberDesignationGlobalTypoSwitcher, textTransform: value && false} })}

					textDecoration={teamMemberDesignationTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ teamMemberDesignationTextDecoration: value, teamMemberDesignationGlobalTypoSwitcher: {...teamMemberDesignationGlobalTypoSwitcher, textDecoration: value && false} })}

					letterSpacing={teamMemberDesignationLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ teamMemberDesignationLetterSpacing: value, teamMemberDesignationGlobalTypoSwitcher: {...teamMemberDesignationGlobalTypoSwitcher, letterSpacing: value && false} })}

					letterSpacingUnits={teamMemberDesignationLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ teamMemberDesignationLetterSpacingUnits: value })}

					lineHeight={teamMemberDesignationLineHeight}
					onChangeLineHeight={(value) => setAttributes({ teamMemberDesignationLineHeight: value, teamMemberDesignationGlobalTypoSwitcher: {...teamMemberDesignationGlobalTypoSwitcher, lineHeight: value && false} })}

					lineHeightUnits={teamMemberDesignationLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ teamMemberDesignationLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={teamMemberDesignationColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ teamMemberDesignationColorSwitcher: value })}
					/>
							
					{teamMemberDesignationColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={teamMemberDesignationColor}
							setGlobalColor={(value) => setAttributes({ teamMemberDesignationColor: value === undefined ? '' : value })}
						/>
					)}
							
					{teamMemberDesignationColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={teamMemberDesignationHoverColor}
							setGlobalColor={(value) => setAttributes({ teamMemberDesignationHoverColor: value === undefined ? '' : value })}
						/>
					)}

				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleDesiMarginUnitsHandler}
					spacingUnits={teamMemberDesignationMarginUnits}
					spacingDesktop={teamMemberDesignationMarginDesktop}
					spacingTablet={teamMemberDesignationMarginTab}
					spacingMobile={teamMemberDesignationMarginMobile}
					handleSpacingUnitHandler={handleDesiMarginUnitChange}
					spacingCombineBtn={teamMemberDesignationMarginLink}
					spacingCombineBtnHandler={handleDesiMarginCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			{ teamMemberDescSwitcher && <PanelBody
				title={__("Description", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-gallery-button-wrapper"
			>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={teamMemberDescGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ teamMemberDescGlobalTypographyData: value })}

					globalTypoType={teamMemberDescGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({ 
							teamMemberDescGlobalTypoType: value, 
							teamMemberDescGlobalTypoSwitcher: value === 'default' ? {...teamMemberDescGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...teamMemberDescGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
						})
					}}

					globalTypoOption={teamMemberDescGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ teamMemberDescGlobalTypoOption: value })}

					fontFamily={teamMemberDescFontFamily}
					onChangeFontFamily={(value) => setAttributes({ teamMemberDescFontFamily: value, teamMemberDescGlobalTypoSwitcher: {...teamMemberDescGlobalTypoSwitcher, fontFamily: value && false} })}

					fontSize={teamMemberDescFontSize}
					onChangeFontSize={(value) => setAttributes({ teamMemberDescFontSize: value, teamMemberDescGlobalTypoSwitcher: {...teamMemberDescGlobalTypoSwitcher, fontSize: value && false} })}

					fontSizeUnits={teamMemberDescFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ teamMemberDescFontSizeUnits: value })}

					fontWeight={teamMemberDescFontWeight}
					onChangeFontWeight={(value) => setAttributes({ teamMemberDescFontWeight: value, teamMemberDescGlobalTypoSwitcher: {...teamMemberDescGlobalTypoSwitcher, fontWeight: value && false} })}

					fontStyle={teamMemberDescFontStyle}
					onChangeFontStyle={(value) => setAttributes({ teamMemberDescFontStyle: value, teamMemberDescGlobalTypoSwitcher: {...teamMemberDescGlobalTypoSwitcher, fontStyle: value && false} })}

					textTransform={teamMemberDescTextTransform}
					onChangeTextTransform={(value) => setAttributes({ teamMemberDescTextTransform: value, teamMemberDescGlobalTypoSwitcher: {...teamMemberDescGlobalTypoSwitcher, textTransform: value && false} })}

					textDecoration={teamMemberDescTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ teamMemberDescTextDecoration: value, teamMemberDescGlobalTypoSwitcher: {...teamMemberDescGlobalTypoSwitcher, textDecoration: value && false} })}

					letterSpacing={teamMemberDescLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ teamMemberDescLetterSpacing: value, teamMemberDescGlobalTypoSwitcher: {...teamMemberDescGlobalTypoSwitcher, letterSpacing: value && false} })}

					letterSpacingUnits={teamMemberDescLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ teamMemberDescLetterSpacingUnits: value })}

					lineHeight={teamMemberDescLineHeight}
					onChangeLineHeight={(value) => setAttributes({ teamMemberDescLineHeight: value, teamMemberDescGlobalTypoSwitcher: {...teamMemberDescGlobalTypoSwitcher, lineHeight: value && false} })}

					lineHeightUnits={teamMemberDescLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ teamMemberDescLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={teamMemberDescColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ teamMemberDescColorSwitcher: value })}
					/>
							
					{teamMemberDescColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={teamMemberDescColor}
							setGlobalColor={(value) => setAttributes({ teamMemberDescColor: value === undefined ? '' : value })}
						/>
					)}
							
					{teamMemberDescColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={teamMemberDescHoverColor}
							setGlobalColor={(value) => setAttributes({ teamMemberDescHoverColor: value === undefined ? '' : value })}
						/>
					)}

				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleDescMarginUnitsHandler}
					spacingUnits={teamMemberDescMarginUnits}
					spacingDesktop={teamMemberDescMarginDesktop}
					spacingTablet={teamMemberDescMarginTab}
					spacingMobile={teamMemberDescMarginMobile}
					handleSpacingUnitHandler={handleDescMarginUnitChange}
					spacingCombineBtn={teamMemberDescMarginLink}
					spacingCombineBtnHandler={handleDescMarginCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>}

			{ socialIconBtnSwitcher === true && teamMemberSocialProfileSwitcher === true &&
				<PanelBody
					title={__("Social Icon Btn", "frontis-blocks")}
					initialOpen={false}
					className="fb-setting-border-setting-wrapper"
				>

					<FB_Range
						min={1}
						max={100}
						label={__("Size", "frontis-blocks")}
						rangeValue={socialIconBtnIconSize}
						onChangeHandler={(value) => setAttributes({ socialIconBtnIconSize: value })}
						rangeUnitHandler={(value) => setAttributes({ socialIconBtnIconSizeUnits: value })}
						deviceType={deviceType}
						units={socialIconBtnIconSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={20}
					/>
					
					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={socialIconBtnColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ socialIconBtnColorSwitcher: value })}
					/>
							
					{socialIconBtnColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={socialIconBtnColor}
							setGlobalColor={(value) => setAttributes({ socialIconBtnColor: value === undefined ? '' : value })}
						/>
					)}
							
					{socialIconBtnColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={socialIconBtnHoverColor}
							setGlobalColor={(value) => setAttributes({ socialIconBtnHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_SwitcherControl
						label={__("Background Color", "frontis-blocks")}
						globalSwitcher={socialIconBtnBGColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ socialIconBtnBGColorSwitcher: value })}
					/>
							
					{socialIconBtnBGColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={socialIconBtnBGColor}
							setGlobalColor={(value) => setAttributes({ socialIconBtnBGColor: value === undefined ? '' : value })}
						/>
					)}
							
					{socialIconBtnBGColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={socialIconBtnBGHoverColor}
							setGlobalColor={(value) => setAttributes({ socialIconBtnBGHoverColor: value === undefined ? '' : value })}
						/>
					)}
					
					<FB_Spacing
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleSocialIconBtnPaddingUnitsHandler}
						spacingUnits={socialIconBtnPaddingUnits}
						spacingDesktop={socialIconBtnDesktopPadding}
						spacingTablet={socialIconBtnTabPadding}
						spacingMobile={socialIconBtnMobilePadding}
						handleSpacingUnitHandler={handleSocialIconBtnPaddingUnitChange}
						spacingCombineBtn={socialIconBtnPaddingLink}
						spacingCombineBtnHandler={handleSocialIconBtnPaddingCombineBtn}
						setAttributes={setAttributes}
					/>
					
					<FB_Spacing
						label={__("Margin", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleSocialIconBtnMarginUnitsHandler}
						spacingUnits={socialIconBtnMarginUnits}
						spacingDesktop={socialIconBtnDesktopMargin}
						spacingTablet={socialIconBtnTabMargin}
						spacingMobile={socialIconBtnMobileMargin}
						handleSpacingUnitHandler={handleSocialIconBtnMarginUnitChange}
						spacingCombineBtn={socialIconBtnMarginLink}
						spacingCombineBtnHandler={handleSocialIconBtnMarginCombineBtn}
						setAttributes={setAttributes}
					/>

					<SelectControl
						label={__("Border Style", "frontis-blocks")}
						value={socialIconBtnBorder}
						options={BORDER_STYLES}
						onChange={(value) => setAttributes({ socialIconBtnBorder: value })}
					/>

					<FB_SwitcherControl
						label={__("Border Color", "frontis-blocks")}
						globalSwitcher={socialIconBtnBorderColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ socialIconBtnBorderColorSwitcher: value })}
					/>
							
					{socialIconBtnBorderColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={socialIconBtnBorderColor}
							setGlobalColor={(value) => setAttributes({ socialIconBtnBorderColor: value === undefined ? '' : value })}
						/>
					)}
							
					{socialIconBtnBorderColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={socialIconBtnBorderHoverColor}
							setGlobalColor={(value) => setAttributes({ socialIconBtnBorderHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_Spacing 
						label={__("Border", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleSocialIconBtnBorderUnitsHandler}
						spacingUnits={socialIconBtnBorderUnits}
						spacingDesktop={socialIconBtnDesktopBorderWidth}
						spacingTablet={socialIconBtnTabBorderWidth}
						spacingMobile={socialIconBtnMobileBorderWidth}
						handleSpacingUnitHandler={handleSocialIconBtnBorderUnitChange}
						spacingCombineBtn={socialIconBtnBorderLink}
						spacingCombineBtnHandler={handleSocialIconBtnBorderCombineBtn}
						setAttributes={setAttributes}
					/>

					<FB_Spacing 
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleSocialIconBtnBorderRadiusUnitsHandler}
						spacingUnits={socialIconBtnBorderRadiusUnits}
						spacingDesktop={socialIconBtnDesktopBorderRadiusWidth}
						spacingTablet={socialIconBtnTabBorderRadiusWidth}
						spacingMobile={socialIconBtnMobileBorderRadiusWidth}
						handleSpacingUnitHandler={handleSocialIconBtnBorderRadiusUnitChange}
						spacingCombineBtn={socialIconBtnBorderRadiusLink}
						spacingCombineBtnHandler={handleSocialIconBtnBorderRadiusCombineBtn}
						setAttributes={setAttributes}
					/>
				</PanelBody>
			}

			{teamMemberSocialPosition === 'top' || teamMemberSocialPosition === 'bottom' && teamMemberSocialProfileSwitcher === true &&
				<PanelBody
					title={__("Social Profile Separator", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_ResponsiveAlignmentControl
						label={__("Alignment", "frontis-blocks")}
						globalAlignment={socialProfileSeparatorAlignment}
						setGlobalAlignment={(value) => setAttributes({ socialProfileSeparatorAlignment: value })}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>

					<FB_Range
						min={1}
						max={socialProfileSeparatorWidthUnits[deviceType] === '%' ? 100 : 1000}
						label={__("Width", "frontis-blocks")}
						rangeValue={socialProfileSeparatorWidth}
						onChangeHandler={(value) => setAttributes({ socialProfileSeparatorWidth: value })}
						rangeUnitHandler={(value) => setAttributes({ socialProfileSeparatorWidthUnits: value })}
						deviceType={deviceType}
						units={socialProfileSeparatorWidthUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={100}
					/>

					<FB_Range
						min={1}
						max={socialProfileSeparatorHeightUnits[deviceType] === '%' ? 100 : 1000}
						label={__("Height", "frontis-blocks")}
						rangeValue={socialProfileSeparatorHeight}
						onChangeHandler={(value) => setAttributes({ socialProfileSeparatorHeight: value })}
						rangeUnitHandler={(value) => setAttributes({ socialProfileSeparatorHeightUnits: value })}
						deviceType={deviceType}
						units={socialProfileSeparatorHeightUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={100}
					/>

					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={socialProfileSeparatorColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ socialProfileSeparatorColorSwitcher: value })}
					/>
							
					{socialProfileSeparatorColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={socialProfileSeparatorColor}
							setGlobalColor={(value) => setAttributes({ socialProfileSeparatorColor: value === undefined ? '' : value })}
						/>
					)}
							
					{socialProfileSeparatorColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={socialProfileSeparatorHoverColor}
							setGlobalColor={(value) => setAttributes({ socialProfileSeparatorHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_Spacing
						label={ 'Margin' }
						deviceType={deviceType}
						spacingUnitsHandler={handleSocialProfileSeparatorMarginUnitsHandler}
						spacingUnits={socialProfileSeparatorMarginUnits}
						spacingDesktop={socialProfileSeparatorMarginDesktop}
						spacingTablet={socialProfileSeparatorMarginTab}
						spacingMobile={socialProfileSeparatorMarginMobile}
						handleSpacingUnitHandler={handleSocialProfileSeparatorMarginUnitChange}
						spacingCombineBtn={socialProfileSeparatorMarginLink}
						spacingCombineBtnHandler={handleSocialProfileSeparatorMarginCombineBtn} 
						setAttributes={setAttributes}
					/>
				</PanelBody>
			}

			{teamMemberSocialProfileSwitcher === true &&
				<PanelBody
					title={__("Social Icons", "frontis-blocks")}
					initialOpen={false}
				>
					<SelectControl
						label={__("Icon Animation Type", "frontis-blocks")}
						value={teamMemberSocialIconAnimationType}
						options={SOCIAL_ICON_ANIMATION}
						onChange={(value) => setAttributes({ teamMemberSocialIconAnimationType: value })}
					/>
					
					<FB_Range
						min={1}
						max={100}
						label={__("Icon Size", "frontis-blocks")}
						rangeValue={teamMemberIconsSize}
						onChangeHandler={(value) => setAttributes({ teamMemberIconsSize: value })}
						rangeUnitHandler={(value) => setAttributes({ teamMemberIconsSizeUnits: value })}
						deviceType={deviceType}
						units={teamMemberIconsSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={22}
					/>

					<FB_Range
						min={1}
						max={100}
						label={__("Icon Spacing", "frontis-blocks")}
						rangeValue={teamMemberIconsSpacing}
						onChangeHandler={(value) => setAttributes({ teamMemberIconsSpacing: value })}
						rangeUnitHandler={(value) => setAttributes({ teamMemberIconsSpacingUnits: value })}
						deviceType={deviceType}
						units={teamMemberIconsSpacingUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={16}
					/>

					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={teamMemberIconsColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ teamMemberIconsColorSwitcher: value })}
					/>
							
					{teamMemberIconsColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={teamMemberIconsColor}
							setGlobalColor={(value) => setAttributes({ teamMemberIconsColor: value === undefined ? '' : value })}
						/>
					)}
							
					{teamMemberIconsColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={teamMemberIconsHoverColor}
							setGlobalColor={(value) => setAttributes({ teamMemberIconsHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_Spacing
						label={__("Margin", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleTeamMemberIconsMarginUnitsHandler}
						spacingUnits={teamMemberIconsMarginUnits}
						spacingDesktop={teamMemberIconsDesktopMargin}
						spacingTablet={teamMemberIconsTabMargin}
						spacingMobile={teamMemberIconsMobileMargin}
						handleSpacingUnitHandler={handleTeamMemberIconsMarginUnitChange}
						spacingCombineBtn={teamMemberIconsMarginLink}
						spacingCombineBtnHandler={handleTeamMemberIconsMarginCombineBtn}
						setAttributes={setAttributes}
					/>

						<SelectControl
							label={__("Wrapper Border Style", "frontis-blocks")}
							value={teamMemberSocialProfileBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ teamMemberSocialProfileBorder: value })}
						/>

						<FB_SwitcherControl
							label={__("Wrapper Border Color", "frontis-blocks")}
							globalSwitcher={teamMemberSocialProfileBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ teamMemberSocialProfileBorderColorSwitcher: value })}
						/>
								
						{teamMemberSocialProfileBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={teamMemberSocialProfileBorderColor}
								setGlobalColor={(value) => setAttributes({ teamMemberSocialProfileBorderColor: value === undefined ? '' : value })}
							/>
						)}
								
						{teamMemberSocialProfileBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={teamMemberSocialProfileBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ teamMemberSocialProfileBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing 
							label={__("Wrapper Border Width", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleTeamMemberSocialProfileBorderUnitsHandler}
							spacingUnits={teamMemberSocialProfileBorderUnits}
							spacingDesktop={teamMemberSocialProfileDesktopBorderWidth}
							spacingTablet={teamMemberSocialProfileTabBorderWidth}
							spacingMobile={teamMemberSocialProfileMobileBorderWidth}
							handleSpacingUnitHandler={handleTeamMemberSocialProfileBorderUnitChange}
							spacingCombineBtn={teamMemberSocialProfileBorderLink}
							spacingCombineBtnHandler={handleTeamMemberSocialProfileBorderCombineBtn}
							setAttributes={setAttributes}
						/>

					<ToggleControl
						label={__("Single Icon Style", "frontis-blocks")}
						className="fb-setting-responsive-control"
						checked={teamMemberIconStyleSwitcher}
						onChange={(value) => setAttributes({ teamMemberIconStyleSwitcher: value })}
					/>

						<FB_SwitcherControl
							label={__("Background Color", "frontis-blocks")}
							globalSwitcher={teamMemberIconsBGColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ teamMemberIconsBGColorSwitcher: value })}
						/>
								
						{teamMemberIconsBGColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={teamMemberIconsBGColor}
								setGlobalColor={(value) => setAttributes({ teamMemberIconsBGColor: value === undefined ? '' : value })}
							/>
						)}
								
						{teamMemberIconsBGColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={teamMemberIconsBGHoverColor}
								setGlobalColor={(value) => setAttributes({ teamMemberIconsBGHoverColor: value === undefined ? '' : value })}
							/>
						)}
						
						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleTeamMemberIconsPaddingUnitsHandler}
							spacingUnits={teamMemberIconsPaddingUnits}
							spacingDesktop={teamMemberIconsDesktopPadding}
							spacingTablet={teamMemberIconsTabPadding}
							spacingMobile={teamMemberIconsMobilePadding}
							handleSpacingUnitHandler={handleTeamMemberIconsPaddingUnitChange}
							spacingCombineBtn={teamMemberIconsPaddingLink}
							spacingCombineBtnHandler={handleTeamMemberIconsPaddingCombineBtn}
							setAttributes={setAttributes}
						/>

						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={teamMemberIconsBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ teamMemberIconsBorder: value })}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={teamMemberIconsBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ teamMemberIconsBorderColorSwitcher: value })}
						/>
								
						{teamMemberIconsBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={teamMemberIconsBorderColor}
								setGlobalColor={(value) => setAttributes({ teamMemberIconsBorderColor: value === undefined ? '' : value })}
							/>
						)}
								
						{teamMemberIconsBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={teamMemberIconsBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ teamMemberIconsBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing 
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleTeamMemberIconsBorderUnitsHandler}
							spacingUnits={teamMemberIconsBorderUnits}
							spacingDesktop={teamMemberIconsDesktopBorderWidth}
							spacingTablet={teamMemberIconsTabBorderWidth}
							spacingMobile={teamMemberIconsMobileBorderWidth}
							handleSpacingUnitHandler={handleTeamMemberIconsBorderUnitChange}
							spacingCombineBtn={teamMemberIconsBorderLink}
							spacingCombineBtnHandler={handleTeamMemberIconsBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing 
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleTeamMemberIconsBorderRadiusUnitsHandler}
							spacingUnits={teamMemberIconsBorderRadiusUnits}
							spacingDesktop={teamMemberIconsDesktopBorderRadiusWidth}
							spacingTablet={teamMemberIconsTabBorderRadiusWidth}
							spacingMobile={teamMemberIconsMobileBorderRadiusWidth}
							handleSpacingUnitHandler={handleTeamMemberIconsBorderRadiusUnitChange}
							spacingCombineBtn={teamMemberIconsBorderRadiusLink}
							spacingCombineBtnHandler={handleTeamMemberIconsBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>
				</PanelBody>
			}
		</>
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>
			<div className="fb-setting-advanced-tab-wrapper">
				<div className="fb-setting-inner-wrapper">
					
					<PanelBody
						title={__("Layout", "frontis-blocks")}
						initialOpen={true}
						className='fb-setting-layout-header' 
					>
						<FB_Range
							min={0}
							max={10000000}
							label={__("Z Index", "frontis-blocks")}
							rangeValue={teamMemberZIndex}
							onChangeHandler={(value) => setAttributes({ teamMemberZIndex: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={''}
							isRangeUnit={false}
						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={teamMemberOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ teamMemberOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={teamMemberPositionType}
							setPositionType={(value) => setAttributes({ teamMemberPositionType: value })}
						
							HZOrientationType={teamMemberHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ teamMemberHZOrientationType: value })
							}
							VROrientationType={teamMemberVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ teamMemberVROrientationType: value })
							}
							
							HZLeftOffset={teamMemberHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ teamMemberHZLeftOffset: value })}
							HZLeftOffsetUnits={teamMemberHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ teamMemberHZLeftOffsetUnits: value })}
							HZRightOffset={teamMemberHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ teamMemberHZRightOffset: value })}
							HZRightOffsetUnits={teamMemberHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ teamMemberHZRightOffsetUnits: value })}
						
							VRTopOffset={teamMemberVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ teamMemberVRTopOffset: value })}
							VRTopOffsetUnits={teamMemberVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ teamMemberVRTopOffsetUnits: value })}
							VRBottomOffset={teamMemberVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ teamMemberVRBottomOffset: value })}
							VRBottomOffsetUnits={teamMemberVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ teamMemberVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>
						
						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={teamMemberGlobalWraperID}
							onChangeValue={(value) => setAttributes({ teamMemberGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>	

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={teamMemberGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ teamMemberGlobalWraperClass: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
						
					</PanelBody>

					<PanelBody
						title={__("Padding & Margin", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleTeamMemberMarginUnitsHandler}
							spacingUnits={teamMemberMarginUnits}
							spacingDesktop={teamMemberDesktopMargin}
							spacingTablet={teamMemberTabMargin}
							spacingMobile={teamMemberMobileMargin}
							handleSpacingUnitHandler={handleTeamMemberMarginUnitChange}
							spacingCombineBtn={teamMemberMarginLink}
							spacingCombineBtnHandler={handleTeamMemberMarginCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing 
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleTeamMemberPaddingUnitsHandler}
							spacingUnits={teamMemberPaddingUnits}
							spacingDesktop={teamMemberDesktopPadding}
							spacingTablet={teamMemberTabPadding}
							spacingMobile={teamMemberMobilePadding}
							handleSpacingUnitHandler={handleTeamMemberPaddingUnitChange}
							spacingCombineBtn={teamMemberPaddingLink}
							spacingCombineBtnHandler={handleTeamMemberPaddingCombineBtn}
							setAttributes={setAttributes}
						/>                                     
					</PanelBody>

					<PanelBody title="Background Color" initialOpen={false} >
						<FB_BackgroundColorControl
							label={__("Background Color", "frontis-blocks")}
							bgColorSwitcher={teamMemberBgColorSwitcher}
							setBgColorSwitcher={(value) =>
								setAttributes({ teamMemberBgColorSwitcher: value })
							}
							normalBackgroundType={teamMemberBgType}
							setNormalBackgroundType={(value) =>
								setAttributes({ teamMemberBgType: value })
							}
							normalClassicColor={teamMemberBgClassicColor}
							setNormalClassicColor={(value) =>
								setAttributes({ teamMemberBgClassicColor: value === undefined ? '' : value })
							}
							normalGradientColor={teamMemberBgGradientColor}
							setNormalGradientColor={(value) =>
								setAttributes({ teamMemberBgGradientColor: value === undefined ? null : value })
							}
							normalCustomGradientSwitcher={
								teamMemberBgCustomGradientSwitcher
							}
							setNormalCustomGradientSwitcher={(value) =>
								setAttributes({
									teamMemberBgCustomGradientSwitcher: value,
								})
							}
							normalCustomGradientInputValue={
								teamMemberBgCustomGradientInputValue
							}
							setNormalCustomGradientInputValue={(value) =>
								setAttributes({
									teamMemberBgCustomGradientInputValue: value,
								})
							}
							normalBackgroundImageUrl={teamMemberBgImageUrl}
							setNormalBackgroundImageUrl={(value) =>
								setAttributes({ teamMemberBgImageUrl: value })
							}
							normalBackgroundImageAlt={teamMemberBgImageAlt}
							setNormalBackgroundImageAlt={(value) =>
								setAttributes({ teamMemberBgImageAlt: value })
							}
							normalBackgroundImageID={teamMemberBgImageID}
							setNormalBackgroundImageID={(value) =>
								setAttributes({ teamMemberBgImageID: value })
							}
							normalBackgroundImagePosition={
								teamMemberBgImagePosition
							}
							setNormalBackgroundImagePosition={(value) =>
								setAttributes({
									teamMemberBgImagePosition: value,
								})
							}
							normalBackgroundImageAttachment={
								teamMemberBgImageAttachment
							}
							setNormalBackgroundImageAttachment={(value) =>
								setAttributes({
									teamMemberBgImageAttachment: value,
								})
							}
							normalBackgroundImageRepeat={
								teamMemberBgImageRepeat
							}
							setNormalBackgroundImageRepeat={(value) =>
								setAttributes({
									teamMemberBgImageRepeat: value,
								})
							}
							normalBackgroundImageSize={teamMemberBgImageSize}
							setNormalBackgroundImageSize={(value) =>
								setAttributes({ teamMemberBgImageSize: value })
							}
							hoverBackgroundType={teamMemberBgHoverType}
							setHoverBackgroundType={(value) =>
								setAttributes({ teamMemberBgHoverType: value })
							}
							hoverClassicColor={teamMemberBgHoverClassicColor}
							setHoverClassicColor={(value) =>
								setAttributes({ teamMemberBgHoverClassicColor: value === undefined ? '' : value })
							}
							hoverGradientColor={teamMemberBgHoverGradientColor}
							setHoverGradientColor={(value) =>
								setAttributes({ teamMemberBgHoverGradientColor: value === undefined ? null : value })
							}
							hoverCustomGradientSwitcher={
								teamMemberBgHoverCustomGradientSwitcher
							}
							setHoverCustomGradientSwitcher={(value) =>
								setAttributes({
									teamMemberBgHoverCustomGradientSwitcher: value,
								})
							}
							hoverCustomGradientInputValue={
								teamMemberBgHoverCustomGradientInputValue
							}
							setHoverCustomGradientInputValue={(value) =>
								setAttributes({
									teamMemberBgHoverCustomGradientInputValue: value,
								})
							}
							hoverBackgroundImageUrl={teamMemberBgHoverImageUrl}
							setBgHoverImageUrl={(value) =>
								setAttributes({ teamMemberBgHoverImageUrl: value })
							}
							hoverBackgroundImageAlt={teamMemberBgHoverImageAlt}
							setBgHoverImageAlt={(value) =>
								setAttributes({ teamMemberBgHoverImageAlt: value })
							}
							hoverBackgroundImageID={teamMemberBgHoverImageID}
							setBgHoverImageID={(value) =>
								setAttributes({ teamMemberBgHoverImageID: value })
							}
							hoverBackgroundImagePosition={
								teamMemberBgHoverImagePosition
							}
							setBgHoverImagePosition={(value) =>
								setAttributes({
									teamMemberBgHoverImagePosition: value,
								})
							}
							hoverBackgroundImageAttachment={
								teamMemberBgHoverImageAttachment
							}
							setBgHoverImageAttachment={(value) =>
								setAttributes({
									teamMemberBgHoverImageAttachment: value,
								})
							}
							hoverBackgroundImageRepeat={
								teamMemberBgHoverImageRepeat
							}
							setBgHoverImageRepeat={(value) =>
								setAttributes({
									teamMemberBgHoverImageRepeat: value,
								})
							}
							hoverBackgroundImageSize={teamMemberBgHoverImageSize}
							setBgHoverImageSize={(value) =>
								setAttributes({ teamMemberBgHoverImageSize: value })
							}
						/>
					</PanelBody>

					<PanelBody
						title={__("Border & Border radius", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-border-setting-wrapper"
					>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={teamMemberBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ teamMemberBorder: value })}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={teamMemberBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ teamMemberBorderColorSwitcher: value })}
						/>
								
						{teamMemberBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={teamMemberBorderColor}
								setGlobalColor={(value) => setAttributes({ teamMemberBorderColor: value === undefined ? '' : value })}
							/>
						)}
								
						{teamMemberBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={teamMemberBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ teamMemberBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing 
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleTeamMemberBorderUnitsHandler}
							spacingUnits={teamMemberBorderUnits}
							spacingDesktop={teamMemberDesktopBorderWidth}
							spacingTablet={teamMemberTabBorderWidth}
							spacingMobile={teamMemberMobileBorderWidth}
							handleSpacingUnitHandler={handleTeamMemberBorderUnitChange}
							spacingCombineBtn={teamMemberBorderLink}
							spacingCombineBtnHandler={handleTeamMemberBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing 
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleTeamMemberBorderRadiusUnitsHandler}
							spacingUnits={teamMemberBorderRadiusUnits}
							spacingDesktop={teamMemberDesktopBorderRadiusWidth}
							spacingTablet={teamMemberTabBorderRadiusWidth}
							spacingMobile={teamMemberMobileBorderRadiusWidth}
							handleSpacingUnitHandler={handleTeamMemberBorderRadiusUnitChange}
							spacingCombineBtn={teamMemberBorderRadiusLink}
							spacingCombineBtnHandler={handleTeamMemberBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={teamMemberDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ teamMemberDesktopSwitcher: value })}

							tabletValue={teamMemberTabletSwitcher}
							setTabletValue={(value) => setAttributes({ teamMemberTabletSwitcher: value })}

							mobileValue={teamMemberMobileSwitcher}
							setMobileValue={(value) => setAttributes({ teamMemberMobileSwitcher: value })}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor  
							value={teamMemberCustomCSS} 
							onChangeValue={(value) => setAttributes({ teamMemberCustomCSS: value })}
						/>
					</PanelBody>
				</div>
			</div>
		</>
	);
	
	return (
		<>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
			
		</>
	);
}
export default memo(Inspector);