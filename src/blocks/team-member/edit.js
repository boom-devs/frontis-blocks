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
import {mediaType, BORDER_STYLES, FONT_FAMILYS, UNIT_TYPES, SELECT_TYPE, iconType} from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import ResponsiveControl from "../../components/responsivecontrol";
import {HEADING} from "../info-box/constants/constants";

import TeamMemberContentBorderControl from './style-control/content/team-member-content-border-control.js';
import TeamMemberContentBorderRadiusControl from './style-control/content/team-member-content-border-radius-control.js';
import TeamMemberContentMarginControl from './style-control/content/team-member-content-margin-control.js';
import TeamMemberContentPaddingControl from './style-control/content/team-member-content-padding-control.js';

//
import TeamMemberImageBorderControl from './style-control/image/team-member-image-border-control.js';
import TeamMemberImageBorderRadiusControl from './style-control/image/team-member-image-border-radius-control.js';
import TeamMemberImageMarginControl from './style-control/image/team-member-image-margin-control.js';
import TeamMemberNameTypographyControl from './style-control/name/team-member-name-typography-control.js';
import TeamMemberNameMarginControl from './style-control/name/team-member-name-margin-control.js';
import TeamMemberDesignationTypographyControl from './style-control/designation/team-member-designation-typography-control.js';
import TeamMemberDesignationMarginControl from './style-control/designation/team-member-designation-margin-control.js';

import SortableItem from './sortableItem.js';


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		DeviceType,
		teamMemberImageMediaUrl,

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
		teamMemberNameColor,
		teamMemberNameLoadGoogleFonts,
		teamMemberNameFontFamily,
		teamMemberNameFontWeight,
		teamMemberNameFontStyle,
		teamMemberNameFontSizeType,
		teamMemberNameFontSizeTypeMobile,
		teamMemberNameFontSizeTypeTablet,
		teamMemberNameFontSize,
		teamMemberNameFontSizeMobile,
		teamMemberNameFontSizeTablet,
		teamMemberNameLineHeightType,
		teamMemberNameLineHeight,
		teamMemberNameLineHeightMobile,
		teamMemberNameLineHeightTablet,
		teamMemberNameLetterSpacing,
		teamMemberNameLetterSpacingTablet,
		teamMemberNameLetterSpacingMobile,
		teamMemberNameLetterSpacingType,
		teamMemberNameTextTransform,
		teamMemberNameTextDecoration,

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
		teamMemberDesignationFontSizeType,
		teamMemberDesignationFontSizeTypeMobile,
		teamMemberDesignationFontSizeTypeTablet,
		teamMemberDesignationFontSize,
		teamMemberDesignationFontSizeMobile,
		teamMemberDesignationFontSizeTablet,
		teamMemberDesignationLineHeightType,
		teamMemberDesignationLineHeight,
		teamMemberDesignationLineHeightMobile,
		teamMemberDesignationLineHeightTablet,
		teamMemberDesignationLetterSpacing,
		teamMemberDesignationLetterSpacingTablet,
		teamMemberDesignationLetterSpacingMobile,
		teamMemberDesignationLetterSpacingType,
		teamMemberDesignationTextTransform,
		teamMemberDesignationTextDecoration,


		// Team Designation Margin
		teamMemberDesignationMarginUnits,
		teamMemberDesignationMarginDesktop,
		teamMemberDesignationMarginTab,
		teamMemberDesignationMarginMobile,
		teamMemberDesignationMarginLink,


		// Team Content
		teamMemberContentBackgroundColor,
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
		teamMemberContentBorderColor,
		teamMemberContentBorderTypeUnits,
		teamMemberContentBorderTypeDesktop,
		teamMemberContentBorderTypeTab,
		teamMemberContentBorderTypeMobile,
		teamMemberContentBorderTypeLink,

		// Team Content Border Radius
		teamMemberContentBorderRadiusUnits,
		teamMemberContentBorderRadiusDesktop,
		teamMemberContentBorderRadiusTab,
		teamMemberContentBorderRadiusMobile,
		teamMemberContentBorderRadiusLink,

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

	} = attributes;

	// Set blockID if it doesn't exist

	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "fb-team-member-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const blockProps = useBlockProps();

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


	return (
		<>
			<style>
				{`
                .fb-team-member-wrapper.${blockID} .fb-team-member-image-wrapper {
                    border: ${teamMemberImageBorder};
                    border-color: ${teamMemberImageBorderColor};
                    border-width: ${teamMemberImageBorderTypeGetDesktop};
                    border-radius: ${teamMemberImageBorderRadiusGetDesktop};
                    margin: ${teamMemberImageMarginGetDesktop};
                }
                .fb-team-member-wrapper.${blockID} .fb-team-member-content {
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
                    ${teamMemberNameLetterSpacing !== undefined ? `letter-spacing: ${teamMemberNameLetterSpacing}${teamMemberNameLetterSpacingUnits};` : ''}
                    ${teamMemberNameLineHeight !== undefined ? `line-height: ${teamMemberNameLineHeight}${teamMemberNameLineHeightUnits};` : ''}
         			color: ${teamMemberNameColor};
         			margin: ${teamMemberNameMarginGetDesktop};
         		}
         		.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
         		    font-family: ${teamMemberDesignationFontFamily !== 'default' ? teamMemberDesignationFontFamily : teamMemberDesignationFontFamily};
                    font-size: ${teamMemberDesignationFontSize !== undefined ? `${teamMemberDesignationFontSize}${teamMemberDesignationFontSizeUnits}` : ''};
                    font-weight: ${teamMemberDesignationFontWeight};
                    font-style: ${teamMemberDesignationFontStyle};
                    text-transform: ${teamMemberDesignationTextTransform};
                    text-decoration: ${teamMemberDesignationTextDecoration};
                    ${teamMemberDesignationLetterSpacing !== undefined ? `letter-spacing: ${teamMemberDesignationLetterSpacing}${teamMemberDesignationLetterSpacingUnits};` : ''}
                    ${teamMemberDesignationLineHeight !== undefined ? `line-height: ${teamMemberDesignationLineHeight}${teamMemberDesignationLineHeightUnits};` : ''}
         			color: ${teamMemberDesignationColor};
         			margin: ${teamMemberDesignationMarginGetDesktop};
         		}

             	 @media only screen and (max-width: 1024px) {
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
						margin: ${teamMemberNameMarginGetTab} !important;
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
						margin: ${teamMemberDesignationMarginGetTab} !important;
					}
                }

                @media only screen and (max-width: 767px) {
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
						margin: ${teamMemberNameMarginGetMobile} !important;
					}
					.fb-team-member-wrapper.${blockID} .fb-team-member-designation {
						margin: ${teamMemberDesignationMarginGetMobile} !important;
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
											<BaseControl label={__("Photo", "frontis-block")} className="fb-setting-tag-wrapper">
												<MediaUploadCheck>
													<MediaUpload
														onSelect={(media) => {
															setAttributes({
																teamMemberImageMediaID: media.id,
																teamMemberImageMediaUrl: media.url,
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
																		__('Select Icon Image', 'frontis-blocks')}
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
															onClick={() => removeTeamMemberImageMedia()}
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


										<PanelBody
											title={__("Name", "frontis-blocks")}
											initialOpen={false}
										>
											<TeamMemberNameTypographyControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<TeamMemberNameMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>

										</PanelBody>

										<PanelBody
											title={__("Designation", "frontis-blocks")}
											initialOpen={false}
										>
											<TeamMemberDesignationTypographyControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<TeamMemberDesignationMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
										</PanelBody>


										{/*<PanelBody*/}
										{/*	title={__("Social Profile", "frontis-blocks")}*/}
										{/*	initialOpen={false}*/}
										{/*>*/}

										{/*</PanelBody>*/}

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
										<span key={item.id} className="fb-team-member-social-icon">
											{item.teamMemberSocialIcon ? renderSVG(item.teamMemberSocialIcon) : ''}
										</span>
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
