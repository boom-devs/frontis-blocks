import { __ } from '@wordpress/i18n';
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	InspectorControls, RichText,
} from '@wordpress/block-editor';
import {
	TabPanel,
	PanelBody,
	TextControl,
	BaseControl,
	RangeControl,
	ToggleControl,
	Button,
	SelectControl,
	ButtonGroup,
	ResponsiveWrapper, __experimentalHStack as HStack,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';

import './editor.scss';
import {BORDER_STYLES, HEADING} from "./constants/constants";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

import TeamMemberContentBorderControl from './style-control/content/team-member-content-border-control.js';
import TeamMemberContentBorderRadiusControl from './style-control/content/team-member-content-border-radius-control.js';
import TeamMemberContentMarginControl from './style-control/content/team-member-content-margin-control.js';
import TeamMemberContentPaddingControl from './style-control/content/team-member-content-padding-control.js';
// import TeamMemberImageSizeControl from './style-control/image/team-member-image-size-control.js';


//
import TeamMemberImageBorderControl from './style-control/image/team-member-image-border-control.js';
import TeamMemberImageBorderRadiusControl from './style-control/image/team-member-image-border-radius-control.js';
import TeamMemberImageMarginControl from './style-control/image/team-member-image-margin-control.js';
// import TeamMemberNameTypographyControl from './style-control/name/team-member-name-typography-control.js';
// import TeamMemberDesignationTypographyControl from './style-control/designation/team-member-designation-typography-control.js';

import SortableItem from './sortableItem.js';
import Designation from './style-control/designation/Designation.js';
import TeamMemberContentAlignmentControl from './style-control/content/team-member-content-alignment-control.js';
import TitleName from './style-control/name/TitleName.js';
import SocialIcons from './style-control/social-icons/SocialIcons.js';
import TeamMemberImageSizeControl from './style-control/image/team-member-image-size-control.js';
import FB_Spacing from '../../components/spacing/index.js';
import FB_Color from '../../components/color/index.js';


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		DeviceType,

		// Photo
		teamMemberImageMediaID,
		teamMemberImageMediaUrl,
		teamMemberImageMediaAlt,
		teamMemberImageMediaWidth,
		teamMemberImageMediaHeight,

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
		teamMemberImageBorderColor,
		teamMemberImageBorderHoverColor,
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


		// Team Content
		teamMemberContentAlignment,
		teamMemberContentBGColor,
		teamMemberContentBGHoverColor,

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

		// Social Profile
		teamMemberSocialItems,

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

	} = attributes;

	// Set blockID if it doesn't exist

	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "fb-team-member-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const blockProps = useBlockProps({
        className: `fb-team-member-main-wrapper ${blockID}`,
    });

	{/* Team Member Content Control */}
	const teamMemberContentBorderTypeGetDesktop = `${teamMemberContentBorderDesktop.top}${teamMemberContentBorderUnits[DeviceType]} ${teamMemberContentBorderDesktop.right}${teamMemberContentBorderUnits[DeviceType]} ${teamMemberContentBorderDesktop.bottom}${teamMemberContentBorderUnits[DeviceType]} ${teamMemberContentBorderDesktop.left}${teamMemberContentBorderUnits[DeviceType]}`;
	const teamMemberContentBorderTypeGetTab = `${teamMemberContentBorderTab.top}${teamMemberContentBorderUnits[DeviceType]} ${teamMemberContentBorderTab.right}${teamMemberContentBorderUnits[DeviceType]} ${teamMemberContentBorderTab.bottom}${teamMemberContentBorderUnits[DeviceType]} ${teamMemberContentBorderTab.left}${teamMemberContentBorderUnits[DeviceType]}`;
	const teamMemberContentBorderTypeGetMobile = `${teamMemberContentBorderMobile.top}${teamMemberContentBorderUnits[DeviceType]} ${teamMemberContentBorderMobile.right}${teamMemberContentBorderUnits[DeviceType]} ${teamMemberContentBorderMobile.bottom}${teamMemberContentBorderUnits[DeviceType]} ${teamMemberContentBorderMobile.left}${teamMemberContentBorderUnits[DeviceType]}`;


	const teamMemberContentBorderRadiusGetDesktop = `${teamMemberContentBorderRadiusDesktop.top}${teamMemberContentBorderRadiusUnits[DeviceType]} ${teamMemberContentBorderRadiusDesktop.right}${teamMemberContentBorderRadiusUnits[DeviceType]} ${teamMemberContentBorderRadiusDesktop.bottom}${teamMemberContentBorderRadiusUnits[DeviceType]} ${teamMemberContentBorderRadiusDesktop.left}${teamMemberContentBorderRadiusUnits[DeviceType]}`;
	const teamMemberContentBorderRadiusGetTab = `${teamMemberContentBorderRadiusTab.top}${teamMemberContentBorderRadiusUnits[DeviceType]} ${teamMemberContentBorderRadiusTab.right}${teamMemberContentBorderRadiusUnits[DeviceType]} ${teamMemberContentBorderRadiusTab.bottom}${teamMemberContentBorderRadiusUnits[DeviceType]} ${teamMemberContentBorderRadiusTab.left}${teamMemberContentBorderRadiusUnits[DeviceType]}`;
	const teamMemberContentBorderRadiusGetMobile = `${teamMemberContentBorderRadiusMobile.top}${teamMemberContentBorderRadiusUnits[DeviceType]} ${teamMemberContentBorderRadiusMobile.right}${teamMemberContentBorderRadiusUnits[DeviceType]} ${teamMemberContentBorderRadiusMobile.bottom}${teamMemberContentBorderRadiusUnits[DeviceType]} ${teamMemberContentBorderRadiusMobile.left}${teamMemberContentBorderRadiusUnits[DeviceType]}`;


	const teamMemberContentMarginGetDesktop = `${teamMemberContentMarginDesktop.top}${teamMemberContentMarginUnits[DeviceType]} ${teamMemberContentMarginDesktop.right}${teamMemberContentMarginUnits[DeviceType]} ${teamMemberContentMarginDesktop.bottom}${teamMemberContentMarginUnits[DeviceType]} ${teamMemberContentMarginDesktop.left}${teamMemberContentMarginUnits[DeviceType]}`;
	const teamMemberContentMarginGetTab = `${teamMemberContentMarginTab.top}${teamMemberContentMarginUnits[DeviceType]} ${teamMemberContentMarginTab.right}${teamMemberContentMarginUnits[DeviceType]} ${teamMemberContentMarginTab.bottom}${teamMemberContentMarginUnits[DeviceType]} ${teamMemberContentMarginTab.left}${teamMemberContentMarginUnits[DeviceType]}`;
	const teamMemberContentMarginGetMobile = `${teamMemberContentMarginMobile.top}${teamMemberContentMarginUnits[DeviceType]} ${teamMemberContentMarginMobile.right}${teamMemberContentMarginUnits[DeviceType]} ${teamMemberContentMarginMobile.bottom}${teamMemberContentMarginUnits[DeviceType]} ${teamMemberContentMarginMobile.left}${teamMemberContentMarginUnits[DeviceType]}`;


	const teamMemberContentPaddingGetDesktop = `${teamMemberContentPaddingDesktop.top}${teamMemberContentPaddingUnits[DeviceType]} ${teamMemberContentPaddingDesktop.right}${teamMemberContentPaddingUnits[DeviceType]} ${teamMemberContentPaddingDesktop.bottom}${teamMemberContentPaddingUnits[DeviceType]} ${teamMemberContentPaddingDesktop.left}${teamMemberContentPaddingUnits[DeviceType]}`;
	const teamMemberContentPaddingGetTab = `${teamMemberContentPaddingTab.top}${teamMemberContentPaddingUnits[DeviceType]} ${teamMemberContentPaddingTab.right}${teamMemberContentPaddingUnits[DeviceType]} ${teamMemberContentPaddingTab.bottom}${teamMemberContentPaddingUnits[DeviceType]} ${teamMemberContentPaddingTab.left}${teamMemberContentPaddingUnits[DeviceType]}`;
	const teamMemberContentPaddingGetMobile = `${teamMemberContentPaddingMobile.top}${teamMemberContentPaddingUnits[DeviceType]} ${teamMemberContentPaddingMobile.right}${teamMemberContentPaddingUnits[DeviceType]} ${teamMemberContentPaddingMobile.bottom}${teamMemberContentPaddingUnits[DeviceType]} ${teamMemberContentPaddingMobile.left}${teamMemberContentPaddingUnits[DeviceType]}`;



	{/* Team Member Image Control */}
	const teamMemberImageBorderTypeGetDesktop = `${teamMemberImageBorderDesktop.top}${teamMemberImageBorderUnits[DeviceType]} ${teamMemberImageBorderDesktop.right}${teamMemberImageBorderUnits[DeviceType]} ${teamMemberImageBorderDesktop.bottom}${teamMemberImageBorderUnits[DeviceType]} ${teamMemberImageBorderDesktop.left}${teamMemberImageBorderUnits[DeviceType]}`;
	const teamMemberImageBorderTypeGetTab = `${teamMemberImageBorderTab.top}${teamMemberImageBorderUnits[DeviceType]} ${teamMemberImageBorderTab.right}${teamMemberImageBorderUnits[DeviceType]} ${teamMemberImageBorderTab.bottom}${teamMemberImageBorderUnits[DeviceType]} ${teamMemberImageBorderTab.left}${teamMemberImageBorderUnits[DeviceType]}`;
	const teamMemberImageBorderTypeGetMobile = `${teamMemberImageBorderMobile.top}${teamMemberImageBorderUnits[DeviceType]} ${teamMemberImageBorderMobile.right}${teamMemberImageBorderUnits[DeviceType]} ${teamMemberImageBorderMobile.bottom}${teamMemberImageBorderUnits[DeviceType]} ${teamMemberImageBorderMobile.left}${teamMemberImageBorderUnits[DeviceType]}`;


	const teamMemberImageBorderRadiusGetDesktop = `${teamMemberImageBorderRadiusDesktop.top}${teamMemberImageBorderRadiusUnits[DeviceType]} ${teamMemberImageBorderRadiusDesktop.right}${teamMemberImageBorderRadiusUnits[DeviceType]} ${teamMemberImageBorderRadiusDesktop.bottom}${teamMemberImageBorderRadiusUnits[DeviceType]} ${teamMemberImageBorderRadiusDesktop.left}${teamMemberImageBorderRadiusUnits[DeviceType]}`;
	const teamMemberImageBorderRadiusGetTab = `${teamMemberImageBorderRadiusTab.top}${teamMemberImageBorderRadiusUnits[DeviceType]} ${teamMemberImageBorderRadiusTab.right}${teamMemberImageBorderRadiusUnits[DeviceType]} ${teamMemberImageBorderRadiusTab.bottom}${teamMemberImageBorderRadiusUnits[DeviceType]} ${teamMemberImageBorderRadiusTab.left}${teamMemberImageBorderRadiusUnits[DeviceType]}`;
	const teamMemberImageBorderRadiusGetMobile = `${teamMemberImageBorderRadiusMobile.top}${teamMemberImageBorderRadiusUnits[DeviceType]} ${teamMemberImageBorderRadiusMobile.right}${teamMemberImageBorderRadiusUnits[DeviceType]} ${teamMemberImageBorderRadiusMobile.bottom}${teamMemberImageBorderRadiusUnits[DeviceType]} ${teamMemberImageBorderRadiusMobile.left}${teamMemberImageBorderRadiusUnits[DeviceType]}`;


	const teamMemberImageMarginGetDesktop = `${teamMemberImageMarginDesktop.top}${teamMemberImageMarginUnits[DeviceType]} ${teamMemberImageMarginDesktop.right}${teamMemberImageMarginUnits[DeviceType]} ${teamMemberImageMarginDesktop.bottom}${teamMemberImageMarginUnits[DeviceType]} ${teamMemberImageMarginDesktop.left}${teamMemberImageMarginUnits[DeviceType]}`;
	const teamMemberImageMarginGetTab = `${teamMemberImageMarginTab.top}${teamMemberImageMarginUnits[DeviceType]} ${teamMemberImageMarginTab.right}${teamMemberImageMarginUnits[DeviceType]} ${teamMemberImageMarginTab.bottom}${teamMemberImageMarginUnits[DeviceType]} ${teamMemberImageMarginTab.left}${teamMemberImageMarginUnits[DeviceType]}`;
	const teamMemberImageMarginGetMobile = `${teamMemberImageMarginMobile.top}${teamMemberImageMarginUnits[DeviceType]} ${teamMemberImageMarginMobile.right}${teamMemberImageMarginUnits[DeviceType]} ${teamMemberImageMarginMobile.bottom}${teamMemberImageMarginUnits[DeviceType]} ${teamMemberImageMarginMobile.left}${teamMemberImageMarginUnits[DeviceType]}`;


	{/* Team Member Name Control */}
	const teamMemberNameMarginGetDesktop = `${teamMemberNameMarginDesktop.top}${teamMemberNameMarginUnits[DeviceType]} ${teamMemberNameMarginDesktop.right}${teamMemberNameMarginUnits[DeviceType]} ${teamMemberNameMarginDesktop.bottom}${teamMemberNameMarginUnits[DeviceType]} ${teamMemberNameMarginDesktop.left}${teamMemberNameMarginUnits[DeviceType]}`;
	const teamMemberNameMarginGetTab = `${teamMemberNameMarginTab.top}${teamMemberNameMarginUnits[DeviceType]} ${teamMemberNameMarginTab.right}${teamMemberNameMarginUnits[DeviceType]} ${teamMemberNameMarginTab.bottom}${teamMemberNameMarginUnits[DeviceType]} ${teamMemberNameMarginTab.left}${teamMemberNameMarginUnits[DeviceType]}`;
	const teamMemberNameMarginGetMobile = `${teamMemberNameMarginMobile.top}${teamMemberNameMarginUnits[DeviceType]} ${teamMemberNameMarginMobile.right}${teamMemberNameMarginUnits[DeviceType]} ${teamMemberNameMarginMobile.bottom}${teamMemberNameMarginUnits[DeviceType]} ${teamMemberNameMarginMobile.left}${teamMemberNameMarginUnits[DeviceType]}`;


	{/* Team Member Designation Control */}
	const teamMemberDesignationMarginGetDesktop = `${teamMemberDesignationMarginDesktop.top}${teamMemberDesignationMarginUnits[DeviceType]} ${teamMemberDesignationMarginDesktop.right}${teamMemberDesignationMarginUnits[DeviceType]} ${teamMemberDesignationMarginDesktop.bottom}${teamMemberDesignationMarginUnits[DeviceType]} ${teamMemberDesignationMarginDesktop.left}${teamMemberDesignationMarginUnits[DeviceType]}`;
	const teamMemberDesignationMarginGetTab = `${teamMemberDesignationMarginTab.top}${teamMemberDesignationMarginUnits[DeviceType]} ${teamMemberDesignationMarginTab.right}${teamMemberDesignationMarginUnits[DeviceType]} ${teamMemberDesignationMarginTab.bottom}${teamMemberDesignationMarginUnits[DeviceType]} ${teamMemberDesignationMarginTab.left}${teamMemberDesignationMarginUnits[DeviceType]}`;
	const teamMemberDesignationMarginGetMobile = `${teamMemberDesignationMarginMobile.top}${teamMemberDesignationMarginUnits[DeviceType]} ${teamMemberDesignationMarginMobile.right}${teamMemberDesignationMarginUnits[DeviceType]} ${teamMemberDesignationMarginMobile.bottom}${teamMemberDesignationMarginUnits[DeviceType]} ${teamMemberDesignationMarginMobile.left}${teamMemberDesignationMarginUnits[DeviceType]}`;

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
			teamMemberImageMediaID: 0,
			teamMemberImageMediaUrl: "",
			teamMemberImageMediaAlt: "",
			teamMemberImageMediaWidth: "",
			teamMemberImageMediaHeight: "",
		});
	}

	const handleTeamMemberMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberMarginLink ) {
			switch ( DeviceType ) {
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
			switch ( DeviceType ) {
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
				[DeviceType]: unit
			}
		})
	}
	
	const teamMemberMarginDesktopWidth = `${teamMemberDesktopMargin.top}${teamMemberMarginUnits[DeviceType]} ${teamMemberDesktopMargin.right}${teamMemberMarginUnits[DeviceType]} ${teamMemberDesktopMargin.bottom}${teamMemberMarginUnits[DeviceType]} ${teamMemberDesktopMargin.left}${teamMemberMarginUnits[DeviceType]}`;
	const teamMemberMarginTabletWidth = `${teamMemberTabMargin.top}${teamMemberMarginUnits[DeviceType]} ${teamMemberTabMargin.right}${teamMemberMarginUnits[DeviceType]} ${teamMemberTabMargin.bottom}${teamMemberMarginUnits[DeviceType]} ${teamMemberTabMargin.left}${teamMemberMarginUnits[DeviceType]}`;
	const teamMemberMarginMobileWidth = `${teamMemberMobileMargin.top}${teamMemberMarginUnits[DeviceType]} ${teamMemberMobileMargin.right}${teamMemberMarginUnits[DeviceType]} ${teamMemberMobileMargin.bottom}${teamMemberMarginUnits[DeviceType]} ${teamMemberMobileMargin.left}${teamMemberMarginUnits[DeviceType]}`;
	
	
	// teamMember Padding Functionb
	const handleTeamMemberPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberPaddingLink ) {
			switch ( DeviceType ) {
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
			switch ( DeviceType ) {
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
				[DeviceType]: unit
			}
		})
	}
	
	const teamMemberPaddingDesktopWidth = `${teamMemberDesktopPadding.top}${teamMemberPaddingUnits[DeviceType]} ${teamMemberDesktopPadding.right}${teamMemberPaddingUnits[DeviceType]} ${teamMemberDesktopPadding.bottom}${teamMemberPaddingUnits[DeviceType]} ${teamMemberDesktopPadding.left}${teamMemberPaddingUnits[DeviceType]}`;
	const teamMemberPaddingTabletWidth = `${teamMemberTabPadding.top}${teamMemberPaddingUnits[DeviceType]} ${teamMemberTabPadding.right}${teamMemberPaddingUnits[DeviceType]} ${teamMemberTabPadding.bottom}${teamMemberPaddingUnits[DeviceType]} ${teamMemberTabPadding.left}${teamMemberPaddingUnits[DeviceType]}`;
	const teamMemberPaddingMobileWidth = `${teamMemberMobilePadding.top}${teamMemberPaddingUnits[DeviceType]} ${teamMemberMobilePadding.right}${teamMemberPaddingUnits[DeviceType]} ${teamMemberMobilePadding.bottom}${teamMemberPaddingUnits[DeviceType]} ${teamMemberMobilePadding.left}${teamMemberPaddingUnits[DeviceType]}`;
	
	
	// teamMember BorderWidth Function
	const handleTeamMemberBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberBorderLink ) {
			switch ( DeviceType ) {
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
			switch ( DeviceType ) {
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
				[DeviceType]: unit
			}
		})
	}
	
	const teamMemberBorderDesktopWidth = `${teamMemberDesktopBorderWidth.top}${teamMemberBorderUnits[DeviceType]} ${teamMemberDesktopBorderWidth.right}${teamMemberBorderUnits[DeviceType]} ${teamMemberDesktopBorderWidth.bottom}${teamMemberBorderUnits[DeviceType]} ${teamMemberDesktopBorderWidth.left}${teamMemberBorderUnits[DeviceType]}`;
	const teamMemberBorderTabletWidth = `${teamMemberTabBorderWidth.top}${teamMemberBorderUnits[DeviceType]} ${teamMemberTabBorderWidth.right}${teamMemberBorderUnits[DeviceType]} ${teamMemberTabBorderWidth.bottom}${teamMemberBorderUnits[DeviceType]} ${teamMemberTabBorderWidth.left}${teamMemberBorderUnits[DeviceType]}`;
	const teamMemberBorderMobileWidth = `${teamMemberMobileBorderWidth.top}${teamMemberBorderUnits[DeviceType]} ${teamMemberMobileBorderWidth.right}${teamMemberBorderUnits[DeviceType]} ${teamMemberMobileBorderWidth.bottom}${teamMemberBorderUnits[DeviceType]} ${teamMemberMobileBorderWidth.left}${teamMemberBorderUnits[DeviceType]}`;
	
	
	// teamMember BorderRadiusWidth Function
	const handleTeamMemberBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( teamMemberBorderRadiusLink ) {
			switch ( DeviceType ) {
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
			switch ( DeviceType ) {
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
				[DeviceType]: unit
			}
		})
	}
	
	const teamMemberBorderRadiusDesktopWidth = `${teamMemberDesktopBorderRadiusWidth.top}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberDesktopBorderRadiusWidth.right}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberDesktopBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberDesktopBorderRadiusWidth.left}${teamMemberBorderRadiusUnits[DeviceType]}`;
	const teamMemberBorderRadiusTabletWidth = `${teamMemberTabBorderRadiusWidth.top}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberTabBorderRadiusWidth.right}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberTabBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberTabBorderRadiusWidth.left}${teamMemberBorderRadiusUnits[DeviceType]}`;
	const teamMemberBorderRadiusMobileWidth = `${teamMemberMobileBorderRadiusWidth.top}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberMobileBorderRadiusWidth.right}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberMobileBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberMobileBorderRadiusWidth.left}${teamMemberBorderRadiusUnits[DeviceType]}`;
	

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

	console.log(attributes);

	return (
		<>
			<style>
				{`
				.fb-team-member-main-wrapper.${blockID} {
					position: relative;
					${teamMemberBGColor !== undefined ? `background-color: ${teamMemberBGColor};` : ''};
					padding: ${teamMemberPaddingDesktopWidth};
					margin: ${teamMemberMarginDesktopWidth};
					border-style: ${teamMemberBorder};
					border-width: ${teamMemberBorderDesktopWidth};
					${teamMemberBorderColor !== undefined ? `border-color: ${teamMemberBorderColor};` : ''};
					border-radius: ${teamMemberBorderRadiusDesktopWidth};
					transition: all .3s ease-in-out;
					${teamMemberZIndex !== undefined ? `z-index: ${teamMemberZIndex}` : ''};
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-main-wrapper.${blockID}:hover {
					${teamMemberBGHoverColor !== undefined ? `background-color: ${teamMemberBGHoverColor};` : ''};
					${teamMemberBorderHoverColor !== undefined ? `border-color: ${teamMemberBorderHoverColor};` : ''};
					transition: all 0.3s ease-in-out;
				}

                .fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
					width: ${teamMemberImageWidth.Desktop}${teamMemberImageWidthUnits.Desktop};
					height: ${teamMemberImageHeight.Desktop}${teamMemberImageHeightUnits.Desktop};
                    border: ${teamMemberImageBorder};
                    border-color: ${teamMemberImageBorderColor};
                    border-width: ${teamMemberImageBorderTypeGetDesktop};
                    border-radius: ${teamMemberImageBorderRadiusGetDesktop};
                    margin: ${teamMemberImageMarginGetDesktop};
					transition: all 0.3s ease-in-out;
                }
                .fb-team-member-wrapper.${blockID}:hover .fb-team-member-image-wrapper {
                    border-color: ${teamMemberImageBorderHoverColor};
					transition: all 0.3s ease-in-out;
                }

                .fb-team-member-wrapper.${blockID} .fb-team-member-content {
					position: relative;
					display: flex;
					flex-direction: column;
					${teamMemberContentAlignment === 'left' && 'align-items: start'};
					${teamMemberContentAlignment === 'center' && 'align-items: center'};
					${teamMemberContentAlignment === 'right' && 'align-items: end'};
                    border: ${teamMemberContentBorder};
                    border-color: ${teamMemberContentBorderColor};
                    border-width: ${teamMemberContentBorderTypeGetDesktop};
                    border-radius: ${teamMemberContentBorderRadiusGetDesktop};
                    margin: ${teamMemberContentMarginGetDesktop};
                    padding: ${teamMemberContentPaddingGetDesktop};
                    background: ${teamMemberContentBGColor};
					transition: all 0.3s ease-in-out;
                }
                .fb-team-member-wrapper.${blockID}:hover .fb-team-member-content {
                    border-color: ${teamMemberContentBorderHoverColor};
                    background: ${teamMemberContentBGHoverColor};
					transition: all 0.3s ease-in-out;
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper .fb-team-member-image-overlay {
                    background: ${teamMemberImageBGColor};
					transition: all 0.3s ease-in-out;
                }
                .fb-team-member-wrapper.${blockID}:hover .fb-team-member-image-wrapper .fb-team-member-image-overlay {
                    background: ${teamMemberImageBGHoverColor};
					transition: all 0.3s ease-in-out;
                }

         		.fb-team-member-wrapper.${blockID} .fb-team-member-name {
         		    font-family: ${teamMemberNameFontFamily !== 'default' ? teamMemberNameFontFamily : teamMemberNameFontFamily};
                    font-size: ${teamMemberNameFontSize !== undefined ? `${teamMemberNameFontSize.Desktop}${teamMemberNameFontSizeUnits.Desktop}` : ''};
                    font-weight: ${teamMemberNameFontWeight};
                    font-style: ${teamMemberNameFontStyle};
                    text-transform: ${teamMemberNameTextTransform};
                    text-decoration: ${teamMemberNameTextDecoration};
                    ${teamMemberNameLetterSpacing !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacing.Desktop}${teamMemberNameLetterSpacingUnits.Desktop};` : ''}
                    ${teamMemberNameLineHeight !== undefined ? `line-height: ${teamMemberNameLineHeight.Desktop}${teamMemberNameLineHeightUnits.Desktop};` : ''}
         			color: ${teamMemberNameColor};
         			margin: ${teamMemberNameMarginGetDesktop};
					transition: all 0.3s ease-in-out;
         		}
         		.fb-team-member-wrapper.${blockID} .fb-team-member-name:hover {
         			color: ${teamMemberNameHoverColor};
					transition: all 0.3s ease-in-out;
         		}

         		.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
         		    font-family: ${teamMemberDesignationFontFamily !== 'default' ? teamMemberDesignationFontFamily : teamMemberDesignationFontFamily};
                    font-size: ${teamMemberDesignationFontSize !== undefined ? `${teamMemberDesignationFontSize.Desktop}${teamMemberDesignationFontSizeUnits.Desktop}` : ''};
                    font-weight: ${teamMemberDesignationFontWeight};
                    font-style: ${teamMemberDesignationFontStyle};
                    text-transform: ${teamMemberDesignationTextTransform};
                    text-decoration: ${teamMemberDesignationTextDecoration};
                    ${teamMemberDesignationLetterSpacing !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacing.Desktop}${teamMemberDesignationLetterSpacingUnits.Desktop};` : ''}
                    ${teamMemberDesignationLineHeight !== undefined ? `line-height: ${teamMemberDesignationLineHeight.Desktop}${teamMemberDesignationLineHeightUnits.Desktop};` : ''}
         			color: ${teamMemberDesignationColor};
         			margin: ${teamMemberDesignationMarginGetDesktop};
					transition: all 0.3s ease-in-out;
         		}

				.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile {
					display: flex;
					gap: ${teamMemberIconsSpacing.Desktop}${teamMemberIconsSpacingUnits.Desktop};
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile .fb-team-member-social-icon {
					width: ${teamMemberIconsSize.Desktop}${teamMemberIconsSizeUnits.Desktop};
					height: ${teamMemberIconsSize.Desktop}${teamMemberIconsSizeUnits.Desktop};
					fill: ${teamMemberIconsColor};
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile .fb-team-member-social-icon:hover {
					fill: ${teamMemberIconsHoverColor}; 
					transition: all 0.3s ease-in-out;
				}

             	 @media only screen and (max-width: 1024px) {
					.fb-team-member-main-wrapper.${blockID} {
						padding: ${teamMemberPaddingTabletWidth};
						margin: ${teamMemberMarginTabletWidth};
						border-radius: ${teamMemberBorderRadiusTabletWidth};
					}

                    .fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
						border-width: ${teamMemberImageBorderTypeGetTab} !important;
						border-radius: ${teamMemberImageBorderRadiusGetTab} !important;
						margin: ${teamMemberImageMarginGetTab} !important;
                    }
					 .fb-team-member-wrapper.${blockID} .fb-team-member-content {
                        border-width: ${teamMemberContentBorderTypeGetTab};
						border-radius: ${teamMemberContentBorderRadiusGetTab};
						margin: ${teamMemberContentMarginGetTab};
						padding: ${teamMemberContentPaddingGetTab};
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-name {
						font-size: ${teamMemberNameFontSize !== undefined ? `${teamMemberNameFontSize.Tablet}${teamMemberNameFontSizeUnits.Tablet}` : ''};
						${teamMemberNameLetterSpacing !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacing.Tablet}${teamMemberNameLetterSpacingUnits.Tablet};` : ''}
						${teamMemberNameLineHeight !== undefined ? `line-height: ${teamMemberNameLineHeight.Tablet}${teamMemberNameLineHeightUnits.Tablet};` : ''}
						margin: ${teamMemberNameMarginGetTab};
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
						font-size: ${teamMemberDesignationFontSize !== undefined ? `${teamMemberDesignationFontSize.Tablet}${teamMemberDesignationFontSizeUnits.Tablet}` : ''};
						${teamMemberDesignationLetterSpacing !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacing.Tablet}${teamMemberDesignationLetterSpacingUnits.Tablet};` : ''}
						${teamMemberDesignationLineHeight !== undefined ? `line-height: ${teamMemberDesignationLineHeight.Tablet}${teamMemberDesignationLineHeightUnits.Tablet};` : ''}
						margin: ${teamMemberDesignationMarginGetTab};
					}
						.fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
						width: ${teamMemberImageWidth.Tablet}${teamMemberImageWidthUnits.Tablet};
						height: ${teamMemberImageHeight.Tablet}${teamMemberImageHeightUnits.Tablet};
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile {
						gap: ${teamMemberIconsSpacing.Tablet}${teamMemberIconsSpacingUnits.Tablet};
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile .fb-team-member-social-icon {
						width: ${teamMemberIconsSize.Tablet}${teamMemberIconsSizeUnits.Tablet};
						height: ${teamMemberIconsSize.Tablet}${teamMemberIconsSizeUnits.Tablet};
					}
                }

                @media only screen and (max-width: 767px) {
					.fb-team-member-main-wrapper.${blockID} {
						padding: ${teamMemberPaddingMobileWidth};
						margin: ${teamMemberMarginMobileWidth};
						border-radius: ${teamMemberBorderRadiusMobileWidth};
					}
						
                    .fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
             			border-width: ${teamMemberImageBorderTypeGetMobile} !important;
						border-radius: ${teamMemberImageBorderRadiusGetMobile} !important;
						margin: ${teamMemberImageMarginGetMobile} !important;
                    }

                   .fb-team-member-wrapper.${blockID} .fb-team-member-content {
                        border-width: ${teamMemberContentBorderTypeGetMobile};
						border-radius: ${teamMemberContentBorderRadiusGetMobile};
						margin: ${teamMemberContentMarginGetMobile};
						padding: ${teamMemberContentPaddingGetMobile};
                    }

					.fb-team-member-wrapper.${blockID} .fb-team-member-name {
						font-size: ${teamMemberNameFontSize !== undefined ? `${teamMemberNameFontSize.Mobile}${teamMemberNameFontSizeUnits.Mobile}` : ''};
						${teamMemberNameLetterSpacing !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacing.Mobile}${teamMemberNameLetterSpacingUnits.Mobile};` : ''}
						${teamMemberNameLineHeight !== undefined ? `line-height: ${teamMemberNameLineHeight.Mobile}${teamMemberNameLineHeightUnits.Mobile};` : ''}
						margin: ${teamMemberNameMarginGetMobile};
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
						font-size: ${teamMemberDesignationFontSize !== undefined ? `${teamMemberDesignationFontSize.Mobile}${teamMemberDesignationFontSizeUnits.Mobile}` : ''};
						${teamMemberDesignationLetterSpacing !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacing.Mobile}${teamMemberDesignationLetterSpacingUnits.Mobile};` : ''}
						${teamMemberDesignationLineHeight !== undefined ? `line-height: ${teamMemberDesignationLineHeight.Mobile}${teamMemberDesignationLineHeightUnits.Mobile};` : ''}
						margin: ${teamMemberDesignationMarginGetMobile};
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
						width: ${teamMemberImageWidth.Mobile}${teamMemberImageWidthUnits.Mobile};
						height: ${teamMemberImageHeight.Mobile}${teamMemberImageHeightUnits.Mobile};
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile {
						gap: ${teamMemberIconsSpacing.Mobile}${teamMemberIconsSpacingUnits.Mobile};
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile .fb-team-member-social-icon {
						width: ${teamMemberIconsSize.Mobile}${teamMemberIconsSizeUnits.Mobile};
						height: ${teamMemberIconsSize.Mobile}${teamMemberIconsSizeUnits.Mobile};
					}
                }
            `}
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
										<PanelBody title={__("Content", "frontis-blocks")} initialOpen={true}>
									
											<BaseControl label={__("Photo", "frontis-block")} className="fb-image-upload-field-wrapper">
												<MediaUploadCheck>
													<MediaUpload
														onSelect={(media) => {
															setAttributes({
																teamMemberImageMediaID: media.id,
																teamMemberImageMediaUrl: media.url,
																teamMemberImageMediaAlt: media.alt,
																teamMemberImageMediaWidth: media.width,
																teamMemberImageMediaHeight: media.height,
															});
														}}
														type="image"
														value={attributes.teamMemberImageMediaID}
														render={({ open }) => {
															return (
																<Button
																	className={
																		attributes.teamMemberImageMediaID == 0
																			? 'editor-post-featured-image__toggle'
																			: 'editor-post-featured-image__preview'
																	}
																	onClick={open}
																>
																	{attributes.teamMemberImageMediaID == 0 &&
																		__('Select Member Image', 'frontis-blocks')}
																	{attributes.teamMemberImageMediaID != 0 && (
																		<ResponsiveWrapper
																			naturalWidth={attributes.teamMemberImageMediaWidth}
																			naturalHeight={attributes.teamMemberImageMediaHeight}
																		>
																			<img src={attributes.teamMemberImageMediaUrl} />
																		</ResponsiveWrapper>
																	)}
																</Button>
															);
														}}
													/>
												</MediaUploadCheck>
												{attributes.teamMemberImageMediaID != 0 && (
													<HStack className="editor-post-featured-image__actions">
														<Button
															className="editor-post-featured-image__action"
															onClick={() => handleRemoveMedia()}
														>
															{__('Remove', 'frontis-block')}
														</Button>
														<MediaUploadCheck>
															<MediaUpload
																title={__('Replace image', 'frontis-block')}
																value={attributes.teamMemberImageMediaID}
																onSelect={(media) => {
																	setAttributes({
																		teamMemberImageMediaID: media.id,
																		teamMemberImageMediaUrl: media.url,
																		teamMemberImageMediaAlt: media.alt,
																		teamMemberImageMediaWidth: media.width,
																		teamMemberImageMediaHeight: media.height,
																	});
																}}
																type="image"
																render={({ open }) => (
																	<Button className="editor-post-featured-image__action" onClick={open}>
																		{__('Replace', 'frontis-block')}
																	</Button>
																)}
															/>
														</MediaUploadCheck>
													</HStack>
												)}
											</BaseControl>

											

											<TextControl
												tagName={teamMemberNameHeadingTag}
												label={__('Name', 'frontis-blocks')}
												value={teamMemberName}
												onChange={(value) => setAttributes({ teamMemberName: value })}
												placeholder={__('Wade Warren', 'frontis-block')}
											/>
											<BaseControl label={__("Name Tag", "frontis-block")} className="fb-setting-text-alignment">
												<ButtonGroup className="fb-setting-text-alignment-group-btn">
													{HEADING.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ teamMemberNameHeadingTag: item.value })}
															className={`fb-setting-text-alignment-single-btn ${
																teamMemberNameHeadingTag === item.value ? 'active' : ''
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											<TextControl
												label={__('Designation', 'frontis-blocks')}
												value={teamMemberDesignation}
												onChange={(value) => setAttributes({ teamMemberDesignation: value })}
											/>
										</PanelBody>

										<PanelBody title={__("Social Profiles", "frontis-blocks")} initialOpen={true}>
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
											<TeamMemberContentAlignmentControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<TeamMemberContentBorderControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<TeamMemberContentBorderRadiusControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<TeamMemberContentMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<TeamMemberContentPaddingControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>

										<PanelBody
											title={__("Photo", "frontis-blocks")}
											initialOpen={false}
											className="fb-setting-border-setting-wrapper"
										>
											<TeamMemberImageSizeControl 
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>

											<TeamMemberImageBorderControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<TeamMemberImageBorderRadiusControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>

											<TeamMemberImageMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>

										<TitleName attributes={attributes} setAttributes={setAttributes} />

										<Designation attributes={attributes} setAttributes={setAttributes} />

										<SocialIcons attributes={attributes} setAttributes={setAttributes} />


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
													<RangeControl
														value={teamMemberZIndex}
														onChange={(value) => setAttributes({ teamMemberZIndex: value === 0 ? undefined : value })}
														min={1}
														max={100}
														step={1}
														allowReset
														resetFallbackValue={undefined}
													/>
												</PanelBody>

												<PanelBody
												title={__("Padding & Margin", "frontis-blocks")}
												initialOpen={false}
												>

													<FB_Spacing
														label={__("Margin", "frontis-blocks")}
														DeviceType={DeviceType}
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
														DeviceType={DeviceType}
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
														DeviceType={DeviceType}
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
														DeviceType={DeviceType}
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

			<div {...blockProps} id={blockID}>
				<div className={`fb-team-member-wrapper ${blockID}`}>
					<div className={`fb-team-member-item`}>
						<div className={`fb-team-member-image-wrapper`}>
							<div className={`fb-team-member-image-overlay`}></div>
							{teamMemberImageMediaUrl && (
								<img src={teamMemberImageMediaUrl}/>
							)}
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
