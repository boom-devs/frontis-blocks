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
	ColorPicker,
	BaseControl,
	RangeControl,
	ToggleControl,
	DateTimePicker,
	Dropdown,
	Button,
	Dashicon,
	SelectControl,
	ButtonGroup,
	ColorPalette,
	ResponsiveWrapper, __experimentalHStack as HStack, TextareaControl,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';

import './editor.scss';
import {mediaType, BORDER_STYLES, FONT_FAMILYS, UNIT_TYPES, SELECT_TYPE, iconType, HEADING, NORMAL_HOVER} from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
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

		teamMemberImageSizeWidthUnits,
		teamMemberImageSizeWidthDesktop,
		teamMemberImageSizeWidthTab,
		teamMemberImageSizeWidthMobile,

		teamMemberImageSizeHeightUnits,
		teamMemberImageSizeHeightDesktop,
		teamMemberImageSizeHeightTab,
		teamMemberImageSizeHeightMobile,

		// Team Image Margin
		teamMemberImageMarginUnits,
		teamMemberImageMarginDesktop,
		teamMemberImageMarginTab,
		teamMemberImageMarginMobile,
		teamMemberImageMarginLink,

		// Team Image Border Type
		teamMemberImageBorder,
		teamMemberImageBorderColor,
		teamMemberImageBackgroundColor,

		teamMemberImageBorderTypeUnits,
		teamMemberImageBorderTypeDesktop,
		teamMemberImageBorderTypeTab,
		teamMemberImageBorderTypeMobile,
		teamMemberImageBorderTypeLink,

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
		teamMemberNameFontWeight,
		teamMemberNameFontStyle,
		teamMemberNameTextTransform,
		teamMemberNameTextDecoration,
		teamMemberNameFontSizeUnits,
		teamMemberNameLineHeightUnits,
		teamMemberNameFontSize,
		teamMemberNameFontSizeTablet,
		teamMemberNameFontSizeMobile,
		teamMemberNameLineHeightDesktop,
		teamMemberNameLineHeightTablet,
		teamMemberNameLineHeightMobile,
		teamMemberNameLetterSpacingDesktop,
		teamMemberNameLetterSpacingTablet,
		teamMemberNameLetterSpacingMobile,
		teamMemberNameLetterSpacingUnits,
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
		teamMemberDesignationFontWeight,
		teamMemberDesignationFontStyle,
		teamMemberDesignationFontSizeUnits,
		teamMemberDesignationFontSize,
		teamMemberDesignationFontSizeMobile,
		teamMemberDesignationFontSizeTablet,
		teamMemberDesignationLineHeightUnits,
		teamMemberDesignationLineHeightDesktop,
		teamMemberDesignationLineHeightMobile,
		teamMemberDesignationLineHeightTablet,
		teamMemberDesignationLetterSpacingDesktop,
		teamMemberDesignationLetterSpacingTablet,
		teamMemberDesignationLetterSpacingMobile,
		teamMemberDesignationLetterSpacingUnits,
		teamMemberDesignationTextTransform,
		teamMemberDesignationTextDecoration,

		// Team Designation Margin
		teamMemberDesignationMarginUnits,
		teamMemberDesignationMarginDesktop,
		teamMemberDesignationMarginTab,
		teamMemberDesignationMarginMobile,
		teamMemberDesignationMarginLink,


		// Team Content
		teamMemberContentAlignment,
		teamMemberContentBackgroundColor,

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
		teamMemberContentBorderTypeUnits,
		teamMemberContentBorderTypeDesktop,
		teamMemberContentBorderTypeTab,
		teamMemberContentBorderTypeMobile,

		// Team Content Border Radius
		teamMemberContentBorderRadiusUnits,
		teamMemberContentBorderRadiusDesktop,
		teamMemberContentBorderRadiusTab,
		teamMemberContentBorderRadiusMobile,

		// Social Profile
		teamMemberSocialItems,
		teamMemberSocialTag,
		teamMemberSocialIconShape,
		teamMemberSocialAlignment,
		teamMemberSocialIconAlignment,
		teamMemberSocialListGapDesktop,
		teamMemberSocialListGapTablet,
		teamMemberSocialListGapMobile,
		teamMemberSocialListGapUnits,
		teamMemberSocialIconColorSwitcher,
		teamMemberSocialIconColor,
		teamMemberSocialIconHoverColor,
		teamMemberSocialIconBgColorSwitcher,
		teamMemberSocialIconBgColor,
		teamMemberSocialIconBgHoverColor,
		teamMemberSocialIconSizeDesktop,
		teamMemberSocialIconSizeTablet,
		teamMemberSocialIconSizeMobile,
		teamMemberSocialIconSizeUnits,
		teamMemberSocialIconBgSizeDesktop,
		teamMemberSocialIconBgSizeTablet,
		teamMemberSocialIconBgSizeMobile,
		teamMemberSocialIconBgSizeUnits,
		teamMemberSocialIconSpacingDesktop,
		teamMemberSocialIconSpacingTablet,
		teamMemberSocialIconSpacingMobile,
		teamMemberSocialIconSpacingUnits,
		teamMemberSocialTitleFontFamily,
		teamMemberSocialTitleFontSizeDesktop,
		teamMemberSocialTitleFontSizeTablet,
		teamMemberSocialTitleFontSizeMobile,
		teamMemberSocialTitleFontSizeUnits,
		teamMemberSocialTitleFontWeight,
		teamMemberSocialTitleFontStyle,
		teamMemberSocialTitleTextTransform,
		teamMemberSocialTitleTextDecoration,
		teamMemberSocialTitleLetterSpacingDesktop,
		teamMemberSocialTitleLetterSpacingTablet,
		teamMemberSocialTitleLetterSpacingMobile,
		teamMemberSocialTitleLetterSpacingUnits,
		teamMemberSocialTitleLineHeightDesktop,
		teamMemberSocialTitleLineHeightTablet,
		teamMemberSocialTitleLineHeightMobile,
		teamMemberSocialTitleLineHeightUnits,
		teamMemberSocialTitleColorSwitcher,
		teamMemberSocialTitleColor,
		teamMemberSocialTitleHoverColor,
		teamMemberSocialDescFontFamily,
		teamMemberSocialDescFontSizeDesktop,
		teamMemberSocialDescFontSizeTablet,
		teamMemberSocialDescFontSizeMobile,
		teamMemberSocialDescFontSizeUnits,
		teamMemberSocialDescFontWeight,
		teamMemberSocialDescFontStyle,
		teamMemberSocialDescTextTransform,
		teamMemberSocialDescTextDecoration,
		teamMemberSocialDescLetterSpacingDesktop,
		teamMemberSocialDescLetterSpacingTablet,
		teamMemberSocialDescLetterSpacingMobile,
		teamMemberSocialDescLetterSpacingUnits,
		teamMemberSocialDescLineHeightDesktop,
		teamMemberSocialDescLineHeightTablet,
		teamMemberSocialDescLineHeightMobile,
		teamMemberSocialDescLineHeightUnits,
		teamMemberSocialDescColorSwitcher,
		teamMemberSocialDescColor,
		teamMemberSocialDescHoverColor,
		teamMemberSocialZIndex,
		teamMemberSocialPaddingUnits,
		teamMemberSocialDesktopPadding,
		teamMemberSocialTabPadding,
		teamMemberSocialMobilePadding,
		teamMemberSocialPaddingLink,
		teamMemberSocialMarginUnits,
		teamMemberSocialDesktopMargin,
		teamMemberSocialTabMargin,
		teamMemberSocialMobileMargin,
		teamMemberSocialMarginLink,
		teamMemberSocialBgColorSwitcher,
		teamMemberSocialBgColor,
		teamMemberSocialBgHoverColor,
		teamMemberSocialBorder,
		teamMemberSocialBorderColor,
		teamMemberSocialBorderHoverColor,
		teamMemberSocialBorderColorSwitcher,
		teamMemberSocialBorderUnits,
		teamMemberSocialDesktopBorderWidth,
		teamMemberSocialTabBorderWidth,
		teamMemberSocialMobileBorderWidth,
		teamMemberSocialBorderLink,
		teamMemberSocialBorderRadiusUnits,
		teamMemberSocialDesktopBorderRadiusWidth,
		teamMemberSocialTabBorderRadiusWidth,
		teamMemberSocialMobileBorderRadiusWidth,
		teamMemberSocialBorderRadiusLink,
		teamMemberSocialDesktopSwitcher,
		teamMemberSocialTabletSwitcher,
		teamMemberSocialMobileSwitcher,

		// Social Icons
        teamMemberIconsSizeDesktop,
        teamMemberIconsSizeTablet,
        teamMemberIconsSizeMobile,
        teamMemberIconsSizeUnits,
        teamMemberIconsSpacingDesktop,
        teamMemberIconsSpacingTablet,
        teamMemberIconsSpacingMobile,
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
		teamMemberBgColorSwitcher,
		teamMemberBgColor,
		teamMemberBgHoverColor,
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
	const teamMemberContentBorderTypeGetDesktop = `${teamMemberContentBorderTypeDesktop.top}${teamMemberContentBorderTypeUnits[DeviceType]} ${teamMemberContentBorderTypeDesktop.right}${teamMemberContentBorderTypeUnits[DeviceType]} ${teamMemberContentBorderTypeDesktop.bottom}${teamMemberContentBorderTypeUnits[DeviceType]} ${teamMemberContentBorderTypeDesktop.left}${teamMemberContentBorderTypeUnits[DeviceType]}`;
	const teamMemberContentBorderTypeGetTab = `${teamMemberContentBorderTypeTab.top}${teamMemberContentBorderTypeUnits[DeviceType]} ${teamMemberContentBorderTypeTab.right}${teamMemberContentBorderTypeUnits[DeviceType]} ${teamMemberContentBorderTypeTab.bottom}${teamMemberContentBorderTypeUnits[DeviceType]} ${teamMemberContentBorderTypeTab.left}${teamMemberContentBorderTypeUnits[DeviceType]}`;
	const teamMemberContentBorderTypeGetMobile = `${teamMemberContentBorderTypeMobile.top}${teamMemberContentBorderTypeUnits[DeviceType]} ${teamMemberContentBorderTypeMobile.right}${teamMemberContentBorderTypeUnits[DeviceType]} ${teamMemberContentBorderTypeMobile.bottom}${teamMemberContentBorderTypeUnits[DeviceType]} ${teamMemberContentBorderTypeMobile.left}${teamMemberContentBorderTypeUnits[DeviceType]}`;


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
	const teamMemberImageBorderTypeGetDesktop = `${teamMemberImageBorderTypeDesktop.top}${teamMemberImageBorderTypeUnits[DeviceType]} ${teamMemberImageBorderTypeDesktop.right}${teamMemberImageBorderTypeUnits[DeviceType]} ${teamMemberImageBorderTypeDesktop.bottom}${teamMemberImageBorderTypeUnits[DeviceType]} ${teamMemberImageBorderTypeDesktop.left}${teamMemberImageBorderTypeUnits[DeviceType]}`;
	const teamMemberImageBorderTypeGetTab = `${teamMemberImageBorderTypeTab.top}${teamMemberImageBorderTypeUnits[DeviceType]} ${teamMemberImageBorderTypeTab.right}${teamMemberImageBorderTypeUnits[DeviceType]} ${teamMemberImageBorderTypeTab.bottom}${teamMemberImageBorderTypeUnits[DeviceType]} ${teamMemberImageBorderTypeTab.left}${teamMemberImageBorderTypeUnits[DeviceType]}`;
	const teamMemberImageBorderTypeGetMobile = `${teamMemberImageBorderTypeMobile.top}${teamMemberImageBorderTypeUnits[DeviceType]} ${teamMemberImageBorderTypeMobile.right}${teamMemberImageBorderTypeUnits[DeviceType]} ${teamMemberImageBorderTypeMobile.bottom}${teamMemberImageBorderTypeUnits[DeviceType]} ${teamMemberImageBorderTypeMobile.left}${teamMemberImageBorderTypeUnits[DeviceType]}`;


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

	const handleteamMemberMarginUnitChange = ( event, position ) => {
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
	
	const handleteamMemberMarginCombineBtn = () => {
		setAttributes( {teamMemberMarginLink: !teamMemberMarginLink} );
	}
	
	const handleteamMemberMarginUnitsHandler = (unit) => {
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
	const handleteamMemberPaddingUnitChange = ( event, position ) => {
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
	
	const handleteamMemberPaddingCombineBtn = () => {
		setAttributes( {teamMemberPaddingLink: !teamMemberPaddingLink} );
	}
	
	const handleteamMemberPaddingUnitsHandler = (unit) => {
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
	const handleteamMemberBorderUnitChange = ( event, position ) => {
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
	
	const handleteamMemberBorderCombineBtn = () => {
		setAttributes( {teamMemberBorderLink: !teamMemberBorderLink} );
	}
	
	const handleteamMemberBorderUnitsHandler = (unit) => {
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
	const handleteamMemberBorderRadiusUnitChange = ( event, position ) => {
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
	
	const handleteamMemberBorderRadiusCombineBtn = () => {
		setAttributes( {teamMemberBorderRadiusLink: !teamMemberBorderRadiusLink} );
	}
	
	const handleteamMemberBorderRadiusUnitsHandler = (unit) => {
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
	

	// console.log(attributes);


	return (
		<>
			<style>
				{`
				.fb-team-member-main-wrapper.${blockID} {
					position: relative;
					${teamMemberBgColor !== undefined ? `background-color: ${teamMemberBgColor};` : ''};
					padding: ${teamMemberPaddingDesktopWidth};
					margin: ${teamMemberMarginDesktopWidth};
					border-style: ${teamMemberBorder};
					border-width: ${teamMemberBorderDesktopWidth};
					${teamMemberBorderColor !== undefined ? `border-color: ${teamMemberBorderColor};` : ''};
					border-radius: ${teamMemberBorderRadiusDesktopWidth};
					transition: all .3s ease-in-out;
					${teamMemberZIndex !== undefined ? `z-index: ${teamMemberZIndex}` : ''};
				}
				.fb-team-member-main-wrapper.${blockID}:hover {
					${teamMemberBgHoverColor !== undefined ? `background-color: ${teamMemberBgHoverColor};` : ''};
					${teamMemberBorderHoverColor !== undefined ? `border-color: ${teamMemberBorderHoverColor};` : ''};
				}

                .fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
					width: ${DeviceType === 'Desktop' ? teamMemberImageSizeWidthDesktop : DeviceType === 'Tablet' ? teamMemberImageSizeWidthTab : teamMemberImageSizeWidthMobile}${teamMemberImageSizeWidthUnits[DeviceType]};
					height: ${DeviceType === 'Desktop' ? teamMemberImageSizeHeightDesktop : DeviceType === 'Tablet' ? teamMemberImageSizeHeightTab : teamMemberImageSizeHeightMobile}${teamMemberImageSizeHeightUnits[DeviceType]};
                    border: ${teamMemberImageBorder};
                    border-color: ${teamMemberImageBorderColor};
                    border-width: ${teamMemberImageBorderTypeGetDesktop};
                    border-radius: ${teamMemberImageBorderRadiusGetDesktop};
                    margin: ${teamMemberImageMarginGetDesktop};
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-content {
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
                    background: ${teamMemberContentBackgroundColor};
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper .fb-team-member-image-overlay {
                    background: ${teamMemberImageBackgroundColor};
                }

         		.fb-team-member-wrapper.${blockID} .fb-team-member-name {
         		    font-family: ${teamMemberNameFontFamily !== 'default' ? teamMemberNameFontFamily : teamMemberNameFontFamily};
                    font-size: ${teamMemberNameFontSize !== undefined ? `${teamMemberNameFontSize}${teamMemberNameFontSizeUnits}` : ''};
                    font-weight: ${teamMemberNameFontWeight};
                    font-style: ${teamMemberNameFontStyle};
                    text-transform: ${teamMemberNameTextTransform};
                    text-decoration: ${teamMemberNameTextDecoration};
                    ${teamMemberNameLetterSpacingDesktop !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacingDesktop}${teamMemberNameLetterSpacingUnits};` : ''}
                    ${teamMemberNameLineHeightDesktop !== undefined ? `line-height: ${teamMemberNameLineHeightDesktop}${teamMemberNameLineHeightUnits};` : ''}
         			${teamMemberNameColorSwitcher === 'normal' && `color: ${teamMemberNameColor}`};
         			margin: ${teamMemberNameMarginGetDesktop};
         		}
         		.fb-team-member-wrapper.${blockID} .fb-team-member-name:hover {
         			${teamMemberNameColorSwitcher === 'hover' && `color: ${teamMemberNameHoverColor}`};
         		}

         		.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
         		    font-family: ${teamMemberDesignationFontFamily !== 'default' ? teamMemberDesignationFontFamily : teamMemberDesignationFontFamily};
                    font-size: ${teamMemberDesignationFontSize !== undefined ? `${teamMemberDesignationFontSize}${teamMemberDesignationFontSizeUnits}` : ''};
                    font-weight: ${teamMemberDesignationFontWeight};
                    font-style: ${teamMemberDesignationFontStyle};
                    text-transform: ${teamMemberDesignationTextTransform};
                    text-decoration: ${teamMemberDesignationTextDecoration};
                    ${teamMemberDesignationLetterSpacingDesktop !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacingDesktop}${teamMemberDesignationLetterSpacingUnits};` : ''}
                    ${teamMemberDesignationLineHeightDesktop !== undefined ? `line-height: ${teamMemberDesignationLineHeightDesktop}${teamMemberDesignationLineHeightUnits};` : ''}
         			color: ${teamMemberDesignationColor};
         			margin: ${teamMemberDesignationMarginGetDesktop};
         		}

				.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile {
					display: flex;
					gap: ${DeviceType === 'Desktop' ? teamMemberIconsSpacingDesktop : DeviceType === 'Tablet' ? teamMemberIconsSpacingTablet : teamMemberIconsSpacingMobile}${teamMemberIconsSpacingUnits};
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile .fb-team-member-social-icon {
					width: ${DeviceType === 'Desktop' ? teamMemberIconsSizeDesktop : DeviceType === 'Tablet' ? teamMemberIconsSizeTablet : teamMemberIconsSizeMobile}${teamMemberIconsSizeUnits};
					height: ${DeviceType === 'Desktop' ? teamMemberIconsSizeDesktop : DeviceType === 'Tablet' ? teamMemberIconsSizeTablet : teamMemberIconsSizeMobile}${teamMemberIconsSizeUnits};
					${teamMemberIconsColorSwitcher === 'normal' && `fill: ${teamMemberIconsColor}`};
					transition: all 0.3s ease-in-out;
				}
				.fb-team-member-wrapper.${blockID} .fb-team-member-social-profile .fb-team-member-social-icon:hover {
					${teamMemberIconsColorSwitcher === 'hover' && `fill: ${teamMemberIconsHoverColor}`}; 
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
						font-size: ${teamMemberNameFontSizeTablet !== undefined ? `${teamMemberNameFontSizeTablet}${teamMemberNameFontSizeUnits}` : ''};
						${teamMemberNameLetterSpacingTablet !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacingTablet}${teamMemberNameLetterSpacingUnits};` : ''}
						${teamMemberNameLineHeightTablet !== undefined ? `line-height: ${teamMemberNameLineHeightTablet}${teamMemberNameLineHeightUnits};` : ''}
						margin: ${teamMemberNameMarginGetTab};
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
						font-size: ${teamMemberDesignationFontSizeTablet !== undefined ? `${teamMemberDesignationFontSizeTablet}${teamMemberDesignationFontSizeUnits}` : ''};
						${teamMemberDesignationLetterSpacingTablet !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacingTablet}${teamMemberDesignationLetterSpacingUnits};` : ''}
						${teamMemberDesignationLineHeightTablet !== undefined ? `line-height: ${teamMemberDesignationLineHeightTablet}${teamMemberDesignationLineHeightUnits};` : ''}
						margin: ${teamMemberDesignationMarginGetTab};
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
						font-size: ${teamMemberNameFontSizeMobile !== undefined ? `${teamMemberNameFontSizeMobile}${teamMemberNameFontSizeUnits}` : ''};
						${teamMemberNameLetterSpacingMobile !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacingMobile}${teamMemberNameLetterSpacingUnits};` : ''}
						${teamMemberNameLineHeightMobile !== undefined ? `line-height: ${teamMemberNameLineHeightMobile}${teamMemberNameLineHeightUnits};` : ''}
						margin: ${teamMemberNameMarginGetMobile};
					}

					.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
						font-size: ${teamMemberDesignationFontSizeMobile !== undefined ? `${teamMemberDesignationFontSizeMobile}${teamMemberDesignationFontSizeUnits}` : ''};
						${teamMemberDesignationLetterSpacingMobile !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacingMobile}${teamMemberDesignationLetterSpacingUnits};` : ''}
						${teamMemberDesignationLineHeightMobile !== undefined ? `line-height: ${teamMemberDesignationLineHeightMobile}${teamMemberDesignationLineHeightUnits};` : ''}
						margin: ${teamMemberDesignationMarginGetMobile};
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
												tagName={attributes.teamMemberNameHeadingTag}
												label={__('Name', 'frontis-blocks')}
												value={attributes.teamMemberName}
												onChange={(value) => setAttributes({ teamMemberName: value })}
												placeholder={__('Wade Warren', 'frontis-block')}
											/>
											<BaseControl label={__("Heading Tag", "frontis-block")} className="fb-setting-tag-wrapper">
												<ButtonGroup className="fb-setting-tag-inner-wrapper">
													{HEADING.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ teamMemberNameHeadingTag: item.value })}
															className={`fb-setting-tag-single-btn ${
																attributes.teamMemberNameHeadingTag === item.value ? 'active' : ''
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											<TextControl
												label={__('Designation', 'frontis-blocks')}
												value={attributes.teamMemberDesignation}
												onChange={(value) => setAttributes({ teamMemberDesignation: value })}
											/>
											{/*<TextareaControl*/}
											{/*	label={__('Short Bio', 'frontis-blocks')}*/}
											{/*	value={attributes.teamMemberContent}*/}
											{/*	onChange={(value) => setAttributes({ teamMemberContent: value })}*/}
											{/*/>*/}
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

											{/*<TeamMemberImageSizeControl*/}
											{/*	attributes={attributes}*/}
											{/*	setAttributes={setAttributes}*/}
											{/*	clientId ={clientId}*/}
											{/*/>*/}
										</PanelBody>

										<TitleName attributes={attributes} setAttributes={setAttributes} />

										<Designation attributes={attributes} setAttributes={setAttributes} />

										<SocialIcons attributes={attributes} setAttributes={setAttributes} />


										{/*<PanelBody*/}
										{/*	title={__("Social Profile", "frontis-blocks")}*/}
										{/*	initialOpen={false}*/}
										{/*>*/}

										{/*</PanelBody>*/}

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
														spacingUnitsHandler={handleteamMemberMarginUnitsHandler}
														spacingUnits={teamMemberMarginUnits}
														spacingDesktop={teamMemberDesktopMargin}
														spacingTablet={teamMemberTabMargin}
														spacingMobile={teamMemberMobileMargin}
														handleSpacingUnitHandler={handleteamMemberMarginUnitChange}
														spacingCombineBtn={teamMemberMarginLink}
														spacingCombineBtnHandler={handleteamMemberMarginCombineBtn}
														setAttributes={setAttributes}
													/>

													<FB_Spacing 
														label={__("Padding", "frontis-blocks")}
														DeviceType={DeviceType}
														spacingUnitsHandler={handleteamMemberPaddingUnitsHandler}
														spacingUnits={teamMemberPaddingUnits}
														spacingDesktop={teamMemberDesktopPadding}
														spacingTablet={teamMemberTabPadding}
														spacingMobile={teamMemberMobilePadding}
														handleSpacingUnitHandler={handleteamMemberPaddingUnitChange}
														spacingCombineBtn={teamMemberPaddingLink}
														spacingCombineBtnHandler={handleteamMemberPaddingCombineBtn}
														setAttributes={setAttributes}
													/>                                     
												</PanelBody>

												<PanelBody title="Background Color" initialOpen={false} >
													<BaseControl
														className="fb-setting-color-panel-wrapper"
													>
														<ButtonGroup className="fb-setting-color-panel-btn">
															{NORMAL_HOVER.map((item, key) => (
																<Button
																	key={key}
																	onClick={() => setAttributes({ teamMemberBgColorSwitcher: item.value })}
																	className={`fb-setting-color-panel-btn-switchr ${teamMemberBgColorSwitcher === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>

													{teamMemberBgColorSwitcher === 'normal' && (
														<BaseControl 
															label={__("Nomal Color", "frontis-blocks")}
															className="fb-setting-color-setting-wrapper"
														>
															<Dropdown
																className="fb-setting-color-setting-icon-dropdown"
																contentClassName="fb-setting-color-setting-icon-dropdown-content"
																popoverProps={{ placement: 'bottom-start' }}
																renderToggle={({ isOpen, onToggle }) => (
																	<Button
																		variant="primary"
																		onClick={onToggle}
																		aria-expanded={isOpen}
																		className="fb-setting-color-setting-icon-btn"
																	>
																		<Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
																	</Button>
																)}
																renderContent={() => (
																	<div className="fb-setting-color-setting-icon-popup">
																		<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																			<div className="fb-setting-normal-color">
																				<ColorPicker
																					color={teamMemberBgColor}
																					onChange={(value) => setAttributes({ teamMemberBgColor: value })}
																					enableAlpha={true}
																				/>
																				<div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
																				<ColorPalette
																					colors={[
																						{ color: '#F72585' },
																						{ color: '#7209B7' },
																						{ color: '#3A0CA3' },
																						{ color: '#4361EE' },
																						{ color: '#4CC9F0' },
																					]}
																					disableCustomColors={true}
																					value={teamMemberBgColor}
																					onChange={(value) => setAttributes({ teamMemberBgColor: value })}
																				/>
																			</div>
																		</BaseControl>
																	</div>
																)}
															/>
														</BaseControl>
													)}

													{teamMemberBgColorSwitcher === 'hover' && (
														<BaseControl 
															label={__("Hover Color", "frontis-blocks")}
															className="fb-setting-color-setting-wrapper"
														>
															<Dropdown
																className="fb-setting-color-setting-icon-dropdown"
																contentClassName="fb-setting-color-setting-icon-dropdown-content"
																popoverProps={{ placement: 'bottom-start' }}
																renderToggle={({ isOpen, onToggle }) => (
																	<Button
																		variant="primary"
																		onClick={onToggle}
																		aria-expanded={isOpen}
																		className="fb-setting-color-setting-icon-btn"
																	>
																		<Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
																	</Button>
																)}
																renderContent={() => (
																	<div className="fb-setting-color-setting-icon-popup">
																		<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																			<div className="fb-setting-hover-color">
																				<ColorPicker
																					color={teamMemberBgHoverColor}
																					onChange={(value) => setAttributes({ teamMemberBgHoverColor: value })}
																					enableAlpha={true}
																				/>
																				<div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
																				<ColorPalette
																					colors={[
																						{ color: '#F72585' },
																						{ color: '#7209B7' },
																						{ color: '#3A0CA3' },
																						{ color: '#4361EE' },
																						{ color: '#4CC9F0' },
																					]}
																					disableCustomColors={true}
																					value={teamMemberBgHoverColor}
																					onChange={(value) => setAttributes({ teamMemberBgHoverColor: value })}
																				/>
																			</div>
																		</BaseControl>
																	</div>
																)}
															/>
														</BaseControl>
													)}
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

													<BaseControl
														label={__("Border Color", "frontis-blocks")}
														className="fb-setting-color-panel-wrapper"
													>
														<ButtonGroup className="fb-setting-color-panel-btn">
															{NORMAL_HOVER.map((item, key) => (
																<Button
																	key={key}
																	onClick={() => setAttributes({ teamMemberBorderColorSwitcher: item.value })}
																	className={`fb-setting-color-panel-btn-switchr ${teamMemberBorderColorSwitcher === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>

													{teamMemberBorderColorSwitcher === 'normal' && (
														<BaseControl 
															label={__("Nomal Color", "frontis-blocks")}
															className="fb-setting-color-setting-wrapper"
														>
															<Dropdown
																className="fb-setting-color-setting-icon-dropdown"
																contentClassName="fb-setting-color-setting-icon-dropdown-content"
																popoverProps={{ placement: 'bottom-start' }}
																renderToggle={({ isOpen, onToggle }) => (
																	<Button
																		variant="primary"
																		onClick={onToggle}
																		aria-expanded={isOpen}
																		aria-label={__("Toggle Typography Settings", "frontis-blocks")}
																		className="fb-setting-color-setting-icon-btn"
																	>
																		<Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
																	</Button>
																)}
																renderContent={() => (
																	<div className="fb-setting-color-setting-icon-popup">
																		<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																			<div className="fb-setting-normal-color">
																				<ColorPicker
																					color={teamMemberBorderColor}
																					onChange={(value) => setAttributes({ teamMemberBorderColor: value })}
																					enableAlpha={true}
																				/>
																				<div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
																				<ColorPalette
																					colors={[
																						{ color: '#F72585' },
																						{ color: '#7209B7' },
																						{ color: '#3A0CA3' },
																						{ color: '#4361EE' },
																						{ color: '#4CC9F0' },
																					]}
																					disableCustomColors={true}
																					value={teamMemberBorderColor}
																					onChange={(value) => setAttributes({ teamMemberBorderColor: value })}
																				/>
																			</div>
																		</BaseControl>
																	</div>
																)}
															/>
														</BaseControl>
													)}

													{teamMemberBorderColorSwitcher === 'hover' && (
														<BaseControl 
															label={__("Hover Color", "frontis-blocks")}
															className="fb-setting-color-setting-wrapper"
														>
															<Dropdown
																className="fb-setting-color-setting-icon-dropdown"
																contentClassName="fb-setting-color-setting-icon-dropdown-content"
																popoverProps={{ placement: 'bottom-start' }}
																renderToggle={({ isOpen, onToggle }) => (
																	<Button
																		variant="primary"
																		onClick={onToggle}
																		aria-expanded={isOpen}
																		aria-label={__("Toggle Typography Settings", "frontis-blocks")}
																		className="fb-setting-color-setting-icon-btn"
																	>
																		<Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
																	</Button>
																)}
																renderContent={() => (
																	<div className="fb-setting-color-setting-icon-popup">
																		<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																			<div className="fb-setting-hover-color">
																				<ColorPicker
																					color={teamMemberBorderHoverColor}
																					onChange={(value) => setAttributes({ teamMemberBorderHoverColor: value })}
																					enableAlpha={true}
																				/>
																				<div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
																				<ColorPalette
																					colors={[
																						{ color: '#F72585' },
																						{ color: '#7209B7' },
																						{ color: '#3A0CA3' },
																						{ color: '#4361EE' },
																						{ color: '#4CC9F0' },
																					]}
																					disableCustomColors={true}
																					value={teamMemberBorderHoverColor}
																					onChange={(value) => setAttributes({ teamMemberBorderHoverColor: value })}
																				/>
																			</div>
																		</BaseControl>
																	</div>
																)}
															/>
														</BaseControl>
													)}

													<FB_Spacing 
														label={__("Border Width", "frontis-blocks")}
														DeviceType={DeviceType}
														spacingUnitsHandler={handleteamMemberBorderUnitsHandler}
														spacingUnits={teamMemberBorderUnits}
														spacingDesktop={teamMemberDesktopBorderWidth}
														spacingTablet={teamMemberTabBorderWidth}
														spacingMobile={teamMemberMobileBorderWidth}
														handleSpacingUnitHandler={handleteamMemberBorderUnitChange}
														spacingCombineBtn={teamMemberBorderLink}
														spacingCombineBtnHandler={handleteamMemberBorderCombineBtn}
														setAttributes={setAttributes}
													/>

													<FB_Spacing 
														label={__("Border Radius Width", "frontis-blocks")}
														DeviceType={DeviceType}
														spacingUnitsHandler={handleteamMemberBorderRadiusUnitsHandler}
														spacingUnits={teamMemberBorderRadiusUnits}
														spacingDesktop={teamMemberDesktopBorderRadiusWidth}
														spacingTablet={teamMemberTabBorderRadiusWidth}
														spacingMobile={teamMemberMobileBorderRadiusWidth}
														handleSpacingUnitHandler={handleteamMemberBorderRadiusUnitChange}
														spacingCombineBtn={teamMemberBorderRadiusLink}
														spacingCombineBtnHandler={handleteamMemberBorderRadiusCombineBtn}
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
							{attributes.teamMemberImageMediaUrl && (
								<img src={attributes.teamMemberImageMediaUrl}/>
							)}
						</div>
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
		</>
	);
}
