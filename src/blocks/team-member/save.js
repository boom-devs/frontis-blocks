import {RichText, useBlockProps} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {useRef} from "@wordpress/element";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {

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

	const blockProps = useBlockProps.save({
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

	// Team Member Main

	const teamMemberMarginDesktopWidth = `${teamMemberDesktopMargin.top}${teamMemberMarginUnits[DeviceType]} ${teamMemberDesktopMargin.right}${teamMemberMarginUnits[DeviceType]} ${teamMemberDesktopMargin.bottom}${teamMemberMarginUnits[DeviceType]} ${teamMemberDesktopMargin.left}${teamMemberMarginUnits[DeviceType]}`;
	const teamMemberMarginTabletWidth = `${teamMemberTabMargin.top}${teamMemberMarginUnits[DeviceType]} ${teamMemberTabMargin.right}${teamMemberMarginUnits[DeviceType]} ${teamMemberTabMargin.bottom}${teamMemberMarginUnits[DeviceType]} ${teamMemberTabMargin.left}${teamMemberMarginUnits[DeviceType]}`;
	const teamMemberMarginMobileWidth = `${teamMemberMobileMargin.top}${teamMemberMarginUnits[DeviceType]} ${teamMemberMobileMargin.right}${teamMemberMarginUnits[DeviceType]} ${teamMemberMobileMargin.bottom}${teamMemberMarginUnits[DeviceType]} ${teamMemberMobileMargin.left}${teamMemberMarginUnits[DeviceType]}`;
	
	const teamMemberPaddingDesktopWidth = `${teamMemberDesktopPadding.top}${teamMemberPaddingUnits[DeviceType]} ${teamMemberDesktopPadding.right}${teamMemberPaddingUnits[DeviceType]} ${teamMemberDesktopPadding.bottom}${teamMemberPaddingUnits[DeviceType]} ${teamMemberDesktopPadding.left}${teamMemberPaddingUnits[DeviceType]}`;
	const teamMemberPaddingTabletWidth = `${teamMemberTabPadding.top}${teamMemberPaddingUnits[DeviceType]} ${teamMemberTabPadding.right}${teamMemberPaddingUnits[DeviceType]} ${teamMemberTabPadding.bottom}${teamMemberPaddingUnits[DeviceType]} ${teamMemberTabPadding.left}${teamMemberPaddingUnits[DeviceType]}`;
	const teamMemberPaddingMobileWidth = `${teamMemberMobilePadding.top}${teamMemberPaddingUnits[DeviceType]} ${teamMemberMobilePadding.right}${teamMemberPaddingUnits[DeviceType]} ${teamMemberMobilePadding.bottom}${teamMemberPaddingUnits[DeviceType]} ${teamMemberMobilePadding.left}${teamMemberPaddingUnits[DeviceType]}`;
	
	const teamMemberBorderDesktopWidth = `${teamMemberDesktopBorderWidth.top}${teamMemberBorderUnits[DeviceType]} ${teamMemberDesktopBorderWidth.right}${teamMemberBorderUnits[DeviceType]} ${teamMemberDesktopBorderWidth.bottom}${teamMemberBorderUnits[DeviceType]} ${teamMemberDesktopBorderWidth.left}${teamMemberBorderUnits[DeviceType]}`;
	const teamMemberBorderTabletWidth = `${teamMemberTabBorderWidth.top}${teamMemberBorderUnits[DeviceType]} ${teamMemberTabBorderWidth.right}${teamMemberBorderUnits[DeviceType]} ${teamMemberTabBorderWidth.bottom}${teamMemberBorderUnits[DeviceType]} ${teamMemberTabBorderWidth.left}${teamMemberBorderUnits[DeviceType]}`;
	const teamMemberBorderMobileWidth = `${teamMemberMobileBorderWidth.top}${teamMemberBorderUnits[DeviceType]} ${teamMemberMobileBorderWidth.right}${teamMemberBorderUnits[DeviceType]} ${teamMemberMobileBorderWidth.bottom}${teamMemberBorderUnits[DeviceType]} ${teamMemberMobileBorderWidth.left}${teamMemberBorderUnits[DeviceType]}`;
	
	const teamMemberBorderRadiusDesktopWidth = `${teamMemberDesktopBorderRadiusWidth.top}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberDesktopBorderRadiusWidth.right}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberDesktopBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberDesktopBorderRadiusWidth.left}${teamMemberBorderRadiusUnits[DeviceType]}`;
	const teamMemberBorderRadiusTabletWidth = `${teamMemberTabBorderRadiusWidth.top}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberTabBorderRadiusWidth.right}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberTabBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberTabBorderRadiusWidth.left}${teamMemberBorderRadiusUnits[DeviceType]}`;
	const teamMemberBorderRadiusMobileWidth = `${teamMemberMobileBorderRadiusWidth.top}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberMobileBorderRadiusWidth.right}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberMobileBorderRadiusWidth.bottom}${teamMemberBorderRadiusUnits[DeviceType]} ${teamMemberMobileBorderRadiusWidth.left}${teamMemberBorderRadiusUnits[DeviceType]}`;
	

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
		</>
	);
}
