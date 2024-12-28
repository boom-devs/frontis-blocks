import { __ } from '@wordpress/i18n';
import {
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	TabPanel,
	PanelBody,
	TextControl,
	BaseControl,
	ToggleControl,
	Button,
	SelectControl,
	ButtonGroup,
	ResponsiveWrapper, __experimentalHStack as HStack,
	TextareaControl,
} from '@wordpress/components';
import { useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';

import {BORDER_STYLES, CONTENT_POSITION, CONTENT_SOCIAL_ICON_POSITION, HEADING, IMAGE_SOCIAL_ICON_POSITION, SEPARATOR_POSITION, SOCIAL_ICON_ANIMATION, SOCIAL_ICON_TYPE} from "./constants/constants";

import SortableItem from './sortableItem.js';
import FB_Spacing from '../../components/spacing/index.js';
import FB_AlignmentControl from '../../components/alignment-control/index.js';
import FB_Range from '../../components/range/index.js';
import FB_TypographyControl from '../../components/typography-control/index.js';
import FB_ColorControl from '../../components/color-control/index.js';
import FB_ImageControl from '../../components/image-control/index.js';
import FB_HtmlTagControl from '../../components/html-tag-control/index.js';
import FB_BackgroundColorControl from '../../components/background-color-control/index.js';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_SwitcherControl from '../../components/switcher-control/index.js';


export default function Inspector({ attributes, setAttributes, clientId }) {

	const {
		blockID,
		blockStyle,
		deviceType,

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
		teamMemberImageOverlaySwitcher,
		teamMemberImageBGColorSwitcher,
		teamMemberImageBGColor,
		teamMemberImageBGHoverColor,

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

		// Team Name
		teamMemberName,
		teamMemberNameHeadingTag,

		teamMemberNameColorSwitcher,
		teamMemberNameColor,
		teamMemberNameHoverColor,

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
		teamMemberDesignationColor,
		teamMemberDesignationLoadGoogleFonts,
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

		// Team Desc Typography
		teamMemberDescSwitcher,
		teamMemberDesc,
		teamMemberDescColor,
		teamMemberDescLoadGoogleFonts,
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
		teamMemberSocialType,
		teamMemberSocialPosition,
		socialIconBtnSwitcher,
		teamMemberSocialIconAnimationType,

		// Social Icon Wrapper Btn
		socialIconBtnIcon,
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

	} = attributes;

	// Set blockID if it doesn't exist

	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "fb-team-member-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	/** Start load font */
	useEffect(() => {
		loadGoogleFont(teamMemberDesignationFontFamily);
		loadGoogleFont(teamMemberNameFontFamily);
		loadGoogleFont(teamMemberDescFontFamily);
	}, [
		teamMemberDesignationFontFamily, 
		teamMemberNameFontFamily, 
		teamMemberDescFontFamily]);
	/** End load font */

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
	
	const teamMemberMarginDesktopWidth = `${teamMemberDesktopMargin.top}${teamMemberMarginUnits[deviceType]} ${teamMemberDesktopMargin.right}${teamMemberMarginUnits[deviceType]} ${teamMemberDesktopMargin.bottom}${teamMemberMarginUnits[deviceType]} ${teamMemberDesktopMargin.left}${teamMemberMarginUnits[deviceType]}`;
	const teamMemberMarginTabletWidth = `${teamMemberTabMargin.top}${teamMemberMarginUnits[deviceType]} ${teamMemberTabMargin.right}${teamMemberMarginUnits[deviceType]} ${teamMemberTabMargin.bottom}${teamMemberMarginUnits[deviceType]} ${teamMemberTabMargin.left}${teamMemberMarginUnits[deviceType]}`;
	const teamMemberMarginMobileWidth = `${teamMemberMobileMargin.top}${teamMemberMarginUnits[deviceType]} ${teamMemberMobileMargin.right}${teamMemberMarginUnits[deviceType]} ${teamMemberMobileMargin.bottom}${teamMemberMarginUnits[deviceType]} ${teamMemberMobileMargin.left}${teamMemberMarginUnits[deviceType]}`;
	
	
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
	
	const teamMemberPaddingDesktopWidth = `${teamMemberDesktopPadding.top}${teamMemberPaddingUnits[deviceType]} ${teamMemberDesktopPadding.right}${teamMemberPaddingUnits[deviceType]} ${teamMemberDesktopPadding.bottom}${teamMemberPaddingUnits[deviceType]} ${teamMemberDesktopPadding.left}${teamMemberPaddingUnits[deviceType]}`;
	const teamMemberPaddingTabletWidth = `${teamMemberTabPadding.top}${teamMemberPaddingUnits[deviceType]} ${teamMemberTabPadding.right}${teamMemberPaddingUnits[deviceType]} ${teamMemberTabPadding.bottom}${teamMemberPaddingUnits[deviceType]} ${teamMemberTabPadding.left}${teamMemberPaddingUnits[deviceType]}`;
	const teamMemberPaddingMobileWidth = `${teamMemberMobilePadding.top}${teamMemberPaddingUnits[deviceType]} ${teamMemberMobilePadding.right}${teamMemberPaddingUnits[deviceType]} ${teamMemberMobilePadding.bottom}${teamMemberPaddingUnits[deviceType]} ${teamMemberMobilePadding.left}${teamMemberPaddingUnits[deviceType]}`;
	
	
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
	
	const teamMemberBorderDesktopWidth = `${teamMemberDesktopBorderWidth.top}${teamMemberBorderUnits[deviceType]} ${teamMemberDesktopBorderWidth.right}${teamMemberBorderUnits[deviceType]} ${teamMemberDesktopBorderWidth.bottom}${teamMemberBorderUnits[deviceType]} ${teamMemberDesktopBorderWidth.left}${teamMemberBorderUnits[deviceType]}`;
	const teamMemberBorderTabletWidth = `${teamMemberTabBorderWidth.top}${teamMemberBorderUnits[deviceType]} ${teamMemberTabBorderWidth.right}${teamMemberBorderUnits[deviceType]} ${teamMemberTabBorderWidth.bottom}${teamMemberBorderUnits[deviceType]} ${teamMemberTabBorderWidth.left}${teamMemberBorderUnits[deviceType]}`;
	const teamMemberBorderMobileWidth = `${teamMemberMobileBorderWidth.top}${teamMemberBorderUnits[deviceType]} ${teamMemberMobileBorderWidth.right}${teamMemberBorderUnits[deviceType]} ${teamMemberMobileBorderWidth.bottom}${teamMemberBorderUnits[deviceType]} ${teamMemberMobileBorderWidth.left}${teamMemberBorderUnits[deviceType]}`;
	
	
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
	
	const teamMemberBorderRadiusDesktopWidth = `${teamMemberDesktopBorderRadiusWidth.top}${teamMemberBorderRadiusUnits[deviceType]} ${teamMemberDesktopBorderRadiusWidth.right}${teamMemberBorderRadiusUnits[deviceType]} ${teamMemberDesktopBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits[deviceType]} ${teamMemberDesktopBorderRadiusWidth.left}${teamMemberBorderRadiusUnits[deviceType]}`;
	const teamMemberBorderRadiusTabletWidth = `${teamMemberTabBorderRadiusWidth.top}${teamMemberBorderRadiusUnits[deviceType]} ${teamMemberTabBorderRadiusWidth.right}${teamMemberBorderRadiusUnits[deviceType]} ${teamMemberTabBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits[deviceType]} ${teamMemberTabBorderRadiusWidth.left}${teamMemberBorderRadiusUnits[deviceType]}`;
	const teamMemberBorderRadiusMobileWidth = `${teamMemberMobileBorderRadiusWidth.top}${teamMemberBorderRadiusUnits[deviceType]} ${teamMemberMobileBorderRadiusWidth.right}${teamMemberBorderRadiusUnits[deviceType]} ${teamMemberMobileBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits[deviceType]} ${teamMemberMobileBorderRadiusWidth.left}${teamMemberBorderRadiusUnits[deviceType]}`;
	
	{/* Team Member Content Control */}
	const teamMemberContentBorderTypeGetDesktop = `${teamMemberContentBorderDesktop.top}${teamMemberContentBorderUnits[deviceType]} ${teamMemberContentBorderDesktop.right}${teamMemberContentBorderUnits[deviceType]} ${teamMemberContentBorderDesktop.bottom}${teamMemberContentBorderUnits[deviceType]} ${teamMemberContentBorderDesktop.left}${teamMemberContentBorderUnits[deviceType]}`;
	const teamMemberContentBorderTypeGetTab = `${teamMemberContentBorderTab.top}${teamMemberContentBorderUnits[deviceType]} ${teamMemberContentBorderTab.right}${teamMemberContentBorderUnits[deviceType]} ${teamMemberContentBorderTab.bottom}${teamMemberContentBorderUnits[deviceType]} ${teamMemberContentBorderTab.left}${teamMemberContentBorderUnits[deviceType]}`;
	const teamMemberContentBorderTypeGetMobile = `${teamMemberContentBorderMobile.top}${teamMemberContentBorderUnits[deviceType]} ${teamMemberContentBorderMobile.right}${teamMemberContentBorderUnits[deviceType]} ${teamMemberContentBorderMobile.bottom}${teamMemberContentBorderUnits[deviceType]} ${teamMemberContentBorderMobile.left}${teamMemberContentBorderUnits[deviceType]}`;


	const teamMemberContentBorderRadiusGetDesktop = `${teamMemberContentBorderRadiusDesktop.top}${teamMemberContentBorderRadiusUnits[deviceType]} ${teamMemberContentBorderRadiusDesktop.right}${teamMemberContentBorderRadiusUnits[deviceType]} ${teamMemberContentBorderRadiusDesktop.bottom}${teamMemberContentBorderRadiusUnits[deviceType]} ${teamMemberContentBorderRadiusDesktop.left}${teamMemberContentBorderRadiusUnits[deviceType]}`;
	const teamMemberContentBorderRadiusGetTab = `${teamMemberContentBorderRadiusTab.top}${teamMemberContentBorderRadiusUnits[deviceType]} ${teamMemberContentBorderRadiusTab.right}${teamMemberContentBorderRadiusUnits[deviceType]} ${teamMemberContentBorderRadiusTab.bottom}${teamMemberContentBorderRadiusUnits[deviceType]} ${teamMemberContentBorderRadiusTab.left}${teamMemberContentBorderRadiusUnits[deviceType]}`;
	const teamMemberContentBorderRadiusGetMobile = `${teamMemberContentBorderRadiusMobile.top}${teamMemberContentBorderRadiusUnits[deviceType]} ${teamMemberContentBorderRadiusMobile.right}${teamMemberContentBorderRadiusUnits[deviceType]} ${teamMemberContentBorderRadiusMobile.bottom}${teamMemberContentBorderRadiusUnits[deviceType]} ${teamMemberContentBorderRadiusMobile.left}${teamMemberContentBorderRadiusUnits[deviceType]}`;


	const teamMemberContentMarginGetDesktop = `${teamMemberContentMarginDesktop.top}${teamMemberContentMarginUnits[deviceType]} ${teamMemberContentMarginDesktop.right}${teamMemberContentMarginUnits[deviceType]} ${teamMemberContentMarginDesktop.bottom}${teamMemberContentMarginUnits[deviceType]} ${teamMemberContentMarginDesktop.left}${teamMemberContentMarginUnits[deviceType]}`;
	const teamMemberContentMarginGetTab = `${teamMemberContentMarginTab.top}${teamMemberContentMarginUnits[deviceType]} ${teamMemberContentMarginTab.right}${teamMemberContentMarginUnits[deviceType]} ${teamMemberContentMarginTab.bottom}${teamMemberContentMarginUnits[deviceType]} ${teamMemberContentMarginTab.left}${teamMemberContentMarginUnits[deviceType]}`;
	const teamMemberContentMarginGetMobile = `${teamMemberContentMarginMobile.top}${teamMemberContentMarginUnits[deviceType]} ${teamMemberContentMarginMobile.right}${teamMemberContentMarginUnits[deviceType]} ${teamMemberContentMarginMobile.bottom}${teamMemberContentMarginUnits[deviceType]} ${teamMemberContentMarginMobile.left}${teamMemberContentMarginUnits[deviceType]}`;


	const teamMemberContentPaddingGetDesktop = `${teamMemberContentPaddingDesktop.top}${teamMemberContentPaddingUnits[deviceType]} ${teamMemberContentPaddingDesktop.right}${teamMemberContentPaddingUnits[deviceType]} ${teamMemberContentPaddingDesktop.bottom}${teamMemberContentPaddingUnits[deviceType]} ${teamMemberContentPaddingDesktop.left}${teamMemberContentPaddingUnits[deviceType]}`;
	const teamMemberContentPaddingGetTab = `${teamMemberContentPaddingTab.top}${teamMemberContentPaddingUnits[deviceType]} ${teamMemberContentPaddingTab.right}${teamMemberContentPaddingUnits[deviceType]} ${teamMemberContentPaddingTab.bottom}${teamMemberContentPaddingUnits[deviceType]} ${teamMemberContentPaddingTab.left}${teamMemberContentPaddingUnits[deviceType]}`;
	const teamMemberContentPaddingGetMobile = `${teamMemberContentPaddingMobile.top}${teamMemberContentPaddingUnits[deviceType]} ${teamMemberContentPaddingMobile.right}${teamMemberContentPaddingUnits[deviceType]} ${teamMemberContentPaddingMobile.bottom}${teamMemberContentPaddingUnits[deviceType]} ${teamMemberContentPaddingMobile.left}${teamMemberContentPaddingUnits[deviceType]}`;


	{/* Team Member Image Control */}
	const teamMemberImageBorderTypeGetDesktop = `${teamMemberImageBorderDesktop.top}${teamMemberImageBorderUnits[deviceType]} ${teamMemberImageBorderDesktop.right}${teamMemberImageBorderUnits[deviceType]} ${teamMemberImageBorderDesktop.bottom}${teamMemberImageBorderUnits[deviceType]} ${teamMemberImageBorderDesktop.left}${teamMemberImageBorderUnits[deviceType]}`;
	const teamMemberImageBorderTypeGetTab = `${teamMemberImageBorderTab.top}${teamMemberImageBorderUnits[deviceType]} ${teamMemberImageBorderTab.right}${teamMemberImageBorderUnits[deviceType]} ${teamMemberImageBorderTab.bottom}${teamMemberImageBorderUnits[deviceType]} ${teamMemberImageBorderTab.left}${teamMemberImageBorderUnits[deviceType]}`;
	const teamMemberImageBorderTypeGetMobile = `${teamMemberImageBorderMobile.top}${teamMemberImageBorderUnits[deviceType]} ${teamMemberImageBorderMobile.right}${teamMemberImageBorderUnits[deviceType]} ${teamMemberImageBorderMobile.bottom}${teamMemberImageBorderUnits[deviceType]} ${teamMemberImageBorderMobile.left}${teamMemberImageBorderUnits[deviceType]}`;


	const teamMemberImageBorderRadiusGetDesktop = `${teamMemberImageBorderRadiusDesktop.top}${teamMemberImageBorderRadiusUnits[deviceType]} ${teamMemberImageBorderRadiusDesktop.right}${teamMemberImageBorderRadiusUnits[deviceType]} ${teamMemberImageBorderRadiusDesktop.bottom}${teamMemberImageBorderRadiusUnits[deviceType]} ${teamMemberImageBorderRadiusDesktop.left}${teamMemberImageBorderRadiusUnits[deviceType]}`;
	const teamMemberImageBorderRadiusGetTab = `${teamMemberImageBorderRadiusTab.top}${teamMemberImageBorderRadiusUnits[deviceType]} ${teamMemberImageBorderRadiusTab.right}${teamMemberImageBorderRadiusUnits[deviceType]} ${teamMemberImageBorderRadiusTab.bottom}${teamMemberImageBorderRadiusUnits[deviceType]} ${teamMemberImageBorderRadiusTab.left}${teamMemberImageBorderRadiusUnits[deviceType]}`;
	const teamMemberImageBorderRadiusGetMobile = `${teamMemberImageBorderRadiusMobile.top}${teamMemberImageBorderRadiusUnits[deviceType]} ${teamMemberImageBorderRadiusMobile.right}${teamMemberImageBorderRadiusUnits[deviceType]} ${teamMemberImageBorderRadiusMobile.bottom}${teamMemberImageBorderRadiusUnits[deviceType]} ${teamMemberImageBorderRadiusMobile.left}${teamMemberImageBorderRadiusUnits[deviceType]}`;


	const teamMemberImageMarginGetDesktop = `${teamMemberImageMarginDesktop.top}${teamMemberImageMarginUnits[deviceType]} ${teamMemberImageMarginDesktop.right}${teamMemberImageMarginUnits[deviceType]} ${teamMemberImageMarginDesktop.bottom}${teamMemberImageMarginUnits[deviceType]} ${teamMemberImageMarginDesktop.left}${teamMemberImageMarginUnits[deviceType]}`;
	const teamMemberImageMarginGetTab = `${teamMemberImageMarginTab.top}${teamMemberImageMarginUnits[deviceType]} ${teamMemberImageMarginTab.right}${teamMemberImageMarginUnits[deviceType]} ${teamMemberImageMarginTab.bottom}${teamMemberImageMarginUnits[deviceType]} ${teamMemberImageMarginTab.left}${teamMemberImageMarginUnits[deviceType]}`;
	const teamMemberImageMarginGetMobile = `${teamMemberImageMarginMobile.top}${teamMemberImageMarginUnits[deviceType]} ${teamMemberImageMarginMobile.right}${teamMemberImageMarginUnits[deviceType]} ${teamMemberImageMarginMobile.bottom}${teamMemberImageMarginUnits[deviceType]} ${teamMemberImageMarginMobile.left}${teamMemberImageMarginUnits[deviceType]}`;


	{/* Team Member Name Control */}
	const teamMemberNameMarginGetDesktop = `${teamMemberNameMarginDesktop.top}${teamMemberNameMarginUnits[deviceType]} ${teamMemberNameMarginDesktop.right}${teamMemberNameMarginUnits[deviceType]} ${teamMemberNameMarginDesktop.bottom}${teamMemberNameMarginUnits[deviceType]} ${teamMemberNameMarginDesktop.left}${teamMemberNameMarginUnits[deviceType]}`;
	const teamMemberNameMarginGetTab = `${teamMemberNameMarginTab.top}${teamMemberNameMarginUnits[deviceType]} ${teamMemberNameMarginTab.right}${teamMemberNameMarginUnits[deviceType]} ${teamMemberNameMarginTab.bottom}${teamMemberNameMarginUnits[deviceType]} ${teamMemberNameMarginTab.left}${teamMemberNameMarginUnits[deviceType]}`;
	const teamMemberNameMarginGetMobile = `${teamMemberNameMarginMobile.top}${teamMemberNameMarginUnits[deviceType]} ${teamMemberNameMarginMobile.right}${teamMemberNameMarginUnits[deviceType]} ${teamMemberNameMarginMobile.bottom}${teamMemberNameMarginUnits[deviceType]} ${teamMemberNameMarginMobile.left}${teamMemberNameMarginUnits[deviceType]}`;


	{/* Team Member Designation Control */}
	const teamMemberDesignationMarginGetDesktop = `${teamMemberDesignationMarginDesktop.top}${teamMemberDesignationMarginUnits[deviceType]} ${teamMemberDesignationMarginDesktop.right}${teamMemberDesignationMarginUnits[deviceType]} ${teamMemberDesignationMarginDesktop.bottom}${teamMemberDesignationMarginUnits[deviceType]} ${teamMemberDesignationMarginDesktop.left}${teamMemberDesignationMarginUnits[deviceType]}`;
	const teamMemberDesignationMarginGetTab = `${teamMemberDesignationMarginTab.top}${teamMemberDesignationMarginUnits[deviceType]} ${teamMemberDesignationMarginTab.right}${teamMemberDesignationMarginUnits[deviceType]} ${teamMemberDesignationMarginTab.bottom}${teamMemberDesignationMarginUnits[deviceType]} ${teamMemberDesignationMarginTab.left}${teamMemberDesignationMarginUnits[deviceType]}`;
	const teamMemberDesignationMarginGetMobile = `${teamMemberDesignationMarginMobile.top}${teamMemberDesignationMarginUnits[deviceType]} ${teamMemberDesignationMarginMobile.right}${teamMemberDesignationMarginUnits[deviceType]} ${teamMemberDesignationMarginMobile.bottom}${teamMemberDesignationMarginUnits[deviceType]} ${teamMemberDesignationMarginMobile.left}${teamMemberDesignationMarginUnits[deviceType]}`;

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
	const teamMemberDescMarginGetDesktop = `${teamMemberDescMarginDesktop.top}${teamMemberDescMarginUnits[deviceType]} ${teamMemberDescMarginDesktop.right}${teamMemberDescMarginUnits[deviceType]} ${teamMemberDescMarginDesktop.bottom}${teamMemberDescMarginUnits[deviceType]} ${teamMemberDescMarginDesktop.left}${teamMemberDescMarginUnits[deviceType]}`;
	const teamMemberDescMarginGetTab = `${teamMemberDescMarginTab.top}${teamMemberDescMarginUnits[deviceType]} ${teamMemberDescMarginTab.right}${teamMemberDescMarginUnits[deviceType]} ${teamMemberDescMarginTab.bottom}${teamMemberDescMarginUnits[deviceType]} ${teamMemberDescMarginTab.left}${teamMemberDescMarginUnits[deviceType]}`;
	const teamMemberDescMarginGetMobile = `${teamMemberDescMarginMobile.top}${teamMemberDescMarginUnits[deviceType]} ${teamMemberDescMarginMobile.right}${teamMemberDescMarginUnits[deviceType]} ${teamMemberDescMarginMobile.bottom}${teamMemberDescMarginUnits[deviceType]} ${teamMemberDescMarginMobile.left}${teamMemberDescMarginUnits[deviceType]}`;


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

	const socialIconBtnDesktopPaddingWidth = `${socialIconBtnDesktopPadding.top}${socialIconBtnPaddingUnits[deviceType]} ${socialIconBtnDesktopPadding.right}${socialIconBtnPaddingUnits[deviceType]} ${socialIconBtnDesktopPadding.bottom}${socialIconBtnPaddingUnits[deviceType]} ${socialIconBtnDesktopPadding.left}${socialIconBtnPaddingUnits[deviceType]}`;
	const socialIconBtnTabPaddingWidth = `${socialIconBtnTabPadding.top}${socialIconBtnPaddingUnits[deviceType]} ${socialIconBtnTabPadding.right}${socialIconBtnPaddingUnits[deviceType]} ${socialIconBtnTabPadding.bottom}${socialIconBtnPaddingUnits[deviceType]} ${socialIconBtnTabPadding.left}${socialIconBtnPaddingUnits[deviceType]}`;
	const socialIconBtnMobilePaddingWidth = `${socialIconBtnMobilePadding.top}${socialIconBtnPaddingUnits[deviceType]} ${socialIconBtnMobilePadding.right}${socialIconBtnPaddingUnits[deviceType]} ${socialIconBtnMobilePadding.bottom}${socialIconBtnPaddingUnits[deviceType]} ${socialIconBtnMobilePadding.left}${socialIconBtnPaddingUnits[deviceType]}`;


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

	const socialIconBtnDesktopMarginWidth = `${socialIconBtnDesktopMargin.top}${socialIconBtnMarginUnits[deviceType]} ${socialIconBtnDesktopMargin.right}${socialIconBtnMarginUnits[deviceType]} ${socialIconBtnDesktopMargin.bottom}${socialIconBtnMarginUnits[deviceType]} ${socialIconBtnDesktopMargin.left}${socialIconBtnMarginUnits[deviceType]}`;
	const socialIconBtnTabMarginWidth = `${socialIconBtnTabMargin.top}${socialIconBtnMarginUnits[deviceType]} ${socialIconBtnTabMargin.right}${socialIconBtnMarginUnits[deviceType]} ${socialIconBtnTabMargin.bottom}${socialIconBtnMarginUnits[deviceType]} ${socialIconBtnTabMargin.left}${socialIconBtnMarginUnits[deviceType]}`;
	const socialIconBtnMobileMarginWidth = `${socialIconBtnMobileMargin.top}${socialIconBtnMarginUnits[deviceType]} ${socialIconBtnMobileMargin.right}${socialIconBtnMarginUnits[deviceType]} ${socialIconBtnMobileMargin.bottom}${socialIconBtnMarginUnits[deviceType]} ${socialIconBtnMobileMargin.left}${socialIconBtnMarginUnits[deviceType]}`;


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

	const socialIconBtnDesktopBorder = `${socialIconBtnDesktopBorderWidth.top}${socialIconBtnBorderUnits[deviceType]} ${socialIconBtnDesktopBorderWidth.right}${socialIconBtnBorderUnits[deviceType]} ${socialIconBtnDesktopBorderWidth.bottom}${socialIconBtnBorderUnits[deviceType]} ${socialIconBtnDesktopBorderWidth.left}${socialIconBtnBorderUnits[deviceType]}`;
	const socialIconBtnTabBorder = `${socialIconBtnTabBorderWidth.top}${socialIconBtnBorderUnits[deviceType]} ${socialIconBtnTabBorderWidth.right}${socialIconBtnBorderUnits[deviceType]} ${socialIconBtnTabBorderWidth.bottom}${socialIconBtnBorderUnits[deviceType]} ${socialIconBtnTabBorderWidth.left}${socialIconBtnBorderUnits[deviceType]}`;
	const socialIconBtnMobileBorder = `${socialIconBtnMobileBorderWidth.top}${socialIconBtnBorderUnits[deviceType]} ${socialIconBtnMobileBorderWidth.right}${socialIconBtnBorderUnits[deviceType]} ${socialIconBtnMobileBorderWidth.bottom}${socialIconBtnBorderUnits[deviceType]} ${socialIconBtnMobileBorderWidth.left}${socialIconBtnBorderUnits[deviceType]}`;


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

	const socialIconBtnDesktopBorderRadius = `${socialIconBtnDesktopBorderRadiusWidth.top}${socialIconBtnBorderRadiusUnits[deviceType]} ${socialIconBtnDesktopBorderRadiusWidth.right}${socialIconBtnBorderRadiusUnits[deviceType]} ${socialIconBtnDesktopBorderRadiusWidth.bottom}${socialIconBtnBorderRadiusUnits[deviceType]} ${socialIconBtnDesktopBorderRadiusWidth.left}${socialIconBtnBorderRadiusUnits[deviceType]}`;
	const socialIconBtnTabBorderRadius = `${socialIconBtnTabBorderRadiusWidth.top}${socialIconBtnBorderRadiusUnits[deviceType]} ${socialIconBtnTabBorderRadiusWidth.right}${socialIconBtnBorderRadiusUnits[deviceType]} ${socialIconBtnTabBorderRadiusWidth.bottom}${socialIconBtnBorderRadiusUnits[deviceType]} ${socialIconBtnTabBorderRadiusWidth.left}${socialIconBtnBorderRadiusUnits[deviceType]}`;
	const socialIconBtnMobileBorderRadius = `${socialIconBtnMobileBorderRadiusWidth.top}${socialIconBtnBorderRadiusUnits[deviceType]} ${socialIconBtnMobileBorderRadiusWidth.right}${socialIconBtnBorderRadiusUnits[deviceType]} ${socialIconBtnMobileBorderRadiusWidth.bottom}${socialIconBtnBorderRadiusUnits[deviceType]} ${socialIconBtnMobileBorderRadiusWidth.left}${socialIconBtnBorderRadiusUnits[deviceType]}`;


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

	const teamMemberIconsDesktopPaddingWidth = `${teamMemberIconsDesktopPadding.top}${teamMemberIconsPaddingUnits[deviceType]} ${teamMemberIconsDesktopPadding.right}${teamMemberIconsPaddingUnits[deviceType]} ${teamMemberIconsDesktopPadding.bottom}${teamMemberIconsPaddingUnits[deviceType]} ${teamMemberIconsDesktopPadding.left}${teamMemberIconsPaddingUnits[deviceType]}`;
	const teamMemberIconsTabPaddingWidth = `${teamMemberIconsTabPadding.top}${teamMemberIconsPaddingUnits[deviceType]} ${teamMemberIconsTabPadding.right}${teamMemberIconsPaddingUnits[deviceType]} ${teamMemberIconsTabPadding.bottom}${teamMemberIconsPaddingUnits[deviceType]} ${teamMemberIconsTabPadding.left}${teamMemberIconsPaddingUnits[deviceType]}`;
	const teamMemberIconsMobilePaddingWidth = `${teamMemberIconsMobilePadding.top}${teamMemberIconsPaddingUnits[deviceType]} ${teamMemberIconsMobilePadding.right}${teamMemberIconsPaddingUnits[deviceType]} ${teamMemberIconsMobilePadding.bottom}${teamMemberIconsPaddingUnits[deviceType]} ${teamMemberIconsMobilePadding.left}${teamMemberIconsPaddingUnits[deviceType]}`;


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

	const teamMemberIconsDesktopMarginWidth = `${teamMemberIconsDesktopMargin.top}${teamMemberIconsMarginUnits[deviceType]} ${teamMemberIconsDesktopMargin.right}${teamMemberIconsMarginUnits[deviceType]} ${teamMemberIconsDesktopMargin.bottom}${teamMemberIconsMarginUnits[deviceType]} ${teamMemberIconsDesktopMargin.left}${teamMemberIconsMarginUnits[deviceType]}`;
	const teamMemberIconsTabMarginWidth = `${teamMemberIconsTabMargin.top}${teamMemberIconsMarginUnits[deviceType]} ${teamMemberIconsTabMargin.right}${teamMemberIconsMarginUnits[deviceType]} ${teamMemberIconsTabMargin.bottom}${teamMemberIconsMarginUnits[deviceType]} ${teamMemberIconsTabMargin.left}${teamMemberIconsMarginUnits[deviceType]}`;
	const teamMemberIconsMobileMarginWidth = `${teamMemberIconsMobileMargin.top}${teamMemberIconsMarginUnits[deviceType]} ${teamMemberIconsMobileMargin.right}${teamMemberIconsMarginUnits[deviceType]} ${teamMemberIconsMobileMargin.bottom}${teamMemberIconsMarginUnits[deviceType]} ${teamMemberIconsMobileMargin.left}${teamMemberIconsMarginUnits[deviceType]}`;



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

	const teamMemberIconsDesktopBorder = `${teamMemberIconsDesktopBorderWidth.top}${teamMemberIconsBorderUnits[deviceType]} ${teamMemberIconsDesktopBorderWidth.right}${teamMemberIconsBorderUnits[deviceType]} ${teamMemberIconsDesktopBorderWidth.bottom}${teamMemberIconsBorderUnits[deviceType]} ${teamMemberIconsDesktopBorderWidth.left}${teamMemberIconsBorderUnits[deviceType]}`;
	const teamMemberIconsTabBorder = `${teamMemberIconsTabBorderWidth.top}${teamMemberIconsBorderUnits[deviceType]} ${teamMemberIconsTabBorderWidth.right}${teamMemberIconsBorderUnits[deviceType]} ${teamMemberIconsTabBorderWidth.bottom}${teamMemberIconsBorderUnits[deviceType]} ${teamMemberIconsTabBorderWidth.left}${teamMemberIconsBorderUnits[deviceType]}`;
	const teamMemberIconsMobileBorder = `${teamMemberIconsMobileBorderWidth.top}${teamMemberIconsBorderUnits[deviceType]} ${teamMemberIconsMobileBorderWidth.right}${teamMemberIconsBorderUnits[deviceType]} ${teamMemberIconsMobileBorderWidth.bottom}${teamMemberIconsBorderUnits[deviceType]} ${teamMemberIconsMobileBorderWidth.left}${teamMemberIconsBorderUnits[deviceType]}`;


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

	const teamMemberIconsDesktopBorderRadius = `${teamMemberIconsDesktopBorderRadiusWidth.top}${teamMemberIconsBorderRadiusUnits[deviceType]} ${teamMemberIconsDesktopBorderRadiusWidth.right}${teamMemberIconsBorderRadiusUnits[deviceType]} ${teamMemberIconsDesktopBorderRadiusWidth.bottom}${teamMemberIconsBorderRadiusUnits[deviceType]} ${teamMemberIconsDesktopBorderRadiusWidth.left}${teamMemberIconsBorderRadiusUnits[deviceType]}`;
	const teamMemberIconsTabBorderRadius = `${teamMemberIconsTabBorderRadiusWidth.top}${teamMemberIconsBorderRadiusUnits[deviceType]} ${teamMemberIconsTabBorderRadiusWidth.right}${teamMemberIconsBorderRadiusUnits[deviceType]} ${teamMemberIconsTabBorderRadiusWidth.bottom}${teamMemberIconsBorderRadiusUnits[deviceType]} ${teamMemberIconsTabBorderRadiusWidth.left}${teamMemberIconsBorderRadiusUnits[deviceType]}`;
	const teamMemberIconsMobileBorderRadius = `${teamMemberIconsMobileBorderRadiusWidth.top}${teamMemberIconsBorderRadiusUnits[deviceType]} ${teamMemberIconsMobileBorderRadiusWidth.right}${teamMemberIconsBorderRadiusUnits[deviceType]} ${teamMemberIconsMobileBorderRadiusWidth.bottom}${teamMemberIconsBorderRadiusUnits[deviceType]} ${teamMemberIconsMobileBorderRadiusWidth.left}${teamMemberIconsBorderRadiusUnits[deviceType]}`;


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

	const teamMemberSocialProfileDesktopBorder = `${teamMemberSocialProfileDesktopBorderWidth.top}${teamMemberSocialProfileBorderUnits[deviceType]} ${teamMemberSocialProfileDesktopBorderWidth.right}${teamMemberSocialProfileBorderUnits[deviceType]} ${teamMemberSocialProfileDesktopBorderWidth.bottom}${teamMemberSocialProfileBorderUnits[deviceType]} ${teamMemberSocialProfileDesktopBorderWidth.left}${teamMemberSocialProfileBorderUnits[deviceType]}`;
	const teamMemberSocialProfileTabBorder = `${teamMemberSocialProfileTabBorderWidth.top}${teamMemberSocialProfileBorderUnits[deviceType]} ${teamMemberSocialProfileTabBorderWidth.right}${teamMemberSocialProfileBorderUnits[deviceType]} ${teamMemberSocialProfileTabBorderWidth.bottom}${teamMemberSocialProfileBorderUnits[deviceType]} ${teamMemberSocialProfileTabBorderWidth.left}${teamMemberSocialProfileBorderUnits[deviceType]}`;
	const teamMemberSocialProfileMobileBorder = `${teamMemberSocialProfileMobileBorderWidth.top}${teamMemberSocialProfileBorderUnits[deviceType]} ${teamMemberSocialProfileMobileBorderWidth.right}${teamMemberSocialProfileBorderUnits[deviceType]} ${teamMemberSocialProfileMobileBorderWidth.bottom}${teamMemberSocialProfileBorderUnits[deviceType]} ${teamMemberSocialProfileMobileBorderWidth.left}${teamMemberSocialProfileBorderUnits[deviceType]}`;

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

	const socialProfileSeparatorMarginDesktopWidth = `${socialProfileSeparatorMarginDesktop.top}${socialProfileSeparatorMarginUnits[deviceType]} ${socialProfileSeparatorMarginDesktop.right}${socialProfileSeparatorMarginUnits[deviceType]} ${socialProfileSeparatorMarginDesktop.bottom}${socialProfileSeparatorMarginUnits[deviceType]} ${socialProfileSeparatorMarginDesktop.left}${socialProfileSeparatorMarginUnits[deviceType]}`;
	const socialProfileSeparatorMarginTabWidth = `${socialProfileSeparatorMarginTab.top}${socialProfileSeparatorMarginUnits[deviceType]} ${socialProfileSeparatorMarginTab.right}${socialProfileSeparatorMarginUnits[deviceType]} ${socialProfileSeparatorMarginTab.bottom}${socialProfileSeparatorMarginUnits[deviceType]} ${socialProfileSeparatorMarginTab.left}${socialProfileSeparatorMarginUnits[deviceType]}`;
	const socialProfileSeparatorMarginMobileWidth = `${socialProfileSeparatorMarginMobile.top}${socialProfileSeparatorMarginUnits[deviceType]} ${socialProfileSeparatorMarginMobile.right}${socialProfileSeparatorMarginUnits[deviceType]} ${socialProfileSeparatorMarginMobile.bottom}${socialProfileSeparatorMarginUnits[deviceType]} ${socialProfileSeparatorMarginMobile.left}${socialProfileSeparatorMarginUnits[deviceType]}`;


	
	const fbTeamMemberStyle = useMemo(
		() => `
			.fb-team-member-main-wrapper.${blockID} .fb-team-member-wrapper {
				position: relative;
				${
                    teamMemberBgType === "gradient"
                      ? `background: ${
                          teamMemberBgCustomGradientSwitcher && teamMemberBgCustomGradientInputValue
                            ? teamMemberBgCustomGradientInputValue
                            : teamMemberBgGradientColor
                        };`
                      : teamMemberBgImageUrl !== undefined && teamMemberBgImageUrl !== null && teamMemberBgImageUrl !== ""
                      ? `
                        ${teamMemberBgImageUrl !== undefined ? `background-image: url(${teamMemberBgImageUrl});` : ''}
                        ${teamMemberBgImagePosition !== undefined ? `background-position: ${teamMemberBgImagePosition};` : ''}
                        ${teamMemberBgImageAttachment !== undefined ? `background-attachment: ${teamMemberBgImageAttachment};` : ''}
                        ${teamMemberBgImageRepeat !== undefined ? `background-repeat: ${teamMemberBgImageRepeat};` : ''}
                        ${teamMemberBgImageSize !== undefined ? `background-size: ${teamMemberBgImageSize};` : ''}
                      `
                      : `background: ${teamMemberBgClassicColor};`
                }
				${teamMemberPaddingDesktopWidth !== undefined ? `padding: ${teamMemberPaddingDesktopWidth};` : ''}
				${teamMemberMarginDesktopWidth !== undefined ? `margin: ${teamMemberMarginDesktopWidth};` : ''}
				${teamMemberBorder !== undefined ? `border-style: ${teamMemberBorder};` : ''}
				${teamMemberBorderDesktopWidth !== undefined ? `border-width: ${teamMemberBorderDesktopWidth};` : ''}
				${teamMemberBorderColor !== undefined ? `border-color: ${teamMemberBorderColor};` : ''}
				${teamMemberBorderRadiusDesktopWidth !== undefined ? `border-radius: ${teamMemberBorderRadiusDesktopWidth};` : ''}
				${teamMemberZIndex.Desktop !== undefined ? `z-index: ${teamMemberZIndex.Desktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-main-wrapper.${blockID} .fb-team-member-wrapper:hover {
				${
					teamMemberBgHoverType === "gradient"
					  ? `background: ${
						  teamMemberBgHoverCustomGradientSwitcher && teamMemberBgHoverCustomGradientInputValue
							? teamMemberBgHoverCustomGradientInputValue
							: teamMemberBgHoverGradientColor
						};`
					  : teamMemberBgHoverImageUrl !== undefined && teamMemberBgHoverImageUrl !== null && teamMemberBgHoverImageUrl !== ""
					  ? `
						${teamMemberBgHoverImageUrl !== undefined ? `background-image: url(${teamMemberBgHoverImageUrl});` : ''}
						${teamMemberBgHoverImagePosition !== undefined ? `background-position: ${teamMemberBgHoverImagePosition};` : ''}
						${teamMemberBgHoverImageAttachment !== undefined ? `background-attachment: ${teamMemberBgHoverImageAttachment};` : ''}
						${teamMemberBgHoverImageRepeat !== undefined ? `background-repeat: ${teamMemberBgHoverImageRepeat};` : ''}
						${teamMemberBgHoverImageSize !== undefined ? `background-size: ${teamMemberBgHoverImageSize};` : ''}
					  `
					  : `background: ${teamMemberBgHoverClassicColor};`
				}
				${teamMemberBorderHoverColor !== undefined ? `border-color: ${teamMemberBorderHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper {
				display: flex;
				${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentPosition !== 'image' ? 'width: 100%;' : ''}
				${teamMemberImageWidthUnits.Desktop === '%' ? 'width: 100%;' : ''}
				${teamMemberImageAlignment === 'left' ? 'justify-content: start' : ''}
				${teamMemberImageAlignment === 'center' ? 'justify-content: center' : ''}
				${teamMemberImageAlignment === 'right' ? 'justify-content: end' : ''}
				${teamMemberSocialPosition !== 'left' && teamMemberSocialPosition !== 'right' && teamMemberImageAlignment === 'right' ? 'justify-content: end' : ''}
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image img {
				${teamMemberImagePosition !== undefined ? `object-position: ${teamMemberImagePosition};` : ''}
                ${teamMemberImageSize !== undefined ? `object-fit: ${teamMemberImageSize};` : ''}
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image {
				position: relative;
				z-index: 2;
				overflow: hidden;
				width: ${teamMemberImageWidth.Desktop}${teamMemberImageWidthUnits.Desktop};
				height: ${teamMemberImageHeight.Desktop}${teamMemberImageHeightUnits.Desktop};
				${teamMemberImageBorder !== undefined ? `border: ${teamMemberImageBorder};` : ''}
				${teamMemberImageBorderColor !== undefined ? `border-color: ${teamMemberImageBorderColor};` : ''}
				${teamMemberImageBorderTypeGetDesktop !== undefined ? `border-width: ${teamMemberImageBorderTypeGetDesktop};` : ''}
				${teamMemberImageBorderRadiusGetDesktop !== undefined ? `border-radius: ${teamMemberImageBorderRadiusGetDesktop};` : ''}
				${teamMemberImageMarginGetDesktop !== undefined ? `margin: ${teamMemberImageMarginGetDesktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item:hover .fb-team-member-image {
				${teamMemberImageBorderHoverColor !== undefined ? `border-color: ${teamMemberImageBorderHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}

			.fb-team-member-wrapper.${blockID} .fb-team-member-item {
				position: relative;
				overflow: hidden;
				display: flex;
				${teamMemberContentPosition === 'top' ? 'flex-direction: column-reverse;' : ''}
				${teamMemberContentPosition === 'bottom' ? 'flex-direction: column;' : ''}
				${teamMemberContentPosition === 'left' ? 'flex-direction: row-reverse;' : ''}
				${teamMemberContentPosition === 'right' ? 'flex-direction: row;' : ''}
				${teamMemberContentPosition !== 'top' && teamMemberContentPosition !== 'bottom' && teamMemberContentPosition !== 'image' && teamMemberContentAlignment === 'left' ? 'align-items: start;' : ''}
				${teamMemberContentPosition !== 'top' && teamMemberContentPosition !== 'bottom' && teamMemberContentPosition !== 'image' && teamMemberContentAlignment === 'center' ? 'align-items: center;' : ''}
				${teamMemberContentPosition !== 'top' && teamMemberContentPosition !== 'bottom' && teamMemberContentPosition !== 'image' && teamMemberContentAlignment === 'right' ? 'align-items: end;' : ''}
			}

			${teamMemberSocialType === 'image' && `
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper .fb-team-member-social-profile-wrapper {
					position: absolute;
					${teamMemberSocialPosition === 'top_left' ? 'top: 0; left: 0;' : ''}
					${teamMemberSocialPosition === 'top_center' ? 'top: 0; left: 50%; transform: translateX(-50%);' : ''}
					${teamMemberSocialPosition === 'top_right' ? 'top: 0; right: 0;' : ''}
					${teamMemberSocialPosition === 'center_left' ? 'top: 50%; transform: translateY(-50%); left: 0;' : ''}
					${teamMemberSocialPosition === 'center_center' ? 'top: 50%; left: 50%; transform: translate(-50%, -50%);' : ''}
					${teamMemberSocialPosition === 'center_right' ? 'top: 50%; transform: translateY(-50%); right: 0;' : ''}
					${teamMemberSocialPosition === 'bottom_left' ? 'bottom: 0; left: 0;' : ''}
					${teamMemberSocialPosition === 'bottom_center' ? 'bottom: 0; left: 50%; transform: translateX(-50%);' : ''}
					${teamMemberSocialPosition === 'bottom_right' ? 'bottom: 0; right: 0;' : ''}
					z-index: 5;
				}
			`}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper {
				
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper {
				${ teamMemberContentPosition === 'image' ? `
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					z-index: 5;
				` : `
					position: relative;
				` }
				height: fit-content;
				display: flex;
				${teamMemberSocialType === 'content' && teamMemberSocialPosition === 'top' ? 'flex-direction: column-reverse;' : ''}
				${teamMemberSocialType === 'content' && teamMemberSocialPosition === 'bottom' ? 'flex-direction: column;' : ''}
				${teamMemberSocialType === 'content' && teamMemberSocialPosition === 'left' ? 'flex-direction: row-reverse;' : ''}
				${teamMemberSocialType === 'content' && teamMemberSocialPosition === 'right' ? 'flex-direction: row;' : ''}
				${teamMemberContentBorder !== undefined ? `border: ${teamMemberContentBorder};` : ''}
				${teamMemberContentBorderColor !== undefined ? `border-color: ${teamMemberContentBorderColor};` : ''}
				${teamMemberContentBorderTypeGetDesktop !== undefined ? `border-width: ${teamMemberContentBorderTypeGetDesktop};` : ''}
				${teamMemberContentBorderRadiusGetDesktop !== undefined ? `border-radius: ${teamMemberContentBorderRadiusGetDesktop};` : ''}
				${teamMemberContentMarginGetDesktop !== undefined ? `margin: ${teamMemberContentMarginGetDesktop};` : ''}
				${teamMemberContentPaddingGetDesktop !== undefined ? `padding: ${teamMemberContentPaddingGetDesktop};` : ''}
				${teamMemberContentBgClassicColor !== undefined ? `background: ${teamMemberContentBgClassicColor};` : ''}
				${
                    teamMemberContentBgType === "gradient"
                      ? `background: ${
                          teamMemberContentBgCustomGradientSwitcher && teamMemberContentBgCustomGradientInputValue
                            ? teamMemberContentBgCustomGradientInputValue
                            : teamMemberContentBgGradientColor
                        };`
                      : teamMemberContentBgImageUrl !== undefined && teamMemberContentBgImageUrl !== null && teamMemberContentBgImageUrl !== ""
                      ? `
                        ${teamMemberContentBgImageUrl !== undefined ? `background-image: url(${teamMemberContentBgImageUrl});` : ''}
                        ${teamMemberContentBgImagePosition !== undefined ? `background-position: ${teamMemberContentBgImagePosition};` : ''}
                        ${teamMemberContentBgImageAttachment !== undefined ? `background-attachment: ${teamMemberContentBgImageAttachment};` : ''}
                        ${teamMemberContentBgImageRepeat !== undefined ? `background-repeat: ${teamMemberContentBgImageRepeat};` : ''}
                        ${teamMemberContentBgImageSize !== undefined ? `background-size: ${teamMemberContentBgImageSize};` : ''}
                      `
                      : `background: ${teamMemberContentBgClassicColor};`
                }
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item:hover .fb-team-member-content-wrapper {
				${
					teamMemberContentBgHoverType === "gradient"
					  ? `background: ${
						  teamMemberContentBgHoverCustomGradientSwitcher && teamMemberContentBgHoverCustomGradientInputValue
							? teamMemberContentBgHoverCustomGradientInputValue
							: teamMemberContentBgHoverGradientColor
						};`
					  : teamMemberContentBgHoverImageUrl !== undefined && teamMemberContentBgHoverImageUrl !== null && teamMemberContentBgHoverImageUrl !== ""
					  ? `
						${teamMemberContentBgHoverImageUrl !== undefined ? `background-image: url(${teamMemberContentBgHoverImageUrl});` : ''}
						${teamMemberContentBgHoverImagePosition !== undefined ? `background-position: ${teamMemberContentBgHoverImagePosition};` : ''}
						${teamMemberContentBgHoverImageAttachment !== undefined ? `background-attachment: ${teamMemberContentBgHoverImageAttachment};` : ''}
						${teamMemberContentBgHoverImageRepeat !== undefined ? `background-repeat: ${teamMemberContentBgHoverImageRepeat};` : ''}
						${teamMemberContentBgHoverImageSize !== undefined ? `background-size: ${teamMemberContentBgHoverImageSize};` : ''}
					  `
					  : `background: ${teamMemberContentBgHoverClassicColor};`
				}
				${teamMemberContentBorderHoverColor !== undefined ? `border-color: ${teamMemberContentBorderHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}

			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper .fb-team-member-content {
				${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment === 'left' ? 'text-align: left;' : ''}
				${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment === 'center' ? 'text-align: center;' : ''}
				${teamMemberContentPosition !== 'left' && teamMemberContentPosition !== 'right' && teamMemberContentAlignment === 'right' ? 'text-align: right;' : ''}
			}
			
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper .fb-team-member-image-overlay {
				${teamMemberImageBGColor !== undefined ? `background: ${teamMemberImageBGColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item:hover .fb-team-member-image-wrapper .fb-team-member-image-overlay {
				${teamMemberImageBGHoverColor !== undefined ? `background: ${teamMemberImageBGHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name {
				font-family: ${teamMemberNameFontFamily !== 'default' ? teamMemberNameFontFamily : 'inherit'};
				${teamMemberNameFontSize?.Desktop ? `font-size: ${teamMemberNameFontSize.Desktop}${teamMemberNameFontSizeUnits.Desktop};` : ''}
				${teamMemberNameFontWeight !== undefined ? `font-weight: ${teamMemberNameFontWeight};` : ''}
				${teamMemberNameFontStyle !== undefined ? `font-style: ${teamMemberNameFontStyle};` : ''}
				${teamMemberNameTextTransform !== undefined ? `text-transform: ${teamMemberNameTextTransform};` : ''}
				${teamMemberNameTextDecoration !== undefined ? `text-decoration: ${teamMemberNameTextDecoration};` : ''}
				${teamMemberNameLetterSpacing?.Desktop !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacing.Desktop}${teamMemberNameLetterSpacingUnits.Desktop};` : ''}
				${teamMemberNameLineHeight?.Desktop !== undefined ? `line-height: ${teamMemberNameLineHeight.Desktop}${teamMemberNameLineHeightUnits.Desktop};` : ''}
				${teamMemberNameColor !== undefined ? `color: ${teamMemberNameColor};` : ''}
				${teamMemberNameMarginGetDesktop !== undefined ? `margin: ${teamMemberNameMarginGetDesktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name:hover {
				${teamMemberNameHoverColor !== undefined ? `color: ${teamMemberNameHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation {
				${teamMemberDesignationFontFamily !== 'default' ? `font-family: ${teamMemberDesignationFontFamily}` : ''};
				${teamMemberDesignationFontSize?.Desktop ? `font-size: ${teamMemberDesignationFontSize.Desktop}${teamMemberDesignationFontSizeUnits.Desktop};` : ''}
				${teamMemberDesignationFontWeight !== undefined ? `font-weight: ${teamMemberDesignationFontWeight};` : ''}
				${teamMemberDesignationFontStyle !== undefined ? `font-style: ${teamMemberDesignationFontStyle};` : ''}
				${teamMemberDesignationTextTransform !== undefined ? `text-transform: ${teamMemberDesignationTextTransform};` : ''}
				${teamMemberDesignationTextDecoration !== undefined ? `text-decoration: ${teamMemberDesignationTextDecoration};` : ''}
				${teamMemberDesignationLetterSpacing?.Desktop !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacing.Desktop}${teamMemberDesignationLetterSpacingUnits.Desktop};` : ''}
				${teamMemberDesignationLineHeight?.Desktop !== undefined ? `line-height: ${teamMemberDesignationLineHeight.Desktop}${teamMemberDesignationLineHeightUnits.Desktop};` : ''}
				${teamMemberDesignationColor !== undefined ? `color: ${teamMemberDesignationColor};` : ''}
				${teamMemberDesignationMarginGetDesktop !== undefined ? `margin: ${teamMemberDesignationMarginGetDesktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc {
				${teamMemberDescFontFamily !== 'default' ? `font-family: ${teamMemberDescFontFamily}` : ''};
				${teamMemberDescFontSize?.Desktop ? `font-size: ${teamMemberDescFontSize.Desktop}${teamMemberDescFontSizeUnits.Desktop};` : ''}
				${teamMemberDescFontWeight !== undefined ? `font-weight: ${teamMemberDescFontWeight};` : ''}
				${teamMemberDescFontStyle !== undefined ? `font-style: ${teamMemberDescFontStyle};` : ''}
				${teamMemberDescTextTransform !== undefined ? `text-transform: ${teamMemberDescTextTransform};` : ''}
				${teamMemberDescTextDecoration !== undefined ? `text-decoration: ${teamMemberDescTextDecoration};` : ''}
				${teamMemberDescLetterSpacing?.Desktop !== undefined ? `letter-spacing: ${teamMemberDescLetterSpacing.Desktop}${teamMemberDescLetterSpacingUnits.Desktop};` : ''}
				${teamMemberDescLineHeight?.Desktop !== undefined ? `line-height: ${teamMemberDescLineHeight.Desktop}${teamMemberDescLineHeightUnits.Desktop};` : ''}
				${teamMemberDescColor !== undefined ? `color: ${teamMemberDescColor};` : ''}
				${teamMemberDescMarginGetDesktop !== undefined ? `margin: ${teamMemberDescMarginGetDesktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
				
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-separator {
				display: flex;
				width: 100%;
				${socialProfileSeparatorAlignment === 'left' ? 'justify-content: start;' : ''}
				${socialProfileSeparatorAlignment === 'center' ? 'justify-content: center;' : ''}
				${socialProfileSeparatorAlignment === 'right' ? 'justify-content: end;' : ''}
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-separator hr {
				border: none;
				border-top-style: solid;
				${socialProfileSeparatorHeight.Desktop !== undefined ? `border-top-width: ${socialProfileSeparatorHeight.Desktop}${socialProfileSeparatorHeightUnits.Desktop};` : ''}
				${socialProfileSeparatorColor !== undefined ? `border-top-color: ${socialProfileSeparatorColor};` : ''}
				${socialProfileSeparatorWidth.Desktop !== undefined ? `width: ${socialProfileSeparatorWidth.Desktop}${socialProfileSeparatorWidthUnits.Desktop};` : ''}
				${socialProfileSeparatorMarginDesktopWidth !== undefined ? `margin: ${socialProfileSeparatorMarginDesktopWidth};` : ''}
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item:hover .fb-team-member-social-profile-separator {
				${socialProfileSeparatorHoverColor !== undefined ? `border-top-color: ${socialProfileSeparatorHoverColor};` : ''}
			}

			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper {
				display: flex;
				align-items: center;
				${teamMemberSocialIconAnimationType === 'left' ? 'flex-direction: row-reverse;' : ''}
				${teamMemberSocialIconAnimationType === 'top' ? 'flex-direction: column-reverse;' : ''}
				${teamMemberSocialIconAnimationType === 'bottom' ? 'flex-direction: column;' : ''}
				${teamMemberIconsAlignment === 'left' ? 'justify-content: start;' : ''}
				${teamMemberIconsAlignment === 'center' ? 'justify-content: center;' : ''}
				${teamMemberIconsAlignment === 'right' ? 'justify-content: end;' : ''}
				${teamMemberIconsDesktopMarginWidth !== undefined ? `margin: ${teamMemberIconsDesktopMarginWidth};` : ''}
				${teamMemberSocialProfileBorder !== undefined ? `border-style: ${teamMemberSocialProfileBorder};` : ''}
				${teamMemberSocialProfileDesktopBorder !== undefined ? `border-width: ${teamMemberSocialProfileDesktopBorder};` : ''}
				${teamMemberSocialProfileBorderColor !== undefined ? `border-color: ${teamMemberSocialProfileBorderColor};` : ''}
				overflow: hidden;
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item:hover .fb-team-member-social-profile-wrapper {
				${teamMemberSocialProfileBorderHoverColor !== undefined ? `border-color: ${teamMemberSocialProfileBorderHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}

			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
				display: flex;
				align-items: center;
				${teamMemberIconsSpacing.Desktop ? `gap: ${teamMemberIconsSpacing.Desktop}${teamMemberIconsSpacingUnits.Desktop};` : ''}
				${teamMemberSocialIconAnimationType === 'top' ? 'flex-direction: column;' : ''}
				${teamMemberSocialIconAnimationType === 'bottom' ? 'flex-direction: column;' : ''}
				${teamMemberSocialIconAnimationType !== 'default' ? 'visibility: hidden; opacity: 0;' : ''}
				${teamMemberSocialIconAnimationType === 'top' ? 'transform: translateY(100px);' : ''}
				${teamMemberSocialIconAnimationType === 'right' ? 'transform: translateX(-100px);' : ''}
				${teamMemberSocialIconAnimationType === 'bottom' ? 'transform: translateY(-100px);' : ''}
				${teamMemberSocialIconAnimationType === 'left' ? 'transform: translateX(100px);' : ''}
				transition: all 0.5s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item:hover .fb-team-member-social-profile {
				${teamMemberSocialIconAnimationType !== 'default' ? 'visibility: visible; opacity: 1; transform: translate(0);' : ''}
				transition: all 0.5s ease-in-out;
			}
			
			${teamMemberIconStyleSwitcher === false ? `
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
					${teamMemberIconsDesktopPaddingWidth !== undefined ? `padding: ${teamMemberIconsDesktopPaddingWidth};` : ''}
					${teamMemberIconsBGColor !== undefined ? `background-color: ${teamMemberIconsBGColor};` : ''}
					${teamMemberIconsBorder !== undefined ? `border-style: ${teamMemberIconsBorder};` : ''}
					${teamMemberIconsDesktopBorder !== undefined ? `border-width: ${teamMemberIconsDesktopBorder};` : ''}
					${teamMemberIconsBorderColor !== undefined ? `border-color: ${teamMemberIconsBorderColor};` : ''}
					${teamMemberIconsDesktopBorderRadius !== undefined ? `border-radius: ${teamMemberIconsDesktopBorderRadius};` : ''}
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item:hover .fb-team-member-social-profile {
					${teamMemberIconsBGHoverColor !== undefined ? `background-color: ${teamMemberIconsBGHoverColor};` : ''}
					${teamMemberIconsBorderHoverColor !== undefined ? `border-color: ${teamMemberIconsBorderHoverColor};` : ''}
					transition: all 0.3s ease-in-out;
				}

				@media only screen and (max-width: 1024px) {
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
						${teamMemberIconsTabPaddingWidth !== undefined ? `padding: ${teamMemberIconsTabPaddingWidth};` : ''}
						${teamMemberIconsTabBorder !== undefined ? `border-width: ${teamMemberIconsTabBorder};` : ''}
						${teamMemberIconsTabBorderRadius !== undefined ? `border-radius: ${teamMemberIconsTabBorderRadius};` : ''}
					}
				}
				@media only screen and (max-width: 767px) {
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
						${teamMemberIconsMobilePaddingWidth !== undefined ? `padding: ${teamMemberIconsMobilePaddingWidth};` : ''}
						${teamMemberIconsMobileBorder !== undefined ? `border-width: ${teamMemberIconsMobileBorder};` : ''}
						${teamMemberIconsMobileBorderRadius !== undefined ? `border-radius: ${teamMemberIconsMobileBorderRadius};` : ''}
					}
				}
			` : ''}
			${teamMemberIconStyleSwitcher === true ? `
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
					${teamMemberIconsDesktopPaddingWidth !== undefined ? `padding: ${teamMemberIconsDesktopPaddingWidth};` : ''}
					${teamMemberIconsBGColor !== undefined ? `background-color: ${teamMemberIconsBGColor};` : ''}
					${teamMemberIconsBorder !== undefined ? `border-style: ${teamMemberIconsBorder};` : ''}
					${teamMemberIconsDesktopBorder !== undefined ? `border-width: ${teamMemberIconsDesktopBorder};` : ''}
					${teamMemberIconsBorderColor !== undefined ? `border-color: ${teamMemberIconsBorderColor};` : ''}
					${teamMemberIconsDesktopBorderRadius !== undefined ? `border-radius: ${teamMemberIconsDesktopBorderRadius};` : ''}
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon:hover {
					${teamMemberIconsBGHoverColor !== undefined ? `background-color: ${teamMemberIconsBGHoverColor};` : ''}
					${teamMemberIconsBorderHoverColor !== undefined ? `border-color: ${teamMemberIconsBorderHoverColor};` : ''}
					transition: all 0.3s ease-in-out;
				}

				@media only screen and (max-width: 1024px) {
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
						${teamMemberIconsTabPaddingWidth !== undefined ? `padding: ${teamMemberIconsTabPaddingWidth};` : ''}
						${teamMemberIconsTabBorder !== undefined ? `border-width: ${teamMemberIconsTabBorder};` : ''}
						${teamMemberIconsTabBorderRadius !== undefined ? `border-radius: ${teamMemberIconsTabBorderRadius};` : ''}
					}
				}
				@media only screen and (max-width: 767px) {
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
						${teamMemberIconsMobilePaddingWidth !== undefined ? `padding: ${teamMemberIconsMobilePaddingWidth};` : ''}
						${teamMemberIconsMobileBorder !== undefined ? `border-width: ${teamMemberIconsMobileBorder};` : ''}
						${teamMemberIconsMobileBorderRadius !== undefined ? `border-radius: ${teamMemberIconsMobileBorderRadius};` : ''}
					}
				}
			` : ''}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon svg {
				${teamMemberIconsSize.Desktop ? `width: ${teamMemberIconsSize.Desktop}${teamMemberIconsSizeUnits.Desktop};` : ''}
				${teamMemberIconsSize.Desktop ? `height: ${teamMemberIconsSize.Desktop}${teamMemberIconsSizeUnits.Desktop};` : ''}
				${teamMemberIconsColor !== undefined ? `fill: ${teamMemberIconsColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon:hover svg {
				${teamMemberIconsHoverColor !== undefined ? `fill: ${teamMemberIconsHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}


			${socialIconBtnSwitcher === true && `
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
					display: flex;
					justify-content: center;
					align-items: center;
					${socialIconBtnDesktopMarginWidth !== undefined ? `margin: ${socialIconBtnDesktopMarginWidth};` : ''}
					${socialIconBtnDesktopPaddingWidth !== undefined ? `padding: ${socialIconBtnDesktopPaddingWidth};` : ''}
					${socialIconBtnBGColor !== undefined ? `background-color: ${socialIconBtnBGColor};` : ''}
					${socialIconBtnBorder !== undefined ? `border-style: ${socialIconBtnBorder};` : ''}
					${socialIconBtnDesktopBorder !== undefined ? `border-width: ${socialIconBtnDesktopBorder};` : ''}
					${socialIconBtnBorderColor !== undefined ? `border-color: ${socialIconBtnBorderColor};` : ''}
					${socialIconBtnDesktopBorderRadius !== undefined ? `border-radius: ${socialIconBtnDesktopBorderRadius};` : ''}
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item:hover .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
					${socialIconBtnBGHoverColor !== undefined ? `background-color: ${socialIconBtnBGHoverColor};` : ''}
					${socialIconBtnBorderHoverColor !== undefined ? `border-color: ${socialIconBtnBorderHoverColor};` : ''}
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn svg {
					${socialIconBtnColor !== undefined ? `fill: ${socialIconBtnColor};` : ''}
					${socialIconBtnIconSize?.Desktop !== undefined ? `width: ${socialIconBtnIconSize.Desktop}${socialIconBtnIconSizeUnits.Desktop};` : ''}
					${socialIconBtnIconSize?.Desktop !== undefined ? `height: ${socialIconBtnIconSize.Desktop}${socialIconBtnIconSizeUnits.Desktop};` : ''}
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item:hover .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
					${socialIconBtnHoverColor !== undefined ? `fill: ${socialIconBtnHoverColor};` : ''}
					transition: all 0.3s ease-in-out;
				}
				
				@media only screen and (max-width: 1024px) {
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
						${socialIconBtnTabMarginWidth !== undefined ? `margin: ${socialIconBtnTabMarginWidth};` : ''}
						${socialIconBtnTabPaddingWidth !== undefined ? `padding: ${socialIconBtnTabPaddingWidth};` : ''}
						${socialIconBtnTabBorder !== undefined ? `border-width: ${socialIconBtnTabBorder};` : ''}
						${socialIconBtnTabBorderRadius !== undefined ? `border-radius: ${socialIconBtnTabBorderRadius};` : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn svg {
						${socialIconBtnIconSize?.Tablet !== undefined ? `width: ${socialIconBtnIconSize.Tablet}${socialIconBtnIconSizeUnits.Tablet};` : ''}
						${socialIconBtnIconSize?.Tablet !== undefined ? `height: ${socialIconBtnIconSize.Tablet}${socialIconBtnIconSizeUnits.Tablet};` : ''}
					}
				}
				@media only screen and (max-width: 767px) {
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
						${socialIconBtnMobileMarginWidth !== undefined ? `margin: ${socialIconBtnMobileMarginWidth};` : ''}
						${socialIconBtnMobilePaddingWidth !== undefined ? `padding: ${socialIconBtnMobilePaddingWidth};` : ''}
						${socialIconBtnMobileBorder !== undefined ? `border-width: ${socialIconBtnMobileBorder};` : ''}
						${socialIconBtnMobileBorderRadius !== undefined ? `border-radius: ${socialIconBtnMobileBorderRadius};` : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn svg {
						${socialIconBtnIconSize?.Mobile !== undefined ? `width: ${socialIconBtnIconSize.Mobile}${socialIconBtnIconSizeUnits.Mobile};` : ''}
						${socialIconBtnIconSize?.Mobile !== undefined ? `height: ${socialIconBtnIconSize.Mobile}${socialIconBtnIconSizeUnits.Mobile};` : ''}
					}
				}
			`}


			@media only screen and (max-width: 1024px) {
				.fb-team-member-main-wrapper.${blockID} .fb-team-member-wrapper {
					${teamMemberPaddingTabletWidth !== undefined ? `padding: ${teamMemberPaddingTabletWidth};` : ''}
					${teamMemberMarginTabletWidth !== undefined ? `margin: ${teamMemberMarginTabletWidth};` : ''}
					${teamMemberBorderTabletWidth !== undefined ? `border-width: ${teamMemberBorderTabletWidth};` : ''}
					${teamMemberBorderRadiusTabletWidth !== undefined ? `border-radius: ${teamMemberBorderRadiusTabletWidth};` : ''}
					${teamMemberZIndex.Tablet !== undefined ? `z-index: ${teamMemberZIndex.Tablet};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper {
					${teamMemberImageWidthUnits.Tablet === '%' ? 'width: 100%;' : ''}
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image {
					width: ${teamMemberImageWidth.Tablet}${teamMemberImageWidthUnits.Tablet};
					height: ${teamMemberImageHeight.Tablet}${teamMemberImageHeightUnits.Tablet};
					${teamMemberImageBorderTypeGetTab !== undefined ? `border-width: ${teamMemberImageBorderTypeGetTab};` : ''}
					${teamMemberImageBorderRadiusGetTab !== undefined ? `border-radius: ${teamMemberImageBorderRadiusGetTab};` : ''}
					${teamMemberImageMarginGetTab !== undefined ? `margin: ${teamMemberImageMarginGetTab};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper {
					${teamMemberContentBorderTypeGetTab !== undefined ? `border-width: ${teamMemberContentBorderTypeGetTab};` : ''}
					${teamMemberContentBorderRadiusGetTab !== undefined ? `border-radius: ${teamMemberContentBorderRadiusGetTab};` : ''}
					${teamMemberContentMarginGetTab !== undefined ? `margin: ${teamMemberContentMarginGetTab};` : ''}
					${teamMemberContentPaddingGetTab !== undefined ? `padding: ${teamMemberContentPaddingGetTab};` : ''}
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name {
					${teamMemberNameFontSize?.Tablet ? `font-size: ${teamMemberNameFontSize.Tablet}${teamMemberNameFontSizeUnits.Tablet};` : ''}
					${teamMemberNameLetterSpacing?.Tablet !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacing.Tablet}${teamMemberNameLetterSpacingUnits.Tablet};` : ''}
					${teamMemberNameLineHeight?.Tablet !== undefined ? `line-height: ${teamMemberNameLineHeight.Tablet}${teamMemberNameLineHeightUnits.Tablet};` : ''}
					${teamMemberNameMarginGetTab !== undefined ? `margin: ${teamMemberNameMarginGetTab};` : ''}
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation {
					${teamMemberDesignationFontSize?.Tablet ? `font-size: ${teamMemberDesignationFontSize.Tablet}${teamMemberDesignationFontSizeUnits.Tablet};` : ''}
					${teamMemberDesignationLetterSpacing?.Tablet !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacing.Tablet}${teamMemberDesignationLetterSpacingUnits.Tablet};` : ''}
					${teamMemberDesignationLineHeight?.Tablet !== undefined ? `line-height: ${teamMemberDesignationLineHeight.Tablet}${teamMemberDesignationLineHeightUnits.Tablet};` : ''}
					${teamMemberDesignationMarginGetTab !== undefined ? `margin: ${teamMemberDesignationMarginGetTab};` : ''}
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc {
					${teamMemberDescFontSize?.Tablet ? `font-size: ${teamMemberDescFontSize.Tablet}${teamMemberDescFontSizeUnits.Tablet};` : ''}
					${teamMemberDescLetterSpacing?.Tablet !== undefined ? `letter-spacing: ${teamMemberDescLetterSpacing.Tablet}${teamMemberDescLetterSpacingUnits.Tablet};` : ''}
					${teamMemberDescLineHeight?.Tablet !== undefined ? `line-height: ${teamMemberDescLineHeight.Tablet}${teamMemberDescLineHeightUnits.Tablet};` : ''}
					${teamMemberDescMarginGetTab !== undefined ? `margin: ${teamMemberDescMarginGetTab};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-separator hr {
					${socialProfileSeparatorHeight.Tablet !== undefined ? `border-top-width: ${socialProfileSeparatorHeight.Tablet}${socialProfileSeparatorHeightUnits.Tablet};` : ''}
					${socialProfileSeparatorWidth.Tablet !== undefined ? `width: ${socialProfileSeparatorWidth.Tablet}${socialProfileSeparatorWidthUnits.Tablet};` : ''}
					${socialProfileSeparatorMarginTabWidth !== undefined ? `margin: ${socialProfileSeparatorMarginTabWidth};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper {
					${teamMemberIconsTabMarginWidth !== undefined ? `margin: ${teamMemberIconsTabMarginWidth};` : ''}
					${teamMemberSocialProfileTabBorder !== undefined ? `border-width: ${teamMemberSocialProfileTabBorder};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
					${teamMemberIconsSpacing.Tablet ? `gap: ${teamMemberIconsSpacing.Tablet}${teamMemberIconsSpacingUnits.Tablet};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon svg {
					${teamMemberIconsSize.Tablet ? `width: ${teamMemberIconsSize.Tablet}${teamMemberIconsSizeUnits.Tablet};` : ''}
					${teamMemberIconsSize.Tablet ? `height: ${teamMemberIconsSize.Tablet}${teamMemberIconsSizeUnits.Tablet};` : ''}
				}
			}

				@media only screen and (max-width: 767px) {
					.fb-team-member-main-wrapper.${blockID} .fb-team-member-wrapper {
						${teamMemberPaddingMobileWidth !== undefined ? `padding: ${teamMemberPaddingMobileWidth};` : ''}
						${teamMemberMarginMobileWidth !== undefined ? `margin: ${teamMemberMarginMobileWidth};` : ''}
						${teamMemberBorderMobileWidth !== undefined ? `border-width: ${teamMemberBorderMobileWidth};` : ''}
						${teamMemberBorderRadiusMobileWidth !== undefined ? `border-radius: ${teamMemberBorderRadiusMobileWidth};` : ''}
						${teamMemberZIndex.Mobile !== undefined ? `z-index: ${teamMemberZIndex.Mobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper {
						${teamMemberImageWidthUnits.Mobile === '%' ? 'width: 100%;' : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image {
						width: ${teamMemberImageWidth.Mobile}${teamMemberImageWidthUnits.Mobile};
						height: ${teamMemberImageHeight.Mobile}${teamMemberImageHeightUnits.Mobile};
						${teamMemberImageBorderTypeGetMobile !== undefined ? `border-width: ${teamMemberImageBorderTypeGetMobile};` : ''}
						${teamMemberImageBorderRadiusGetMobile !== undefined ? `border-radius: ${teamMemberImageBorderRadiusGetMobile};` : ''}
						${teamMemberImageMarginGetMobile !== undefined ? `margin: ${teamMemberImageMarginGetMobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper {
						${teamMemberContentBorderTypeGetMobile !== undefined ? `border-width: ${teamMemberContentBorderTypeGetMobile};` : ''}
						${teamMemberContentBorderRadiusGetMobile !== undefined ? `border-radius: ${teamMemberContentBorderRadiusGetMobile};` : ''}
						${teamMemberContentMarginGetMobile !== undefined ? `margin: ${teamMemberContentMarginGetMobile};` : ''}
						${teamMemberContentPaddingGetMobile !== undefined ? `padding: ${teamMemberContentPaddingGetMobile};` : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name {
						${teamMemberNameFontSize?.Mobile ? `font-size: ${teamMemberNameFontSize.Mobile}${teamMemberNameFontSizeUnits.Mobile};` : ''}
						${teamMemberNameLetterSpacing?.Mobile !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacing.Mobile}${teamMemberNameLetterSpacingUnits.Mobile};` : ''}
						${teamMemberNameLineHeight?.Mobile !== undefined ? `line-height: ${teamMemberNameLineHeight.Mobile}${teamMemberNameLineHeightUnits.Mobile};` : ''}
						${teamMemberNameMarginGetMobile !== undefined ? `margin: ${teamMemberNameMarginGetMobile};` : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation {
						${teamMemberDesignationFontSize?.Mobile ? `font-size: ${teamMemberDesignationFontSize.Mobile}${teamMemberDesignationFontSizeUnits.Mobile};` : ''}
						${teamMemberDesignationLetterSpacing?.Mobile !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacing.Mobile}${teamMemberDesignationLetterSpacingUnits.Mobile};` : ''}
						${teamMemberDesignationLineHeight?.Mobile !== undefined ? `line-height: ${teamMemberDesignationLineHeight.Mobile}${teamMemberDesignationLineHeightUnits.Mobile};` : ''}
						${teamMemberDesignationMarginGetMobile !== undefined ? `margin: ${teamMemberDesignationMarginGetMobile};` : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc {
						${teamMemberDescFontSize?.Mobile ? `font-size: ${teamMemberDescFontSize.Mobile}${teamMemberDescFontSizeUnits.Mobile};` : ''}
						${teamMemberDescLetterSpacing?.Mobile !== undefined ? `letter-spacing: ${teamMemberDescLetterSpacing.Mobile}${teamMemberDescLetterSpacingUnits.Mobile};` : ''}
						${teamMemberDescLineHeight?.Mobile !== undefined ? `line-height: ${teamMemberDescLineHeight.Mobile}${teamMemberDescLineHeightUnits.Mobile};` : ''}
						${teamMemberDescMarginGetMobile !== undefined ? `margin: ${teamMemberDescMarginGetMobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-separator hr {
						${socialProfileSeparatorHeight.Mobile !== undefined ? `border-top-width: ${socialProfileSeparatorHeight.Mobile}${socialProfileSeparatorHeightUnits.Mobile};` : ''}
						${socialProfileSeparatorWidth.Mobile !== undefined ? `width: ${socialProfileSeparatorWidth.Mobile}${socialProfileSeparatorWidthUnits.Mobile};` : ''}
						${socialProfileSeparatorMarginMobileWidth !== undefined ? `margin: ${socialProfileSeparatorMarginMobileWidth};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper {
						${teamMemberIconsMobileMarginWidth !== undefined ? `margin: ${teamMemberIconsMobileMarginWidth};` : ''}
						${teamMemberSocialProfileMobileBorder !== undefined ? `border-width: ${teamMemberSocialProfileMobileBorder};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
						${teamMemberIconsSpacing.Mobile ? `gap: ${teamMemberIconsSpacing.Mobile}${teamMemberIconsSpacingUnits.Mobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon svg {
						${teamMemberIconsSize.Mobile ? `width: ${teamMemberIconsSize.Mobile}${teamMemberIconsSizeUnits.Mobile};` : ''}
						${teamMemberIconsSize.Mobile ? `height: ${teamMemberIconsSize.Mobile}${teamMemberIconsSizeUnits.Mobile};` : ''}
					}
				}
		`,
		[
			blockID,
			deviceType,

			// Photo
			teamMemberImageAlignment,
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

			// Team Image Border Type
			teamMemberImageBorder,
			teamMemberImageBorderColor,
			teamMemberImageBorderHoverColor,
			teamMemberImageOverlaySwitcher,
			teamMemberImageBGColor,
			teamMemberImageBGHoverColor,

			teamMemberImageBorderUnits,
			teamMemberImageBorderDesktop,
			teamMemberImageBorderTab,
			teamMemberImageBorderMobile,

			// Team Image Border Radius
			teamMemberImageBorderRadiusUnits,
			teamMemberImageBorderRadiusDesktop,
			teamMemberImageBorderRadiusTab,
			teamMemberImageBorderRadiusMobile,

			// Content
			teamMemberContentPosition,

			// Team Name
			teamMemberName,
			teamMemberNameHeadingTag,

			teamMemberNameColorSwitcher,
			teamMemberNameColor,
			teamMemberNameHoverColor,

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
			teamMemberDesignationColor,
			teamMemberDesignationLoadGoogleFonts,
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

			// Team Desc Typography
			teamMemberDesc,
			teamMemberDescColor,
			teamMemberDescLoadGoogleFonts,
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

			// Team Content
			teamMemberContentAlignment,

			// Team Content Padding
			teamMemberContentPaddingUnits,
			teamMemberContentPaddingDesktop,
			teamMemberContentPaddingTab,
			teamMemberContentPaddingMobile,

			// Team Content Margin
			teamMemberContentMarginUnits,
			teamMemberContentMarginDesktop,
			teamMemberContentMarginTab,
			teamMemberContentMarginMobile,

			// Team Content Border
			teamMemberContentBorder,
			teamMemberContentBorderColorSwitcher,
			teamMemberContentBorderColor,
			teamMemberContentBorderHoverColor,
			teamMemberContentBorderUnits,
			teamMemberContentBorderDesktop,
			teamMemberContentBorderTab,
			teamMemberContentBorderMobile,

			// Team Content Border Radius
			teamMemberContentBorderRadiusUnits,
			teamMemberContentBorderRadiusDesktop,
			teamMemberContentBorderRadiusTab,
			teamMemberContentBorderRadiusMobile,

			// Social Icons
			teamMemberIconsAlignment,
			teamMemberIconStyleSwitcher,
			teamMemberIconsSize,
			teamMemberIconsSizeUnits,
			teamMemberIconsSpacing,
			teamMemberIconsSpacingUnits,
			teamMemberIconsColor,
			teamMemberIconsHoverColor,
			teamMemberIconsBGColor,
			teamMemberIconsBGHoverColor,
			teamMemberIconsBorder,
			teamMemberIconsBorderColor,
			teamMemberIconsBorderHoverColor,
			teamMemberSocialProfileBorder,
			teamMemberSocialProfileBorderColor,
			teamMemberSocialProfileBorderHoverColor,
			teamMemberIconsPaddingUnits,
			teamMemberIconsDesktopPadding,
			teamMemberIconsTabPadding,
			teamMemberIconsMobilePadding,
			teamMemberIconsMarginUnits,
			teamMemberIconsDesktopMargin,
			teamMemberIconsTabMargin,
			teamMemberIconsMobileMargin,
			teamMemberIconsBorderUnits,
			teamMemberIconsDesktopBorderWidth,
			teamMemberIconsTabBorderWidth,
			teamMemberIconsMobileBorderWidth,
			teamMemberIconsBorderRadiusUnits,
			teamMemberIconsDesktopBorderRadiusWidth,
			teamMemberIconsTabBorderRadiusWidth,
			teamMemberIconsMobileBorderRadiusWidth,
			teamMemberSocialProfileBorderUnits,
			teamMemberSocialProfileDesktopBorderWidth,
			teamMemberSocialProfileTabBorderWidth,
			teamMemberSocialProfileMobileBorderWidth,

			// Team Member
			teamMemberZIndex,
			teamMemberPaddingUnits,
			teamMemberDesktopPadding,
			teamMemberTabPadding,
			teamMemberMobilePadding,
			teamMemberMarginUnits,
			teamMemberDesktopMargin,
			teamMemberTabMargin,
			teamMemberMobileMargin,
			teamMemberBorder,
			teamMemberBorderColor,
			teamMemberBorderHoverColor,
			teamMemberBorderUnits,
			teamMemberDesktopBorderWidth,
			teamMemberTabBorderWidth,
			teamMemberMobileBorderWidth,
			teamMemberBorderRadiusUnits,
			teamMemberDesktopBorderRadiusWidth,
			teamMemberTabBorderRadiusWidth,
			teamMemberMobileBorderRadiusWidth,
			teamMemberDesktopSwitcher,
			teamMemberTabletSwitcher,
			teamMemberMobileSwitcher,

			// Social Profile
			teamMemberSocialItems,
			teamMemberSocialType,
			teamMemberSocialPosition,
			socialIconBtnSwitcher,
			teamMemberSocialIconAnimationType,

			// Social Icon Wrapper Btn
			socialIconBtnIconSize,
			socialIconBtnIconSizeUnits,
			socialIconBtnColor,
			socialIconBtnHoverColor,
			socialIconBtnBGColor,
			socialIconBtnBGHoverColor,
			socialIconBtnBorder,
			socialIconBtnBorderColor,
			socialIconBtnBorderHoverColor,
			socialIconBtnPaddingUnits,
			socialIconBtnDesktopPadding,
			socialIconBtnTabPadding,
			socialIconBtnMobilePadding,
			socialIconBtnMarginUnits,
			socialIconBtnDesktopMargin,
			socialIconBtnTabMargin,
			socialIconBtnMobileMargin,
			socialIconBtnBorderUnits,
			socialIconBtnDesktopBorderWidth,
			socialIconBtnTabBorderWidth,
			socialIconBtnMobileBorderWidth,
			socialIconBtnBorderRadiusUnits,
			socialIconBtnDesktopBorderRadiusWidth,
			socialIconBtnTabBorderRadiusWidth,
			socialIconBtnMobileBorderRadiusWidth,

			// Advance Backgorund
			teamMemberBgClassicColor,
			teamMemberBgGradientColor,
			teamMemberBgCustomGradientSwitcher,
			teamMemberBgCustomGradientInputValue,
			teamMemberBgImageUrl,
			teamMemberBgImagePosition,
			teamMemberBgImageAttachment,
			teamMemberBgImageRepeat,
			teamMemberBgImageSize,
			teamMemberBgHoverClassicColor,
			teamMemberBgHoverGradientColor,
			teamMemberBgHoverCustomGradientSwitcher,
			teamMemberBgHoverCustomGradientInputValue,
			teamMemberBgHoverImageUrl,
			teamMemberBgHoverImagePosition,
			teamMemberBgHoverImageAttachment,
			teamMemberBgHoverImageRepeat,
			teamMemberBgHoverImageSize,

			// Content Backgorund
			teamMemberContentBgClassicColor,
			teamMemberContentBgGradientColor,
			teamMemberContentBgCustomGradientSwitcher,
			teamMemberContentBgCustomGradientInputValue,
			teamMemberContentBgImageUrl,
			teamMemberContentBgImagePosition,
			teamMemberContentBgImageAttachment,
			teamMemberContentBgImageRepeat,
			teamMemberContentBgImageSize,
			teamMemberContentBgHoverClassicColor,
			teamMemberContentBgHoverGradientColor,
			teamMemberContentBgHoverCustomGradientSwitcher,
			teamMemberContentBgHoverCustomGradientInputValue,
			teamMemberContentBgHoverImageUrl,
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
		]
	);
	
	useEffect(() => {
		setAttributes({
			blockStyle: fbTeamMemberStyle.replace(/\s+/g, " ").trim(),
		});
	}, [fbTeamMemberStyle]);

	const editorStyle = fbTeamMemberStyle.replace(/\s+/g, " ").trim();
	

	return (
		<>
			<style>
				{
					`${editorStyle}`
				}
			</style>
			
			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: "General",
								className: "fb-tab general",
							},
							{
								name:
									"styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
										<PanelBody title={__("Member Photo", "frontis-blocks")} initialOpen={true}>
											<FB_ImageControl
                                                globalBackgroundImageUrl={teamMemberImageUrl}
                                                setGlobalBackgroundImageUrl={(value) => setAttributes({ teamMemberImageUrl: value })}
                                                globalBackgroundImageAlt={teamMemberImageAlt}
                                                setGlobalBackgroundImageAlt={(value) => setAttributes({ teamMemberImageAlt: value })}
                                                globalBackgroundImageID={teamMemberImageID}
                                                setGlobalBackgroundImageID={(value) => setAttributes({ teamMemberImageID: value })}
                                                globalBackgroundImagePosition={teamMemberImagePosition}
                                                setGlobalBackgroundImagePosition={(value) => setAttributes({ teamMemberImagePosition: value })}
                                                globalBackgroundImageAttachment={teamMemberImageAttachment} 
                                                setGlobalBackgroundImageAttachment={(value) => setAttributes({ teamMemberImageAttachment: value })}
                                                globalBackgroundImageRepeat={teamMemberImageRepeat}
                                                setGlobalBackgroundImageRepeat={(value) => setAttributes({ teamMemberImageRepeat: value })}
                                                globalBackgroundImageSize={teamMemberImageSize}
                                                setGlobalBackgroundImageSize={(value) => setAttributes({ teamMemberImageSize: value })}
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

											<TextControl
												tagName={teamMemberNameHeadingTag}
												label={__('Name', 'frontis-blocks')}
												value={teamMemberName}
												onChange={(value) => setAttributes({ teamMemberName: value })}
												placeholder={__('Wade Warren', 'frontis-block')}
											/>

											<FB_HtmlTagControl
												label={__("Name Tag", "frontis-block")}
												globalHtmlTag={teamMemberNameHeadingTag}
												setGlobalHtmlTag={(value) => setAttributes({ teamMemberNameHeadingTag: value })}
											/>

											<TextControl
												label={__('Designation', 'frontis-blocks')}
												value={teamMemberDesignation}
												onChange={(value) => setAttributes({ teamMemberDesignation: value })}
											/>

											<ToggleControl
												label={__("Description Switcher", "frontis-blocks")}
												className="fb-setting-responsive-control"
												checked={teamMemberDescSwitcher}
												onChange={(value) => setAttributes({ teamMemberDescSwitcher: value })}
											/>

											{ teamMemberDescSwitcher === true && <TextareaControl
												label={__('Description', 'frontis-blocks')}
												value={teamMemberDesc}
												onChange={(value) => setAttributes({ teamMemberDesc: value })}
											/>}
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

												<SelectControl
													label={__("Icon Type", "frontis-blocks")}
													value={teamMemberSocialType}
													options={SOCIAL_ICON_TYPE}
													onChange={(value) => setAttributes({ teamMemberSocialType: value })}
												/>

												{ teamMemberSocialType === 'content' &&
													<FB_AlignmentControl
														label={__("Alignment", "frontis-blocks")}
														globalAlignment={teamMemberIconsAlignment}
														setGlobalAlignment={(value) => setAttributes({ teamMemberIconsAlignment: value })}
													/>
												}

												<SelectControl
													label={__("Icon Position", "frontis-blocks")}
													value={teamMemberSocialPosition}
													options={teamMemberSocialType === 'content' ? CONTENT_SOCIAL_ICON_POSITION : IMAGE_SOCIAL_ICON_POSITION}
													onChange={(value) => setAttributes({ teamMemberSocialPosition: value })}
												/>

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
											</>
											}
										</PanelBody>
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Content", "frontis-blocks")}
											initialOpen={true}
										>
											<FB_AlignmentControl
                                                label={__("Alignment", "frontis-blocks")}
                                                globalAlignment={teamMemberContentAlignment}
                                                setGlobalAlignment={(value) => setAttributes({ teamMemberContentAlignment: value })}
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
															setAttributes({ teamMemberContentBgClassicColor: value })
														}
														normalGradientColor={teamMemberContentBgGradientColor}
														setNormalGradientColor={(value) =>
															setAttributes({ teamMemberContentBgGradientColor: value })
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
														setBgHoverType={(value) =>
															setAttributes({ teamMemberContentBgHoverType: value })
														}
														hoverClassicColor={teamMemberContentBgHoverClassicColor}
														setHoverClassicColor={(value) =>
															setAttributes({ teamMemberContentBgHoverClassicColor: value })
														}
														hoverGradientColor={teamMemberContentBgHoverGradientColor}
														setHoverGradientColor={(value) =>
															setAttributes({ teamMemberContentBgHoverGradientColor: value })
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
                                                    setGlobalColor={(value) => setAttributes({ teamMemberContentBorderColor: value })}
                                                />
                                            )}
                                                    
                                            {teamMemberContentBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={teamMemberContentBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ teamMemberContentBorderHoverColor: value })}
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
											title={__("Photo", "frontis-blocks")}
											initialOpen={false}
											className="fb-setting-border-setting-wrapper"
										>
											<FB_AlignmentControl
                                                label={__("Alignment", "frontis-blocks")}
                                                globalAlignment={teamMemberImageAlignment}
                                                setGlobalAlignment={(value) => setAttributes({ teamMemberImageAlignment: value })}
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
												<FB_SwitcherControl
													label={__("Overlay Color", "frontis-blocks")}
													globalSwitcher={teamMemberImageBGColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ teamMemberImageBGColorSwitcher: value })}
												/>
														
												{teamMemberImageBGColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={teamMemberImageBGColor}
														setGlobalColor={(value) => setAttributes({ teamMemberImageBGColor: value })}
													/>
												)}
														
												{teamMemberImageBGColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={teamMemberImageBGHoverColor}
														setGlobalColor={(value) => setAttributes({ teamMemberImageBGHoverColor: value })}
													/>
												)}
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
                                                    setGlobalColor={(value) => setAttributes({ teamMemberImageBorderColor: value })}
                                                />
                                            )}
                                                    
                                            {teamMemberImageBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={teamMemberImageBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ teamMemberImageBorderHoverColor: value })}
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
											title={__("Name", "frontis-blocks")}
											initialOpen={false}
											className="fb-setting-gallery-button-wrapper"
										>
											<FB_TypographyControl
												fontFamily={teamMemberNameFontFamily}
												onChangeFontFamily={(value) => setAttributes({ teamMemberNameFontFamily: value })}
																					
												fontSize={teamMemberNameFontSize}
												onChangeFontSize={(value) => setAttributes({ teamMemberNameFontSize: value })}
																					
												fontSizeUnits={teamMemberNameFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ teamMemberNameFontSizeUnits: value })}
																					
												fontWeight={teamMemberNameFontWeight}
												onChangeFontWeight={(value) => setAttributes({ teamMemberNameFontWeight: value })}
																					
												fontStyle={teamMemberNameFontStyle}
												onChangeFontStyle={(value) => setAttributes({ teamMemberNameFontStyle: value })}
																					
												textTransform={teamMemberNameTextTransform}
												onChangeTextTransform={(value) => setAttributes({ teamMemberNameTextTransform: value })}
																					
												textDecoration={teamMemberNameTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ teamMemberNameTextDecoration: value })}
																					
												letterSpacing={teamMemberNameLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ teamMemberNameLetterSpacing: value })}
																					
												letterSpacingUnits={teamMemberNameLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ teamMemberNameLetterSpacingUnits: value })}
																					
												lineHeight={teamMemberNameLineHeight}
												onChangeLineHeight={(value) => setAttributes({ teamMemberNameLineHeight: value })}
																					
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
                                                    setGlobalColor={(value) => setAttributes({ teamMemberNameColor: value })}
                                                />
                                            )}
                                                    
                                            {teamMemberNameColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={teamMemberNameHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ teamMemberNameHoverColor: value })}
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

										<PanelBody
											title={__("Designation", "frontis-blocks")}
											initialOpen={false}
											className="fb-setting-gallery-button-wrapper"
										>
											<FB_TypographyControl
												fontFamily={teamMemberDesignationFontFamily}
												onChangeFontFamily={(value) => setAttributes({ teamMemberDesignationFontFamily: value })}
																					
												fontSize={teamMemberDesignationFontSize}
												onChangeFontSize={(value) => setAttributes({ teamMemberDesignationFontSize: value })}
																					
												fontSizeUnits={teamMemberDesignationFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ teamMemberDesignationFontSizeUnits: value })}
																					
												fontWeight={teamMemberDesignationFontWeight}
												onChangeFontWeight={(value) => setAttributes({ teamMemberDesignationFontWeight: value })}
																					
												fontStyle={teamMemberDesignationFontStyle}
												onChangeFontStyle={(value) => setAttributes({ teamMemberDesignationFontStyle: value })}
																					
												textTransform={teamMemberDesignationTextTransform}
												onChangeTextTransform={(value) => setAttributes({ teamMemberDesignationTextTransform: value })}
																					
												textDecoration={teamMemberDesignationTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ teamMemberDesignationTextDecoration: value })}
																					
												letterSpacing={teamMemberDesignationLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ teamMemberDesignationLetterSpacing: value })}
																					
												letterSpacingUnits={teamMemberDesignationLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ teamMemberDesignationLetterSpacingUnits: value })}
																					
												lineHeight={teamMemberDesignationLineHeight}
												onChangeLineHeight={(value) => setAttributes({ teamMemberDesignationLineHeight: value })}
																					
												lineHeightUnits={teamMemberDesignationLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ teamMemberDesignationLineHeightUnits: value })}
																					
												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={teamMemberDesignationColor}
                                                setGlobalColor={(value) => setAttributes({ teamMemberDesignationColor: value })}
                                            />

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
												fontFamily={teamMemberDescFontFamily}
												onChangeFontFamily={(value) => setAttributes({ teamMemberDescFontFamily: value })}
																					
												fontSize={teamMemberDescFontSize}
												onChangeFontSize={(value) => setAttributes({ teamMemberDescFontSize: value })}
																					
												fontSizeUnits={teamMemberDescFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ teamMemberDescFontSizeUnits: value })}
																					
												fontWeight={teamMemberDescFontWeight}
												onChangeFontWeight={(value) => setAttributes({ teamMemberDescFontWeight: value })}
																					
												fontStyle={teamMemberDescFontStyle}
												onChangeFontStyle={(value) => setAttributes({ teamMemberDescFontStyle: value })}
																					
												textTransform={teamMemberDescTextTransform}
												onChangeTextTransform={(value) => setAttributes({ teamMemberDescTextTransform: value })}
																					
												textDecoration={teamMemberDescTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ teamMemberDescTextDecoration: value })}
																					
												letterSpacing={teamMemberDescLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ teamMemberDescLetterSpacing: value })}
																					
												letterSpacingUnits={teamMemberDescLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ teamMemberDescLetterSpacingUnits: value })}
																					
												lineHeight={teamMemberDescLineHeight}
												onChangeLineHeight={(value) => setAttributes({ teamMemberDescLineHeight: value })}
																					
												lineHeightUnits={teamMemberDescLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ teamMemberDescLineHeightUnits: value })}
																					
												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={teamMemberDescColor}
                                                setGlobalColor={(value) => setAttributes({ teamMemberDescColor: value })}
                                            />

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
												<SelectControl
													label={__("Icon Animation Type", "frontis-blocks")}
													value={teamMemberSocialIconAnimationType}
													options={SOCIAL_ICON_ANIMATION}
													onChange={(value) => setAttributes({ teamMemberSocialIconAnimationType: value })}
												/>

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
														setGlobalColor={(value) => setAttributes({ socialIconBtnColor: value })}
													/>
												)}
														
												{socialIconBtnColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={socialIconBtnHoverColor}
														setGlobalColor={(value) => setAttributes({ socialIconBtnHoverColor: value })}
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
														setGlobalColor={(value) => setAttributes({ socialIconBtnBGColor: value })}
													/>
												)}
														
												{socialIconBtnBGColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={socialIconBtnBGHoverColor}
														setGlobalColor={(value) => setAttributes({ socialIconBtnBGHoverColor: value })}
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
														setGlobalColor={(value) => setAttributes({ socialIconBtnBorderColor: value })}
													/>
												)}
														
												{socialIconBtnBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={socialIconBtnBorderHoverColor}
														setGlobalColor={(value) => setAttributes({ socialIconBtnBorderHoverColor: value })}
													/>
												)}

												<FB_Spacing 
													label={__("Border Width", "frontis-blocks")}
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
													label={__("Border Radius Width", "frontis-blocks")}
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

										{teamMemberSocialProfileSwitcher === true &&
											<PanelBody
												title={__("Social Profile Separator", "frontis-blocks")}
												initialOpen={false}
											>
												<FB_AlignmentControl
													label={__("Alignment", "frontis-blocks")}
													globalAlignment={socialProfileSeparatorAlignment}
													setGlobalAlignment={(value) => setAttributes({ socialProfileSeparatorAlignment: value })}
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
													label={__("Overlay Color", "frontis-blocks")}
													globalSwitcher={socialProfileSeparatorColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ socialProfileSeparatorColorSwitcher: value })}
												/>
														
												{socialProfileSeparatorColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={socialProfileSeparatorColor}
														setGlobalColor={(value) => setAttributes({ socialProfileSeparatorColor: value })}
													/>
												)}
														
												{socialProfileSeparatorColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={socialProfileSeparatorHoverColor}
														setGlobalColor={(value) => setAttributes({ socialProfileSeparatorHoverColor: value })}
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
														setGlobalColor={(value) => setAttributes({ teamMemberIconsColor: value })}
													/>
												)}
														
												{teamMemberIconsColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={teamMemberIconsHoverColor}
														setGlobalColor={(value) => setAttributes({ teamMemberIconsHoverColor: value })}
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
															setGlobalColor={(value) => setAttributes({ teamMemberSocialProfileBorderColor: value })}
														/>
													)}
															
													{teamMemberSocialProfileBorderColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={teamMemberSocialProfileBorderHoverColor}
															setGlobalColor={(value) => setAttributes({ teamMemberSocialProfileBorderHoverColor: value })}
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
															setGlobalColor={(value) => setAttributes({ teamMemberIconsBGColor: value })}
														/>
													)}
															
													{teamMemberIconsBGColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={teamMemberIconsBGHoverColor}
															setGlobalColor={(value) => setAttributes({ teamMemberIconsBGHoverColor: value })}
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
															setGlobalColor={(value) => setAttributes({ teamMemberIconsBorderColor: value })}
														/>
													)}
															
													{teamMemberIconsBorderColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={teamMemberIconsBorderHoverColor}
															setGlobalColor={(value) => setAttributes({ teamMemberIconsBorderHoverColor: value })}
														/>
													)}

													<FB_Spacing 
														label={__("Border Width", "frontis-blocks")}
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
														label={__("Border Radius Width", "frontis-blocks")}
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
								)}

								{tab.name === "advanced" && (
									<>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-inner-wrapper">
												
												<PanelBody
													title={__("Z Index", "frontis-blocks")}
													initialOpen={true}
													className='fb-setting-z-index-header'
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
															setAttributes({ teamMemberBgClassicColor: value })
														}
														normalGradientColor={teamMemberBgGradientColor}
														setNormalGradientColor={(value) =>
															setAttributes({ teamMemberBgGradientColor: value })
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
														setBgHoverType={(value) =>
															setAttributes({ teamMemberBgHoverType: value })
														}
														hoverClassicColor={teamMemberBgHoverClassicColor}
														setHoverClassicColor={(value) =>
															setAttributes({ teamMemberBgHoverClassicColor: value })
														}
														hoverGradientColor={teamMemberBgHoverGradientColor}
														setHoverGradientColor={(value) =>
															setAttributes({ teamMemberBgHoverGradientColor: value })
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
															setGlobalColor={(value) => setAttributes({ teamMemberBorderColor: value })}
														/>
													)}
															
													{teamMemberBorderColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={teamMemberBorderHoverColor}
															setGlobalColor={(value) => setAttributes({ teamMemberBorderHoverColor: value })}
														/>
													)}

													<FB_Spacing 
														label={__("Border Width", "frontis-blocks")}
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
														label={__("Border Radius Width", "frontis-blocks")}
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

												{/* <PanelBody
													title={__("Responsive Control", "frontis-blocks")}
													initialOpen={false}
													className="fb-setting-responsive-control-wrapper"
												>
													<ToggleControl
														label={__("Hide on Desktop", "frontis-blocks")}
														className="fb-setting-responsive-control"
														checked={teamMemberDesktopSwitcher}
														onChange={(value) => setAttributes({ teamMemberDesktopSwitcher: value })}
													/>
													<ToggleControl
														label={__("Hide on Tablet", "frontis-blocks")}
														className="fb-setting-responsive-control"
														checked={teamMemberTabletSwitcher}
														onChange={(value) => setAttributes({ teamMemberTabletSwitcher: value })}
													/>
													<ToggleControl
														label={__("Hide on Mobile", "frontis-blocks")}
														className="fb-setting-responsive-control"
														checked={teamMemberMobileSwitcher}
														onChange={(value) => setAttributes({ teamMemberMobileSwitcher: value })}
													/>
												</PanelBody> */}

											</div>
										</div>
									</>
									)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>
		</>
	);
}
