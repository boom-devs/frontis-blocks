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

import {BORDER_STYLES, CONTENT_POSITION, HEADING, SOCIAL_ICON_ANIMATION, SOCIAL_ICON_BUTTON, SOCIAL_ICON_POSITION, SOCIAL_ICON_TYPE} from "./constants/constants";

import SortableItem from './sortableItem.js';
import FB_Spacing from '../../components/spacing/index.js';
import FB_Color from '../../components/color/index.js';
import FB_AlignmentControl from '../../components/alignment-control/index.js';
import FB_Range from '../../components/range/index.js';
import FB_TypographyControl from '../../components/typography-control/index.js';
import FB_ColorControl from '../../components/color-control/index.js';
import FB_ImageControl from '../../components/image-control/index.js';
import FB_HtmlTagControl from '../../components/html-tag-control/index.js';


export default function Inspector({ attributes, setAttributes, clientId }) {

	const {
		blockID,
		blockStyle,
		deviceType,

		// Photo
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
		teamMemberContentBGColorSwitcher,
		teamMemberContentBGColor,
		teamMemberContentBGHoverColor,

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
        teamMemberIconsSize,
        teamMemberIconsSizeUnits,
        teamMemberIconsSpacing,
        teamMemberIconsSpacingUnits,
		teamMemberIconsColorSwitcher,
		teamMemberIconsColor,
		teamMemberIconsHoverColor,

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
		teamMemberBGColorSwitcher,
		teamMemberBGColor,
		teamMemberBGHoverColor,
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

	} = attributes;

	// Set blockID if it doesn't exist

	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "fb-team-member-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	
	useEffect(() => {
		if (teamMemberDesignationFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${teamMemberDesignationFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [teamMemberDesignationFontFamily]);



	{/* Team Member Social Drag And Drop Handle Control */}

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = teamMemberSocialItems.findIndex(item => item.id === active.id);
			const newIndex = teamMemberSocialItems.findIndex(item => item.id === over.id);
			const updatedItems = arrayMove(teamMemberSocialItems, oldIndex, newIndex);
			setAttributes({ teamMemberSocialItems: updatedItems });
		}
	};

	const handleAddItem = () => {
		const newItem = {
			id: `item-${teamMemberSocialItems.length + 1}`,
			Title: `Facebook ${teamMemberSocialItems.length + 1}`,
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

	const handleRemoveMedia = () => {
        setAttributes({
			teamMemberImageID: 0,
			teamMemberImageUrl: "",
			teamMemberImageAlt: "",
		});
	}

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

	/** Name Color */
    const handleTeamMemberNameColorSwitcherChange = (value) => {
        setAttributes({ teamMemberNameColorSwitcher: value });
    };
	
    const handleTeamMemberNameColorChange = (value) => {
        setAttributes({ teamMemberNameColor: value });
    };
    const handleTeamMemberNameHoverColorChange = (value) => {
        setAttributes({ teamMemberNameHoverColor: value });
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

	const handleDescMarginCombineBtn = () => {
		setAttributes( {teamMemberDesignationMarginLink: !teamMemberDesignationMarginLink} );
	}

	const handleDescMarginUnitsHandler = (unit) => {
		setAttributes( {
			teamMemberDesignationMarginUnits: {
				...teamMemberDesignationMarginUnits,
				[deviceType]: unit
			}
		})
	}

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


	/** Icon size */
	const teamMemberIconsSizeHandler = (value) => {
        setAttributes({ teamMemberIconsSize: value });
    };

    const teamMemberIconsSizeUnitsHandler = (value) => {
        setAttributes({ teamMemberIconsSizeUnits: value });
    };

	/** Icon gap */
	const teamMemberIconsSpacingHandler = (value) => {
        setAttributes({ teamMemberIconsSpacing: value });
    };

    const teamMemberIconsSpacingUnitsHandler = (value) => {
        setAttributes({ teamMemberIconsSpacingUnits: value });
    };

	/** Icon Color */
    const handleTeamMemberIconsColorSwitcherChange = (value) => {
        setAttributes({ teamMemberIconsColorSwitcher: value });
    };
    const handleTeamMemberIconsColorChange = (value) => {
        setAttributes({ teamMemberIconsColor: value });
    };
    const handleTeamMemberIconsHoverColorChange = (value) => {
        setAttributes({ teamMemberIconsHoverColor: value });
    };


	/** Image border Color */
    const handleTeamMemberImageBorderColorSwitcherChange = (value) => {
        setAttributes({ teamMemberImageBorderColorSwitcher: value });
    };
    const handleTeamMemberImageBorderColorChange = (value) => {
        setAttributes({ teamMemberImageBorderColor: value });
    };
    const handleTeamMemberImageBorderHoverColorChange = (value) => {
        setAttributes({ teamMemberImageBorderHoverColor: value });
    };

	/** Image border Color */
    const handleTeamMemberImageBGColorSwitcherChange = (value) => {
        setAttributes({ teamMemberImageBGColorSwitcher: value });
    };
    const handleTeamMemberImageBGColorChange = (value) => {
        setAttributes({ teamMemberImageBGColor: value });
    };
    const handleTeamMemberImageBGHoverColorChange = (value) => {
        setAttributes({ teamMemberImageBGHoverColor: value });
    };


	/** Content border Color */
    const handleTeamMemberContentBorderColorSwitcherChange = (value) => {
        setAttributes({ teamMemberContentBorderColorSwitcher: value });
    };
    const handleTeamMemberContentBorderColorChange = (value) => {
        setAttributes({ teamMemberContentBorderColor: value });
    };
    const handleTeamMemberContentBorderHoverColorChange = (value) => {
        setAttributes({ teamMemberContentBorderHoverColor: value });
    };

	/** Content border Color */
    const handleTeamMemberContentBGColorSwitcherChange = (value) => {
        setAttributes({ teamMemberContentBGColorSwitcher: value });
    };
    const handleTeamMemberContentBGColorChange = (value) => {
        setAttributes({ teamMemberContentBGColor: value });
    };
    const handleTeamMemberContentBGHoverColorChange = (value) => {
        setAttributes({ teamMemberContentBGHoverColor: value });
    };

	/** Team member bg Color */
	const handleteamMemberBGColorSwitcherChange = (value) => {
		setAttributes({ teamMemberBGColorSwitcher: value });
	};
	const handleteamMemberBGColorChange = (value) => {
		setAttributes({ teamMemberBGColor: value });
	};
	const handleteamMemberBGHoverColorChange = (value) => {
		setAttributes({ teamMemberBGHoverColor: value });
	};

	/** Team member border Color */
	const handleTeamMemberBorderColorSwitcherChange = (value) => {
		setAttributes({ teamMemberBorderColorSwitcher: value });
	};
	const handleTeamMemberBorderColorChange = (value) => {
		setAttributes({ teamMemberBorderColor: value });
	};
	const handleTeamMemberBorderHoverColorChange = (value) => {
		setAttributes({ teamMemberBorderHoverColor: value });
	};

	const fbTeamMemberStyle = useMemo(
		() => `
			.fb-team-member-main-wrapper.${blockID} {
				position: relative;
				${teamMemberBGColor !== undefined ? `background-color: ${teamMemberBGColor};` : ''}
				${teamMemberPaddingDesktopWidth !== undefined ? `padding: ${teamMemberPaddingDesktopWidth};` : ''}
				${teamMemberMarginDesktopWidth !== undefined ? `margin: ${teamMemberMarginDesktopWidth};` : ''}
				${teamMemberBorder !== undefined ? `border-style: ${teamMemberBorder};` : ''}
				${teamMemberBorderDesktopWidth !== undefined ? `border-width: ${teamMemberBorderDesktopWidth};` : ''}
				${teamMemberBorderColor !== undefined ? `border-color: ${teamMemberBorderColor};` : ''}
				${teamMemberBorderRadiusDesktopWidth !== undefined ? `border-radius: ${teamMemberBorderRadiusDesktopWidth};` : ''}
				${teamMemberZIndex.Desktop !== undefined ? `z-index: ${teamMemberZIndex.Desktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-main-wrapper.${blockID}:hover {
				${teamMemberBGHoverColor !== undefined ? `background-color: ${teamMemberBGHoverColor};` : ''}
				${teamMemberBorderHoverColor !== undefined ? `border-color: ${teamMemberBorderHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
				width: ${teamMemberImageWidth.Desktop}${teamMemberImageWidthUnits.Desktop};
				height: ${teamMemberImageHeight.Desktop}${teamMemberImageHeightUnits.Desktop};
				${teamMemberImageBorder !== undefined ? `border: ${teamMemberImageBorder};` : ''}
				${teamMemberImageBorderColor !== undefined ? `border-color: ${teamMemberImageBorderColor};` : ''}
				${teamMemberImageBorderTypeGetDesktop !== undefined ? `border-width: ${teamMemberImageBorderTypeGetDesktop};` : ''}
				${teamMemberImageBorderRadiusGetDesktop !== undefined ? `border-radius: ${teamMemberImageBorderRadiusGetDesktop};` : ''}
				${teamMemberImageMarginGetDesktop !== undefined ? `margin: ${teamMemberImageMarginGetDesktop};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID}:hover .fb-team-member-image-wrapper {
				${teamMemberImageBorderHoverColor !== undefined ? `border-color: ${teamMemberImageBorderHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}

			.fb-team-member-wrapper.${blockID} .fb-team-member-content-wrapper {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				z-index: 9;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-content {
				position: relative;
				display: flex;
				flex-direction: column;
				${teamMemberContentAlignment === 'left' ? 'align-items: start;' : ''}
				${teamMemberContentAlignment === 'center' ? 'align-items: center;' : ''}
				${teamMemberContentAlignment === 'right' ? 'align-items: end;' : ''}
				${teamMemberContentBorder !== undefined ? `border: ${teamMemberContentBorder};` : ''}
				${teamMemberContentBorderColor !== undefined ? `border-color: ${teamMemberContentBorderColor};` : ''}
				${teamMemberContentBorderTypeGetDesktop !== undefined ? `border-width: ${teamMemberContentBorderTypeGetDesktop};` : ''}
				${teamMemberContentBorderRadiusGetDesktop !== undefined ? `border-radius: ${teamMemberContentBorderRadiusGetDesktop};` : ''}
				${teamMemberContentMarginGetDesktop !== undefined ? `margin: ${teamMemberContentMarginGetDesktop};` : ''}
				${teamMemberContentPaddingGetDesktop !== undefined ? `padding: ${teamMemberContentPaddingGetDesktop};` : ''}
				${teamMemberContentBGColor !== undefined ? `background: ${teamMemberContentBGColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID}:hover .fb-team-member-content {
				${teamMemberContentBorderHoverColor !== undefined ? `border-color: ${teamMemberContentBorderHoverColor};` : ''}
				${teamMemberContentBGHoverColor !== undefined ? `background: ${teamMemberContentBGHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper .fb-team-member-image-overlay {
				${teamMemberImageBGColor !== undefined ? `background: ${teamMemberImageBGColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID}:hover .fb-team-member-image-wrapper .fb-team-member-image-overlay {
				${teamMemberImageBGHoverColor !== undefined ? `background: ${teamMemberImageBGHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-name {
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
			.fb-team-member-wrapper.${blockID} .fb-team-member-name:hover {
				${teamMemberNameHoverColor !== undefined ? `color: ${teamMemberNameHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
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
			.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile {
				display: flex;
				${teamMemberIconsSpacing.Desktop ? `gap: ${teamMemberIconsSpacing.Desktop}${teamMemberIconsSpacingUnits.Desktop};` : ''}
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile .fb-team-member-social-icon {
				${teamMemberIconsSize.Desktop ? `width: ${teamMemberIconsSize.Desktop}${teamMemberIconsSizeUnits.Desktop};` : ''}
				${teamMemberIconsSize.Desktop ? `height: ${teamMemberIconsSize.Desktop}${teamMemberIconsSizeUnits.Desktop};` : ''}
				${teamMemberIconsColor !== undefined ? `fill: ${teamMemberIconsColor};` : ''}
				transition: all 0.3s ease-in-out;
			}
			.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile .fb-team-member-social-icon:hover {
				${teamMemberIconsHoverColor !== undefined ? `fill: ${teamMemberIconsHoverColor};` : ''}
				transition: all 0.3s ease-in-out;
			}

			@media only screen and (max-width: 1024px) {
				.fb-team-member-main-wrapper.${blockID} {
					${teamMemberPaddingTabletWidth !== undefined ? `padding: ${teamMemberPaddingTabletWidth};` : ''}
					${teamMemberMarginTabletWidth !== undefined ? `margin: ${teamMemberMarginTabletWidth};` : ''}
					${teamMemberBorderRadiusTabletWidth !== undefined ? `border-radius: ${teamMemberBorderRadiusTabletWidth};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
					${teamMemberImageBorderTypeGetTab !== undefined ? `border-width: ${teamMemberImageBorderTypeGetTab} !important;` : ''}
					${teamMemberImageBorderRadiusGetTab !== undefined ? `border-radius: ${teamMemberImageBorderRadiusGetTab} !important;` : ''}
					${teamMemberImageMarginGetTab !== undefined ? `margin: ${teamMemberImageMarginGetTab} !important;` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-content {
					${teamMemberContentBorderTypeGetTab !== undefined ? `border-width: ${teamMemberContentBorderTypeGetTab};` : ''}
					${teamMemberContentBorderRadiusGetTab !== undefined ? `border-radius: ${teamMemberContentBorderRadiusGetTab};` : ''}
					${teamMemberContentMarginGetTab !== undefined ? `margin: ${teamMemberContentMarginGetTab};` : ''}
					${teamMemberContentPaddingGetTab !== undefined ? `padding: ${teamMemberContentPaddingGetTab};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-name {
					${teamMemberNameFontSize !== undefined ? `font-size: ${teamMemberNameFontSize.Tablet}${teamMemberNameFontSizeUnits.Tablet};` : ''}
					${teamMemberNameLetterSpacing !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacing.Tablet}${teamMemberNameLetterSpacingUnits.Tablet};` : ''}
					${teamMemberNameLineHeight !== undefined ? `line-height: ${teamMemberNameLineHeight.Tablet}${teamMemberNameLineHeightUnits.Tablet};` : ''}
					${teamMemberNameMarginGetTab !== undefined ? `margin: ${teamMemberNameMarginGetTab};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
					${teamMemberDesignationFontSize !== undefined ? `font-size: ${teamMemberDesignationFontSize.Tablet}${teamMemberDesignationFontSizeUnits.Tablet};` : ''}
					${teamMemberDesignationLetterSpacing !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacing.Tablet}${teamMemberDesignationLetterSpacingUnits.Tablet};` : ''}
					${teamMemberDesignationLineHeight !== undefined ? `line-height: ${teamMemberDesignationLineHeight.Tablet}${teamMemberDesignationLineHeightUnits.Tablet};` : ''}
					${teamMemberDesignationMarginGetTab !== undefined ? `margin: ${teamMemberDesignationMarginGetTab};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
					${teamMemberImageWidth.Tablet !== undefined ? `width: ${teamMemberImageWidth.Tablet}${teamMemberImageWidthUnits.Tablet};` : ''}
					${teamMemberImageHeight.Tablet !== undefined ? `height: ${teamMemberImageHeight.Tablet}${teamMemberImageHeightUnits.Tablet};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile {
					${teamMemberIconsSpacing.Tablet !== undefined ? `gap: ${teamMemberIconsSpacing.Tablet}${teamMemberIconsSpacingUnits.Tablet};` : ''}
				}

				.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile .fb-team-member-social-icon {
					${teamMemberIconsSize.Tablet !== undefined ? `width: ${teamMemberIconsSize.Tablet}${teamMemberIconsSizeUnits.Tablet};` : ''}
					${teamMemberIconsSize.Tablet !== undefined ? `height: ${teamMemberIconsSize.Tablet}${teamMemberIconsSizeUnits.Tablet};` : ''}
				}

				@media only screen and (max-width: 767px) {
					.fb-team-member-main-wrapper.${blockID} {
						${teamMemberPaddingMobileWidth !== undefined ? `padding: ${teamMemberPaddingMobileWidth};` : ''}
						${teamMemberMarginMobileWidth !== undefined ? `margin: ${teamMemberMarginMobileWidth};` : ''}
						${teamMemberBorderRadiusMobileWidth !== undefined ? `border-radius: ${teamMemberBorderRadiusMobileWidth};` : ''}
					}
					
					.fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
						${teamMemberImageBorderTypeGetMobile !== undefined ? `border-width: ${teamMemberImageBorderTypeGetMobile} !important;` : ''}
						${teamMemberImageBorderRadiusGetMobile !== undefined ? `border-radius: ${teamMemberImageBorderRadiusGetMobile} !important;` : ''}
						${teamMemberImageMarginGetMobile !== undefined ? `margin: ${teamMemberImageMarginGetMobile} !important;` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-content {
						${teamMemberContentBorderTypeGetMobile !== undefined ? `border-width: ${teamMemberContentBorderTypeGetMobile};` : ''}
						${teamMemberContentBorderRadiusGetMobile !== undefined ? `border-radius: ${teamMemberContentBorderRadiusGetMobile};` : ''}
						${teamMemberContentMarginGetMobile !== undefined ? `margin: ${teamMemberContentMarginGetMobile};` : ''}
						${teamMemberContentPaddingGetMobile !== undefined ? `padding: ${teamMemberContentPaddingGetMobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-name {
						${teamMemberNameFontSize !== undefined ? `font-size: ${teamMemberNameFontSize.Mobile}${teamMemberNameFontSizeUnits.Mobile};` : ''}
						${teamMemberNameLetterSpacing !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacing.Mobile}${teamMemberNameLetterSpacingUnits.Mobile};` : ''}
						${teamMemberNameLineHeight !== undefined ? `line-height: ${teamMemberNameLineHeight.Mobile}${teamMemberNameLineHeightUnits.Mobile};` : ''}
						${teamMemberNameMarginGetMobile !== undefined ? `margin: ${teamMemberNameMarginGetMobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
						${teamMemberDesignationFontSize !== undefined ? `font-size: ${teamMemberDesignationFontSize.Mobile}${teamMemberDesignationFontSizeUnits.Mobile};` : ''}
						${teamMemberDesignationLetterSpacing !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacing.Mobile}${teamMemberDesignationLetterSpacingUnits.Mobile};` : ''}
						${teamMemberDesignationLineHeight !== undefined ? `line-height: ${teamMemberDesignationLineHeight.Mobile}${teamMemberDesignationLineHeightUnits.Mobile};` : ''}
						${teamMemberDesignationMarginGetMobile !== undefined ? `margin: ${teamMemberDesignationMarginGetMobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
						${teamMemberImageWidth.Mobile !== undefined ? `width: ${teamMemberImageWidth.Mobile}${teamMemberImageWidthUnits.Mobile};` : ''}
						${teamMemberImageHeight.Mobile !== undefined ? `height: ${teamMemberImageHeight.Mobile}${teamMemberImageHeightUnits.Mobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile {
						${teamMemberIconsSpacing.Mobile !== undefined ? `gap: ${teamMemberIconsSpacing.Mobile}${teamMemberIconsSpacingUnits.Mobile};` : ''}
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile .fb-team-member-social-icon {
						${teamMemberIconsSize.Mobile !== undefined ? `width: ${teamMemberIconsSize.Mobile}${teamMemberIconsSizeUnits.Mobile};` : ''}
						${teamMemberIconsSize.Mobile !== undefined ? `height: ${teamMemberIconsSize.Mobile}${teamMemberIconsSizeUnits.Mobile};` : ''}
					}
				}
			}
		`,
		[
			blockID,
			teamMemberBGColor,
			teamMemberPaddingDesktopWidth,
			teamMemberMarginDesktopWidth,
			teamMemberBorder,
			teamMemberBorderDesktopWidth,
			teamMemberBorderColor,
			teamMemberBorderRadiusDesktopWidth,
			teamMemberZIndex,
			teamMemberBGHoverColor,
			teamMemberBorderHoverColor,
			teamMemberImageWidth,
			teamMemberImageWidthUnits,
			teamMemberImageHeight,
			teamMemberImageHeightUnits,
			teamMemberImageBorder,
			teamMemberImageBorderColor,
			teamMemberImageBorderTypeGetDesktop,
			teamMemberImageBorderRadiusGetDesktop,
			teamMemberImageMarginGetDesktop,
			teamMemberImageBorderHoverColor,
			teamMemberContentAlignment,
			teamMemberContentBorder,
			teamMemberContentBorderColor,
			teamMemberContentBorderTypeGetDesktop,
			teamMemberContentBorderRadiusGetDesktop,
			teamMemberContentMarginGetDesktop,
			teamMemberContentPaddingGetDesktop,
			teamMemberContentBGColor,
			teamMemberContentBGHoverColor,
			teamMemberContentBorderHoverColor,
			teamMemberImageBGColor,
			teamMemberImageBGHoverColor,
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
			teamMemberNameColor,
			teamMemberNameMarginGetDesktop,
			teamMemberNameHoverColor,
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
			teamMemberDesignationColor,
			teamMemberDesignationMarginGetDesktop,
			teamMemberIconsSpacing,
			teamMemberIconsSpacingUnits,
			teamMemberIconsSize,
			teamMemberIconsSizeUnits,
			teamMemberIconsColor,
			teamMemberIconsHoverColor,
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
												label={__("Photo", "frontis-block")}
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
										</PanelBody>

										<PanelBody title={__("Content", "frontis-blocks")} initialOpen={true}>
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

										<PanelBody title={__("Social Profiles", "frontis-blocks")} initialOpen={true}>
											<SelectControl
                                                label={__("Icon Type", "frontis-blocks")}
                                                value={teamMemberSocialType}
                                                options={SOCIAL_ICON_TYPE}
                                                onChange={(value) => setAttributes({ teamMemberSocialType: value })}
                                            />

											<SelectControl
                                                label={__("Icon Position", "frontis-blocks")}
                                                value={teamMemberSocialPosition}
                                                options={SOCIAL_ICON_POSITION}
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

											<FB_Color
												label={__("Background Color", "frontis-blocks")}
												globalColorSwitcher={teamMemberContentBGColorSwitcher}
												globalColor={teamMemberContentBGColor}
												globalHoverColor={teamMemberContentBGHoverColor}
												handleColorSwitcherChange={handleTeamMemberContentBGColorSwitcherChange}
												handleGlobalColorChange={handleTeamMemberContentBGColorChange}
												handleGlobalHoverColorChange={handleTeamMemberContentBGHoverColorChange}
											/>

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={teamMemberContentBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ teamMemberContentBorder: value })}
											/>

											<FB_Color
												label={__("Border Color", "frontis-blocks")}
												globalColorSwitcher={teamMemberContentBorderColorSwitcher}
												globalColor={teamMemberContentBorderColor}
												globalHoverColor={teamMemberContentBorderHoverColor}
												handleColorSwitcherChange={handleTeamMemberContentBorderColorSwitcherChange}
												handleGlobalColorChange={handleTeamMemberContentBorderColorChange}
												handleGlobalHoverColorChange={handleTeamMemberContentBorderHoverColorChange}
											/>

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

											<FB_Color
												label={__("Overlay Color", "frontis-blocks")}
												globalColorSwitcher={teamMemberImageBGColorSwitcher}
												globalColor={teamMemberImageBGColor}
												globalHoverColor={teamMemberImageBGHoverColor}
												handleColorSwitcherChange={handleTeamMemberImageBGColorSwitcherChange}
												handleGlobalColorChange={handleTeamMemberImageBGColorChange}
												handleGlobalHoverColorChange={handleTeamMemberImageBGHoverColorChange}
											/>

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={teamMemberImageBorder}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({ teamMemberImageBorder: value })}
											/>

											<FB_Color
												label={__("Border Color", "frontis-blocks")}
												globalColorSwitcher={teamMemberImageBorderColorSwitcher}
												globalColor={teamMemberImageBorderColor}
												globalHoverColor={teamMemberImageBorderHoverColor}
												handleColorSwitcherChange={handleTeamMemberImageBorderColorSwitcherChange}
												handleGlobalColorChange={handleTeamMemberImageBorderColorChange}
												handleGlobalHoverColorChange={handleTeamMemberImageBorderHoverColorChange}
											/>

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

											<FB_Color
												label={__("Color", "frontis-blocks")}
												globalColorSwitcher={teamMemberNameColorSwitcher}
												globalColor={teamMemberNameColor}
												globalHoverColor={teamMemberNameHoverColor}
												handleColorSwitcherChange={handleTeamMemberNameColorSwitcherChange}
												handleGlobalColorChange={handleTeamMemberNameColorChange}
												handleGlobalHoverColorChange={handleTeamMemberNameHoverColorChange}
											/>

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

										{ socialIconBtnSwitcher === true &&
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
												
												<FB_Color
													label={__("Color", "frontis-blocks")}
													globalColorSwitcher={socialIconBtnColorSwitcher}
													globalColor={socialIconBtnColor}
													globalHoverColor={socialIconBtnHoverColor}
													handleColorSwitcherChange={(value) => setAttributes({ socialIconBtnColorSwitcher: value })}
													handleGlobalColorChange={(value) => setAttributes({ socialIconBtnColor: value })}
													handleGlobalHoverColorChange={(value) => setAttributes({ socialIconBtnHoverColor: value })}
												/>

												<FB_Color
													label={__("Background Color", "frontis-blocks")}
													globalColorSwitcher={socialIconBtnBGColorSwitcher}
													globalColor={socialIconBtnBGColor}
													globalHoverColor={socialIconBtnBGHoverColor}
													handleColorSwitcherChange={(value) => setAttributes({ socialIconBtnBGColorSwitcher: value })}
													handleGlobalColorChange={(value) => setAttributes({ socialIconBtnBGColor: value })}
													handleGlobalHoverColorChange={(value) => setAttributes({ socialIconBtnBGHoverColor: value })}
												/> 
												
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

												<SelectControl
													label={__("Border Style", "frontis-blocks")}
													value={socialIconBtnBorder}
													options={BORDER_STYLES}
													onChange={(value) => setAttributes({ socialIconBtnBorder: value })}
												/>

												<FB_Color
													label={__("Border Color", "frontis-blocks")}
													globalColorSwitcher={socialIconBtnBorderColorSwitcher}
													globalColor={socialIconBtnBorderColor}
													globalHoverColor={socialIconBtnBorderHoverColor}
													handleColorSwitcherChange={(value) => setAttributes({ socialIconBtnBorderColorSwitcher: value })}
													handleGlobalColorChange={(value) => setAttributes({ socialIconBtnBorderColor: value })}
													handleGlobalHoverColorChange={(value) => setAttributes({ socialIconBtnBorderHoverColor: value })}
												/>

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

										<PanelBody
											title={__("Social Icon", "frontis-blocks")}
											initialOpen={false}
											className="fb-setting-gallery-button-wrapper"
										>
											<FB_Range
												min={1}
												max={100}
												label={__("Icon Size", "frontis-blocks")}
												rangeValue={teamMemberIconsSize}
												onChangeHandler={teamMemberIconsSizeHandler}
												rangeUnitHandler={teamMemberIconsSizeUnitsHandler}
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
												onChangeHandler={teamMemberIconsSpacingHandler}
												rangeUnitHandler={teamMemberIconsSpacingUnitsHandler}
												deviceType={deviceType}
												units={teamMemberIconsSpacingUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={16}
											/>

											<FB_Color
												label={__("Color", "frontis-blocks")}
												globalColorSwitcher={teamMemberIconsColorSwitcher}
												globalColor={teamMemberIconsColor}
												globalHoverColor={teamMemberIconsHoverColor}
												handleColorSwitcherChange={handleTeamMemberIconsColorSwitcherChange}
												handleGlobalColorChange={handleTeamMemberIconsColorChange}
												handleGlobalHoverColorChange={handleTeamMemberIconsHoverColorChange}
											/>
										</PanelBody>
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
													<FB_Color
														globalColorSwitcher={teamMemberBGColorSwitcher}
														globalColor={teamMemberBGColor}
														globalHoverColor={teamMemberBGHoverColor}
														handleColorSwitcherChange={handleteamMemberBGColorSwitcherChange}
														handleGlobalColorChange={handleteamMemberBGColorChange}
														handleGlobalHoverColorChange={handleteamMemberBGHoverColorChange}
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

													<FB_Color
														globalColorSwitcher={teamMemberBorderColorSwitcher}
														globalColor={teamMemberBorderColor}
														globalHoverColor={teamMemberBorderHoverColor}
														handleColorSwitcherChange={handleTeamMemberBorderColorSwitcherChange}
														handleGlobalColorChange={handleTeamMemberBorderColorChange}
														handleGlobalHoverColorChange={handleTeamMemberBorderHoverColorChange}
													/>

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

												<PanelBody
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
												</PanelBody>

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
