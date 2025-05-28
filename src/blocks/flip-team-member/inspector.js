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
	RangeControl,
} from '@wordpress/components';
import { useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';

import {BORDER_STYLES, CARD_WRAP_ALIGNMENT, CONTENT_POSITION, CONTENT_SOCIAL_ICON_POSITION, EMAIL_ICON_POSITION, EMAIL_ICON_SWITCHER, HEADING, IMAGE_SOCIAL_ICON_POSITION, OVERFLOW_OP, SOCIAL_ICON_ANIMATION, SOCIAL_ICON_TYPE} from "./constants/constants";

import SortableItem from './sortableItem.js';
import FB_Spacing from '@Components/spacing';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_Range from '@Components/range';
import FB_TypographyControl from '@Components/typography-control';
import FB_ColorControl from '@Components/color-control';
import FB_BackgroundImageControl from '@Components/background-image-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_SwitcherControl from '@Components/switcher-control';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FBIconPicker from '../../components/icon-picker/index.js';
import FB_ImageControl from '@Components/image-control';
import FB_InspectorControls from '@Components/InspectorControls';


export default function Inspector({ attributes, setAttributes, clientId }) {

	const {
		blockID,
		blockStyle,
		// deviceType,

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
		teamMemberImageOverlayOpacity,

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
	} = attributes;

	console.log(teamMemberNameGlobalTypoType);

	const deviceType= useDeviceType();

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
		teamMemberDescFontFamily,
	]);
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
	
	const teamMemberMarginDesktopWidth = `${teamMemberDesktopMargin.top}${teamMemberMarginUnits.Desktop} ${teamMemberDesktopMargin.right}${teamMemberMarginUnits.Desktop} ${teamMemberDesktopMargin.bottom}${teamMemberMarginUnits.Desktop} ${teamMemberDesktopMargin.left}${teamMemberMarginUnits.Desktop}`;
	const teamMemberMarginTabletWidth = `${teamMemberTabMargin.top}${teamMemberMarginUnits.Tablet} ${teamMemberTabMargin.right}${teamMemberMarginUnits.Tablet} ${teamMemberTabMargin.bottom}${teamMemberMarginUnits.Tablet} ${teamMemberTabMargin.left}${teamMemberMarginUnits.Tablet}`;
	const teamMemberMarginMobileWidth = `${teamMemberMobileMargin.top}${teamMemberMarginUnits.Mobile} ${teamMemberMobileMargin.right}${teamMemberMarginUnits.Mobile} ${teamMemberMobileMargin.bottom}${teamMemberMarginUnits.Mobile} ${teamMemberMobileMargin.left}${teamMemberMarginUnits.Mobile}`;
	
	
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
	
	const teamMemberPaddingDesktopWidth = `${teamMemberDesktopPadding.top}${teamMemberPaddingUnits.Desktop} ${teamMemberDesktopPadding.right}${teamMemberPaddingUnits.Desktop} ${teamMemberDesktopPadding.bottom}${teamMemberPaddingUnits.Desktop} ${teamMemberDesktopPadding.left}${teamMemberPaddingUnits.Desktop}`;
	const teamMemberPaddingTabletWidth = `${teamMemberTabPadding.top}${teamMemberPaddingUnits.Tablet} ${teamMemberTabPadding.right}${teamMemberPaddingUnits.Tablet} ${teamMemberTabPadding.bottom}${teamMemberPaddingUnits.Tablet} ${teamMemberTabPadding.left}${teamMemberPaddingUnits.Tablet}`;
	const teamMemberPaddingMobileWidth = `${teamMemberMobilePadding.top}${teamMemberPaddingUnits.Mobile} ${teamMemberMobilePadding.right}${teamMemberPaddingUnits.Mobile} ${teamMemberMobilePadding.bottom}${teamMemberPaddingUnits.Mobile} ${teamMemberMobilePadding.left}${teamMemberPaddingUnits.Mobile}`;
	
	
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
	
	const teamMemberBorderDesktopWidth = `${teamMemberDesktopBorderWidth.top}${teamMemberBorderUnits.Desktop} ${teamMemberDesktopBorderWidth.right}${teamMemberBorderUnits.Desktop} ${teamMemberDesktopBorderWidth.bottom}${teamMemberBorderUnits.Desktop} ${teamMemberDesktopBorderWidth.left}${teamMemberBorderUnits.Desktop}`;
	const teamMemberBorderTabletWidth = `${teamMemberTabBorderWidth.top}${teamMemberBorderUnits.Tablet} ${teamMemberTabBorderWidth.right}${teamMemberBorderUnits.Tablet} ${teamMemberTabBorderWidth.bottom}${teamMemberBorderUnits.Tablet} ${teamMemberTabBorderWidth.left}${teamMemberBorderUnits.Tablet}`;
	const teamMemberBorderMobileWidth = `${teamMemberMobileBorderWidth.top}${teamMemberBorderUnits.Mobile} ${teamMemberMobileBorderWidth.right}${teamMemberBorderUnits.Mobile} ${teamMemberMobileBorderWidth.bottom}${teamMemberBorderUnits.Mobile} ${teamMemberMobileBorderWidth.left}${teamMemberBorderUnits.Mobile}`;
	
	
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
	
	const teamMemberBorderRadiusDesktopWidth = `${teamMemberDesktopBorderRadiusWidth.top}${teamMemberBorderRadiusUnits.Desktop} ${teamMemberDesktopBorderRadiusWidth.right}${teamMemberBorderRadiusUnits.Desktop} ${teamMemberDesktopBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits.Desktop} ${teamMemberDesktopBorderRadiusWidth.left}${teamMemberBorderRadiusUnits.Desktop}`;
	const teamMemberBorderRadiusTabletWidth = `${teamMemberTabBorderRadiusWidth.top}${teamMemberBorderRadiusUnits.Tablet} ${teamMemberTabBorderRadiusWidth.right}${teamMemberBorderRadiusUnits.Tablet} ${teamMemberTabBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits.Tablet} ${teamMemberTabBorderRadiusWidth.left}${teamMemberBorderRadiusUnits.Tablet}`;
	const teamMemberBorderRadiusMobileWidth = `${teamMemberMobileBorderRadiusWidth.top}${teamMemberBorderRadiusUnits.Mobile} ${teamMemberMobileBorderRadiusWidth.right}${teamMemberBorderRadiusUnits.Mobile} ${teamMemberMobileBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits.Mobile} ${teamMemberMobileBorderRadiusWidth.left}${teamMemberBorderRadiusUnits.Mobile}`;
	
	{/* Team Member Content Control */}
	const teamMemberContentBorderTypeGetDesktop = `${teamMemberContentBorderDesktop.top}${teamMemberContentBorderUnits.Desktop} ${teamMemberContentBorderDesktop.right}${teamMemberContentBorderUnits.Desktop} ${teamMemberContentBorderDesktop.bottom}${teamMemberContentBorderUnits.Desktop} ${teamMemberContentBorderDesktop.left}${teamMemberContentBorderUnits.Desktop}`;
	const teamMemberContentBorderTypeGetTab = `${teamMemberContentBorderTab.top}${teamMemberContentBorderUnits.Tablet} ${teamMemberContentBorderTab.right}${teamMemberContentBorderUnits.Tablet} ${teamMemberContentBorderTab.bottom}${teamMemberContentBorderUnits.Tablet} ${teamMemberContentBorderTab.left}${teamMemberContentBorderUnits.Tablet}`;
	const teamMemberContentBorderTypeGetMobile = `${teamMemberContentBorderMobile.top}${teamMemberContentBorderUnits.Mobile} ${teamMemberContentBorderMobile.right}${teamMemberContentBorderUnits.Mobile} ${teamMemberContentBorderMobile.bottom}${teamMemberContentBorderUnits.Mobile} ${teamMemberContentBorderMobile.left}${teamMemberContentBorderUnits.Mobile}`;


	const teamMemberContentBorderRadiusGetDesktop = `${teamMemberContentBorderRadiusDesktop.top}${teamMemberContentBorderRadiusUnits.Desktop} ${teamMemberContentBorderRadiusDesktop.right}${teamMemberContentBorderRadiusUnits.Desktop} ${teamMemberContentBorderRadiusDesktop.bottom}${teamMemberContentBorderRadiusUnits.Desktop} ${teamMemberContentBorderRadiusDesktop.left}${teamMemberContentBorderRadiusUnits.Desktop}`;
	const teamMemberContentBorderRadiusGetTab = `${teamMemberContentBorderRadiusTab.top}${teamMemberContentBorderRadiusUnits.Tablet} ${teamMemberContentBorderRadiusTab.right}${teamMemberContentBorderRadiusUnits.Tablet} ${teamMemberContentBorderRadiusTab.bottom}${teamMemberContentBorderRadiusUnits.Tablet} ${teamMemberContentBorderRadiusTab.left}${teamMemberContentBorderRadiusUnits.Tablet}`;
	const teamMemberContentBorderRadiusGetMobile = `${teamMemberContentBorderRadiusMobile.top}${teamMemberContentBorderRadiusUnits.Mobile} ${teamMemberContentBorderRadiusMobile.right}${teamMemberContentBorderRadiusUnits.Mobile} ${teamMemberContentBorderRadiusMobile.bottom}${teamMemberContentBorderRadiusUnits.Mobile} ${teamMemberContentBorderRadiusMobile.left}${teamMemberContentBorderRadiusUnits.Mobile}`;


	const teamMemberContentMarginGetDesktop = `${teamMemberContentMarginDesktop.top}${teamMemberContentMarginUnits.Desktop} ${teamMemberContentMarginDesktop.right}${teamMemberContentMarginUnits.Desktop} ${teamMemberContentMarginDesktop.bottom}${teamMemberContentMarginUnits.Desktop} ${teamMemberContentMarginDesktop.left}${teamMemberContentMarginUnits.Desktop}`;
	const teamMemberContentMarginGetTab = `${teamMemberContentMarginTab.top}${teamMemberContentMarginUnits.Tablet} ${teamMemberContentMarginTab.right}${teamMemberContentMarginUnits.Tablet} ${teamMemberContentMarginTab.bottom}${teamMemberContentMarginUnits.Tablet} ${teamMemberContentMarginTab.left}${teamMemberContentMarginUnits.Tablet}`;
	const teamMemberContentMarginGetMobile = `${teamMemberContentMarginMobile.top}${teamMemberContentMarginUnits.Mobile} ${teamMemberContentMarginMobile.right}${teamMemberContentMarginUnits.Mobile} ${teamMemberContentMarginMobile.bottom}${teamMemberContentMarginUnits.Mobile} ${teamMemberContentMarginMobile.left}${teamMemberContentMarginUnits.Mobile}`;


	const teamMemberContentPaddingGetDesktop = `${teamMemberContentPaddingDesktop.top}${teamMemberContentPaddingUnits.Desktop} ${teamMemberContentPaddingDesktop.right}${teamMemberContentPaddingUnits.Desktop} ${teamMemberContentPaddingDesktop.bottom}${teamMemberContentPaddingUnits.Desktop} ${teamMemberContentPaddingDesktop.left}${teamMemberContentPaddingUnits.Desktop}`;
	const teamMemberContentPaddingGetTab = `${teamMemberContentPaddingTab.top}${teamMemberContentPaddingUnits.Tablet} ${teamMemberContentPaddingTab.right}${teamMemberContentPaddingUnits.Tablet} ${teamMemberContentPaddingTab.bottom}${teamMemberContentPaddingUnits.Tablet} ${teamMemberContentPaddingTab.left}${teamMemberContentPaddingUnits.Tablet}`;
	const teamMemberContentPaddingGetMobile = `${teamMemberContentPaddingMobile.top}${teamMemberContentPaddingUnits.Mobile} ${teamMemberContentPaddingMobile.right}${teamMemberContentPaddingUnits.Mobile} ${teamMemberContentPaddingMobile.bottom}${teamMemberContentPaddingUnits.Mobile} ${teamMemberContentPaddingMobile.left}${teamMemberContentPaddingUnits.Mobile}`;


	{/* Team Member Image Control */}
	const teamMemberImageBorderTypeGetDesktop = `${teamMemberImageBorderDesktop.top}${teamMemberImageBorderUnits.Desktop} ${teamMemberImageBorderDesktop.right}${teamMemberImageBorderUnits.Desktop} ${teamMemberImageBorderDesktop.bottom}${teamMemberImageBorderUnits.Desktop} ${teamMemberImageBorderDesktop.left}${teamMemberImageBorderUnits.Desktop}`;
	const teamMemberImageBorderTypeGetTab = `${teamMemberImageBorderTab.top}${teamMemberImageBorderUnits.Tablet} ${teamMemberImageBorderTab.right}${teamMemberImageBorderUnits.Tablet} ${teamMemberImageBorderTab.bottom}${teamMemberImageBorderUnits.Tablet} ${teamMemberImageBorderTab.left}${teamMemberImageBorderUnits.Tablet}`;
	const teamMemberImageBorderTypeGetMobile = `${teamMemberImageBorderMobile.top}${teamMemberImageBorderUnits.Mobile} ${teamMemberImageBorderMobile.right}${teamMemberImageBorderUnits.Mobile} ${teamMemberImageBorderMobile.bottom}${teamMemberImageBorderUnits.Mobile} ${teamMemberImageBorderMobile.left}${teamMemberImageBorderUnits.Mobile}`;


	const teamMemberImageBorderRadiusGetDesktop = `${teamMemberImageBorderRadiusDesktop.top}${teamMemberImageBorderRadiusUnits.Desktop} ${teamMemberImageBorderRadiusDesktop.right}${teamMemberImageBorderRadiusUnits.Desktop} ${teamMemberImageBorderRadiusDesktop.bottom}${teamMemberImageBorderRadiusUnits.Desktop} ${teamMemberImageBorderRadiusDesktop.left}${teamMemberImageBorderRadiusUnits.Desktop}`;
	const teamMemberImageBorderRadiusGetTab = `${teamMemberImageBorderRadiusTab.top}${teamMemberImageBorderRadiusUnits.Tablet} ${teamMemberImageBorderRadiusTab.right}${teamMemberImageBorderRadiusUnits.Tablet} ${teamMemberImageBorderRadiusTab.bottom}${teamMemberImageBorderRadiusUnits.Tablet} ${teamMemberImageBorderRadiusTab.left}${teamMemberImageBorderRadiusUnits.Tablet}`;
	const teamMemberImageBorderRadiusGetMobile = `${teamMemberImageBorderRadiusMobile.top}${teamMemberImageBorderRadiusUnits.Mobile} ${teamMemberImageBorderRadiusMobile.right}${teamMemberImageBorderRadiusUnits.Mobile} ${teamMemberImageBorderRadiusMobile.bottom}${teamMemberImageBorderRadiusUnits.Mobile} ${teamMemberImageBorderRadiusMobile.left}${teamMemberImageBorderRadiusUnits.Mobile}`;


	const teamMemberImageMarginGetDesktop = `${teamMemberImageMarginDesktop.top}${teamMemberImageMarginUnits.Desktop} ${teamMemberImageMarginDesktop.right}${teamMemberImageMarginUnits.Desktop} ${teamMemberImageMarginDesktop.bottom}${teamMemberImageMarginUnits.Desktop} ${teamMemberImageMarginDesktop.left}${teamMemberImageMarginUnits.Desktop}`;
	const teamMemberImageMarginGetTab = `${teamMemberImageMarginTab.top}${teamMemberImageMarginUnits.Tablet} ${teamMemberImageMarginTab.right}${teamMemberImageMarginUnits.Tablet} ${teamMemberImageMarginTab.bottom}${teamMemberImageMarginUnits.Tablet} ${teamMemberImageMarginTab.left}${teamMemberImageMarginUnits.Tablet}`;
	const teamMemberImageMarginGetMobile = `${teamMemberImageMarginMobile.top}${teamMemberImageMarginUnits.Mobile} ${teamMemberImageMarginMobile.right}${teamMemberImageMarginUnits.Mobile} ${teamMemberImageMarginMobile.bottom}${teamMemberImageMarginUnits.Mobile} ${teamMemberImageMarginMobile.left}${teamMemberImageMarginUnits.Mobile}`;


	{/* Team Member Name Control */}
	const teamMemberNameMarginGetDesktop = `${teamMemberNameMarginDesktop.top}${teamMemberNameMarginUnits.Desktop} ${teamMemberNameMarginDesktop.right}${teamMemberNameMarginUnits.Desktop} ${teamMemberNameMarginDesktop.bottom}${teamMemberNameMarginUnits.Desktop} ${teamMemberNameMarginDesktop.left}${teamMemberNameMarginUnits.Desktop}`;
	const teamMemberNameMarginGetTab = `${teamMemberNameMarginTab.top}${teamMemberNameMarginUnits.Tablet} ${teamMemberNameMarginTab.right}${teamMemberNameMarginUnits.Tablet} ${teamMemberNameMarginTab.bottom}${teamMemberNameMarginUnits.Tablet} ${teamMemberNameMarginTab.left}${teamMemberNameMarginUnits.Tablet}`;
	const teamMemberNameMarginGetMobile = `${teamMemberNameMarginMobile.top}${teamMemberNameMarginUnits.Mobile} ${teamMemberNameMarginMobile.right}${teamMemberNameMarginUnits.Mobile} ${teamMemberNameMarginMobile.bottom}${teamMemberNameMarginUnits.Mobile} ${teamMemberNameMarginMobile.left}${teamMemberNameMarginUnits.Mobile}`;


	{/* Team Member Designation Control */}
	const teamMemberDesignationMarginGetDesktop = `${teamMemberDesignationMarginDesktop.top}${teamMemberDesignationMarginUnits.Desktop} ${teamMemberDesignationMarginDesktop.right}${teamMemberDesignationMarginUnits.Desktop} ${teamMemberDesignationMarginDesktop.bottom}${teamMemberDesignationMarginUnits.Desktop} ${teamMemberDesignationMarginDesktop.left}${teamMemberDesignationMarginUnits.Desktop}`;
	const teamMemberDesignationMarginGetTab = `${teamMemberDesignationMarginTab.top}${teamMemberDesignationMarginUnits.Tablet} ${teamMemberDesignationMarginTab.right}${teamMemberDesignationMarginUnits.Tablet} ${teamMemberDesignationMarginTab.bottom}${teamMemberDesignationMarginUnits.Tablet} ${teamMemberDesignationMarginTab.left}${teamMemberDesignationMarginUnits.Tablet}`;
	const teamMemberDesignationMarginGetMobile = `${teamMemberDesignationMarginMobile.top}${teamMemberDesignationMarginUnits.Mobile} ${teamMemberDesignationMarginMobile.right}${teamMemberDesignationMarginUnits.Mobile} ${teamMemberDesignationMarginMobile.bottom}${teamMemberDesignationMarginUnits.Mobile} ${teamMemberDesignationMarginMobile.left}${teamMemberDesignationMarginUnits.Mobile}`;

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
	const teamMemberDescMarginGetDesktop = `${teamMemberDescMarginDesktop.top}${teamMemberDescMarginUnits.Desktop} ${teamMemberDescMarginDesktop.right}${teamMemberDescMarginUnits.Desktop} ${teamMemberDescMarginDesktop.bottom}${teamMemberDescMarginUnits.Desktop} ${teamMemberDescMarginDesktop.left}${teamMemberDescMarginUnits.Desktop}`;
	const teamMemberDescMarginGetTab = `${teamMemberDescMarginTab.top}${teamMemberDescMarginUnits.Tablet} ${teamMemberDescMarginTab.right}${teamMemberDescMarginUnits.Tablet} ${teamMemberDescMarginTab.bottom}${teamMemberDescMarginUnits.Tablet} ${teamMemberDescMarginTab.left}${teamMemberDescMarginUnits.Tablet}`;
	const teamMemberDescMarginGetMobile = `${teamMemberDescMarginMobile.top}${teamMemberDescMarginUnits.Mobile} ${teamMemberDescMarginMobile.right}${teamMemberDescMarginUnits.Mobile} ${teamMemberDescMarginMobile.bottom}${teamMemberDescMarginUnits.Mobile} ${teamMemberDescMarginMobile.left}${teamMemberDescMarginUnits.Mobile}`;


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

	const socialIconBtnDesktopPaddingWidth = `${socialIconBtnDesktopPadding.top}${socialIconBtnPaddingUnits.Desktop} ${socialIconBtnDesktopPadding.right}${socialIconBtnPaddingUnits.Desktop} ${socialIconBtnDesktopPadding.bottom}${socialIconBtnPaddingUnits.Desktop} ${socialIconBtnDesktopPadding.left}${socialIconBtnPaddingUnits.Desktop}`;
	const socialIconBtnTabPaddingWidth = `${socialIconBtnTabPadding.top}${socialIconBtnPaddingUnits.Tablet} ${socialIconBtnTabPadding.right}${socialIconBtnPaddingUnits.Tablet} ${socialIconBtnTabPadding.bottom}${socialIconBtnPaddingUnits.Tablet} ${socialIconBtnTabPadding.left}${socialIconBtnPaddingUnits.Tablet}`;
	const socialIconBtnMobilePaddingWidth = `${socialIconBtnMobilePadding.top}${socialIconBtnPaddingUnits.Mobile} ${socialIconBtnMobilePadding.right}${socialIconBtnPaddingUnits.Mobile} ${socialIconBtnMobilePadding.bottom}${socialIconBtnPaddingUnits.Mobile} ${socialIconBtnMobilePadding.left}${socialIconBtnPaddingUnits.Mobile}`;


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

	const socialIconBtnDesktopMarginWidth = `${socialIconBtnDesktopMargin.top}${socialIconBtnMarginUnits.Desktop} ${socialIconBtnDesktopMargin.right}${socialIconBtnMarginUnits.Desktop} ${socialIconBtnDesktopMargin.bottom}${socialIconBtnMarginUnits.Desktop} ${socialIconBtnDesktopMargin.left}${socialIconBtnMarginUnits.Desktop}`;
	const socialIconBtnTabMarginWidth = `${socialIconBtnTabMargin.top}${socialIconBtnMarginUnits.Tablet} ${socialIconBtnTabMargin.right}${socialIconBtnMarginUnits.Tablet} ${socialIconBtnTabMargin.bottom}${socialIconBtnMarginUnits.Tablet} ${socialIconBtnTabMargin.left}${socialIconBtnMarginUnits.Tablet}`;
	const socialIconBtnMobileMarginWidth = `${socialIconBtnMobileMargin.top}${socialIconBtnMarginUnits.Mobile} ${socialIconBtnMobileMargin.right}${socialIconBtnMarginUnits.Mobile} ${socialIconBtnMobileMargin.bottom}${socialIconBtnMarginUnits.Mobile} ${socialIconBtnMobileMargin.left}${socialIconBtnMarginUnits.Mobile}`;


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

	const socialIconBtnDesktopBorder = `${socialIconBtnDesktopBorderWidth.top}${socialIconBtnBorderUnits.Desktop} ${socialIconBtnDesktopBorderWidth.right}${socialIconBtnBorderUnits.Desktop} ${socialIconBtnDesktopBorderWidth.bottom}${socialIconBtnBorderUnits.Desktop} ${socialIconBtnDesktopBorderWidth.left}${socialIconBtnBorderUnits.Desktop}`;
	const socialIconBtnTabBorder = `${socialIconBtnTabBorderWidth.top}${socialIconBtnBorderUnits.Tablet} ${socialIconBtnTabBorderWidth.right}${socialIconBtnBorderUnits.Tablet} ${socialIconBtnTabBorderWidth.bottom}${socialIconBtnBorderUnits.Tablet} ${socialIconBtnTabBorderWidth.left}${socialIconBtnBorderUnits.Tablet}`;
	const socialIconBtnMobileBorder = `${socialIconBtnMobileBorderWidth.top}${socialIconBtnBorderUnits.Mobile} ${socialIconBtnMobileBorderWidth.right}${socialIconBtnBorderUnits.Mobile} ${socialIconBtnMobileBorderWidth.bottom}${socialIconBtnBorderUnits.Mobile} ${socialIconBtnMobileBorderWidth.left}${socialIconBtnBorderUnits.Mobile}`;


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

	const socialIconBtnDesktopBorderRadius = `${socialIconBtnDesktopBorderRadiusWidth.top}${socialIconBtnBorderRadiusUnits.Desktop} ${socialIconBtnDesktopBorderRadiusWidth.right}${socialIconBtnBorderRadiusUnits.Desktop} ${socialIconBtnDesktopBorderRadiusWidth.bottom}${socialIconBtnBorderRadiusUnits.Desktop} ${socialIconBtnDesktopBorderRadiusWidth.left}${socialIconBtnBorderRadiusUnits.Desktop}`;
	const socialIconBtnTabBorderRadius = `${socialIconBtnTabBorderRadiusWidth.top}${socialIconBtnBorderRadiusUnits.Tablet} ${socialIconBtnTabBorderRadiusWidth.right}${socialIconBtnBorderRadiusUnits.Tablet} ${socialIconBtnTabBorderRadiusWidth.bottom}${socialIconBtnBorderRadiusUnits.Tablet} ${socialIconBtnTabBorderRadiusWidth.left}${socialIconBtnBorderRadiusUnits.Tablet}`;
	const socialIconBtnMobileBorderRadius = `${socialIconBtnMobileBorderRadiusWidth.top}${socialIconBtnBorderRadiusUnits.Mobile} ${socialIconBtnMobileBorderRadiusWidth.right}${socialIconBtnBorderRadiusUnits.Mobile} ${socialIconBtnMobileBorderRadiusWidth.bottom}${socialIconBtnBorderRadiusUnits.Mobile} ${socialIconBtnMobileBorderRadiusWidth.left}${socialIconBtnBorderRadiusUnits.Mobile}`;


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

	const teamMemberIconsDesktopPaddingWidth = `${teamMemberIconsDesktopPadding.top}${teamMemberIconsPaddingUnits.Desktop} ${teamMemberIconsDesktopPadding.right}${teamMemberIconsPaddingUnits.Desktop} ${teamMemberIconsDesktopPadding.bottom}${teamMemberIconsPaddingUnits.Desktop} ${teamMemberIconsDesktopPadding.left}${teamMemberIconsPaddingUnits.Desktop}`;
	const teamMemberIconsTabPaddingWidth = `${teamMemberIconsTabPadding.top}${teamMemberIconsPaddingUnits.Tablet} ${teamMemberIconsTabPadding.right}${teamMemberIconsPaddingUnits.Tablet} ${teamMemberIconsTabPadding.bottom}${teamMemberIconsPaddingUnits.Tablet} ${teamMemberIconsTabPadding.left}${teamMemberIconsPaddingUnits.Tablet}`;
	const teamMemberIconsMobilePaddingWidth = `${teamMemberIconsMobilePadding.top}${teamMemberIconsPaddingUnits.Mobile} ${teamMemberIconsMobilePadding.right}${teamMemberIconsPaddingUnits.Mobile} ${teamMemberIconsMobilePadding.bottom}${teamMemberIconsPaddingUnits.Mobile} ${teamMemberIconsMobilePadding.left}${teamMemberIconsPaddingUnits.Mobile}`;


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

	const teamMemberIconsDesktopMarginWidth = `${teamMemberIconsDesktopMargin.top}${teamMemberIconsMarginUnits.Desktop} ${teamMemberIconsDesktopMargin.right}${teamMemberIconsMarginUnits.Desktop} ${teamMemberIconsDesktopMargin.bottom}${teamMemberIconsMarginUnits.Desktop} ${teamMemberIconsDesktopMargin.left}${teamMemberIconsMarginUnits.Desktop}`;
	const teamMemberIconsTabMarginWidth = `${teamMemberIconsTabMargin.top}${teamMemberIconsMarginUnits.Tablet} ${teamMemberIconsTabMargin.right}${teamMemberIconsMarginUnits.Tablet} ${teamMemberIconsTabMargin.bottom}${teamMemberIconsMarginUnits.Tablet} ${teamMemberIconsTabMargin.left}${teamMemberIconsMarginUnits.Tablet}`;
	const teamMemberIconsMobileMarginWidth = `${teamMemberIconsMobileMargin.top}${teamMemberIconsMarginUnits.Mobile} ${teamMemberIconsMobileMargin.right}${teamMemberIconsMarginUnits.Mobile} ${teamMemberIconsMobileMargin.bottom}${teamMemberIconsMarginUnits.Mobile} ${teamMemberIconsMobileMargin.left}${teamMemberIconsMarginUnits.Mobile}`;



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

	const teamMemberIconsDesktopBorder = `${teamMemberIconsDesktopBorderWidth.top}${teamMemberIconsBorderUnits.Desktop} ${teamMemberIconsDesktopBorderWidth.right}${teamMemberIconsBorderUnits.Desktop} ${teamMemberIconsDesktopBorderWidth.bottom}${teamMemberIconsBorderUnits.Desktop} ${teamMemberIconsDesktopBorderWidth.left}${teamMemberIconsBorderUnits.Desktop}`;
	const teamMemberIconsTabBorder = `${teamMemberIconsTabBorderWidth.top}${teamMemberIconsBorderUnits.Tablet} ${teamMemberIconsTabBorderWidth.right}${teamMemberIconsBorderUnits.Tablet} ${teamMemberIconsTabBorderWidth.bottom}${teamMemberIconsBorderUnits.Tablet} ${teamMemberIconsTabBorderWidth.left}${teamMemberIconsBorderUnits.Tablet}`;
	const teamMemberIconsMobileBorder = `${teamMemberIconsMobileBorderWidth.top}${teamMemberIconsBorderUnits.Mobile} ${teamMemberIconsMobileBorderWidth.right}${teamMemberIconsBorderUnits.Mobile} ${teamMemberIconsMobileBorderWidth.bottom}${teamMemberIconsBorderUnits.Mobile} ${teamMemberIconsMobileBorderWidth.left}${teamMemberIconsBorderUnits.Mobile}`;


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

	const teamMemberIconsDesktopBorderRadius = `${teamMemberIconsDesktopBorderRadiusWidth.top}${teamMemberIconsBorderRadiusUnits.Desktop} ${teamMemberIconsDesktopBorderRadiusWidth.right}${teamMemberIconsBorderRadiusUnits.Desktop} ${teamMemberIconsDesktopBorderRadiusWidth.bottom}${teamMemberIconsBorderRadiusUnits.Desktop} ${teamMemberIconsDesktopBorderRadiusWidth.left}${teamMemberIconsBorderRadiusUnits.Desktop}`;
	const teamMemberIconsTabBorderRadius = `${teamMemberIconsTabBorderRadiusWidth.top}${teamMemberIconsBorderRadiusUnits.Tablet} ${teamMemberIconsTabBorderRadiusWidth.right}${teamMemberIconsBorderRadiusUnits.Tablet} ${teamMemberIconsTabBorderRadiusWidth.bottom}${teamMemberIconsBorderRadiusUnits.Tablet} ${teamMemberIconsTabBorderRadiusWidth.left}${teamMemberIconsBorderRadiusUnits.Tablet}`;
	const teamMemberIconsMobileBorderRadius = `${teamMemberIconsMobileBorderRadiusWidth.top}${teamMemberIconsBorderRadiusUnits.Mobile} ${teamMemberIconsMobileBorderRadiusWidth.right}${teamMemberIconsBorderRadiusUnits.Mobile} ${teamMemberIconsMobileBorderRadiusWidth.bottom}${teamMemberIconsBorderRadiusUnits.Mobile} ${teamMemberIconsMobileBorderRadiusWidth.left}${teamMemberIconsBorderRadiusUnits.Mobile}`;


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

	const teamMemberSocialProfileDesktopBorder = `${teamMemberSocialProfileDesktopBorderWidth.top}${teamMemberSocialProfileBorderUnits.Desktop} ${teamMemberSocialProfileDesktopBorderWidth.right}${teamMemberSocialProfileBorderUnits.Desktop} ${teamMemberSocialProfileDesktopBorderWidth.bottom}${teamMemberSocialProfileBorderUnits.Desktop} ${teamMemberSocialProfileDesktopBorderWidth.left}${teamMemberSocialProfileBorderUnits.Desktop}`;
	const teamMemberSocialProfileTabBorder = `${teamMemberSocialProfileTabBorderWidth.top}${teamMemberSocialProfileBorderUnits.Tablet} ${teamMemberSocialProfileTabBorderWidth.right}${teamMemberSocialProfileBorderUnits.Tablet} ${teamMemberSocialProfileTabBorderWidth.bottom}${teamMemberSocialProfileBorderUnits.Tablet} ${teamMemberSocialProfileTabBorderWidth.left}${teamMemberSocialProfileBorderUnits.Tablet}`;
	const teamMemberSocialProfileMobileBorder = `${teamMemberSocialProfileMobileBorderWidth.top}${teamMemberSocialProfileBorderUnits.Mobile} ${teamMemberSocialProfileMobileBorderWidth.right}${teamMemberSocialProfileBorderUnits.Mobile} ${teamMemberSocialProfileMobileBorderWidth.bottom}${teamMemberSocialProfileBorderUnits.Mobile} ${teamMemberSocialProfileMobileBorderWidth.left}${teamMemberSocialProfileBorderUnits.Mobile}`;

	

	// // Email Margin
	// const handleEmailMarginUnitChange = ( event, position ) => {
	// 	const value = event.target.value;
	// 	if ( teamMemberEmailMarginLink ) {
	// 		switch ( deviceType ) {
	// 			case 'Desktop':
	// 				setAttributes( {
	// 					teamMemberEmailMarginDesktop: {
	// 						top: value,
	// 						right: value,
	// 						bottom: value,
	// 						left: value
	// 					}
	// 				} );
	// 				break;
	// 			case 'Tablet':
	// 				setAttributes( {
	// 					teamMemberEmailMarginTablet: {
	// 						top: value,
	// 						right: value,
	// 						bottom: value,
	// 						left: value
	// 					}
	// 				} );
	// 				break;
	// 			case 'Mobile':
	// 				setAttributes( {
	// 					teamMemberEmailMarginMobile: {
	// 						top: value,
	// 						right: value,
	// 						bottom: value,
	// 						left: value
	// 					}
	// 				} );
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 	} else {
	// 		switch ( deviceType ) {
	// 			case 'Desktop':
	// 				setAttributes( {teamMemberEmailMarginDesktop: {...teamMemberEmailMarginDesktop, [position]: value}} );
	// 				break;
	// 			case 'Tablet':
	// 				setAttributes( {teamMemberEmailMarginTablet: {...teamMemberEmailMarginTablet, [position]: value}} );
	// 				break;
	// 			case 'Mobile':
	// 				setAttributes( {teamMemberEmailMarginMobile: {...teamMemberEmailMarginMobile, [position]: value}} );
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 	}

	// }

	// const handleEmailMarginCombineBtn = () => {
	// 	setAttributes( {teamMemberEmailMarginLink: !teamMemberEmailMarginLink} );
	// }

	// const handleEmailMarginUnitsHandler = (unit) => {
	// 	setAttributes( {
	// 		teamMemberEmailMarginUnits: {
	// 			...teamMemberEmailMarginUnits,
	// 			[deviceType]: unit
	// 		}
	// 	})
	// }

	// const teamMemberEmailMarginDesktopWidth = `${teamMemberEmailMarginDesktop.top}${teamMemberEmailMarginUnits.Desktop} ${teamMemberEmailMarginDesktop.right}${teamMemberEmailMarginUnits.Desktop} ${teamMemberEmailMarginDesktop.bottom}${teamMemberEmailMarginUnits.Desktop} ${teamMemberEmailMarginDesktop.left}${teamMemberEmailMarginUnits.Desktop}`;
	// const teamMemberEmailMarginTabletWidth = `${teamMemberEmailMarginTablet.top}${teamMemberEmailMarginUnits.Tablet} ${teamMemberEmailMarginTablet.right}${teamMemberEmailMarginUnits.Tablet} ${teamMemberEmailMarginTablet.bottom}${teamMemberEmailMarginUnits.Tablet} ${teamMemberEmailMarginTablet.left}${teamMemberEmailMarginUnits.Tablet}`;
	// const teamMemberEmailMarginMobileWidth = `${teamMemberEmailMarginMobile.top}${teamMemberEmailMarginUnits.Mobile} ${teamMemberEmailMarginMobile.right}${teamMemberEmailMarginUnits.Mobile} ${teamMemberEmailMarginMobile.bottom}${teamMemberEmailMarginUnits.Mobile} ${teamMemberEmailMarginMobile.left}${teamMemberEmailMarginUnits.Mobile}`;
	
	// // Email Padding
	// const handleEmailPaddingUnitChange = ( event, position ) => {
	// 	const value = event.target.value;
	// 	if ( teamMemberEmailPaddingLink ) {
	// 		switch ( deviceType ) {
	// 			case 'Desktop':
	// 				setAttributes( {
	// 					teamMemberEmailPaddingDesktop: {
	// 						top: value,
	// 						right: value,
	// 						bottom: value,
	// 						left: value
	// 					}
	// 				} );
	// 				break;
	// 			case 'Tablet':
	// 				setAttributes( {
	// 					teamMemberEmailPaddingTablet: {
	// 						top: value,
	// 						right: value,
	// 						bottom: value,
	// 						left: value
	// 					}
	// 				} );
	// 				break;
	// 			case 'Mobile':
	// 				setAttributes( {
	// 					teamMemberEmailPaddingMobile: {
	// 						top: value,
	// 						right: value,
	// 						bottom: value,
	// 						left: value
	// 					}
	// 				} );
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 	} else {
	// 		switch ( deviceType ) {
	// 			case 'Desktop':
	// 				setAttributes( {teamMemberEmailPaddingDesktop: {...teamMemberEmailPaddingDesktop, [position]: value}} );
	// 				break;
	// 			case 'Tablet':
	// 				setAttributes( {teamMemberEmailPaddingTablet: {...teamMemberEmailPaddingTablet, [position]: value}} );
	// 				break;
	// 			case 'Mobile':
	// 				setAttributes( {teamMemberEmailPaddingMobile: {...teamMemberEmailPaddingMobile, [position]: value}} );
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 	}

	// }

	// const handleEmailPaddingCombineBtn = () => {
	// 	setAttributes( {teamMemberEmailPaddingLink: !teamMemberEmailPaddingLink} );
	// }

	// const handleEmailPaddingUnitsHandler = (unit) => {
	// 	setAttributes( {
	// 		teamMemberEmailPaddingUnits: {
	// 			...teamMemberEmailPaddingUnits,
	// 			[deviceType]: unit
	// 		}
	// 	})
	// }

	// const teamMemberEmailPaddingDesktopWidth = `${teamMemberEmailPaddingDesktop.top}${teamMemberEmailPaddingUnits.Desktop} ${teamMemberEmailPaddingDesktop.right}${teamMemberEmailPaddingUnits.Desktop} ${teamMemberEmailPaddingDesktop.bottom}${teamMemberEmailPaddingUnits.Desktop} ${teamMemberEmailPaddingDesktop.left}${teamMemberEmailPaddingUnits.Desktop}`;
	// const teamMemberEmailPaddingTabletWidth = `${teamMemberEmailPaddingTablet.top}${teamMemberEmailPaddingUnits.Tablet} ${teamMemberEmailPaddingTablet.right}${teamMemberEmailPaddingUnits.Tablet} ${teamMemberEmailPaddingTablet.bottom}${teamMemberEmailPaddingUnits.Tablet} ${teamMemberEmailPaddingTablet.left}${teamMemberEmailPaddingUnits.Tablet}`;
	// const teamMemberEmailPaddingMobileWidth = `${teamMemberEmailPaddingMobile.top}${teamMemberEmailPaddingUnits.Mobile} ${teamMemberEmailPaddingMobile.right}${teamMemberEmailPaddingUnits.Mobile} ${teamMemberEmailPaddingMobile.bottom}${teamMemberEmailPaddingUnits.Mobile} ${teamMemberEmailPaddingMobile.left}${teamMemberEmailPaddingUnits.Mobile}`;
	

	
	const fbTeamMemberStyle = useMemo(
		() => `

			.fb-team-member-main-wrapper.${blockID} {
				${teamMemberPositionType === 'default' ? `position: relative;` : ''}
				${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' ? `width: 100%;` : ''}
				${teamMemberPositionType !== 'default' ? `position: ${teamMemberPositionType};` : ''}
				${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'left' && teamMemberHZLeftOffset.Desktop ? `left: ${teamMemberHZLeftOffset.Desktop}${teamMemberHZLeftOffsetUnits.Desktop};` : ''}
				${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'right' && teamMemberHZRightOffset.Desktop ? `right: ${teamMemberHZRightOffset.Desktop}${teamMemberHZRightOffsetUnits.Desktop};` : ''}
				${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'top' && teamMemberVRTopOffset.Desktop ? `top: ${teamMemberVRTopOffset.Desktop}${teamMemberVRTopOffsetUnits.Desktop};` : ''}
				${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'bottom' && teamMemberVRBottomOffset.Desktop ? `bottom: ${teamMemberVRBottomOffset.Desktop}${teamMemberVRBottomOffsetUnits.Desktop};` : ''}
				${teamMemberZIndex.Desktop ? `z-index: ${teamMemberZIndex.Desktop};` : ''}
				${teamMemberOverflow !== 'default' ? `overflow: ${teamMemberOverflow};` : ''}
			}
			.fb-team-member-main-wrapper.${blockID} .fb-team-member-wrapper {
				position: relative;
				${
                    teamMemberBgType === "gradient"
                      ? `background: ${
                          teamMemberBgCustomGradientSwitcher && teamMemberBgCustomGradientInputValue
                            ? teamMemberBgCustomGradientInputValue
                            : teamMemberBgGradientColor
                        };`
                      : teamMemberBgImageUrl && teamMemberBgImageUrl !== null && teamMemberBgImageUrl !== ""
                      ? `
                        ${teamMemberBgImageUrl ? `background-image: url(${teamMemberBgImageUrl});` : ''}
                        ${teamMemberBgImagePosition ? `background-position: ${teamMemberBgImagePosition};` : ''}
                        ${teamMemberBgImageAttachment ? `background-attachment: ${teamMemberBgImageAttachment};` : ''}
                        ${teamMemberBgImageRepeat ? `background-repeat: ${teamMemberBgImageRepeat};` : ''}
                        ${teamMemberBgImageSize ? `background-size: ${teamMemberBgImageSize};` : ''}
                      `
                      : teamMemberBgClassicColor ? `background: ${teamMemberBgClassicColor};` : ''
                }
				${teamMemberPaddingDesktopWidth && teamMemberDesktopPadding.top ? `padding: ${teamMemberPaddingDesktopWidth};` : ''}
				${teamMemberMarginDesktopWidth && teamMemberDesktopMargin.top ? `margin: ${teamMemberMarginDesktopWidth};` : ''}
				${teamMemberBorder ? `border-style: ${teamMemberBorder};` : ''}
				${teamMemberBorderDesktopWidth && teamMemberDesktopBorderWidth.top ? `border-width: ${teamMemberBorderDesktopWidth};` : ''}
				${teamMemberBorderColor ? `border-color: ${teamMemberBorderColor};` : ''}
				${teamMemberBorderRadiusDesktopWidth && teamMemberDesktopBorderRadiusWidth.top ? `border-radius: ${teamMemberBorderRadiusDesktopWidth};` : ''}
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
					  : teamMemberBgHoverImageUrl && teamMemberBgHoverImageUrl !== null && teamMemberBgHoverImageUrl !== ""
					  ? `
						${teamMemberBgHoverImageUrl ? `background-image: url(${teamMemberBgHoverImageUrl});` : ''}
						${teamMemberBgHoverImagePosition ? `background-position: ${teamMemberBgHoverImagePosition};` : ''}
						${teamMemberBgHoverImageAttachment ? `background-attachment: ${teamMemberBgHoverImageAttachment};` : ''}
						${teamMemberBgHoverImageRepeat ? `background-repeat: ${teamMemberBgHoverImageRepeat};` : ''}
						${teamMemberBgHoverImageSize ? `background-size: ${teamMemberBgHoverImageSize};` : ''}
					  `
					  : teamMemberBgHoverClassicColor ? `background: ${teamMemberBgHoverClassicColor};` : ''
				}
				${teamMemberBorderHoverColor ? `border-color: ${teamMemberBorderHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper {
				position: relative;
				display: flex;
				flex-direction: column;
				${teamMemberImageWidthUnits.Desktop === '%' ? 'width: 100%;' : ''}
				${teamMemberImageAlignment === 'left' ? 'justify-content: start' : ''}
				${teamMemberImageAlignment === 'center' ? 'justify-content: center' : ''}
				${teamMemberImageAlignment === 'right' ? 'justify-content: end' : ''}
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image img {
				${teamMemberImagePosition ? `object-position: ${teamMemberImagePosition};` : ''}
                ${teamMemberImageSize ? `object-fit: ${teamMemberImageSize};` : ''}
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image {
				position: relative;
				z-index: 2;
				overflow: hidden;
				${teamMemberImageWidth.Desktop ? `width: ${teamMemberImageWidth.Desktop}${teamMemberImageWidthUnits.Desktop};` : ''}
				${teamMemberImageHeight.Desktop ? `height: ${teamMemberImageHeight.Desktop}${teamMemberImageHeightUnits.Desktop};` : ''}
				${teamMemberImageBorder ? `border: ${teamMemberImageBorder};` : ''}
				${teamMemberImageBorderColor ? `border-color: ${teamMemberImageBorderColor};` : ''}
				${teamMemberImageBorderTypeGetDesktop && teamMemberImageBorderDesktop.top ? `border-width: ${teamMemberImageBorderTypeGetDesktop};` : ''}
				${teamMemberImageBorderRadiusGetDesktop && teamMemberImageBorderRadiusDesktop.top ? `border-radius: ${teamMemberImageBorderRadiusGetDesktop};` : ''}
				${teamMemberImageMarginGetDesktop && teamMemberImageMarginDesktop.top ? `margin: ${teamMemberImageMarginGetDesktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-image {
				${teamMemberImageBorderHoverColor ? `border-color: ${teamMemberImageBorderHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}

			.fb-team-member-wrapper.${blockID} .fb-team-member-item {
				position: relative;
				overflow: hidden;
				display: flex;
				flex-direction: column;
			}

			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-flip-back {
				${
                    teamMemberContentBgType === "gradient"
                      ? `background: ${
                          teamMemberContentBgCustomGradientSwitcher && teamMemberContentBgCustomGradientInputValue
                            ? teamMemberContentBgCustomGradientInputValue
                            : teamMemberContentBgGradientColor
                        };`
                      : teamMemberContentBgImageUrl && teamMemberContentBgImageUrl !== null && teamMemberContentBgImageUrl !== ""
                      ? `
                        ${teamMemberContentBgImageUrl ? `background-image: url(${teamMemberContentBgImageUrl});` : ''}
                        ${teamMemberContentBgImagePosition ? `background-position: ${teamMemberContentBgImagePosition};` : ''}
                        ${teamMemberContentBgImageAttachment ? `background-attachment: ${teamMemberContentBgImageAttachment};` : ''}
                        ${teamMemberContentBgImageRepeat ? `background-repeat: ${teamMemberContentBgImageRepeat};` : ''}
                        ${teamMemberContentBgImageSize ? `background-size: ${teamMemberContentBgImageSize};` : ''}
                      `
                      : teamMemberContentBgClassicColor ? `background: ${teamMemberContentBgClassicColor};` : ''
                }
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-flip-back-content {
				${teamMemberContentPaddingGetDesktop && teamMemberContentPaddingDesktop.top ? `padding: ${teamMemberContentPaddingGetDesktop};` : ''}
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper {
				height: fit-content;
				display: flex;
				${teamMemberContentAlignment ? `justify-content: ${teamMemberContentAlignment === 'left' ? 'start' : teamMemberContentAlignment === 'center' ? 'center' : teamMemberContentAlignment === 'right' && 'end'};` : ''}
				${teamMemberContentAlignment ? `text-align: ${teamMemberContentAlignment};` : ''}
				${teamMemberContentBorder ? `border: ${teamMemberContentBorder};` : ''}
				${teamMemberContentBorderColor ? `border-color: ${teamMemberContentBorderColor};` : ''}
				${teamMemberContentBorderTypeGetDesktop && teamMemberContentBorderDesktop.top ? `border-width: ${teamMemberContentBorderTypeGetDesktop};` : ''}
				${teamMemberContentBorderRadiusGetDesktop && teamMemberContentBorderRadiusDesktop.top ? `border-radius: ${teamMemberContentBorderRadiusGetDesktop};` : ''}
				${teamMemberContentMarginGetDesktop && teamMemberContentMarginDesktop.top ? `margin: ${teamMemberContentMarginGetDesktop};` : ''}
			}
			
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper .fb-team-member-image-overlay {
				${teamMemberImageBGColor ? `background: ${teamMemberImageBGColor};` : ''}
				${teamMemberImageOverlayOpacity.Desktop ? `opacity: ${teamMemberImageOverlayOpacity.Desktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-image-wrapper .fb-team-member-image-overlay {
				${teamMemberImageBGHoverColor ? `background: ${teamMemberImageBGHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}

			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name {
				${teamMemberNameGlobalTypoSwitcher.fontFamily === true && teamMemberNameGlobalTypographyData.fontFamily ? `font-family: ${teamMemberNameGlobalTypographyData.fontFamily};` : ''}
				${teamMemberNameGlobalTypoSwitcher.fontSize === true && teamMemberNameGlobalTypographyData.fontSize ? `font-size: ${teamMemberNameGlobalTypographyData.fontSize};` : ''}
				${teamMemberNameGlobalTypoSwitcher.fontWeight === true && teamMemberNameGlobalTypographyData.fontWeight ? `font-weight: ${teamMemberNameGlobalTypographyData.fontWeight};` : ''}
				${teamMemberNameGlobalTypoSwitcher.fontStyle === true && teamMemberNameGlobalTypographyData.fontStyle ? `font-style: ${teamMemberNameGlobalTypographyData.fontStyle};` : ''}
				${teamMemberNameGlobalTypoSwitcher.textTransform === true && teamMemberNameGlobalTypographyData.textTransform ? `text-transform: ${teamMemberNameGlobalTypographyData.textTransform};` : ''}
				${teamMemberNameGlobalTypoSwitcher.textDecoration === true && teamMemberNameGlobalTypographyData.textDecoration ? `text-decoration: ${teamMemberNameGlobalTypographyData.textDecoration};` : ''}
				${teamMemberNameGlobalTypoSwitcher.letterSpacing === true && teamMemberNameGlobalTypographyData.letterSpacing ? `letter-spacing: ${teamMemberNameGlobalTypographyData.letterSpacing};` : ''}
				${teamMemberNameGlobalTypoSwitcher.lineHeight === true && teamMemberNameGlobalTypographyData.lineHeight ? `line-height: ${teamMemberNameGlobalTypographyData.lineHeight};` : ''}
				
				${teamMemberNameGlobalTypoSwitcher.fontFamily === false && teamMemberNameFontFamily && teamMemberNameFontFamily !== 'Default' ? `font-family: ${teamMemberNameFontFamily};` : ''}
				${teamMemberNameGlobalTypoSwitcher.fontSize === false && teamMemberNameFontSize?.Desktop ? `font-size: ${teamMemberNameFontSize.Desktop}${teamMemberNameFontSizeUnits.Desktop};` : ''}
				${teamMemberNameGlobalTypoSwitcher.fontWeight === false && teamMemberNameFontWeight ? `font-weight: ${teamMemberNameFontWeight};` : ''}
				${teamMemberNameGlobalTypoSwitcher.fontStyle === false && teamMemberNameFontStyle ? `font-style: ${teamMemberNameFontStyle};` : ''}
				${teamMemberNameGlobalTypoSwitcher.textTransform === false && teamMemberNameTextTransform ? `text-transform: ${teamMemberNameTextTransform};` : ''}
				${teamMemberNameGlobalTypoSwitcher.textDecoration === false && teamMemberNameTextDecoration ? `text-decoration: ${teamMemberNameTextDecoration};` : ''}
				${teamMemberNameGlobalTypoSwitcher.letterSpacing === false && teamMemberNameLetterSpacing?.Desktop ? `letter-spacing: ${teamMemberNameLetterSpacing.Desktop}${teamMemberNameLetterSpacingUnits.Desktop};` : ''}
				${teamMemberNameGlobalTypoSwitcher.lineHeight === false && teamMemberNameLineHeight?.Desktop ? `line-height: ${teamMemberNameLineHeight.Desktop}${teamMemberNameLineHeightUnits.Desktop};` : ''}
				${teamMemberNameColor ? `color: ${teamMemberNameColor};` : ''}
				${teamMemberNameMarginGetDesktop && teamMemberNameMarginDesktop.top ? `margin: ${teamMemberNameMarginGetDesktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name:hover {
				${teamMemberNameHoverColor ? `color: ${teamMemberNameHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation {
				${teamMemberDesignationGlobalTypoSwitcher.fontFamily === true && teamMemberDesignationGlobalTypographyData.fontFamily ? `font-family: ${teamMemberDesignationGlobalTypographyData.fontFamily};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.fontSize === true && teamMemberDesignationGlobalTypographyData.fontSize ? `font-size: ${teamMemberDesignationGlobalTypographyData.fontSize};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.fontWeight === true && teamMemberDesignationGlobalTypographyData.fontWeight ? `font-weight: ${teamMemberDesignationGlobalTypographyData.fontWeight};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.fontStyle === true && teamMemberDesignationGlobalTypographyData.fontStyle ? `font-style: ${teamMemberDesignationGlobalTypographyData.fontStyle};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.textTransform === true && teamMemberDesignationGlobalTypographyData.textTransform ? `text-transform: ${teamMemberDesignationGlobalTypographyData.textTransform};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.textDecoration === true && teamMemberDesignationGlobalTypographyData.textDecoration ? `text-decoration: ${teamMemberDesignationGlobalTypographyData.textDecoration};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.letterSpacing === true && teamMemberDesignationGlobalTypographyData.letterSpacing ? `letter-spacing: ${teamMemberDesignationGlobalTypographyData.letterSpacing};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.lineHeight === true && teamMemberDesignationGlobalTypographyData.lineHeight ? `line-height: ${teamMemberDesignationGlobalTypographyData.lineHeight};` : ''}
				
				${teamMemberDesignationGlobalTypoSwitcher.fontFamily === false && teamMemberDesignationFontFamily && teamMemberDesignationFontFamily !== 'Default' ? `font-family: ${teamMemberDesignationFontFamily};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.fontSize === false && teamMemberDesignationFontSize?.Desktop ? `font-size: ${teamMemberDesignationFontSize.Desktop}${teamMemberDesignationFontSizeUnits.Desktop};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.fontWeight === false && teamMemberDesignationFontWeight ? `font-weight: ${teamMemberDesignationFontWeight};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.fontStyle === false && teamMemberDesignationFontStyle ? `font-style: ${teamMemberDesignationFontStyle};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.textTransform === false && teamMemberDesignationTextTransform ? `text-transform: ${teamMemberDesignationTextTransform};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.textDecoration === false && teamMemberDesignationTextDecoration ? `text-decoration: ${teamMemberDesignationTextDecoration};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.letterSpacing === false && teamMemberDesignationLetterSpacing?.Desktop ? `letter-spacing: ${teamMemberDesignationLetterSpacing.Desktop}${teamMemberDesignationLetterSpacingUnits.Desktop};` : ''}
				${teamMemberDesignationGlobalTypoSwitcher.lineHeight === false && teamMemberDesignationLineHeight?.Desktop ? `line-height: ${teamMemberDesignationLineHeight.Desktop}${teamMemberDesignationLineHeightUnits.Desktop};` : ''}
				${teamMemberDesignationColor ? `color: ${teamMemberDesignationColor};` : ''}
				${teamMemberDesignationMarginGetDesktop && teamMemberDesignationMarginDesktop.top ? `margin: ${teamMemberDesignationMarginGetDesktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation:hover {
				${teamMemberDesignationHoverColor ? `color: ${teamMemberDesignationHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}

			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc {
				${teamMemberDescGlobalTypoSwitcher.fontFamily === true && teamMemberDescGlobalTypographyData.fontFamily ? `font-family: ${teamMemberDescGlobalTypographyData.fontFamily};` : ''}
				${teamMemberDescGlobalTypoSwitcher.fontSize === true && teamMemberDescGlobalTypographyData.fontSize ? `font-size: ${teamMemberDescGlobalTypographyData.fontSize};` : ''}
				${teamMemberDescGlobalTypoSwitcher.fontWeight === true && teamMemberDescGlobalTypographyData.fontWeight ? `font-weight: ${teamMemberDescGlobalTypographyData.fontWeight};` : ''}
				${teamMemberDescGlobalTypoSwitcher.fontStyle === true && teamMemberDescGlobalTypographyData.fontStyle ? `font-style: ${teamMemberDescGlobalTypographyData.fontStyle};` : ''}
				${teamMemberDescGlobalTypoSwitcher.textTransform === true && teamMemberDescGlobalTypographyData.textTransform ? `text-transform: ${teamMemberDescGlobalTypographyData.textTransform};` : ''}
				${teamMemberDescGlobalTypoSwitcher.textDecoration === true && teamMemberDescGlobalTypographyData.textDecoration ? `text-decoration: ${teamMemberDescGlobalTypographyData.textDecoration};` : ''}
				${teamMemberDescGlobalTypoSwitcher.letterSpacing === true && teamMemberDescGlobalTypographyData.letterSpacing ? `letter-spacing: ${teamMemberDescGlobalTypographyData.letterSpacing};` : ''}
				${teamMemberDescGlobalTypoSwitcher.lineHeight === true && teamMemberDescGlobalTypographyData.lineHeight ? `line-height: ${teamMemberDescGlobalTypographyData.lineHeight};` : ''}
				
				${teamMemberDescGlobalTypoSwitcher.fontFamily === false && teamMemberDescFontFamily && teamMemberDescFontFamily !== 'Default' ? `font-family: ${teamMemberDescFontFamily};` : ''}
				${teamMemberDescGlobalTypoSwitcher.fontSize === false && teamMemberDescFontSize?.Desktop ? `font-size: ${teamMemberDescFontSize.Desktop}${teamMemberDescFontSizeUnits.Desktop};` : ''}
				${teamMemberDescGlobalTypoSwitcher.fontWeight === false && teamMemberDescFontWeight ? `font-weight: ${teamMemberDescFontWeight};` : ''}
				${teamMemberDescGlobalTypoSwitcher.fontStyle === false && teamMemberDescFontStyle ? `font-style: ${teamMemberDescFontStyle};` : ''}
				${teamMemberDescGlobalTypoSwitcher.textTransform === false && teamMemberDescTextTransform ? `text-transform: ${teamMemberDescTextTransform};` : ''}
				${teamMemberDescGlobalTypoSwitcher.textDecoration === false && teamMemberDescTextDecoration ? `text-decoration: ${teamMemberDescTextDecoration};` : ''}
				${teamMemberDescGlobalTypoSwitcher.letterSpacing === false && teamMemberDescLetterSpacing?.Desktop ? `letter-spacing: ${teamMemberDescLetterSpacing.Desktop}${teamMemberDescLetterSpacingUnits.Desktop};` : ''}
				${teamMemberDescGlobalTypoSwitcher.lineHeight === false && teamMemberDescLineHeight?.Desktop ? `line-height: ${teamMemberDescLineHeight.Desktop}${teamMemberDescLineHeightUnits.Desktop};` : ''}
				${teamMemberDescColor ? `color: ${teamMemberDescColor};` : ''}
				${teamMemberDescMarginGetDesktop && teamMemberDescMarginDesktop.top ? `margin: ${teamMemberDescMarginGetDesktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc:hover {
				${teamMemberDescHoverColor ? `color: ${teamMemberDescHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
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
				${teamMemberIconsDesktopMarginWidth && teamMemberIconsDesktopMargin.top ? `margin: ${teamMemberIconsDesktopMarginWidth};` : ''}
				${teamMemberSocialProfileBorder ? `border-style: ${teamMemberSocialProfileBorder};` : ''}
				${teamMemberSocialProfileDesktopBorder && teamMemberSocialProfileDesktopBorderWidth.top ? `border-width: ${teamMemberSocialProfileDesktopBorder};` : ''}
				${teamMemberSocialProfileBorderColor ? `border-color: ${teamMemberSocialProfileBorderColor};` : ''}
				overflow: hidden;
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-social-profile-wrapper {
				${teamMemberSocialProfileBorderHoverColor ? `border-color: ${teamMemberSocialProfileBorderHoverColor};` : ''}
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
			.fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-social-profile {
				${teamMemberSocialIconAnimationType !== 'default' ? 'visibility: visible; opacity: 1; transform: translate(0);' : ''}
				transition: all 0.5s ease-in-out;
			}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
					${teamMemberIconsDesktopPaddingWidth && teamMemberIconsDesktopPadding.top ? `padding: ${teamMemberIconsDesktopPaddingWidth};` : ''}
					${teamMemberIconsBGColor ? `background-color: ${teamMemberIconsBGColor};` : ''}
					${teamMemberIconsBorder ? `border-style: ${teamMemberIconsBorder};` : ''}
					${teamMemberIconsDesktopBorder && teamMemberIconsDesktopBorderWidth.top ? `border-width: ${teamMemberIconsDesktopBorder};` : ''}
					${teamMemberIconsBorderColor ? `border-color: ${teamMemberIconsBorderColor};` : ''}
					${teamMemberIconsDesktopBorderRadius && teamMemberIconsDesktopBorderRadiusWidth.top ? `border-radius: ${teamMemberIconsDesktopBorderRadius};` : ''}
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon:hover {
					${teamMemberIconsBGHoverColor ? `background-color: ${teamMemberIconsBGHoverColor};` : ''}
					${teamMemberIconsBorderHoverColor ? `border-color: ${teamMemberIconsBorderHoverColor};` : ''}
					transition: all 0.3s ease-in-out;
				}

				@media only screen and (max-width: 1024px) {
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
						${teamMemberIconsTabPaddingWidth && teamMemberIconsTabPadding.top ? `padding: ${teamMemberIconsTabPaddingWidth};` : ''}
						${teamMemberIconsTabBorder && teamMemberIconsTabBorderWidth.top ? `border-width: ${teamMemberIconsTabBorder};` : ''}
						${teamMemberIconsTabBorderRadius && teamMemberIconsTabBorderRadiusWidth.top ? `border-radius: ${teamMemberIconsTabBorderRadius};` : ''}
					}
				}
				@media only screen and (max-width: 767px) {
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
						${teamMemberIconsMobilePaddingWidth && teamMemberIconsMobilePadding.top ? `padding: ${teamMemberIconsMobilePaddingWidth};` : ''}
						${teamMemberIconsMobileBorder && teamMemberIconsMobileBorderWidth.top ? `border-width: ${teamMemberIconsMobileBorder};` : ''}
						${teamMemberIconsMobileBorderRadius && teamMemberIconsMobileBorderRadiusWidth.top ? `border-radius: ${teamMemberIconsMobileBorderRadius};` : ''}
					}
				}

			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon svg {
				${teamMemberIconsSize.Desktop ? `width: ${teamMemberIconsSize.Desktop}${teamMemberIconsSizeUnits.Desktop};` : ''}
				${teamMemberIconsSize.Desktop ? `height: ${teamMemberIconsSize.Desktop}${teamMemberIconsSizeUnits.Desktop};` : ''}
				${teamMemberIconsColor ? `fill: ${teamMemberIconsColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon:hover svg {
				${teamMemberIconsHoverColor ? `fill: ${teamMemberIconsHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}

			${socialIconBtnSwitcher === true ? `
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
					display: flex;
					justify-content: center;
					align-items: center;
					${socialIconBtnDesktopMarginWidth && socialIconBtnDesktopMargin.top ? `margin: ${socialIconBtnDesktopMarginWidth};` : ''}
					${socialIconBtnDesktopPaddingWidth && socialIconBtnDesktopPadding.top ? `padding: ${socialIconBtnDesktopPaddingWidth};` : ''}
					${socialIconBtnBGColor ? `background-color: ${socialIconBtnBGColor};` : ''}
					${socialIconBtnBorder ? `border-style: ${socialIconBtnBorder};` : ''}
					${socialIconBtnDesktopBorder && socialIconBtnDesktopBorderWidth.top ? `border-width: ${socialIconBtnDesktopBorder};` : ''}
					${socialIconBtnBorderColor ? `border-color: ${socialIconBtnBorderColor};` : ''}
					${socialIconBtnDesktopBorderRadius && socialIconBtnDesktopBorderRadiusWidth.top ? `border-radius: ${socialIconBtnDesktopBorderRadius};` : ''}
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
					${socialIconBtnBGHoverColor ? `background-color: ${socialIconBtnBGHoverColor};` : ''}
					${socialIconBtnBorderHoverColor ? `border-color: ${socialIconBtnBorderHoverColor};` : ''}
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn svg {
					${socialIconBtnColor ? `fill: ${socialIconBtnColor};` : ''}
					${socialIconBtnIconSize?.Desktop ? `width: ${socialIconBtnIconSize.Desktop}${socialIconBtnIconSizeUnits.Desktop};` : ''}
					${socialIconBtnIconSize?.Desktop ? `height: ${socialIconBtnIconSize.Desktop}${socialIconBtnIconSizeUnits.Desktop};` : ''}
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-wrapper.${blockID}:hover .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
					${socialIconBtnHoverColor ? `fill: ${socialIconBtnHoverColor};` : ''}
					transition: all 0.3s ease-in-out;
				}
				
				@media only screen and (max-width: 1024px) {
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
						${socialIconBtnTabMarginWidth && socialIconBtnTabMargin.top ? `margin: ${socialIconBtnTabMarginWidth};` : ''}
						${socialIconBtnTabPaddingWidth && socialIconBtnTabPadding.top ? `padding: ${socialIconBtnTabPaddingWidth};` : ''}
						${socialIconBtnTabBorder && socialIconBtnTabBorderWidth.top ? `border-width: ${socialIconBtnTabBorder};` : ''}
						${socialIconBtnTabBorderRadius && socialIconBtnTabBorderRadiusWidth.top ? `border-radius: ${socialIconBtnTabBorderRadius};` : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn svg {
						${socialIconBtnIconSize?.Tablet ? `width: ${socialIconBtnIconSize.Tablet}${socialIconBtnIconSizeUnits.Tablet};` : ''}
						${socialIconBtnIconSize?.Tablet ? `height: ${socialIconBtnIconSize.Tablet}${socialIconBtnIconSizeUnits.Tablet};` : ''}
					}
				}
				@media only screen and (max-width: 767px) {
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn {
						${socialIconBtnMobileMarginWidth && socialIconBtnMobileMargin.top ? `margin: ${socialIconBtnMobileMarginWidth};` : ''}
						${socialIconBtnMobilePaddingWidth && socialIconBtnMobilePadding.top ? `padding: ${socialIconBtnMobilePaddingWidth};` : ''}
						${socialIconBtnMobileBorder && socialIconBtnMobileBorderWidth.top ? `border-width: ${socialIconBtnMobileBorder};` : ''}
						${socialIconBtnMobileBorderRadius && socialIconBtnMobileBorderRadiusWidth.top ? `border-radius: ${socialIconBtnMobileBorderRadius};` : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper .fb-team-member-social-icon-wrapper-btn svg {
						${socialIconBtnIconSize?.Mobile ? `width: ${socialIconBtnIconSize.Mobile}${socialIconBtnIconSizeUnits.Mobile};` : ''}
						${socialIconBtnIconSize?.Mobile ? `height: ${socialIconBtnIconSize.Mobile}${socialIconBtnIconSizeUnits.Mobile};` : ''}
					}
				}
			` : ''}


			@media only screen and (max-width: 1024px) {
				.fb-team-member-main-wrapper.${blockID} {
					${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'left' && teamMemberHZLeftOffset.Tablet ? `left: ${teamMemberHZLeftOffset.Tablet}${teamMemberHZLeftOffsetUnits.Tablet};` : ''}
					${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'right' && teamMemberHZRightOffset.Tablet ? `right: ${teamMemberHZRightOffset.Tablet}${teamMemberHZRightOffsetUnits.Tablet};` : ''}
					${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'top' && teamMemberVRTopOffset.Tablet ? `top: ${teamMemberVRTopOffset.Tablet}${teamMemberVRTopOffsetUnits.Tablet};` : ''}
					${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'bottom' && teamMemberVRBottomOffset.Tablet ? `bottom: ${teamMemberVRBottomOffset.Tablet}${teamMemberVRBottomOffsetUnits.Tablet};` : ''}
					${teamMemberZIndex.Tablet ? `z-index: ${teamMemberZIndex.Tablet};` : ''}
				}
				.fb-team-member-main-wrapper.${blockID} .fb-team-member-wrapper {
					${teamMemberPaddingTabletWidth && teamMemberTabPadding.top ? `padding: ${teamMemberPaddingTabletWidth};` : ''}
					${teamMemberMarginTabletWidth && teamMemberTabMargin.top ? `margin: ${teamMemberMarginTabletWidth};` : ''}
					${teamMemberBorderTabletWidth && teamMemberTabBorderWidth.top ? `border-width: ${teamMemberBorderTabletWidth};` : ''}
					${teamMemberBorderRadiusTabletWidth && teamMemberTabBorderRadiusWidth.top ? `border-radius: ${teamMemberBorderRadiusTabletWidth};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper {
					${teamMemberImageWidthUnits.Tablet === '%' ? 'width: 100%;' : ''}
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image {
					${teamMemberImageWidth.Tablet ? `width: ${teamMemberImageWidth.Tablet}${teamMemberImageWidthUnits.Tablet};` : ''}
					${teamMemberImageHeight.Tablet ? `height: ${teamMemberImageHeight.Tablet}${teamMemberImageHeightUnits.Tablet};` : ''}
					${teamMemberImageBorderTypeGetTab && teamMemberImageBorderTab.top ? `border-width: ${teamMemberImageBorderTypeGetTab};` : ''}
					${teamMemberImageBorderRadiusGetTab && teamMemberImageBorderRadiusTab.top ? `border-radius: ${teamMemberImageBorderRadiusGetTab};` : ''}
					${teamMemberImageMarginGetTab && teamMemberImageMarginTab.top ? `margin: ${teamMemberImageMarginGetTab};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-flip-back-content {
					${teamMemberContentPaddingGetTab && teamMemberContentPaddingTab.top ? `padding: ${teamMemberContentPaddingGetTab};` : ''}
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper {
					${teamMemberContentBorderTypeGetTab && teamMemberContentBorderTab.top ? `border-width: ${teamMemberContentBorderTypeGetTab};` : ''}
					${teamMemberContentBorderRadiusGetTab && teamMemberContentBorderRadiusTab.top ? `border-radius: ${teamMemberContentBorderRadiusGetTab};` : ''}
					${teamMemberContentMarginGetTab && teamMemberContentMarginTab.top ? `margin: ${teamMemberContentMarginGetTab};` : ''}
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name {
					${teamMemberNameGlobalTypoSwitcher.fontSize === false && teamMemberNameFontSize?.Tablet ? `font-size: ${teamMemberNameFontSize.Tablet}${teamMemberNameFontSizeUnits.Tablet};` : ''}
					${teamMemberNameGlobalTypoSwitcher.letterSpacing === false && teamMemberNameLetterSpacing?.Tablet ? `letter-spacing: ${teamMemberNameLetterSpacing.Tablet}${teamMemberNameLetterSpacingUnits.Tablet};` : ''}
					${teamMemberNameGlobalTypoSwitcher.lineHeight === false && teamMemberNameLineHeight?.Tablet ? `line-height: ${teamMemberNameLineHeight.Tablet}${teamMemberNameLineHeightUnits.Tablet};` : ''}
					${teamMemberNameMarginGetTab && teamMemberNameMarginTab.top ? `margin: ${teamMemberNameMarginGetTab};` : ''}
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation {
					${teamMemberDesignationGlobalTypoSwitcher.fontSize === false && teamMemberDesignationFontSize?.Tablet ? `font-size: ${teamMemberDesignationFontSize.Tablet}${teamMemberDesignationFontSizeUnits.Tablet};` : ''}
					${teamMemberDesignationGlobalTypoSwitcher.letterSpacing === false && teamMemberDesignationLetterSpacing?.Tablet ? `letter-spacing: ${teamMemberDesignationLetterSpacing.Tablet}${teamMemberDesignationLetterSpacingUnits.Tablet};` : ''}
					${teamMemberDesignationGlobalTypoSwitcher.lineHeight === false && teamMemberDesignationLineHeight?.Tablet ? `line-height: ${teamMemberDesignationLineHeight.Tablet}${teamMemberDesignationLineHeightUnits.Tablet};` : ''}
					${teamMemberDesignationMarginGetTab && teamMemberDesignationMarginTab.top ? `margin: ${teamMemberDesignationMarginGetTab};` : ''}
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc {
					${teamMemberDescGlobalTypoSwitcher.fontSize === false && teamMemberDescFontSize?.Tablet ? `font-size: ${teamMemberDescFontSize.Tablet}${teamMemberDescFontSizeUnits.Tablet};` : ''}
					${teamMemberDescGlobalTypoSwitcher.letterSpacing === false && teamMemberDescLetterSpacing?.Tablet ? `letter-spacing: ${teamMemberDescLetterSpacing.Tablet}${teamMemberDescLetterSpacingUnits.Tablet};` : ''}
					${teamMemberDescGlobalTypoSwitcher.lineHeight === false && teamMemberDescLineHeight?.Tablet ? `line-height: ${teamMemberDescLineHeight.Tablet}${teamMemberDescLineHeightUnits.Tablet};` : ''}
					${teamMemberDescMarginGetTab && teamMemberDescMarginTab.top ? `margin: ${teamMemberDescMarginGetTab};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper {
					${teamMemberIconsTabMarginWidth && teamMemberIconsTabMargin.top ? `margin: ${teamMemberIconsTabMarginWidth};` : ''}
					${teamMemberSocialProfileTabBorder && teamMemberSocialProfileTabBorderWidth.top ? `border-width: ${teamMemberSocialProfileTabBorder};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
					${teamMemberIconsSpacing.Tablet ? `gap: ${teamMemberIconsSpacing.Tablet}${teamMemberIconsSpacingUnits.Tablet};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon svg {
					${teamMemberIconsSize.Tablet ? `width: ${teamMemberIconsSize.Tablet}${teamMemberIconsSizeUnits.Tablet};` : ''}
					${teamMemberIconsSize.Tablet ? `height: ${teamMemberIconsSize.Tablet}${teamMemberIconsSizeUnits.Tablet};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper .fb-team-member-image-overlay {
					${teamMemberImageBGColor ? `background: ${teamMemberImageBGColor};` : ''}
					${teamMemberImageOverlayOpacity.Tablet ? `opacity: ${teamMemberImageOverlayOpacity.Tablet};` : ''}
					transition: all 0.3s ease-in-out;
				}
			}

				@media only screen and (max-width: 767px) {
					.fb-team-member-main-wrapper.${blockID} {
						${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'left' && teamMemberHZLeftOffset.Mobile ? `left: ${teamMemberHZLeftOffset.Mobile}${teamMemberHZLeftOffsetUnits.Mobile};` : ''}
						${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberHZOrientationType === 'right' && teamMemberHZRightOffset.Mobile ? `right: ${teamMemberHZRightOffset.Mobile}${teamMemberHZRightOffsetUnits.Mobile};` : ''}
						${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'top' && teamMemberVRTopOffset.Mobile ? `top: ${teamMemberVRTopOffset.Mobile}${teamMemberVRTopOffsetUnits.Mobile};` : ''}
						${teamMemberPositionType !== 'default' && teamMemberPositionType !== 'relative' && teamMemberVROrientationType === 'bottom' && teamMemberVRBottomOffset.Mobile ? `bottom: ${teamMemberVRBottomOffset.Mobile}${teamMemberVRBottomOffsetUnits.Mobile};` : ''}
						${teamMemberZIndex.Mobile ? `z-index: ${teamMemberZIndex.Mobile};` : ''}
					}
					.fb-team-member-main-wrapper.${blockID} .fb-team-member-wrapper {
						${teamMemberPaddingMobileWidth && teamMemberMobilePadding.top ? `padding: ${teamMemberPaddingMobileWidth};` : ''}
						${teamMemberMarginMobileWidth && teamMemberMobileMargin.top ? `margin: ${teamMemberMarginMobileWidth};` : ''}
						${teamMemberBorderMobileWidth && teamMemberMobileBorderWidth.top ? `border-width: ${teamMemberBorderMobileWidth};` : ''}
						${teamMemberBorderRadiusMobileWidth && teamMemberMobileBorderRadiusWidth.top ? `border-radius: ${teamMemberBorderRadiusMobileWidth};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper {
						${teamMemberImageWidthUnits.Mobile === '%' ? 'width: 100%;' : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image {
						${teamMemberImageWidth.Mobile ? `width: ${teamMemberImageWidth.Mobile}${teamMemberImageWidthUnits.Mobile};` : ''}
						${teamMemberImageHeight.Mobile ? `height: ${teamMemberImageHeight.Mobile}${teamMemberImageHeightUnits.Mobile};` : ''}
						${teamMemberImageBorderTypeGetMobile && teamMemberImageBorderMobile.top ? `border-width: ${teamMemberImageBorderTypeGetMobile};` : ''}
						${teamMemberImageBorderRadiusGetMobile && teamMemberImageBorderRadiusMobile.top ? `border-radius: ${teamMemberImageBorderRadiusGetMobile};` : ''}
						${teamMemberImageMarginGetMobile && teamMemberImageMarginMobile.top ? `margin: ${teamMemberImageMarginGetMobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-flip-back-content {
						${teamMemberContentPaddingGetMobile && teamMemberContentPaddingMobile.top ? `padding: ${teamMemberContentPaddingGetMobile};` : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-content-wrapper {
						${teamMemberContentBorderTypeGetMobile && teamMemberContentBorderMobile.top ? `border-width: ${teamMemberContentBorderTypeGetMobile};` : ''}
						${teamMemberContentBorderRadiusGetMobile && teamMemberContentBorderRadiusMobile.top ? `border-radius: ${teamMemberContentBorderRadiusGetMobile};` : ''}
						${teamMemberContentMarginGetMobile && teamMemberContentMarginMobile.top ? `margin: ${teamMemberContentMarginGetMobile};` : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-name {
						${teamMemberNameGlobalTypoSwitcher.fontSize === false && teamMemberNameFontSize?.Mobile ? `font-size: ${teamMemberNameFontSize.Mobile}${teamMemberNameFontSizeUnits.Mobile};` : ''}
						${teamMemberNameGlobalTypoSwitcher.letterSpacing === false && teamMemberNameLetterSpacing?.Mobile ? `letter-spacing: ${teamMemberNameLetterSpacing.Mobile}${teamMemberNameLetterSpacingUnits.Mobile};` : ''}
						${teamMemberNameGlobalTypoSwitcher.lineHeight === false && teamMemberNameLineHeight?.Mobile ? `line-height: ${teamMemberNameLineHeight.Mobile}${teamMemberNameLineHeightUnits.Mobile};` : ''}
						${teamMemberNameMarginGetMobile && teamMemberNameMarginMobile.top ? `margin: ${teamMemberNameMarginGetMobile};` : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-designation {
						${teamMemberDesignationGlobalTypoSwitcher.fontSize === false && teamMemberDesignationFontSize?.Mobile ? `font-size: ${teamMemberDesignationFontSize.Mobile}${teamMemberDesignationFontSizeUnits.Mobile};` : ''}
						${teamMemberDesignationGlobalTypoSwitcher.letterSpacing === false && teamMemberDesignationLetterSpacing?.Mobile ? `letter-spacing: ${teamMemberDesignationLetterSpacing.Mobile}${teamMemberDesignationLetterSpacingUnits.Mobile};` : ''}
						${teamMemberDesignationGlobalTypoSwitcher.lineHeight === false && teamMemberDesignationLineHeight?.Mobile ? `line-height: ${teamMemberDesignationLineHeight.Mobile}${teamMemberDesignationLineHeightUnits.Mobile};` : ''}
						${teamMemberDesignationMarginGetMobile && teamMemberDesignationMarginMobile.top ? `margin: ${teamMemberDesignationMarginGetMobile};` : ''}
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-desc {
						${teamMemberDescGlobalTypoSwitcher.fontSize === false && teamMemberDescFontSize?.Mobile ? `font-size: ${teamMemberDescFontSize.Mobile}${teamMemberDescFontSizeUnits.Mobile};` : ''}
						${teamMemberDescGlobalTypoSwitcher.letterSpacing === false && teamMemberDescLetterSpacing?.Mobile ? `letter-spacing: ${teamMemberDescLetterSpacing.Mobile}${teamMemberDescLetterSpacingUnits.Mobile};` : ''}
						${teamMemberDescGlobalTypoSwitcher.lineHeight === false && teamMemberDescLineHeight?.Mobile ? `line-height: ${teamMemberDescLineHeight.Mobile}${teamMemberDescLineHeightUnits.Mobile};` : ''}
						${teamMemberDescMarginGetMobile && teamMemberDescMarginMobile.top ? `margin: ${teamMemberDescMarginGetMobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile-wrapper {
						${teamMemberIconsMobileMarginWidth && teamMemberIconsMobileMargin.top ? `margin: ${teamMemberIconsMobileMarginWidth};` : ''}
						${teamMemberSocialProfileMobileBorder && teamMemberSocialProfileMobileBorderWidth.top ? `border-width: ${teamMemberSocialProfileMobileBorder};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile {
						${teamMemberIconsSpacing.Mobile ? `gap: ${teamMemberIconsSpacing.Mobile}${teamMemberIconsSpacingUnits.Mobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-social-profile .fb-team-member-social-icon svg {
						${teamMemberIconsSize.Mobile ? `width: ${teamMemberIconsSize.Mobile}${teamMemberIconsSizeUnits.Mobile};` : ''}
						${teamMemberIconsSize.Mobile ? `height: ${teamMemberIconsSize.Mobile}${teamMemberIconsSizeUnits.Mobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-item .fb-team-member-image-wrapper .fb-team-member-image-overlay {
						${teamMemberImageBGColor ? `background: ${teamMemberImageBGColor};` : ''}
						${teamMemberImageOverlayOpacity.Mobile ? `opacity: ${teamMemberImageOverlayOpacity.Mobile};` : ''}
						transition: all 0.3s ease-in-out;
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
			teamMemberImageOverlayOpacity,

			teamMemberImageBorderUnits,
			teamMemberImageBorderDesktop,
			teamMemberImageBorderTab,
			teamMemberImageBorderMobile,

			// Team Image Border Radius
			teamMemberImageBorderRadiusUnits,
			teamMemberImageBorderRadiusDesktop,
			teamMemberImageBorderRadiusTab,
			teamMemberImageBorderRadiusMobile,

			// Team Name
			teamMemberName,
			teamMemberNameHeadingTag,

			teamMemberNameColorSwitcher,
			teamMemberNameColor,
			teamMemberNameHoverColor,

			teamMemberNameGlobalTypoSwitcher,
			teamMemberNameGlobalTypographyData,
			teamMemberNameGlobalTypoType,
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
			teamMemberDesignationHoverColor,
			teamMemberDesignationLoadGoogleFonts,
			teamMemberDesignationGlobalTypoSwitcher,
			teamMemberDesignationGlobalTypographyData,
			teamMemberDesignationGlobalTypoType,
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
			teamMemberDescHoverColor,
			teamMemberDescLoadGoogleFonts,
			teamMemberDescGlobalTypoSwitcher,
			teamMemberDescGlobalTypographyData,
			teamMemberDescGlobalTypoType,
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
			teamMemberOverflow,
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

		]
	);
	
	const customCss = getCustomCss(teamMemberCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${fbTeamMemberStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [fbTeamMemberStyle, customCss]);

	const editorStyle = `${fbTeamMemberStyle} ${customCss}`.replace(/\s+/g, " ").trim();

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

			<PanelBody title={__("Name & Designation", "frontis-blocks")} initialOpen={false}>
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
			</PanelBody>

			<PanelBody title={__("Description", "frontis-blocks")} initialOpen={false}>
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
				title={__("Flip Back", "frontis-blocks")}
				initialOpen={false}
			>
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
							setHoverBackgroundType={(value) =>
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
				title={__("Content", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_AlignmentControl
					label={__("Alignment", "frontis-blocks")}
					globalAlignment={teamMemberContentAlignment}
					setGlobalAlignment={(value) => setAttributes({ teamMemberContentAlignment: value })}
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
							setGlobalColor={(value) => setAttributes({ teamMemberDesignationColor: value })}
						/>
					)}
							
					{teamMemberDesignationColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={teamMemberDesignationHoverColor}
							setGlobalColor={(value) => setAttributes({ teamMemberDesignationHoverColor: value })}
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
							setGlobalColor={(value) => setAttributes({ teamMemberDescColor: value })}
						/>
					)}
							
					{teamMemberDescColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={teamMemberDescHoverColor}
							setGlobalColor={(value) => setAttributes({ teamMemberDescHoverColor: value })}
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
							setHoverBackgroundType={(value) =>
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
			<style>
				{
					`${editorStyle}`
				}
			</style>
			
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
}
