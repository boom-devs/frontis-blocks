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
		deviceType,

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
