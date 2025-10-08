import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { useEffect, useMemo, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    RangeControl,
    SelectControl,
    ToggleControl,
    TextControl,
} from '@wordpress/components';

import { 
    BORDER_STYLES, 
    POST_SWITCHER, 
    ICON_ALIGN, 
    OVERFLOW_OP,
    TAXONOMY_OPTIONS,
    PAGINATION_TYPE,
    PAGINATION_PREV_NEXT_TYPE,
    PREMADE_STYLE,
    READ_MORE_ICON_ALIGN,
} from './constants/constants';

/**
 * External Dependencies
 */
import Select2 from "react-select";
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from '@Components/spacing';
import FB_ColorControl from '@Components/color-control';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_Range from '@Components/range';
import FB_IncludeExcludeSwitcherControl from '@Components/switcher-include-exclude-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ImageControl from '@Components/image-control';
import FB_InspectorControls from '@Components/InspectorControls';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
        blockId,
		// deviceType,
		blockStyle,
		premadeStyle,
		postType,
		postPerPage,
		selectedCatSwitcher,
		selectedCat,
		deSelectedCat,
		selectedTagSwitcher,
		selectedTag,
		deSelectedTag,
		selectedAuthorSwitcher,
		selectedAuthor,
		deSelectedAuthor,
		orderBy,
		sortOrder,
		gridColumnsPerSection,
		gridGapUnits,
		gridRowGap,
		gridColumnGap,
		listGapUnits,
		listRowGap,
		listImageSpacing,
		postSwitcher,

        /** Start grid */
        postGridPaddingUnits,
        postGridPaddingDesktop,
        postGridPaddingTablet,
        postGridPaddingMobile,
        postGridPaddingLink,

        postGridMarginUnits,
        postGridMarginDesktop,
        postGridMarginTablet,
        postGridMarginMobile,
        postGridMarginLink,

        postGridBgColorSwitcher,
        postGridNormalBackgroundType,
        postGridNormalClassicColor,
        postGridNormalGradientColor,
        postGridNormalCustomGradientSwitcher,
        postGridNormalCustomGradientInputValue,
        postGridHoverBackgroundType,
        postGridHoverClassicColor,
        postGridHoverGradientColor,
        postGridHoverCustomGradientSwitcher,
        postGridHoverCustomGradientInputValue,

        postGridBorder,
        postGridBorderColorSwitcher,
        postGridBorderColor,
        postGridBorderHoverColor,
        postGridBorderUnits,
        postGridBorderDesktop,
        postGridBorderTablet,
        postGridBorderMobile,
        postGridBorderLink,

        postGridBorderRadiusUnits,
        postGridBorderRadiusDesktop,
        postGridBorderRadiusTablet,
        postGridBorderRadiusMobile,
        postGridBorderRadiusLink,

        postGridBoxShadowSwitcher,
        postGridBoxShadowValues,
        postGridBoxShadowCssValue,
        postGridBoxShadowHoverValues,
        postGridBoxShadowHoverCssValue,
        /** End grid */ 

        /** Start Image */
        postImageSize,
        postImageWidth,
        postImageWidthUnits,
        postImageHeight,
        postImageHeightUnits,
        postImageBorder,
        postImageBorderColorSwitcher,
        postImageBorderColor,
        postImageBorderHoverColor,
        postImageBorderUnits,
        postImageDesktopBorder,
        postImageTabletBorder,
        postImageMobileBorder,
        postImageBorderLink,
        postImageBorderRadiusUnits,
        postImageDesktopBorderRadius,
        postImageTabletBorderRadius,
        postImageMobileBorderRadius,
        postImageBorderRadiusLink,

        postImageMarginUnits,
        postImageMarginDesktop,
        postImageMarginTablet,
        postImageMarginMobile,
        postImageMarginLink,
        /** End Image */

        /** Start title     */
        postTitleTag,
        postTitleGlobalTypoSwitcher,
        postTitleGlobalTypographyData,
        postTitleGlobalTypoType,
        postTitleGlobalTypoOption,
        postTitleFontFamily,
        postTitleFontSize,
        postTitleFontSizeUnits,
        postTitleFontWeight,
        postTitleFontStyle,
        postTitleTextTransform,
        postTitleTextDecoration,
        postTitleLetterSpacing,
        postTitleLetterSpacingUnits,
        postTitleLineHeight,
        postTitleLineHeightUnits,

        postTitleColorSwitcher,
        postTitleColor,
        postTitleHoverColor,

        postTitleMarginUnits,
        postTitleMarginDesktop,
        postTitleMarginTablet,
        postTitleMarginMobile,
        postTitleMarginLink,
        /** End title */

        /** Start description     */
        postDescriptionTag,
        postDescriptionGlobalTypoSwitcher,
        postDescriptionGlobalTypographyData,
        postDescriptionGlobalTypoType,
        postDescriptionGlobalTypoOption,
        postDescriptionFontFamily,
        postDescriptionFontSize,
        postDescriptionFontSizeUnits,
        postDescriptionFontWeight,
        postDescriptionFontStyle,
        postDescriptionTextTransform,
        postDescriptionTextDecoration,
        postDescriptionLetterSpacing,
        postDescriptionLetterSpacingUnits,
        postDescriptionLineHeight,
        postDescriptionLineHeightUnits,

        postDescriptionColorSwitcher,
        postDescriptionColor,
        postDescriptionHoverColor,

        postDescriptionMarginUnits,
        postDescriptionMarginDesktop,
        postDescriptionMarginTablet,
        postDescriptionMarginMobile,
        postDescriptionMarginLink,
        postDescriptionExcerptLength,
        showExcerptSwitcher,
        /** End description */

        /** Start category */
        showCategorySwitcher,
        postCategoryGlobalTypoSwitcher,
        postCategoryGlobalTypographyData,
        postCategoryGlobalTypoType,
        postCategoryGlobalTypoOption,
        postCategoryFontFamily,
        postCategoryFontSize,
        postCategoryFontSizeUnits,
        postCategoryFontWeight,
        postCategoryFontStyle,
        postCategoryTextTransform,
        postCategoryTextDecoration,
        postCategoryLetterSpacing,
        postCategoryLetterSpacingUnits,
        postCategoryLineHeight,
        postCategoryLineHeightUnits,

        postCategoryColorSwitcher,
        postCategoryColor,
        postCategoryHoverColor,

        postCategoryBgColorSwitcher,
        postCategoryBgColor,
        postCategoryBgHoverColor,

        postCategoryBorder,
        postCategoryBorderColorSwitcher,
        postCategoryBorderColor,
        postCategoryBorderHoverColor,
        postCategoryBorderUnits,
        postCategoryDesktopBorder,
        postCategoryTabletBorder,
        postCategoryMobileBorder,
        postCategoryBorderLink,

        postCategoryBorderRadiusUnits,
        postCategoryDesktopBorderRadius,
        postCategoryTabletBorderRadius,
        postCategoryMobileBorderRadius,
        postCategoryBorderRadiusLink,

        postCategoryPaddingUnits,
        postCategoryPaddingDesktop,
        postCategoryPaddingTablet,
        postCategoryPaddingMobile,
        postCategoryPaddingLink,

        postCategoryMarginUnits,
        postCategoryMarginDesktop,
        postCategoryMarginTablet,
        postCategoryMarginMobile,
        postCategoryMarginLink,
        postCategoryGap,
        postCategoryGapUnits,
        /** End category */

        /** Start tag */
        showTagSwitcher,
        postTagGlobalTypoSwitcher,
        postTagGlobalTypographyData,
        postTagGlobalTypoType,
        postTagGlobalTypoOption,
        postTagFontFamily,
        postTagFontSize,
        postTagFontSizeUnits,
        postTagFontWeight,
        postTagFontStyle,
        postTagTextTransform,
        postTagTextDecoration,
        postTagLetterSpacing,
        postTagLetterSpacingUnits,
        postTagLineHeight,
        postTagLineHeightUnits,

        postTagColorSwitcher,
        postTagColor,
        postTagHoverColor,

        postTagBgColorSwitcher,
        postTagBgColor,
        postTagBgHoverColor,

        postTagBorder,
        postTagBorderColorSwitcher,
        postTagBorderColor,
        postTagBorderHoverColor,
        postTagBorderUnits,
        postTagDesktopBorder,
        postTagTabletBorder,
        postTagMobileBorder,
        postTagBorderLink,

        postTagBorderRadiusUnits,
        postTagDesktopBorderRadius,
        postTagTabletBorderRadius,
        postTagMobileBorderRadius,
        postTagBorderRadiusLink,

        postTagPaddingUnits,
        postTagPaddingDesktop,
        postTagPaddingTablet,
        postTagPaddingMobile,
        postTagPaddingLink,

        postTagMarginUnits,
        postTagMarginDesktop,
        postTagMarginTablet,
        postTagMarginMobile,
        postTagMarginLink,

        postTagGap,
        postTagGapUnits,
        /** End tag */

        /** Start author */
        showAuthorSwitcher,
        postAuthorGap,
        postAuthorGapUnits,
        postAuthorAvatarSwitcher,
        postAuthorAvatarWidth,
        postAuthorAvatarWidthUnits,

        postAuthorAvatarBorder,
        postAuthorAvatarBorderColorSwitcher,
        postAuthorAvatarBorderColor,
        postAuthorAvatarBorderHoverColor,

        postAuthorAvatarBorderUnits,
        postAuthorAvatarDesktopBorder,
        postAuthorAvatarTabletBorder,
        postAuthorAvatarMobileBorder,
        postAuthorAvatarBorderLink,
        
        postAuthorAvatarBorderRadiusUnits,
        postAuthorAvatarDesktopBorderRadius,
        postAuthorAvatarTabletBorderRadius,
        postAuthorAvatarMobileBorderRadius,
        postAuthorAvatarBorderRadiusLink,

        postAuthorMarginUnits,
        postAuthorMarginDesktop,
        postAuthorMarginTablet,
        postAuthorMarginMobile,
        postAuthorMarginLink,

        postAuthorGlobalTypoSwitcher,
        postAuthorGlobalTypographyData,
        postAuthorGlobalTypoType,
        postAuthorGlobalTypoOption,
        postAuthorFontFamily,
        postAuthorFontSize,
        postAuthorFontSizeUnits,
        postAuthorFontWeight,
        postAuthorFontStyle,
        postAuthorTextTransform,
        postAuthorTextDecoration,
        postAuthorLetterSpacing,
        postAuthorLetterSpacingUnits,
        postAuthorLineHeight,
        postAuthorLineHeightUnits,

        postAuthorColorSwitcher,
        postAuthorColor,
        postAuthorHoverColor,

        postAuthorPrefixSwitcher,
        postAuthorPrefix,
        postAuthorPrefixColorSwitcher,
        postAuthorPrefixColor,
        postAuthorPrefixHoverColor,
        /** End author */   

        /** Start date */
        showDateSwitcher,
        postDateGlobalTypoSwitcher,
        postDateGlobalTypographyData,
        postDateGlobalTypoType,
        postDateGlobalTypoOption,
        postDateFontFamily,
        postDateFontSize,
        postDateFontSizeUnits,
        postDateFontWeight,
        postDateFontStyle,
        postDateTextTransform,
        postDateTextDecoration,
        postDateLetterSpacing,
        postDateLetterSpacingUnits,
        postDateLineHeight,
        postDateLineHeightUnits,
        postDateColorSwitcher,
        postDateColor,
        postDateHoverColor,
        /** End date */

        /** Start Global Setting */
        postGlobalZIndex,
        postGridOverflow,
        postGlobalPaddingUnits,
        postGlobalPaddingDesktop,
        postGlobalPaddingTablet,
        postGlobalPaddingMobile,
        postGlobalPaddingLink,

        postGlobalMarginUnits,
        postGlobalMarginDesktop,
        postGlobalMarginTablet,
        postGlobalMarginMobile,
        postGlobalMarginLink,

        postGlobalBgColorSwitcher,
        postGlobalNormalBackgroundType,
        postGlobalNormalClassicColor,
        postGlobalNormalGradientColor,
        postGlobalNormalCustomGradientSwitcher,
        postGlobalNormalCustomGradientInputValue,

        postGlobalHoverBackgroundType,
        postGlobalHoverClassicColor,
        postGlobalHoverGradientColor,
        postGlobalHoverCustomGradientSwitcher,
        postGlobalHoverCustomGradientInputValue,
        
        postGlobalBorder,
        postGlobalBorderColorSwitcher,
        postGlobalBorderColor,
        postGlobalBorderHoverColor,

        postGlobalBorderUnits,
        postGlobalBorderDesktop,
        postGlobalBorderTablet,
        postGlobalBorderMobile,
        postGlobalBorderLink,

        postGlobalBorderRadiusUnits,
        postGlobalBorderRadiusDesktop,
        postGlobalBorderRadiusTablet,
        postGlobalBorderRadiusMobile,
        postGlobalBorderRadiusLink,

        postGlobalBoxShadowSwitcher,
        postGlobalBoxShadowValues,
        postGlobalBoxShadowCssValue,
        postGlobalBoxShadowHoverValues,
        postGlobalBoxShadowHoverCssValue,
        /** End Global Setting */

        /** Start Load More */
        loadMoreSwitcher,
        loadMoreText,
        loadMoreIconAlign,
        loadMoreIcon,

        loadMoreButtonBgColorSwitcher,
        loadMoreButtonNormalBackgroundType,
        loadMoreButtonNormalClassicColor,
        loadMoreButtonNormalGradientColor,
        loadMoreButtonNormalCustomGradientSwitcher,
        loadMoreButtonNormalCustomGradientInputValue,
        loadMoreButtonHoverBackgroundType,
        loadMoreButtonHoverClassicColor,
        loadMoreButtonHoverGradientColor,
        loadMoreButtonHoverCustomGradientSwitcher,
        loadMoreButtonHoverCustomGradientInputValue,

        loadMoreButtonPaddingUnits,
        loadMoreButtonDesktopPadding,
        loadMoreButtonTabletPadding,
        loadMoreButtonMobilePadding,
        loadMoreButtonPaddingLink,

        loadMoreButtonBorder,
        loadMoreButtonBorderColorSwitcher,
        loadMoreButtonBorderColor,
        loadMoreButtonBorderHoverColor,

        loadMoreButtonBorderUnits,
        loadMoreButtonDesktopBorder,
        loadMoreButtonTabletBorder,
        loadMoreButtonMobileBorder,
        loadMoreButtonBorderLink,

        loadMoreButtonBorderRadiusUnits,
        loadMoreButtonDesktopBorderRadius,
        loadMoreButtonTabletBorderRadius,
        loadMoreButtonMobileBorderRadius,
        loadMoreButtonBorderRadiusLink,

        loadMoreTextGlobalTypoSwitcher,
        loadMoreTextGlobalTypographyData,
        loadMoreTextGlobalTypoType,
        loadMoreTextGlobalTypoOption,
        loadMoreTextFontFamily,
        loadMoreTextFontSize,
        loadMoreTextFontSizeUnits,
        loadMoreTextFontWeight,
        loadMoreTextFontStyle,
        loadMoreTextTransform,
        loadMoreTextDecoration,
        loadMoreTextLetterSpacing,
        loadMoreTextLetterSpacingUnits,
        loadMoreTextLineHeight,
        loadMoreTextLineHeightUnits,

        loadMoreTextColorSwitcher,
        loadMoreTextColor,
        loadMoreTextHoverColor,
        loadMoreloaderColorSwitcher,
        loadMoreloaderColor,
        loadMoreloaderHoverColor,

        loadMoreIconSize,
        loadMoreIconSizeUnits,
        loadMoreIconColorSwitcher,
        loadMoreIconColor,
        loadMoreIconHoverColor,
        loadMoreIconMarginUnits,
        loadMoreIconDesktopMargin,
        loadMoreIconTabletMargin,
        loadMoreIconMobileMargin,
        loadMoreIconMarginLink,
        /** End Load More */

        postGridDesktopSwitcher,
		postGridTabletSwitcher,
		postGridMobileSwitcher,

        postGridGlobalCustomCSS,
        postGridGlobalWraperID,
        postGridGlobalWraperClass,

        // Position
        postGridPositionType,
        postGridHZOrientationType,
        postGridVROrientationType,
        postGridHZLeftOffset,
        postGridHZLeftOffsetUnits,
        postGridHZRightOffset,
        postGridHZRightOffsetUnits,
        postGridVRTopOffset,
        postGridVRTopOffsetUnits,
        postGridVRBottomOffset,
        postGridVRBottomOffsetUnits,

        /** Start Filter By Taxonomy */
        showFilterByTaxonomy,
        filterSelectedTaxonomy,
        filterSelectedCat,
        filterSelectedCatLabel,
        filterSelectedTag,
        filterSelectedTagLabel,
        filerselectedCountSwitcher,

        /** End Filter By Taxonomy */


        /** Start Pagination */
        loadMoreType,
        paginationPrevNextType,
        paginationPrevTxt,
        paginationPrevIcon, 
        paginationNextTxt,
        paginationNextIcon,
        /** End Pagination */

        /** Pagination Arrow */
        paginationArrowSize,
        paginationArrowSizeUnits,

        paginationArrowBgColorSwitcher,
        paginationArrowNormalBackgroundType,
        paginationArrowNormalClassicColor,
        paginationArrowNormalGradientColor,
        paginationArrowNormalCustomGradientSwitcher,
        paginationArrowNormalCustomGradientInputValue,
        paginationArrowHoverBackgroundType,
        paginationArrowHoverClassicColor,
        paginationArrowHoverGradientColor,
        paginationArrowHoverCustomGradientSwitcher,
        paginationArrowHoverCustomGradientInputValue,

        paginationArrowBorder,
        paginationArrowBorderColorSwitcher,
        paginationArrowBorderColor,
        paginationArrowBorderHoverColor,

        paginationArrowBorderUnits,
        paginationArrowDesktopBorder,
        paginationArrowTabletBorder,
        paginationArrowMobileBorder,
        paginationArrowBorderLink,

        paginationArrowBorderRadiusUnits,
        paginationArrowDesktopBorderRadius,
        paginationArrowTabletBorderRadius,
        paginationArrowMobileBorderRadius,
        paginationArrowBorderRadiusLink,

        paginationArrowTextGlobalTypoSwitcher,
        paginationArrowTextGlobalTypographyData,
        paginationArrowTextGlobalTypoType,
        paginationArrowTextGlobalTypoOption,
        paginationArrowTextFontFamily,
        paginationArrowTextFontSize,
        paginationArrowTextFontSizeUnits,
        paginationArrowTextFontWeight,
        paginationArrowTextFontStyle,
        paginationArrowTextTransform,
        paginationArrowTextDecoration,
        paginationArrowTextLetterSpacing,
        paginationArrowTextLetterSpacingUnits,
        paginationArrowTextLineHeight,
        paginationArrowTextLineHeightUnits,

        paginationArrowTextColorSwitcher,
        paginationArrowTextColor,
        paginationArrowTextHoverColor,

        paginationPrevNextWidth,
        paginationPrevNextWidthUnits,
        paginationArrowIconColorSwitcher,
        paginationArrowIconColor,
        paginationArrowIconHoverColor,

        /** Pagination Button */
        paginationBtnSize,
        paginationBtnSizeUnits,
        paginationBtnGap,
        paginationBtnGapUnits,

        paginationBtnBgColorSwitcher,
        paginationBtnNormalBackgroundType,
        paginationBtnNormalClassicColor,
        paginationBtnNormalGradientColor,
        paginationBtnNormalCustomGradientSwitcher,
        paginationBtnNormalCustomGradientInputValue,
        paginationBtnHoverBackgroundType,
        paginationBtnHoverClassicColor,
        paginationBtnHoverGradientColor,
        paginationBtnHoverCustomGradientSwitcher,
        paginationBtnHoverCustomGradientInputValue,

        paginationActiveBtnTextColorSwitcher,
        paginationActiveBtnTextColor,
        paginationActiveBtnTextHoverColor,

        paginationActiveBtnBgColorSwitcher,
        paginationActiveBtnNormalBackgroundType,
        paginationActiveBtnNormalClassicColor,
        paginationActiveBtnNormalGradientColor,
        paginationActiveBtnNormalCustomGradientSwitcher,
        paginationActiveBtnNormalCustomGradientInputValue,
        paginationActiveBtnHoverBackgroundType,
        paginationActiveBtnHoverClassicColor,
        paginationActiveBtnHoverGradientColor,
        paginationActiveBtnHoverCustomGradientSwitcher,
        paginationActiveBtnHoverCustomGradientInputValue,

        paginationBtnBorder,
        paginationBtnBorderColorSwitcher,
        paginationBtnBorderColor,
        paginationBtnBorderHoverColor,

        paginationBtnBorderUnits,
        paginationBtnDesktopBorder,
        paginationBtnTabletBorder,
        paginationBtnMobileBorder,
        paginationBtnBorderLink,

        paginationBtnBorderRadiusUnits,
        paginationBtnDesktopBorderRadius,
        paginationBtnTabletBorderRadius,
        paginationBtnMobileBorderRadius,
        paginationBtnBorderRadiusLink,

        paginationBtnTextGlobalTypoSwitcher,
        paginationBtnTextGlobalTypographyData,
        paginationBtnTextGlobalTypoType,
        paginationBtnTextGlobalTypoOption,
        paginationBtnTextFontFamily,
        paginationBtnTextFontSize,
        paginationBtnTextFontSizeUnits,
        paginationBtnTextFontWeight,
        paginationBtnTextFontStyle,
        paginationBtnTextTransform,
        paginationBtnTextDecoration,
        paginationBtnTextLetterSpacing,
        paginationBtnTextLetterSpacingUnits,
        paginationBtnTextLineHeight,
        paginationBtnTextLineHeightUnits,

        paginationBtnTextColorSwitcher,
        paginationBtnTextColor,
        paginationBtnTextHoverColor,

        /** Start Read More */
        readMoreSwitcher,
        readMoreText,
        readMoreIconAlign,
        readMoreIcon,
        readMoreIconImageUrl,
        readMoreIconImageAlt,
        readMoreIconImageID,
        /** End Read More */


        /** Start Read More Button style */
        buttonWidth,
		buttonWidthUnits,

		buttonGlobalTypoSwitcher,
		buttonGlobalTypographyData,
		buttonGlobalTypoType,
		buttonGlobalTypoOption,
		buttonFontFamily,
		buttonFontSize,
		buttonFontSizeUnits,
		buttonFontWeight,
		buttonFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonLetterSpacing,
		buttonLetterSpacingUnits,
		buttonLineHeight,
		buttonLineHeightUnits,

		buttonColorSwitcher,
		buttonColor,
		buttonHoverColor,
		buttonBgColorSwitcher,
		buttonBgColor,
		buttonBgHoverColor,
		buttonBorder,
		buttonBorderColorSwitcher,
		buttonBorderColor,
		buttonBorderHoverColor,

		buttonBorderUnits,
		buttonDesktopBorderWidth,
		buttonTabBorderWidth,
		buttonMobileBorderWidth,
		buttonBorderLink,

		buttonBorderRadiusUnits,
		buttonDesktopBorderRadiusWidth,
		buttonTabBorderRadiusWidth,
		buttonMobileBorderRadiusWidth,
		buttonBorderRadiusLink,

		buttonBoxShadowSwitcher,
		buttonBoxShadowValues,
		buttonBoxShadowCssValue,
		buttonBoxShadowHoverValues,
		buttonBoxShadowHoverCssValue,

		buttonPaddingUnits,
		buttonDesktopPadding,
		buttonTabPadding,
		buttonMobilePadding,
		buttonPaddingLink,

		buttonMarginUnits,
		buttonDesktopMargin,
		buttonTabMargin,
		buttonMobileMargin,
		buttonMarginLink,

        buttonIconSize,
        buttonIconSizeUnits,
        buttonIconColorSwitcher,
        buttonIconColor,
        buttonIconHoverColor,
		buttonIconBgColorSwitcher,
        buttonIconBgColor,
        buttonIconBgHoverColor,
        buttonIconBorder,
        buttonIconBorderColorSwitcher,
        buttonIconBorderColor,
        buttonIconBorderHoverColor,
        buttonIconBorderUnits,
        buttonIconBorderDesktop,
        buttonIconBorderTablet,
        buttonIconBorderMobile,
        buttonIconBorderLink,
        buttonIconBorderRadiusUnits,
        buttonIconBorderRadiusDesktop,
        buttonIconBorderRadiusTablet,
        buttonIconBorderRadiusMobile,
        buttonIconBorderRadiusLink,
        buttonIconGapSize,
        buttonIconGapUnits,
		buttonIconRotateSwitcher,
		buttonIconRotate,
		buttonIconRotateHover,
		buttonImageRotateSwitcher,
		buttonImageRotate,
		buttonImageRotateHover,

        buttonIconImageWidth,
		buttonIconImageWidthUnits,
		buttonIconImageHeight,
		buttonIconImageHeightUnits,
        /** Read More Button */

        customPermalinkSwitcher,
        customPermalink,
        thumbnailLinkSwitcher,
        categoryLinkSwitcher,
        tagLinkSwitcher,
        authorLinkSwitcher,
        titleLinkSwitcher,

        /** Start Post Grid Settings */
        postGridSkeletonBgColor,
        postGridSkeletonHighlightBgColor,

        postWrapperLinkSwitcher,
        /** End Post Grid Settings */
	} = attributes;

    const deviceType= useDeviceType();
    
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-post-grid-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


    useEffect(() => {
        setAttributes({ postPerPage: postPerPage === 0 ? undefined : postPerPage });
    }, [postPerPage]);


    /** Start post type */
    const postTypes = FrontisBlocksData.post_types;
    const postTypeOptions = postTypes.map(item => ({
        value: item.value,
        label: item.label
    }));

    const [selectedPostType, setSelectedPostType] = useState({ value: 'post', label: 'Posts' }); 

    const handlePostTypeChange = (option) => {
        setSelectedPostType(option);
        setAttributes({ postType: option.value });
    };
    /** End post type */

    /** Start image size */
    const imageSizes = FrontisBlocksData.image_sizes;
    const imageSizeOptions = imageSizes.map(item => ({
        value: item.value,
        label: item.label
    }));
    /** End image size */

    /** Start: build filterTaxOptions generically for any post type */
    const allTaxs = FrontisBlocksData?.all_cats || {};
    const allTaxonomies = allTaxs?.[postType] || {};

    const termsObj = allTaxonomies?.terms || {};
    const termKeys = Object.keys(termsObj);

    /** Start: category */
    let categoryKey =
    termKeys.find(k => /(^|[-_])category($|[-_])/i.test(k))
    ?? termKeys.find(k => /category|cat/i.test(k))
    ?? termKeys[0];

    /** Start: hierarchical key */
    if (!categoryKey && allTaxonomies?.taxonomy) {
    const hierarchicalKey = termKeys.find(
        k => allTaxonomies.taxonomy?.[k]?.hierarchical === true
    );
    if (hierarchicalKey) categoryKey = hierarchicalKey;
    }
    /** End: hierarchical key */

    /** Start: tax options */
    const rawTerms = termsObj?.[categoryKey] || [];
    const taxOptions = rawTerms.map(t => ({
    value: t.id ?? t.term_id ?? t.termId,
    label: t.name ?? t.label ?? t.slug
    }));

    const filterTaxOptions = [
        { value: 0, label: 'All' },
        ...taxOptions
    ];

    const createOptionFromCategory = (categoryIds) => categoryIds.map(catId => ({
        value: catId,
        label: taxOptions.find(option => option.value === catId)?.label || ''
    }));

    const createFilterOptionFromCategory = (categoryIds) => categoryIds.map(catId => ({
        value: catId,
        label: filterTaxOptions.find(option => option.value === catId)?.label || ''
    }));

    const [selectedOption, setSelectedOption] = useState(createOptionFromCategory(selectedCat));
    const [deSelectedOption, setDeSelectedOption] = useState(createOptionFromCategory(deSelectedCat));

    const updateCategorySelection = (optionSetter, attributeKey) => (options) => {
        optionSetter(options);
        setAttributes({ [attributeKey]: options.map(option => option.value) });
    };

    const handleCategoryChange = updateCategorySelection(setSelectedOption, 'selectedCat');
    const handleDeSelectedCategoryChange = updateCategorySelection(setDeSelectedOption, 'deSelectedCat');

    /** Start Filter Category */
    const [filterSelectedOption, setFilterSelectedOption] = useState(createFilterOptionFromCategory(filterSelectedCat));
    const handleFilterCategoryChange = updateCategorySelection(setFilterSelectedOption, 'filterSelectedCat');
    /** End Filter Category */

        // Generate filter tab array
        useEffect(() => {
            // Filter and return full objects
            if(filterTaxOptions.length > 0) {
                const result = filterTaxOptions.filter(item => filterSelectedCat.includes(item.value));
                setAttributes({
                    filterSelectedCatLabel: result
                })
            }
        }, [filterSelectedCat]);
    /** End category */

    /** Start tag */
    let tagKey =
    termKeys.find(k => /(^|[-_])(post[-_]?tag|tags?)($|[-_])/i.test(k))
    ?? termKeys.find(k => allTaxonomies?.taxonomy?.[k]?.hierarchical === false)
    ?? null;

    // set tag options
    const rawTagTerms = (tagKey && termsObj?.[tagKey]) || [];
    const tagOptions = rawTagTerms.map(t => ({
    value: t.id ?? t.term_id ?? t.termId ?? t.slug ?? t.name,
    label: t.name ?? t.label ?? t.slug ?? String(t.id ?? t.term_id ?? t.termId ?? '')
    }));

    // set filter tag options
    const filterTagOptions = [
    { value: 0, label: 'All' },
    ...tagOptions
    ];
    /** End tag */

    const createOptionFromTag = (tagIds) => tagIds.map(tagId => ({
        value: tagId,
        label: tagOptions.find(option => option.value === tagId)?.label || ''
    }));

    const createFilterOptionFromTag = (tagIds) => tagIds.map(tagId => ({
        value: tagId,
        label: filterTagOptions.find(option => option.value === tagId)?.label || ''
    }));

    const [selectedTagOption, setSelectedTagOption] = useState(createOptionFromTag(selectedTag));
    const [deSelectedTagOption, setDeSelectedTagOption] = useState(createOptionFromTag(deSelectedTag));

    const updateTagSelection = (optionSetter, attributeKey) => (options) => {
        optionSetter(options);
        setAttributes({ [attributeKey]: options.map(option => option.value) });
    };

    const handleTagChange = updateTagSelection(setSelectedTagOption, 'selectedTag');
    const handleDeSelectedTagChange = updateTagSelection(setDeSelectedTagOption, 'deSelectedTag');


    /** Start Filter Tag */ 
    const [filterSelectedTagOption, setFilterSelectedTagOption] = useState(createFilterOptionFromTag(filterSelectedTag));
    const handleFilterTagChange = updateTagSelection(setFilterSelectedTagOption, 'filterSelectedTag');
    /** End Filter Tag */

    /** End Tag */

    // Generate filter tab array
    useEffect(() => {

        if(filterTagOptions.length > 0) {
            const result = filterTagOptions.filter(item => filterSelectedTag.includes(item.value));
            setAttributes({
                filterSelectedTagLabel: result
            })
        }
    }, [filterSelectedTag]);



    /** Start author */
    const allAuthors = FrontisBlocksData.all_authors;
    const authorOptions = Object.values(allAuthors).map(author => ({
        value: author.ID,
        label: author.data.display_name,
    }));

    const mapAuthorsToOptions = (authorIDs) => authorIDs.map(authorID => ({
        value: authorID,
        label: authorOptions.find(option => option.value === authorID)?.label || '',
    }));

    const [selectedAuthorOption, setSelectedAuthorOption] = useState(mapAuthorsToOptions(selectedAuthor));
    const [deSelectedAuthorOption, setDeSelectedAuthorOption] = useState(mapAuthorsToOptions(deSelectedAuthor));
    
    const handleAuthorSelectedChange = (selectedAuthorOption) => {
        setSelectedAuthorOption(selectedAuthorOption);
        setAttributes({ selectedAuthor: selectedAuthorOption.map(option => option.value) });
    };
    
    const handleDeSelectedAuthorChange = (deSelectedAuthorOption) => {
        setDeSelectedAuthorOption(deSelectedAuthorOption);
        setAttributes({ deSelectedAuthor: deSelectedAuthorOption.map(option => option.value) });
    };
    /** End author */

    /** Start sort order */
    const [selectedSortOrder, setSelectedSortOrder] = useState(() => {
        return attributes.sortOrder === 'asc' 
            ? { value: 'asc', label: 'ASC' } 
            : { value: 'desc', label: 'DESC' };
    });
    /** End sort order */

    const handleSortOrderChange = (option) => {
        setSelectedSortOrder(option);
        setAttributes({ sortOrder: option.value });
    };

    /** Start order by */
    const [selectedOrderBy, setSelectedOrderBy] = useState(() => {
        switch (attributes.orderBy) {
            case 'author':
                return { value: 'author', label: 'Author' };
            case 'title':
                return { value: 'title', label: 'Title' };
            case 'modified':
                return { value: 'modified', label: 'Last Modified' };
            case 'date':
            default:
                return { value: 'date', label: 'Date' };
        }
    });

    const handleOrderByChange = (option) => {
        setSelectedOrderBy(option);
        setAttributes({ orderBy: option.value });
    };
    /** End order by */


    /** Start Load Google Font */
    useEffect(() => {
        if (postTitleFontFamily !== 'Default') {
            loadGoogleFont(postTitleFontFamily);
        }
        if (postDescriptionFontFamily !== 'Default') {
            loadGoogleFont(postDescriptionFontFamily);
        }
        if (postCategoryFontFamily !== 'Default') {
            loadGoogleFont(postCategoryFontFamily);
        }
        if (postTagFontFamily !== 'Default') {
            loadGoogleFont(postTagFontFamily);
        }
        if (postAuthorFontFamily !== 'Default') {
            loadGoogleFont(postAuthorFontFamily);
        }
        if (postDateFontFamily !== 'Default') {
            loadGoogleFont(postDateFontFamily);
        }

        if (buttonFontFamily !== 'Default') {
            loadGoogleFont(buttonFontFamily);
        }
    }, [postTitleFontFamily, postDescriptionFontFamily, postCategoryFontFamily, postTagFontFamily, postAuthorFontFamily, postDateFontFamily, buttonFontFamily]);
    /** End Load Google Font */

    /** Start Post Grid Padding */
    const handlePostGridPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postGridPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postGridPaddingDesktop: { 
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postGridPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postGridPaddingMobile: {
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
                    setAttributes( {postGridPaddingDesktop: {...postGridPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postGridPaddingTablet: {...postGridPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {postGridPaddingMobile: {...postGridPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostGridPaddingCombineBtn = () => {
        setAttributes( {postGridPaddingLink: !postGridPaddingLink} );
    }

    const handlePostGridPaddingUnitsHandler = (unit) => {
        setAttributes( {
            postGridPaddingUnits: {
                ...postGridPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    const postGridPaddingDesktopWidth = `${postGridPaddingDesktop?.top}${postGridPaddingUnits?.Desktop} ${postGridPaddingDesktop?.right}${postGridPaddingUnits?.Desktop} ${postGridPaddingDesktop?.bottom}${postGridPaddingUnits?.Desktop} ${postGridPaddingDesktop?.left}${postGridPaddingUnits?.Desktop}`;
    const postGridPaddingTabletWidth = `${postGridPaddingTablet?.top}${postGridPaddingUnits?.Tablet} ${postGridPaddingTablet?.right}${postGridPaddingUnits?.Tablet} ${postGridPaddingTablet?.bottom}${postGridPaddingUnits?.Tablet} ${postGridPaddingTablet?.left}${postGridPaddingUnits?.Tablet}`;
    const postGridPaddingMobileWidth = `${postGridPaddingMobile?.top}${postGridPaddingUnits?.Mobile} ${postGridPaddingMobile?.right}${postGridPaddingUnits?.Mobile} ${postGridPaddingMobile?.bottom}${postGridPaddingUnits?.Mobile} ${postGridPaddingMobile?.left}${postGridPaddingUnits?.Mobile}`;
    /** End Post Grid Padding */

    /** Start Post Grid Margin */
    const handlePostGridMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postGridMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postGridMarginDesktop: { 
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postGridMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postGridMarginMobile: {
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
                    setAttributes( {postGridMarginDesktop: {...postGridMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postGridMarginTablet: {...postGridMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {postGridMarginMobile: {...postGridMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostGridMarginCombineBtn = () => {
        setAttributes( {postGridMarginLink: !postGridMarginLink} );
    }

    const handlePostGridMarginUnitsHandler = (unit) => {
        setAttributes( {
            postGridMarginUnits: {
                ...postGridMarginUnits,
                [deviceType]: unit
            }
        })
    }
    const postGridMarginDesktopWidth = `${postGridMarginDesktop?.top}${postGridMarginUnits?.Desktop} ${postGridMarginDesktop?.right}${postGridMarginUnits?.Desktop} ${postGridMarginDesktop?.bottom}${postGridMarginUnits?.Desktop} ${postGridMarginDesktop?.left}${postGridMarginUnits?.Desktop}`;
    const postGridMarginTabletWidth = `${postGridMarginTablet?.top}${postGridMarginUnits?.Tablet} ${postGridMarginTablet?.right}${postGridMarginUnits?.Tablet} ${postGridMarginTablet?.bottom}${postGridMarginUnits?.Tablet} ${postGridMarginTablet?.left}${postGridMarginUnits?.Tablet}`;
    const postGridMarginMobileWidth = `${postGridMarginMobile?.top}${postGridMarginUnits?.Mobile} ${postGridMarginMobile?.right}${postGridMarginUnits?.Mobile} ${postGridMarginMobile?.bottom}${postGridMarginUnits?.Mobile} ${postGridMarginMobile?.left}${postGridMarginUnits?.Mobile}`;
    /** End Post Grid Margin */

    /** Start Post Grid Border */
    const handlePostGridBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postGridBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postGridBorderDesktop: { 
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postGridBorderTablet: { 
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postGridBorderMobile: { 
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
                    setAttributes( {postGridBorderDesktop: {...postGridBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postGridBorderTablet: {...postGridBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {postGridBorderMobile: {...postGridBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostGridBorderCombineBtn = () => {
        setAttributes( {postGridBorderLink: !postGridBorderLink} );
    }

    const handlePostGridBorderUnitsHandler = (unit) => {
        setAttributes( {
            postGridBorderUnits: {
                ...postGridBorderUnits,
                [deviceType]: unit
            }
        })
    }
    const postGridBorderDesktopWidth = `${postGridBorderDesktop?.top}${postGridBorderUnits?.Desktop} ${postGridBorderDesktop?.right}${postGridBorderUnits?.Desktop} ${postGridBorderDesktop?.bottom}${postGridBorderUnits?.Desktop} ${postGridBorderDesktop?.left}${postGridBorderUnits?.Desktop}`;
    const postGridBorderTabletWidth = `${postGridBorderTablet?.top}${postGridBorderUnits?.Tablet} ${postGridBorderTablet?.right}${postGridBorderUnits?.Tablet} ${postGridBorderTablet?.bottom}${postGridBorderUnits?.Tablet} ${postGridBorderTablet?.left}${postGridBorderUnits?.Tablet}`;
    const postGridBorderMobileWidth = `${postGridBorderMobile?.top}${postGridBorderUnits?.Mobile} ${postGridBorderMobile?.right}${postGridBorderUnits?.Mobile} ${postGridBorderMobile?.bottom}${postGridBorderUnits?.Mobile} ${postGridBorderMobile?.left}${postGridBorderUnits?.Mobile}`;
    /** End Post Grid Border */

    /** Start Post Grid Border Radius */
    const handlePostGridBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postGridBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postGridBorderRadiusDesktop: { 
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postGridBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postGridBorderRadiusMobile: {
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
                    setAttributes( {postGridBorderRadiusDesktop: {...postGridBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postGridBorderRadiusTablet: {...postGridBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {postGridBorderRadiusMobile: {...postGridBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostGridBorderRadiusCombineBtn = () => {
        setAttributes( {postGridBorderRadiusLink: !postGridBorderRadiusLink} );
    }

    const handlePostGridBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            postGridBorderRadiusUnits: {
                ...postGridBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    const postGridBorderRadiusDesktopWidth = `${postGridBorderRadiusDesktop?.top}${postGridBorderRadiusUnits?.Desktop} ${postGridBorderRadiusDesktop?.right}${postGridBorderRadiusUnits?.Desktop} ${postGridBorderRadiusDesktop?.bottom}${postGridBorderRadiusUnits?.Desktop} ${postGridBorderRadiusDesktop?.left}${postGridBorderRadiusUnits?.Desktop}`;
    const postGridBorderRadiusTabletWidth = `${postGridBorderRadiusTablet?.top}${postGridBorderRadiusUnits?.Tablet} ${postGridBorderRadiusTablet?.right}${postGridBorderRadiusUnits?.Tablet} ${postGridBorderRadiusTablet?.bottom}${postGridBorderRadiusUnits?.Tablet} ${postGridBorderRadiusTablet?.left}${postGridBorderRadiusUnits?.Tablet}`;
    const postGridBorderRadiusMobileWidth = `${postGridBorderRadiusMobile?.top}${postGridBorderRadiusUnits?.Mobile} ${postGridBorderRadiusMobile?.right}${postGridBorderRadiusUnits?.Mobile} ${postGridBorderRadiusMobile?.bottom}${postGridBorderRadiusUnits?.Mobile} ${postGridBorderRadiusMobile?.left}${postGridBorderRadiusUnits?.Mobile}`;
    /** End Post Grid Border Radius */

    /** Start Image Border */
    const handlePostImageBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postImageBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postImageDesktopBorder: { 
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postImageTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postImageMobileBorder: {
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
                    setAttributes( {postImageDesktopBorder: {...postImageDesktopBorder, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postImageTabletBorder: {...postImageTabletBorder, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {postImageMobileBorder: {...postImageMobileBorder, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostImageBorderCombineBtn = () => {
        setAttributes( {postImageBorderLink: !postImageBorderLink} );
    }

    const handlePostImageBorderUnitsHandler = (unit) => {
        setAttributes( {
            postImageBorderUnits: {
                ...postImageBorderUnits,
                [deviceType]: unit
            }
        })
    }
    const postImageDesktopBorderWidth = `${postImageDesktopBorder?.top}${postImageBorderUnits?.Desktop} ${postImageDesktopBorder?.right}${postImageBorderUnits?.Desktop} ${postImageDesktopBorder?.bottom}${postImageBorderUnits?.Desktop} ${postImageDesktopBorder?.left}${postImageBorderUnits?.Desktop}`;
    const postImageTabletBorderWidth = `${postImageTabletBorder?.top}${postImageBorderUnits?.Tablet} ${postImageTabletBorder?.right}${postImageBorderUnits?.Tablet} ${postImageTabletBorder?.bottom}${postImageBorderUnits?.Tablet} ${postImageTabletBorder?.left}${postImageBorderUnits?.Tablet}`;
    const postImageMobileBorderWidth = `${postImageMobileBorder?.top}${postImageBorderUnits?.Mobile} ${postImageMobileBorder?.right}${postImageBorderUnits?.Mobile} ${postImageMobileBorder?.bottom}${postImageBorderUnits?.Mobile} ${postImageMobileBorder?.left}${postImageBorderUnits?.Mobile}`;
    /** End Image Border */

    /** Start Image Border Radius */
    const handlePostImageBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postImageBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postImageDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postImageTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postImageMobileBorderRadius: {
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
                    setAttributes( {postImageDesktopBorderRadius: {...postImageDesktopBorderRadius, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postImageTabletBorderRadius: {...postImageTabletBorderRadius, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {postImageMobileBorderRadius: {...postImageMobileBorderRadius, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostImageBorderRadiusCombineBtn = () => {
        setAttributes( {postImageBorderRadiusLink: !postImageBorderRadiusLink} );
    }

    const handlePostImageBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            postImageBorderRadiusUnits: {
                ...postImageBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    const postImageDesktopBorderRadiusWidth = `${postImageDesktopBorderRadius?.top}${postImageBorderRadiusUnits?.Desktop} ${postImageDesktopBorderRadius?.right}${postImageBorderRadiusUnits?.Desktop} ${postImageDesktopBorderRadius?.bottom}${postImageBorderRadiusUnits?.Desktop} ${postImageDesktopBorderRadius?.left}${postImageBorderRadiusUnits?.Desktop}`;
    const postImageTabletBorderRadiusWidth = `${postImageTabletBorderRadius?.top}${postImageBorderRadiusUnits?.Tablet} ${postImageTabletBorderRadius?.right}${postImageBorderRadiusUnits?.Tablet} ${postImageTabletBorderRadius?.bottom}${postImageBorderRadiusUnits?.Tablet} ${postImageTabletBorderRadius?.left}${postImageBorderRadiusUnits?.Tablet}`;
    const postImageMobileBorderRadiusWidth = `${postImageMobileBorderRadius?.top}${postImageBorderRadiusUnits?.Mobile} ${postImageMobileBorderRadius?.right}${postImageBorderRadiusUnits?.Mobile} ${postImageMobileBorderRadius?.bottom}${postImageBorderRadiusUnits?.Mobile} ${postImageMobileBorderRadius?.left}${postImageBorderRadiusUnits?.Mobile}`;
    /** End Image Border Radius */

    /** Start Post Image Margin */
    const handlePostImageMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postImageMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postImageMarginDesktop: { 
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postImageMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postImageMarginMobile: {
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
                    setAttributes( {postImageMarginDesktop: {...postImageMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postImageMarginTablet: {...postImageMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {postImageMarginMobile: {...postImageMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostImageMarginCombineBtn = () => {
        setAttributes( {postImageMarginLink: !postImageMarginLink} );
    }

    const handlePostImageMarginUnitsHandler = (unit) => {
        setAttributes( {
            postImageMarginUnits: {
                ...postImageMarginUnits,
                [deviceType]: unit
            }
        })
    }
    const postImageMarginDesktopWidth = `${postImageMarginDesktop?.top}${postImageMarginUnits?.Desktop} ${postImageMarginDesktop?.right}${postImageMarginUnits?.Desktop} ${postImageMarginDesktop?.bottom}${postImageMarginUnits?.Desktop} ${postImageMarginDesktop?.left}${postImageMarginUnits?.Desktop}`;
    const postImageMarginTabletWidth = `${postImageMarginTablet?.top}${postImageMarginUnits?.Tablet} ${postImageMarginTablet?.right}${postImageMarginUnits?.Tablet} ${postImageMarginTablet?.bottom}${postImageMarginUnits?.Tablet} ${postImageMarginTablet?.left}${postImageMarginUnits?.Tablet}`;
    const postImageMarginMobileWidth = `${postImageMarginMobile?.top}${postImageMarginUnits?.Mobile} ${postImageMarginMobile?.right}${postImageMarginUnits?.Mobile} ${postImageMarginMobile?.bottom}${postImageMarginUnits?.Mobile} ${postImageMarginMobile?.left}${postImageMarginUnits?.Mobile}`;
    /** End Post Image Margin */


    /** Start Title Margin */
    const handlePostTitleMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postTitleMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postTitleMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postTitleMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postTitleMarginMobile: {
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
                    setAttributes( {postTitleMarginDesktop: {...postTitleMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postTitleMarginTablet: {...postTitleMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {postTitleMarginMobile: {...postTitleMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostTitleMarginCombineBtn = () => {
        setAttributes( {postTitleMarginLink: !postTitleMarginLink} );
    }

    const handlePostTitleMarginUnitsHandler = (unit) => {
        setAttributes( {
            postTitleMarginUnits: {
                ...postTitleMarginUnits,
                [deviceType]: unit
            }
        })
    }
    const postTitleMarginDesktopWidth = `${postTitleMarginDesktop?.top}${postTitleMarginUnits?.Desktop} ${postTitleMarginDesktop?.right}${postTitleMarginUnits?.Desktop} ${postTitleMarginDesktop?.bottom}${postTitleMarginUnits?.Desktop} ${postTitleMarginDesktop?.left}${postTitleMarginUnits?.Desktop}`;
    const postTitleMarginTabletWidth = `${postTitleMarginTablet?.top}${postTitleMarginUnits?.Tablet} ${postTitleMarginTablet?.right}${postTitleMarginUnits?.Tablet} ${postTitleMarginTablet?.bottom}${postTitleMarginUnits?.Tablet} ${postTitleMarginTablet?.left}${postTitleMarginUnits?.Tablet}`;
    const postTitleMarginMobileWidth = `${postTitleMarginMobile?.top}${postTitleMarginUnits?.Mobile} ${postTitleMarginMobile?.right}${postTitleMarginUnits?.Mobile} ${postTitleMarginMobile?.bottom}${postTitleMarginUnits?.Mobile} ${postTitleMarginMobile?.left}${postTitleMarginUnits?.Mobile}`;
    /** End Title Margin */


    /** Start Description Margin */
    const handlePostDescriptionMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postDescriptionMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postDescriptionMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postDescriptionMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postDescriptionMarginMobile: {
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
                    setAttributes( {postDescriptionMarginDesktop: {...postDescriptionMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postDescriptionMarginTablet: {...postDescriptionMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {postDescriptionMarginMobile: {...postDescriptionMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostDescriptionMarginCombineBtn = () => {
        setAttributes( {postDescriptionMarginLink: !postDescriptionMarginLink} );
    }

    const handlePostDescriptionMarginUnitsHandler = (unit) => {
        setAttributes( {
            postDescriptionMarginUnits: {
                ...postDescriptionMarginUnits,
                [deviceType]: unit
            }
        })
    }
    const postDescriptionMarginDesktopWidth = `${postDescriptionMarginDesktop?.top}${postDescriptionMarginUnits?.Desktop} ${postDescriptionMarginDesktop?.right}${postDescriptionMarginUnits?.Desktop} ${postDescriptionMarginDesktop?.bottom}${postDescriptionMarginUnits?.Desktop} ${postDescriptionMarginDesktop?.left}${postDescriptionMarginUnits?.Desktop}`;
    const postDescriptionMarginTabletWidth = `${postDescriptionMarginTablet?.top}${postDescriptionMarginUnits?.Tablet} ${postDescriptionMarginTablet?.right}${postDescriptionMarginUnits?.Tablet} ${postDescriptionMarginTablet?.bottom}${postDescriptionMarginUnits?.Tablet} ${postDescriptionMarginTablet?.left}${postDescriptionMarginUnits?.Tablet}`;
    const postDescriptionMarginMobileWidth = `${postDescriptionMarginMobile?.top}${postDescriptionMarginUnits?.Mobile} ${postDescriptionMarginMobile?.right}${postDescriptionMarginUnits?.Mobile} ${postDescriptionMarginMobile?.bottom}${postDescriptionMarginUnits?.Mobile} ${postDescriptionMarginMobile?.left}${postDescriptionMarginUnits?.Mobile}`;
    /** End Description Margin */

    /** Start Category Padding */
    const handlePostCategoryPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postCategoryPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postCategoryPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postCategoryPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postCategoryPaddingMobile: {
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
                    setAttributes( {postCategoryPaddingDesktop: {...postCategoryPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postCategoryPaddingTablet: {...postCategoryPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':  
                    setAttributes( {postCategoryPaddingMobile: {...postCategoryPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostCategoryPaddingCombineBtn = () => {
        setAttributes( {postCategoryPaddingLink: !postCategoryPaddingLink} );
    }

    const handlePostCategoryPaddingUnitsHandler = (unit) => {
        setAttributes( {
            postCategoryPaddingUnits: {
                ...postCategoryPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    const postCategoryPaddingDesktopWidth = `${postCategoryPaddingDesktop?.top}${postCategoryPaddingUnits?.Desktop} ${postCategoryPaddingDesktop?.right}${postCategoryPaddingUnits?.Desktop} ${postCategoryPaddingDesktop?.bottom}${postCategoryPaddingUnits?.Desktop} ${postCategoryPaddingDesktop?.left}${postCategoryPaddingUnits?.Desktop}`;
    const postCategoryPaddingTabletWidth = `${postCategoryPaddingTablet?.top}${postCategoryPaddingUnits?.Tablet} ${postCategoryPaddingTablet?.right}${postCategoryPaddingUnits?.Tablet} ${postCategoryPaddingTablet?.bottom}${postCategoryPaddingUnits?.Tablet} ${postCategoryPaddingTablet?.left}${postCategoryPaddingUnits?.Tablet}`;
    const postCategoryPaddingMobileWidth = `${postCategoryPaddingMobile?.top}${postCategoryPaddingUnits?.Mobile} ${postCategoryPaddingMobile?.right}${postCategoryPaddingUnits?.Mobile} ${postCategoryPaddingMobile?.bottom}${postCategoryPaddingUnits?.Mobile} ${postCategoryPaddingMobile?.left}${postCategoryPaddingUnits?.Mobile}`;
    /** End Category Padding */

    /** Start Category Margin */
    const handlePostCategoryMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postCategoryMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postCategoryMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postCategoryMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postCategoryMarginMobile: {
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
                    setAttributes( {postCategoryMarginDesktop: {...postCategoryMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postCategoryMarginTablet: {...postCategoryMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':  
                    setAttributes( {postCategoryMarginMobile: {...postCategoryMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostCategoryMarginCombineBtn = () => {
        setAttributes( {postCategoryMarginLink: !postCategoryMarginLink} );
    }

    const handlePostCategoryMarginUnitsHandler = (unit) => {
        setAttributes( {
            postCategoryMarginUnits: {
                ...postCategoryMarginUnits,
                [deviceType]: unit
            }
        })
    }
    const postCategoryMarginDesktopWidth = `${postCategoryMarginDesktop?.top}${postCategoryMarginUnits?.Desktop} ${postCategoryMarginDesktop?.right}${postCategoryMarginUnits?.Desktop} ${postCategoryMarginDesktop?.bottom}${postCategoryMarginUnits?.Desktop} ${postCategoryMarginDesktop?.left}${postCategoryMarginUnits?.Desktop}`;
    const postCategoryMarginTabletWidth = `${postCategoryMarginTablet?.top}${postCategoryMarginUnits?.Tablet} ${postCategoryMarginTablet?.right}${postCategoryMarginUnits?.Tablet} ${postCategoryMarginTablet?.bottom}${postCategoryMarginUnits?.Tablet} ${postCategoryMarginTablet?.left}${postCategoryMarginUnits?.Tablet}`;
    const postCategoryMarginMobileWidth = `${postCategoryMarginMobile?.top}${postCategoryMarginUnits?.Mobile} ${postCategoryMarginMobile?.right}${postCategoryMarginUnits?.Mobile} ${postCategoryMarginMobile?.bottom}${postCategoryMarginUnits?.Mobile} ${postCategoryMarginMobile?.left}${postCategoryMarginUnits?.Mobile}`;
    /** End Category Margin */

    /** Start Category Border */
    const handlePostCategoryBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postCategoryBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postCategoryDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postCategoryTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postCategoryMobileBorder: {
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
                    setAttributes( {postCategoryDesktopBorder: {...postCategoryDesktopBorder, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postCategoryTabletBorder: {...postCategoryTabletBorder, [position]: value}} );
                    break;
                case 'Mobile':  
                    setAttributes( {postCategoryMobileBorder: {...postCategoryMobileBorder, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostCategoryBorderCombineBtn = () => {
        setAttributes( {postCategoryBorderLink: !postCategoryBorderLink} );
    }

    const handlePostCategoryBorderUnitsHandler = (unit) => {
        setAttributes( {
            postCategoryBorderUnits: {
                ...postCategoryBorderUnits,
                [deviceType]: unit
            }
        })
    }
    const postCategoryBorderDesktopWidth = `${postCategoryDesktopBorder?.top}${postCategoryBorderUnits?.Desktop} ${postCategoryDesktopBorder?.right}${postCategoryBorderUnits?.Desktop} ${postCategoryDesktopBorder?.bottom}${postCategoryBorderUnits?.Desktop} ${postCategoryDesktopBorder?.left}${postCategoryBorderUnits?.Desktop}`; 
    const postCategoryBorderTabletWidth = `${postCategoryTabletBorder?.top}${postCategoryBorderUnits?.Tablet} ${postCategoryTabletBorder?.right}${postCategoryBorderUnits?.Tablet} ${postCategoryTabletBorder?.bottom}${postCategoryBorderUnits?.Tablet} ${postCategoryTabletBorder?.left}${postCategoryBorderUnits?.Tablet}`; 
    const postCategoryBorderMobileWidth = `${postCategoryMobileBorder?.top}${postCategoryBorderUnits?.Mobile} ${postCategoryMobileBorder?.right}${postCategoryBorderUnits?.Mobile} ${postCategoryMobileBorder?.bottom}${postCategoryBorderUnits?.Mobile} ${postCategoryMobileBorder?.left}${postCategoryBorderUnits?.Mobile}`; 
    /** End Category Border */
    
    /** Start Category Border Radius */
    const handlePostCategoryBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postCategoryBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postCategoryDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postCategoryTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postCategoryMobileBorderRadius: {
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
                    setAttributes( {postCategoryDesktopBorderRadius: {...postCategoryDesktopBorderRadius, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postCategoryTabletBorderRadius: {...postCategoryTabletBorderRadius, [position]: value}} );
                    break;
                case 'Mobile':  
                    setAttributes( {postCategoryMobileBorderRadius: {...postCategoryMobileBorderRadius, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostCategoryBorderRadiusCombineBtn = () => {
        setAttributes( {postCategoryBorderRadiusLink: !postCategoryBorderRadiusLink} );
    }

    const handlePostCategoryBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            postCategoryBorderRadiusUnits: {
                ...postCategoryBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    const postCategoryBorderRadiusDesktopWidth = `${postCategoryDesktopBorderRadius?.top}${postCategoryBorderRadiusUnits?.Desktop} ${postCategoryDesktopBorderRadius?.right}${postCategoryBorderRadiusUnits?.Desktop} ${postCategoryDesktopBorderRadius?.bottom}${postCategoryBorderRadiusUnits?.Desktop} ${postCategoryDesktopBorderRadius?.left}${postCategoryBorderRadiusUnits?.Desktop}`; 
    const postCategoryBorderRadiusTabletWidth = `${postCategoryTabletBorderRadius?.top}${postCategoryBorderRadiusUnits?.Tablet} ${postCategoryTabletBorderRadius?.right}${postCategoryBorderRadiusUnits?.Tablet} ${postCategoryTabletBorderRadius?.bottom}${postCategoryBorderRadiusUnits?.Tablet} ${postCategoryTabletBorderRadius?.left}${postCategoryBorderRadiusUnits?.Tablet}`; 
    const postCategoryBorderRadiusMobileWidth = `${postCategoryMobileBorderRadius?.top}${postCategoryBorderRadiusUnits?.Mobile} ${postCategoryMobileBorderRadius?.right}${postCategoryBorderRadiusUnits?.Mobile} ${postCategoryMobileBorderRadius?.bottom}${postCategoryBorderRadiusUnits?.Mobile} ${postCategoryMobileBorderRadius?.left}${postCategoryBorderRadiusUnits?.Mobile}`; 
    /** End Category Border Radius */

    /** Start Tag Padding */
    const handlePostTagPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postTagPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postTagPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postTagPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postTagPaddingMobile: {
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
                    setAttributes( {postTagPaddingDesktop: {...postTagPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postTagPaddingTablet: {...postTagPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':  
                    setAttributes( {postTagPaddingMobile: {...postTagPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostTagPaddingCombineBtn = () => {
        setAttributes( {postTagPaddingLink: !postTagPaddingLink} );
    }

    const handlePostTagPaddingUnitsHandler = (unit) => {
        setAttributes( {
            postTagPaddingUnits: {
                ...postTagPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    const postTagPaddingDesktopWidth = `${postTagPaddingDesktop?.top}${postTagPaddingUnits?.Desktop} ${postTagPaddingDesktop?.right}${postTagPaddingUnits?.Desktop} ${postTagPaddingDesktop?.bottom}${postTagPaddingUnits?.Desktop} ${postTagPaddingDesktop?.left}${postTagPaddingUnits?.Desktop}`;
    const postTagPaddingTabletWidth = `${postTagPaddingTablet?.top}${postTagPaddingUnits?.Tablet} ${postTagPaddingTablet?.right}${postTagPaddingUnits?.Tablet} ${postTagPaddingTablet?.bottom}${postTagPaddingUnits?.Tablet} ${postTagPaddingTablet?.left}${postTagPaddingUnits?.Tablet}`;
    const postTagPaddingMobileWidth = `${postTagPaddingMobile?.top}${postTagPaddingUnits?.Mobile} ${postTagPaddingMobile?.right}${postTagPaddingUnits?.Mobile} ${postTagPaddingMobile?.bottom}${postTagPaddingUnits?.Mobile} ${postTagPaddingMobile?.left}${postTagPaddingUnits?.Mobile}`;
    /** End Tag Padding */

    /** Start Tag Margin */
    const handlePostTagMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postTagMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postTagMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postTagMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postTagMarginMobile: {
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
                    setAttributes( {postTagMarginDesktop: {...postTagMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postTagMarginTablet: {...postTagMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':  
                    setAttributes( {postTagMarginMobile: {...postTagMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostTagMarginCombineBtn = () => {
        setAttributes( {postTagMarginLink: !postTagMarginLink} );
    }

    const handlePostTagMarginUnitsHandler = (unit) => {
        setAttributes( {
            postTagMarginUnits: {
                ...postTagMarginUnits,
                [deviceType]: unit
            }
        })
    }
    const postTagMarginDesktopWidth = `${postTagMarginDesktop?.top}${postTagMarginUnits?.Desktop} ${postTagMarginDesktop?.right}${postTagMarginUnits?.Desktop} ${postTagMarginDesktop?.bottom}${postTagMarginUnits?.Desktop} ${postTagMarginDesktop?.left}${postTagMarginUnits?.Desktop}`;
    const postTagMarginTabletWidth = `${postTagMarginTablet?.top}${postTagMarginUnits?.Tablet} ${postTagMarginTablet?.right}${postTagMarginUnits?.Tablet} ${postTagMarginTablet?.bottom}${postTagMarginUnits?.Tablet} ${postTagMarginTablet?.left}${postTagMarginUnits?.Tablet}`;
    const postTagMarginMobileWidth = `${postTagMarginMobile?.top}${postTagMarginUnits?.Mobile} ${postTagMarginMobile?.right}${postTagMarginUnits?.Mobile} ${postTagMarginMobile?.bottom}${postTagMarginUnits?.Mobile} ${postTagMarginMobile?.left}${postTagMarginUnits?.Mobile}`;
    /** End Tag Margin */

    /** Start Tag Border */ 
    const handlePostTagBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postTagBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postTagDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postTagTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postTagMobileBorder: {
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
                    setAttributes( {postTagDesktopBorder: {...postTagDesktopBorder, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postTagTabletBorder: {...postTagTabletBorder, [position]: value}} );
                    break;
                case 'Mobile':  
                    setAttributes( {postTagMobileBorder: {...postTagMobileBorder, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostTagBorderCombineBtn = () => {
        setAttributes( {postTagBorderLink: !postTagBorderLink} );
    }

    const handlePostTagBorderUnitsHandler = (unit) => {
        setAttributes( {
            postTagBorderUnits: {
                ...postTagBorderUnits,
                [deviceType]: unit
            }
        })
    }
    const postTagBorderDesktopWidth = `${postTagDesktopBorder?.top}${postTagBorderUnits?.Desktop} ${postTagDesktopBorder?.right}${postTagBorderUnits?.Desktop} ${postTagDesktopBorder?.bottom}${postTagBorderUnits?.Desktop} ${postTagDesktopBorder?.left}${postTagBorderUnits?.Desktop}`; 
    const postTagBorderTabletWidth = `${postTagTabletBorder?.top}${postTagBorderUnits?.Tablet} ${postTagTabletBorder?.right}${postTagBorderUnits?.Tablet} ${postTagTabletBorder?.bottom}${postTagBorderUnits?.Tablet} ${postTagTabletBorder?.left}${postTagBorderUnits?.Tablet}`; 
    const postTagBorderMobileWidth = `${postTagMobileBorder?.top}${postTagBorderUnits?.Mobile} ${postTagMobileBorder?.right}${postTagBorderUnits?.Mobile} ${postTagMobileBorder?.bottom}${postTagBorderUnits?.Mobile} ${postTagMobileBorder?.left}${postTagBorderUnits?.Mobile}`; 
    /** End Tag Border */
    
    /** Start Tag Border Radius */
    const handlePostTagBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postTagBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postTagDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postTagTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postTagMobileBorderRadius: {
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
                    setAttributes( {postTagDesktopBorderRadius: {...postTagDesktopBorderRadius, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postTagTabletBorderRadius: {...postTagTabletBorderRadius, [position]: value}} );
                    break;
                case 'Mobile':  
                    setAttributes( {postTagMobileBorderRadius: {...postTagMobileBorderRadius, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostTagBorderRadiusCombineBtn = () => {
        setAttributes( {postTagBorderRadiusLink: !postTagBorderRadiusLink} );
    }

    const handlePostTagBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            postTagBorderRadiusUnits: {
                ...postTagBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    const postTagBorderRadiusDesktopWidth = `${postTagDesktopBorderRadius?.top}${postTagBorderRadiusUnits?.Desktop} ${postTagDesktopBorderRadius?.right}${postTagBorderRadiusUnits?.Desktop} ${postTagDesktopBorderRadius?.bottom}${postTagBorderRadiusUnits?.Desktop} ${postTagDesktopBorderRadius?.left}${postTagBorderRadiusUnits?.Desktop}`; 
    const postTagBorderRadiusTabletWidth = `${postTagTabletBorderRadius?.top}${postTagBorderRadiusUnits?.Tablet} ${postTagTabletBorderRadius?.right}${postTagBorderRadiusUnits?.Tablet} ${postTagTabletBorderRadius?.bottom}${postTagBorderRadiusUnits?.Tablet} ${postTagTabletBorderRadius?.left}${postTagBorderRadiusUnits?.Tablet}`; 
    const postTagBorderRadiusMobileWidth = `${postTagMobileBorderRadius?.top}${postTagBorderRadiusUnits?.Mobile} ${postTagMobileBorderRadius?.right}${postTagBorderRadiusUnits?.Mobile} ${postTagMobileBorderRadius?.bottom}${postTagBorderRadiusUnits?.Mobile} ${postTagMobileBorderRadius?.left}${postTagBorderRadiusUnits?.Mobile}`; 
    /** End Tag Border Radius */

    /** Start Author Avatar Border */ 
    const handlePostAuthorAvatarBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postAuthorAvatarBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postAuthorAvatarDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postAuthorAvatarTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postAuthorAvatarMobileBorder: {
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
                    setAttributes( {postAuthorAvatarDesktopBorder: {...postAuthorAvatarDesktopBorder, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postAuthorAvatarTabletBorder: {...postAuthorAvatarTabletBorder, [position]: value}} );
                    break;
                case 'Mobile':  
                    setAttributes( {postAuthorAvatarMobileBorder: {...postAuthorAvatarMobileBorder, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostAuthorAvatarBorderCombineBtn = () => {
        setAttributes( {postAuthorAvatarBorderLink: !postAuthorAvatarBorderLink} );
    }

    const handlePostAuthorAvatarBorderUnitsHandler = (unit) => {
        setAttributes( {
            postAuthorAvatarBorderUnits: {
                ...postAuthorAvatarBorderUnits,
                [deviceType]: unit
            }
        })
    }
    const postAuthorAvatarBorderDesktopWidth = `${postAuthorAvatarDesktopBorder?.top}${postAuthorAvatarBorderUnits?.Desktop} ${postAuthorAvatarDesktopBorder?.right}${postAuthorAvatarBorderUnits?.Desktop} ${postAuthorAvatarDesktopBorder?.bottom}${postAuthorAvatarBorderUnits?.Desktop} ${postAuthorAvatarDesktopBorder?.left}${postAuthorAvatarBorderUnits?.Desktop}`; 
    const postAuthorAvatarBorderTabletWidth = `${postAuthorAvatarTabletBorder?.top}${postAuthorAvatarBorderUnits?.Tablet} ${postAuthorAvatarTabletBorder?.right}${postAuthorAvatarBorderUnits?.Tablet} ${postAuthorAvatarTabletBorder?.bottom}${postAuthorAvatarBorderUnits?.Tablet} ${postAuthorAvatarTabletBorder?.left}${postAuthorAvatarBorderUnits?.Tablet}`; 
    const postAuthorAvatarBorderMobileWidth = `${postAuthorAvatarMobileBorder?.top}${postAuthorAvatarBorderUnits?.Mobile} ${postAuthorAvatarMobileBorder?.right}${postAuthorAvatarBorderUnits?.Mobile} ${postAuthorAvatarMobileBorder?.bottom}${postAuthorAvatarBorderUnits?.Mobile} ${postAuthorAvatarMobileBorder?.left}${postAuthorAvatarBorderUnits?.Mobile}`; 
    /** End Author Avatar Border */
    
    /** Start Author Avatar Border Radius */
    const handlePostAuthorAvatarBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postAuthorAvatarBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postAuthorAvatarDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postAuthorAvatarTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postAuthorAvatarMobileBorderRadius: {
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
                    setAttributes( {postAuthorAvatarDesktopBorderRadius: {...postAuthorAvatarDesktopBorderRadius, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postAuthorAvatarTabletBorderRadius: {...postAuthorAvatarTabletBorderRadius, [position]: value}} );
                    break;
                case 'Mobile':  
                    setAttributes( {postAuthorAvatarMobileBorderRadius: {...postAuthorAvatarMobileBorderRadius, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostAuthorAvatarBorderRadiusCombineBtn = () => {
        setAttributes( {postAuthorAvatarBorderRadiusLink: !postAuthorAvatarBorderRadiusLink} );
    }

    const handlePostAuthorAvatarBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            postAuthorAvatarBorderRadiusUnits: {
                ...postAuthorAvatarBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    const postAuthorAvatarBorderRadiusDesktopWidth = `${postAuthorAvatarDesktopBorderRadius?.top}${postAuthorAvatarBorderRadiusUnits?.Desktop} ${postAuthorAvatarDesktopBorderRadius?.right}${postAuthorAvatarBorderRadiusUnits?.Desktop} ${postAuthorAvatarDesktopBorderRadius?.bottom}${postAuthorAvatarBorderRadiusUnits?.Desktop} ${postAuthorAvatarDesktopBorderRadius?.left}${postAuthorAvatarBorderRadiusUnits?.Desktop}`; 
    const postAuthorAvatarBorderRadiusTabletWidth = `${postAuthorAvatarTabletBorderRadius?.top}${postAuthorAvatarBorderRadiusUnits?.Tablet} ${postAuthorAvatarTabletBorderRadius?.right}${postAuthorAvatarBorderRadiusUnits?.Tablet} ${postAuthorAvatarTabletBorderRadius?.bottom}${postAuthorAvatarBorderRadiusUnits?.Tablet} ${postAuthorAvatarTabletBorderRadius?.left}${postAuthorAvatarBorderRadiusUnits?.Tablet}`; 
    const postAuthorAvatarBorderRadiusMobileWidth = `${postAuthorAvatarMobileBorderRadius?.top}${postAuthorAvatarBorderRadiusUnits?.Mobile} ${postAuthorAvatarMobileBorderRadius?.right}${postAuthorAvatarBorderRadiusUnits?.Mobile} ${postAuthorAvatarMobileBorderRadius?.bottom}${postAuthorAvatarBorderRadiusUnits?.Mobile} ${postAuthorAvatarMobileBorderRadius?.left}${postAuthorAvatarBorderRadiusUnits?.Mobile}`; 
    /** End Author Avatar Border Radius */

    /** Start Author Margin */
    const handlePostAuthorMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postAuthorMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        postAuthorMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        postAuthorMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        postAuthorMarginMobile: {
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
                    setAttributes( {postAuthorMarginDesktop: {...postAuthorMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {postAuthorMarginTablet: {...postAuthorMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':  
                    setAttributes( {postAuthorMarginMobile: {...postAuthorMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePostAuthorMarginCombineBtn = () => {
        setAttributes( {postAuthorMarginLink: !postAuthorMarginLink} );
    }

    const handlePostAuthorMarginUnitsHandler = (unit) => {
        setAttributes( {
            postAuthorMarginUnits: {
                ...postAuthorMarginUnits,
                [deviceType]: unit
            }
        })
    }
    const postAuthorMarginDesktopWidth = `${postAuthorMarginDesktop?.top}${postAuthorMarginUnits?.Desktop} ${postAuthorMarginDesktop?.right}${postAuthorMarginUnits?.Desktop} ${postAuthorMarginDesktop?.bottom}${postAuthorMarginUnits?.Desktop} ${postAuthorMarginDesktop?.left}${postAuthorMarginUnits?.Desktop}`; 
    const postAuthorMarginTabletWidth = `${postAuthorMarginTablet?.top}${postAuthorMarginUnits?.Tablet} ${postAuthorMarginTablet?.right}${postAuthorMarginUnits?.Tablet} ${postAuthorMarginTablet?.bottom}${postAuthorMarginUnits?.Tablet} ${postAuthorMarginTablet?.left}${postAuthorMarginUnits?.Tablet}`; 
    const postAuthorMarginMobileWidth = `${postAuthorMarginMobile?.top}${postAuthorMarginUnits?.Mobile} ${postAuthorMarginMobile?.right}${postAuthorMarginUnits?.Mobile} ${postAuthorMarginMobile?.bottom}${postAuthorMarginUnits?.Mobile} ${postAuthorMarginMobile?.left}${postAuthorMarginUnits?.Mobile}`; 
    /** End Author Margin */

    /** Start Global padding */
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( postGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						postGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						postGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						postGlobalPaddingMobile: {
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
					setAttributes( {postGlobalPaddingDesktop: {...postGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {postGlobalPaddingTablet: {...postGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {postGlobalPaddingMobile: {...postGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {postGlobalPaddingLink: !postGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			postGlobalPaddingUnits: {
				...postGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const postGlobalDesktopPaddingWidth    = `${postGlobalPaddingDesktop?.top}${postGlobalPaddingUnits?.Desktop} ${postGlobalPaddingDesktop?.right}${postGlobalPaddingUnits?.Desktop} ${postGlobalPaddingDesktop?.bottom}${postGlobalPaddingUnits?.Desktop} ${postGlobalPaddingDesktop?.left}${postGlobalPaddingUnits?.Desktop}`;
	const postGlobalTabletPaddingWidth     = `${postGlobalPaddingTablet?.top}${postGlobalPaddingUnits?.Tablet} ${postGlobalPaddingTablet?.right}${postGlobalPaddingUnits?.Tablet} ${postGlobalPaddingTablet?.bottom}${postGlobalPaddingUnits?.Tablet} ${postGlobalPaddingTablet?.left}${postGlobalPaddingUnits?.Tablet}`;
	const postGlobalMobilePaddingWidth     = `${postGlobalPaddingMobile?.top}${postGlobalPaddingUnits?.Mobile} ${postGlobalPaddingMobile?.right}${postGlobalPaddingUnits?.Mobile} ${postGlobalPaddingMobile?.bottom}${postGlobalPaddingUnits?.Mobile} ${postGlobalPaddingMobile?.left}${postGlobalPaddingUnits?.Mobile}`;
	/** End Global Padding */
	
	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( postGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						postGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						postGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						postGlobalMarginMobile: {
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
					setAttributes( {postGlobalMarginDesktop: {...postGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {postGlobalMarginTablet: {...postGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {postGlobalMarginMobile: {...postGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {postGlobalMarginLink: !postGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			postGlobalMarginUnits: {
				...postGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const postGlobalDesktopMarginWidth = `${postGlobalMarginDesktop?.top}${postGlobalMarginUnits?.Desktop} ${postGlobalMarginDesktop?.right}${postGlobalMarginUnits?.Desktop} ${postGlobalMarginDesktop?.bottom}${postGlobalMarginUnits?.Desktop} ${postGlobalMarginDesktop?.left}${postGlobalMarginUnits?.Desktop}`;
	const postGlobalTabletMarginWidth = `${postGlobalMarginTablet?.top}${postGlobalMarginUnits?.Tablet} ${postGlobalMarginTablet?.right}${postGlobalMarginUnits?.Tablet} ${postGlobalMarginTablet?.bottom}${postGlobalMarginUnits?.Tablet} ${postGlobalMarginTablet?.left}${postGlobalMarginUnits?.Tablet}`;
	const postGlobalMobileMarginWidth = `${postGlobalMarginMobile?.top}${postGlobalMarginUnits?.Mobile} ${postGlobalMarginMobile?.right}${postGlobalMarginUnits?.Mobile} ${postGlobalMarginMobile?.bottom}${postGlobalMarginUnits?.Mobile} ${postGlobalMarginMobile?.left}${postGlobalMarginUnits?.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( postGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						postGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						postGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						postGlobalBorderMobile: {
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
					setAttributes( {postGlobalBorderDesktop: {...postGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {postGlobalBorderTablet: {...postGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {postGlobalBorderMobile: {...postGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {postGlobalBorderLink: !postGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			postGlobalBorderUnits: {
				...postGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const postGlobalDesktopBorderWidth = `${postGlobalBorderDesktop?.top}${postGlobalBorderUnits?.Desktop} ${postGlobalBorderDesktop?.right}${postGlobalBorderUnits?.Desktop} ${postGlobalBorderDesktop?.bottom}${postGlobalBorderUnits?.Desktop} ${postGlobalBorderDesktop?.left}${postGlobalBorderUnits?.Desktop}`;
	const postGlobalTabletBorderWidth = `${postGlobalBorderTablet?.top}${postGlobalBorderUnits?.Tablet} ${postGlobalBorderTablet?.right}${postGlobalBorderUnits?.Tablet} ${postGlobalBorderTablet?.bottom}${postGlobalBorderUnits?.Tablet} ${postGlobalBorderTablet?.left}${postGlobalBorderUnits?.Tablet}`;
	const postGlobalMobileBorderWidth = `${postGlobalBorderMobile?.top}${postGlobalBorderUnits?.Mobile} ${postGlobalBorderMobile?.right}${postGlobalBorderUnits?.Mobile} ${postGlobalBorderMobile?.bottom}${postGlobalBorderUnits?.Mobile} ${postGlobalBorderMobile?.left}${postGlobalBorderUnits?.Mobile}`;
	/** End Border */


	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( postGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						postGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						postGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						postGlobalBorderRadiusMobile: {
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
					setAttributes( {postGlobalBorderRadiusDesktop: {...postGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {postGlobalBorderRadiusTablet: {...postGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {postGlobalBorderRadiusMobile: {...postGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {postGlobalBorderRadiusLink: !postGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			postGlobalBorderRadiusUnits: {
				...postGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */ 

	/** End Global Border Radius */
	const postGlobalDesktopBorderRadiusWidth = `${postGlobalBorderRadiusDesktop?.top}${postGlobalBorderRadiusUnits?.Desktop} ${postGlobalBorderRadiusDesktop?.right}${postGlobalBorderRadiusUnits?.Desktop} ${postGlobalBorderRadiusDesktop?.bottom}${postGlobalBorderRadiusUnits?.Desktop} ${postGlobalBorderRadiusDesktop?.left}${postGlobalBorderRadiusUnits?.Desktop}`;
	const postGlobalTabletBorderRadiusWidth = `${postGlobalBorderRadiusTablet?.top}${postGlobalBorderRadiusUnits?.Tablet} ${postGlobalBorderRadiusTablet?.right}${postGlobalBorderRadiusUnits?.Tablet} ${postGlobalBorderRadiusTablet?.bottom}${postGlobalBorderRadiusUnits?.Tablet} ${postGlobalBorderRadiusTablet?.left}${postGlobalBorderRadiusUnits?.Tablet}`;
	const postGlobalMobileBorderRadiusWidth = `${postGlobalBorderRadiusMobile?.top}${postGlobalBorderRadiusUnits?.Mobile} ${postGlobalBorderRadiusMobile?.right}${postGlobalBorderRadiusUnits?.Mobile} ${postGlobalBorderRadiusMobile?.bottom}${postGlobalBorderRadiusUnits?.Mobile} ${postGlobalBorderRadiusMobile?.left}${postGlobalBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */  

    /** Start Load More Button Padding */
	const handleLoadMoreButtonPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( loadMoreButtonPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						loadMoreButtonDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						loadMoreButtonTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						loadMoreButtonMobilePadding: {
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
					setAttributes( {loadMoreButtonDesktopPadding: {...loadMoreButtonDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {loadMoreButtonTabletPadding: {...loadMoreButtonTabletPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {loadMoreButtonMobilePadding: {...loadMoreButtonMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleLoadMoreButtonPaddingCombineBtn = () => {
		setAttributes( {loadMoreButtonPaddingLink: !loadMoreButtonPaddingLink} );
	}

	const handleLoadMoreButtonPaddingUnitsHandler = (unit) => {
		setAttributes( {
			loadMoreButtonPaddingUnits: {
				...loadMoreButtonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const loadMoreButtonDesktopPaddingWidth    = `${loadMoreButtonDesktopPadding?.top}${loadMoreButtonPaddingUnits?.Desktop} ${loadMoreButtonDesktopPadding?.right}${loadMoreButtonPaddingUnits?.Desktop} ${loadMoreButtonDesktopPadding?.bottom}${loadMoreButtonPaddingUnits?.Desktop} ${loadMoreButtonDesktopPadding?.left}${loadMoreButtonPaddingUnits?.Desktop}`;
	const loadMoreButtonTabletPaddingWidth     = `${loadMoreButtonTabletPadding?.top}${loadMoreButtonPaddingUnits?.Tablet} ${loadMoreButtonTabletPadding?.right}${loadMoreButtonPaddingUnits?.Tablet} ${loadMoreButtonTabletPadding?.bottom}${loadMoreButtonPaddingUnits?.Tablet} ${loadMoreButtonTabletPadding?.left}${loadMoreButtonPaddingUnits?.Tablet}`;
	const loadMoreButtonMobilePaddingWidth     = `${loadMoreButtonMobilePadding?.top}${loadMoreButtonPaddingUnits?.Mobile} ${loadMoreButtonMobilePadding?.right}${loadMoreButtonPaddingUnits?.Mobile} ${loadMoreButtonMobilePadding?.bottom}${loadMoreButtonPaddingUnits?.Mobile} ${loadMoreButtonMobilePadding?.left}${loadMoreButtonPaddingUnits?.Mobile}`;
	/** End Load More Button Padding */


	/** Start Load More Button Border */
	const handleLoadMoreButtonBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( loadMoreButtonBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						loadMoreButtonDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						loadMoreButtonTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						loadMoreButtonMobileBorder: {
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
					setAttributes( {loadMoreButtonDesktopBorder: {...loadMoreButtonDesktopBorder, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {loadMoreButtonTabletBorder: {...loadMoreButtonTabletBorder, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {loadMoreButtonMobileBorder: {...loadMoreButtonMobileBorder, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleLoadMoreButtonBorderCombineBtn = () => {
		setAttributes( {loadMoreButtonBorderLink: !loadMoreButtonBorderLink} );
	}

	const handleLoadMoreButtonBorderUnitsHandler = (unit) => {
		setAttributes( {
			loadMoreButtonBorderUnits: {
				...loadMoreButtonBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const loadMoreButtonDesktopBorderWidth = `${loadMoreButtonDesktopBorder?.top}${loadMoreButtonBorderUnits?.Desktop} ${loadMoreButtonDesktopBorder?.right}${loadMoreButtonBorderUnits?.Desktop} ${loadMoreButtonDesktopBorder?.bottom}${loadMoreButtonBorderUnits?.Desktop} ${loadMoreButtonDesktopBorder?.left}${loadMoreButtonBorderUnits?.Desktop}`;
	const loadMoreButtonTabletBorderWidth = `${loadMoreButtonTabletBorder?.top}${loadMoreButtonBorderUnits?.Tablet} ${loadMoreButtonTabletBorder?.right}${loadMoreButtonBorderUnits?.Tablet} ${loadMoreButtonTabletBorder?.bottom}${loadMoreButtonBorderUnits?.Tablet} ${loadMoreButtonTabletBorder?.left}${loadMoreButtonBorderUnits?.Tablet}`;
	const loadMoreButtonMobileBorderWidth = `${loadMoreButtonMobileBorder?.top}${loadMoreButtonBorderUnits?.Mobile} ${loadMoreButtonMobileBorder?.right}${loadMoreButtonBorderUnits?.Mobile} ${loadMoreButtonMobileBorder?.bottom}${loadMoreButtonBorderUnits?.Mobile} ${loadMoreButtonMobileBorder?.left}${loadMoreButtonBorderUnits?.Mobile}`;
	/** End Load More Button Border */

	/** Start Load More Button Border Radius*/
	const handleLoadMoreButtonBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( loadMoreButtonBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						loadMoreButtonDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						loadMoreButtonTabletBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						loadMoreButtonMobileBorderRadius: {
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
					setAttributes( {loadMoreButtonDesktopBorderRadius: {...loadMoreButtonDesktopBorderRadius, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {loadMoreButtonTabletBorderRadius: {...loadMoreButtonTabletBorderRadius, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {loadMoreButtonMobileBorderRadius: {...loadMoreButtonMobileBorderRadius, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleLoadMoreButtonBorderRadiusCombineBtn = () => {
		setAttributes( {loadMoreButtonBorderRadiusLink: !loadMoreButtonBorderRadiusLink} );
	}

	const handleLoadMoreButtonBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			loadMoreButtonBorderRadiusUnits: {
				...loadMoreButtonBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Load More Button Border */

	/** End Load More Button Border Radius */
	const loadMoreButtonDesktopBorderRadiusWidth = `${loadMoreButtonDesktopBorderRadius?.top}${loadMoreButtonBorderRadiusUnits?.Desktop} ${loadMoreButtonDesktopBorderRadius?.right}${loadMoreButtonBorderRadiusUnits?.Desktop} ${loadMoreButtonDesktopBorderRadius?.bottom}${loadMoreButtonBorderRadiusUnits?.Desktop} ${loadMoreButtonDesktopBorderRadius?.left}${loadMoreButtonBorderRadiusUnits?.Desktop}`;
	const loadMoreButtonTabletBorderRadiusWidth = `${loadMoreButtonTabletBorderRadius?.top}${loadMoreButtonBorderRadiusUnits?.Tablet} ${loadMoreButtonTabletBorderRadius?.right}${loadMoreButtonBorderRadiusUnits?.Tablet} ${loadMoreButtonTabletBorderRadius?.bottom}${loadMoreButtonBorderRadiusUnits?.Tablet} ${loadMoreButtonTabletBorderRadius?.left}${loadMoreButtonBorderRadiusUnits?.Tablet}`;
	const loadMoreButtonMobileBorderRadiusWidth = `${loadMoreButtonMobileBorderRadius?.top}${loadMoreButtonBorderRadiusUnits?.Mobile} ${loadMoreButtonMobileBorderRadius?.right}${loadMoreButtonBorderRadiusUnits?.Mobile} ${loadMoreButtonMobileBorderRadius?.bottom}${loadMoreButtonBorderRadiusUnits?.Mobile} ${loadMoreButtonMobileBorderRadius?.left}${loadMoreButtonBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */
    

    /** Start Load More Icon Margin */
	const handleLoadMoreIconMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( loadMoreIconMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						loadMoreIconDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						loadMoreIconTabletMargin: { 
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						loadMoreIconMobileMargin: {
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
					setAttributes( {loadMoreIconDesktopMargin: {...loadMoreIconDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {loadMoreIconTabletMargin: {...loadMoreIconTabletMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {loadMoreIconMobileMargin: {...loadMoreIconMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleLoadMoreIconMarginCombineBtn = () => { 
		setAttributes( {loadMoreIconMarginLink: !loadMoreIconMarginLink} );
	}

	const handleLoadMoreIconMarginUnitsHandler = (unit) => {
		setAttributes( {
			loadMoreIconMarginUnits: {
				...loadMoreIconMarginUnits,
				[deviceType]: unit
			}
		})
	}
	const loadMoreIconDesktopMarginWidth    = `${loadMoreIconDesktopMargin?.top}${loadMoreIconMarginUnits?.Desktop} ${loadMoreIconDesktopMargin?.right}${loadMoreIconMarginUnits?.Desktop} ${loadMoreIconDesktopMargin?.bottom}${loadMoreIconMarginUnits?.Desktop} ${loadMoreIconDesktopMargin?.left}${loadMoreIconMarginUnits?.Desktop}`;
	const loadMoreIconTabletMarginWidth     = `${loadMoreIconTabletMargin?.top}${loadMoreIconMarginUnits?.Tablet} ${loadMoreIconTabletMargin?.right}${loadMoreIconMarginUnits?.Tablet} ${loadMoreIconTabletMargin?.bottom}${loadMoreIconMarginUnits?.Tablet} ${loadMoreIconTabletMargin?.left}${loadMoreIconMarginUnits?.Tablet}`;
	const loadMoreIconMobileMarginWidth     = `${loadMoreIconMobileMargin?.top}${loadMoreIconMarginUnits?.Mobile} ${loadMoreIconMobileMargin?.right}${loadMoreIconMarginUnits?.Mobile} ${loadMoreIconMobileMargin?.bottom}${loadMoreIconMarginUnits?.Mobile} ${loadMoreIconMobileMargin?.left}${loadMoreIconMarginUnits?.Mobile}`;
	/** End Load More Icon Margin */

    /** Start Icon border */
    const handlebuttonIconBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( buttonIconBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        buttonIconBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        buttonIconBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        buttonIconBorderMobile: {
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
                    setAttributes( {buttonIconBorderDesktop: {...buttonIconBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {buttonIconBorderTablet: {...buttonIconBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {buttonIconBorderMobile: {...buttonIconBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlebuttonIconBorderCombineBtn = () => {
        setAttributes( {buttonIconBorderLink: !buttonIconBorderLink} );
    }

    const handlebuttonIconBorderUnitsHandler = (unit) => {
        setAttributes( {
            buttonIconBorderUnits: {
                ...buttonIconBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Icon border */
    const buttonIconBorderDesktopWidth = `${buttonIconBorderDesktop?.top}${buttonIconBorderUnits?.Desktop} ${buttonIconBorderDesktop?.right}${buttonIconBorderUnits?.Desktop} ${buttonIconBorderDesktop?.bottom}${buttonIconBorderUnits?.Desktop} ${buttonIconBorderDesktop?.left}${buttonIconBorderUnits?.Desktop}`;
    const buttonIconBorderTabletWidth = `${buttonIconBorderTablet?.top}${buttonIconBorderUnits?.Tablet} ${buttonIconBorderTablet?.right}${buttonIconBorderUnits?.Tablet} ${buttonIconBorderTablet?.bottom}${buttonIconBorderUnits?.Tablet} ${buttonIconBorderTablet?.left}${buttonIconBorderUnits?.Tablet}`;
    const buttonIconBorderMobileWidth = `${buttonIconBorderMobile?.top}${buttonIconBorderUnits?.Mobile} ${buttonIconBorderMobile?.right}${buttonIconBorderUnits?.Mobile} ${buttonIconBorderMobile?.bottom}${buttonIconBorderUnits?.Mobile} ${buttonIconBorderMobile?.left}${buttonIconBorderUnits?.Mobile}`;
    /** End Border */


    /** Start Icon border radius*/
    const handlebuttonIconBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( buttonIconBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        buttonIconBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        buttonIconBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        buttonIconBorderRadiusMobile: {
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
                    setAttributes( {buttonIconBorderRadiusDesktop: {...buttonIconBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {buttonIconBorderRadiusTablet: {...buttonIconBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {buttonIconBorderRadiusMobile: {...buttonIconBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlebuttonIconBorderRadiusCombineBtn = () => {
        setAttributes( {buttonIconBorderRadiusLink: !buttonIconBorderRadiusLink} );
    }

    const handlebuttonIconBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            buttonIconBorderRadiusUnits: {
                ...buttonIconBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Icon Border Radius */
    const buttonIconBorderRadiusDesktopWidth = `${buttonIconBorderRadiusDesktop?.top}${buttonIconBorderRadiusUnits?.Desktop} ${buttonIconBorderRadiusDesktop?.right}${buttonIconBorderRadiusUnits?.Desktop} ${buttonIconBorderRadiusDesktop?.bottom}${buttonIconBorderRadiusUnits?.Desktop} ${buttonIconBorderRadiusDesktop?.left}${buttonIconBorderRadiusUnits?.Desktop}`;
    const buttonIconBorderRadiusTabletWidth = `${buttonIconBorderRadiusTablet?.top}${buttonIconBorderRadiusUnits?.Tablet} ${buttonIconBorderRadiusTablet?.right}${buttonIconBorderRadiusUnits?.Tablet} ${buttonIconBorderRadiusTablet?.bottom}${buttonIconBorderRadiusUnits?.Tablet} ${buttonIconBorderRadiusTablet?.left}${buttonIconBorderRadiusUnits?.Tablet}`;
    const buttonIconBorderRadiusMobileWidth = `${buttonIconBorderRadiusMobile?.top}${buttonIconBorderRadiusUnits?.Mobile} ${buttonIconBorderRadiusMobile?.right}${buttonIconBorderRadiusUnits?.Mobile} ${buttonIconBorderRadiusMobile?.bottom}${buttonIconBorderRadiusUnits?.Mobile} ${buttonIconBorderRadiusMobile?.left}${buttonIconBorderRadiusUnits?.Mobile}`;
    /** End Border Radius */


    /** Start padding */
    const handlePaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( buttonPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        buttonDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        buttonTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        buttonMobilePadding: {
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
                    setAttributes( {buttonDesktopPadding: {...buttonDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {buttonTabPadding: {...buttonTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {buttonMobilePadding: {...buttonMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

	const handlePaddingCombineBtn = () => {
		setAttributes( {buttonPaddingLink: !buttonPaddingLink} );
	}

	const handlePaddingUnitsHandler = (unit) => {
		setAttributes( {
			buttonPaddingUnits: {
				...buttonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** end padding */


	/** Default padding for each device */
	const buttonDesktopPaddingStr = `${buttonDesktopPadding?.top}${buttonPaddingUnits?.Desktop} ${buttonDesktopPadding?.right}${buttonPaddingUnits?.Desktop} ${buttonDesktopPadding?.bottom}${buttonPaddingUnits?.Desktop} ${buttonDesktopPadding?.left}${buttonPaddingUnits?.Desktop}`;
	const buttonTabletPaddingStr = `${buttonTabPadding?.top}${buttonPaddingUnits?.Tablet} ${buttonTabPadding?.right}${buttonPaddingUnits?.Tablet} ${buttonTabPadding?.bottom}${buttonPaddingUnits?.Tablet} ${buttonTabPadding?.left}${buttonPaddingUnits?.Tablet}`;
	const buttonMobilePaddingStr = `${buttonMobilePadding?.top}${buttonPaddingUnits?.Mobile} ${buttonMobilePadding?.right}${buttonPaddingUnits?.Mobile} ${buttonMobilePadding?.bottom}${buttonPaddingUnits?.Mobile} ${buttonMobilePadding?.left}${buttonPaddingUnits?.Mobile}`;
	/** End Padding */

	/** Start Margin */
	const handleMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ buttonDesktopMargin: { ...buttonDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonTabMargin: { ...buttonTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonMobileMargin: { ...buttonMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleMarginCombineBtn = () => {
		setAttributes({ buttonMarginLink: !buttonMarginLink });
	}

	const handleMarginUnitsHandler = (unit) => {
		setAttributes({
			buttonMarginUnits: {
				...buttonMarginUnits,
				[deviceType]: unit
			}
		});
	}

	/** Default margin for each device */
	const buttonDesktopMarginStr = `${buttonDesktopMargin?.top}${buttonMarginUnits?.Desktop} ${buttonDesktopMargin?.right}${buttonMarginUnits?.Desktop} ${buttonDesktopMargin?.bottom}${buttonMarginUnits?.Desktop} ${buttonDesktopMargin?.left}${buttonMarginUnits?.Desktop}`;
	const buttonTabletMarginStr = `${buttonTabMargin?.top}${buttonMarginUnits?.Tablet} ${buttonTabMargin?.right}${buttonMarginUnits?.Tablet} ${buttonTabMargin?.bottom}${buttonMarginUnits?.Tablet} ${buttonTabMargin?.left}${buttonMarginUnits?.Tablet}`;
	const buttonMobileMarginStr = `${buttonMobileMargin?.top}${buttonMarginUnits?.Mobile} ${buttonMobileMargin?.right}${buttonMarginUnits?.Mobile} ${buttonMobileMargin?.bottom}${buttonMarginUnits?.Mobile} ${buttonMobileMargin?.left}${buttonMarginUnits?.Mobile}`;
	/** End margin */

	/** Start border width */
	const handleBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopBorderWidth: {
							...buttonDesktopBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderWidth: {
							...buttonTabBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderWidth: {
							...buttonMobileBorderWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleBorderLinkToggle = () => {
		setAttributes({ buttonBorderLink: !buttonBorderLink });
	};

	const handleBorderUnitsChange = (unit) => {
		setAttributes({
			buttonBorderUnits: {
				...buttonBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border width */

	/** Default border width for different devices */
	const buttonDesktopBorderWidthStr = `${buttonDesktopBorderWidth?.top}${buttonBorderUnits?.Desktop} ${buttonDesktopBorderWidth?.right}${buttonBorderUnits?.Desktop} ${buttonDesktopBorderWidth?.bottom}${buttonBorderUnits?.Desktop} ${buttonDesktopBorderWidth?.left}${buttonBorderUnits?.Desktop}`;
	const buttonTabletBorderWidthStr = `${buttonTabBorderWidth?.top}${buttonBorderUnits?.Tablet} ${buttonTabBorderWidth?.right}${buttonBorderUnits?.Tablet} ${buttonTabBorderWidth?.bottom}${buttonBorderUnits?.Tablet} ${buttonTabBorderWidth?.left}${buttonBorderUnits?.Tablet}`;
	const buttonMobileBorderWidthStr = `${buttonMobileBorderWidth?.top}${buttonBorderUnits?.Mobile} ${buttonMobileBorderWidth?.right}${buttonBorderUnits?.Mobile} ${buttonMobileBorderWidth?.bottom}${buttonBorderUnits?.Mobile} ${buttonMobileBorderWidth?.left}${buttonBorderUnits?.Mobile}`;
	/** End border width */

	/** Start border radius */
	const handleBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopBorderRadiusWidth: {
							...buttonDesktopBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderRadiusWidth: {
							...buttonTabBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderRadiusWidth: {
							...buttonMobileBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleBorderRadiusLinkToggle = () => {
		setAttributes({ buttonBorderRadiusLink: !buttonBorderRadiusLink });
	};

	const handleBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			buttonBorderRadiusUnits: {
				...buttonBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border radius */

	/** Default border radius for different devices */
	const buttonDesktopBorderRadiusStr = `${buttonDesktopBorderRadiusWidth?.top}${buttonBorderRadiusUnits?.Desktop} ${buttonDesktopBorderRadiusWidth?.right}${buttonBorderRadiusUnits?.Desktop} ${buttonDesktopBorderRadiusWidth?.bottom}${buttonBorderRadiusUnits?.Desktop} ${buttonDesktopBorderRadiusWidth?.left}${buttonBorderRadiusUnits?.Desktop}`;
	const buttonTabletBorderRadiusStr = `${buttonTabBorderRadiusWidth?.top}${buttonBorderRadiusUnits?.Tablet} ${buttonTabBorderRadiusWidth?.right}${buttonBorderRadiusUnits?.Tablet} ${buttonTabBorderRadiusWidth?.bottom}${buttonBorderRadiusUnits?.Tablet} ${buttonTabBorderRadiusWidth?.left}${buttonBorderRadiusUnits?.Tablet}`;
	const buttonMobileBorderRadiusStr = `${buttonMobileBorderRadiusWidth?.top}${buttonBorderRadiusUnits?.Mobile} ${buttonMobileBorderRadiusWidth?.right}${buttonBorderRadiusUnits?.Mobile} ${buttonMobileBorderRadiusWidth?.bottom}${buttonBorderRadiusUnits?.Mobile} ${buttonMobileBorderRadiusWidth?.left}${buttonBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */


    const iconHandler = (IconName) => {
		setAttributes({loadMoreIcon: IconName})
	}

    const readMoreIconHandler = (IconName) => {
		setAttributes({readMoreIcon: IconName})
	}

    const prevIconHandler = (IconName) => {
		setAttributes({paginationPrevIcon: IconName})
	}

    const nextIconHandler = (IconName) => {
		setAttributes({paginationNextIcon: IconName})
	}


    // Pagination Arrow Settings

    /** Start Pagination Arrow Border */
	const handlePaginationArrowBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( paginationArrowBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						paginationArrowDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						paginationArrowTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						paginationArrowMobileBorder: {
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
					setAttributes( {paginationArrowDesktopBorder: {...paginationArrowDesktopBorder, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {paginationArrowTabletBorder: {...paginationArrowTabletBorder, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {paginationArrowMobileBorder: {...paginationArrowMobileBorder, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlePaginationArrowBorderCombineBtn = () => {
		setAttributes( {paginationArrowBorderLink: !paginationArrowBorderLink} );
	}

	const handlePaginationArrowBorderUnitsHandler = (unit) => {
		setAttributes( {
			paginationArrowBorderUnits: {
				...paginationArrowBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const paginationArrowDesktopBorderWidth = `${paginationArrowDesktopBorder?.top}${paginationArrowBorderUnits?.Desktop} ${paginationArrowDesktopBorder?.right}${paginationArrowBorderUnits?.Desktop} ${paginationArrowDesktopBorder?.bottom}${paginationArrowBorderUnits?.Desktop} ${paginationArrowDesktopBorder?.left}${paginationArrowBorderUnits?.Desktop}`;
	const paginationArrowTabletBorderWidth = `${paginationArrowTabletBorder?.top}${paginationArrowBorderUnits?.Tablet} ${paginationArrowTabletBorder?.right}${paginationArrowBorderUnits?.Tablet} ${paginationArrowTabletBorder?.bottom}${paginationArrowBorderUnits?.Tablet} ${paginationArrowTabletBorder?.left}${paginationArrowBorderUnits?.Tablet}`;
	const paginationArrowMobileBorderWidth = `${paginationArrowMobileBorder?.top}${paginationArrowBorderUnits?.Mobile} ${paginationArrowMobileBorder?.right}${paginationArrowBorderUnits?.Mobile} ${paginationArrowMobileBorder?.bottom}${paginationArrowBorderUnits?.Mobile} ${paginationArrowMobileBorder?.left}${paginationArrowBorderUnits?.Mobile}`;
	/** End Pagination Arrow Border */

    /** Start Pagination Arrow Border */
	const handlePaginationArrowBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( paginationArrowBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						paginationArrowDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						paginationArrowTabletBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						paginationArrowMobileBorderRadius: {
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
					setAttributes( {paginationArrowDesktopBorderRadius: {...paginationArrowDesktopBorderRadius, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {paginationArrowTabletBorderRadius: {...paginationArrowTabletBorderRadius, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {paginationArrowMobileBorderRadius: {...paginationArrowMobileBorderRadius, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlePaginationArrowBorderRadiusCombineBtn = () => {
		setAttributes( {paginationArrowBorderRadiusLink: !paginationArrowBorderRadiusLink} );
	}

	const handlePaginationArrowBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			paginationArrowBorderRadiusUnits: {
				...paginationArrowBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	const paginationArrowDesktopBorderRadiusWidth = `${paginationArrowDesktopBorderRadius?.top}${paginationArrowBorderRadiusUnits?.Desktop} ${paginationArrowDesktopBorderRadius?.right}${paginationArrowBorderRadiusUnits?.Desktop} ${paginationArrowDesktopBorderRadius?.bottom}${paginationArrowBorderRadiusUnits?.Desktop} ${paginationArrowDesktopBorderRadius?.left}${paginationArrowBorderRadiusUnits?.Desktop}`;
	const paginationArrowTabletBorderRadiusWidth = `${paginationArrowTabletBorderRadius?.top}${paginationArrowBorderRadiusUnits?.Tablet} ${paginationArrowTabletBorderRadius?.right}${paginationArrowBorderRadiusUnits?.Tablet} ${paginationArrowTabletBorderRadius?.bottom}${paginationArrowBorderRadiusUnits?.Tablet} ${paginationArrowTabletBorderRadius?.left}${paginationArrowBorderRadiusUnits?.Tablet}`;
	const paginationArrowMobileBorderRadiusWidth = `${paginationArrowMobileBorderRadius?.top}${paginationArrowBorderRadiusUnits?.Mobile} ${paginationArrowMobileBorderRadius?.right}${paginationArrowBorderRadiusUnits?.Mobile} ${paginationArrowMobileBorderRadius?.bottom}${paginationArrowBorderRadiusUnits?.Mobile} ${paginationArrowMobileBorderRadius?.left}${paginationArrowBorderRadiusUnits?.Mobile}`;
	/** End Pagination Arrow Border */

    /** Start Pagination Button Border */
	const handlePaginationBtnBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( paginationBtnBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						paginationBtnDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						paginationBtnTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						paginationBtnMobileBorder: {
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
					setAttributes( {paginationBtnDesktopBorder: {...paginationBtnDesktopBorder, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {paginationBtnTabletBorder: {...paginationBtnTabletBorder, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {paginationBtnMobileBorder: {...paginationBtnMobileBorder, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlePaginationBtnBorderCombineBtn = () => {
		setAttributes( {paginationBtnBorderLink: !paginationBtnBorderLink} );
	}

	const handlePaginationBtnBorderUnitsHandler = (unit) => {
		setAttributes( {
			paginationBtnBorderUnits: {
				...paginationBtnBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const paginationBtnDesktopBorderWidth = `${paginationBtnDesktopBorder?.top}${paginationBtnBorderUnits?.Desktop} ${paginationBtnDesktopBorder?.right}${paginationBtnBorderUnits?.Desktop} ${paginationBtnDesktopBorder?.bottom}${paginationBtnBorderUnits?.Desktop} ${paginationBtnDesktopBorder?.left}${paginationBtnBorderUnits?.Desktop}`;
	const paginationBtnTabletBorderWidth = `${paginationBtnTabletBorder?.top}${paginationBtnBorderUnits?.Tablet} ${paginationBtnTabletBorder?.right}${paginationBtnBorderUnits?.Tablet} ${paginationBtnTabletBorder?.bottom}${paginationBtnBorderUnits?.Tablet} ${paginationBtnTabletBorder?.left}${paginationBtnBorderUnits?.Tablet}`;
	const paginationBtnMobileBorderWidth = `${paginationBtnMobileBorder?.top}${paginationBtnBorderUnits?.Mobile} ${paginationBtnMobileBorder?.right}${paginationBtnBorderUnits?.Mobile} ${paginationBtnMobileBorder?.bottom}${paginationBtnBorderUnits?.Mobile} ${paginationBtnMobileBorder?.left}${paginationBtnBorderUnits?.Mobile}`;
	/** End Pagination Button Border */

    /** Start Pagination Button Border Radius */
	const handlePaginationBtnBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( paginationBtnBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						paginationBtnDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						paginationBtnTabletBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						paginationBtnMobileBorderRadius: {
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
					setAttributes( {paginationBtnDesktopBorderRadius: {...paginationBtnDesktopBorderRadius, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {paginationBtnTabletBorderRadius: {...paginationBtnTabletBorderRadius, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {paginationBtnMobileBorderRadius: {...paginationBtnMobileBorderRadius, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlePaginationBtnBorderRadiusCombineBtn = () => {
		setAttributes( {paginationBtnBorderRadiusLink: !paginationBtnBorderRadiusLink} );
	}

	const handlePaginationBtnBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			paginationBtnBorderRadiusUnits: {
				...paginationBtnBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	const paginationBtnDesktopBorderRadiusWidth = `${paginationBtnDesktopBorderRadius?.top}${paginationBtnBorderRadiusUnits?.Desktop} ${paginationBtnDesktopBorderRadius?.right}${paginationBtnBorderRadiusUnits?.Desktop} ${paginationBtnDesktopBorderRadius?.bottom}${paginationBtnBorderRadiusUnits?.Desktop} ${paginationBtnDesktopBorderRadius?.left}${paginationBtnBorderRadiusUnits?.Desktop}`;
	const paginationBtnTabletBorderRadiusWidth = `${paginationBtnTabletBorderRadius?.top}${paginationBtnBorderRadiusUnits?.Tablet} ${paginationBtnTabletBorderRadius?.right}${paginationBtnBorderRadiusUnits?.Tablet} ${paginationBtnTabletBorderRadius?.bottom}${paginationBtnBorderRadiusUnits?.Tablet} ${paginationBtnTabletBorderRadius?.left}${paginationBtnBorderRadiusUnits?.Tablet}`;
	const paginationBtnMobileBorderRadiusWidth = `${paginationBtnMobileBorderRadius?.top}${paginationBtnBorderRadiusUnits?.Mobile} ${paginationBtnMobileBorderRadius?.right}${paginationBtnBorderRadiusUnits?.Mobile} ${paginationBtnMobileBorderRadius?.bottom}${paginationBtnBorderRadiusUnits?.Mobile} ${paginationBtnMobileBorderRadius?.left}${paginationBtnBorderRadiusUnits?.Mobile}`;
	/** End Pagination Button Border */


    const allBlockStyle = useMemo(() => `

        .${blockId}.fb-post-grid-area {
            ${postGridPositionType === 'default' ? `position: relative;` : ''}
            ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' ? `width: 100%;` : ''}
            ${postGridPositionType !== 'default' ? `position: ${postGridPositionType};` : ''}
            ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'left' && postGridHZLeftOffset?.Desktop !== undefined ? `left: ${postGridHZLeftOffset?.Desktop}${postGridHZLeftOffsetUnits?.Desktop};` : ''}
            ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'right' && postGridHZRightOffset?.Desktop !== undefined ? `right: ${postGridHZRightOffset?.Desktop}${postGridHZRightOffsetUnits?.Desktop};` : ''}
            ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'top' && postGridVRTopOffset?.Desktop !== undefined ? `top: ${postGridVRTopOffset?.Desktop}${postGridVRTopOffsetUnits?.Desktop};` : ''}
            ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'bottom' && postGridVRBottomOffset?.Desktop !== undefined ? `bottom: ${postGridVRBottomOffset?.Desktop}${postGridVRBottomOffsetUnits?.Desktop};` : ''}
            ${postGlobalZIndex?.Desktop ? `z-index: ${postGlobalZIndex?.Desktop};` : ''}
            ${postGridOverflow !== 'default' ? `overflow: ${postGridOverflow};` : ''}
        }
        .${blockId}.fb_post_grid_container {
            ${postGlobalDesktopPaddingWidth && postGlobalPaddingDesktop?.top? `padding: ${postGlobalDesktopPaddingWidth};` : ''}
            ${postGlobalDesktopMarginWidth && postGlobalMarginDesktop?.top? `margin: ${postGlobalDesktopMarginWidth};` : ''} 
            ${postGlobalBorder ? `border: ${postGlobalBorder};` : ''} 
            ${postGlobalDesktopBorderWidth && postGlobalBorderDesktop?.top? `border-width: ${postGlobalDesktopBorderWidth};` : ''}
            ${postGlobalDesktopBorderRadiusWidth && postGlobalBorderRadiusDesktop?.top? `border-radius: ${postGlobalDesktopBorderRadiusWidth};` : ''}
            ${postGlobalBorderColor ? `border-color: ${postGlobalBorderColor};` : ''}
            ${postGlobalBoxShadowCssValue ? `box-shadow: ${postGlobalBoxShadowCssValue};` : ''}
            ${postGlobalNormalBackgroundType === 'gradient' ? `  
                ${postGlobalNormalCustomGradientSwitcher && postGlobalNormalCustomGradientInputValue ? `background: ${postGlobalNormalCustomGradientInputValue};` : `background: ${postGlobalNormalGradientColor};`}
            `: `
                ${postGlobalNormalClassicColor ? `background: ${postGlobalNormalClassicColor};` : ''}
            `}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockId}.fb_post_grid_container:hover {
            ${postGlobalHoverBackgroundType === 'gradient' ? `  
                ${postGlobalHoverCustomGradientSwitcher && postGlobalHoverCustomGradientInputValue ? `background: ${postGlobalHoverCustomGradientInputValue};` : `background: ${postGlobalHoverGradientColor};`}
            `: `
                ${postGlobalHoverClassicColor ? `background: ${postGlobalHoverClassicColor};` : ''}
            `}
            ${postGlobalBorderHoverColor ? `border-color: ${postGlobalBorderHoverColor};` : ''}
            ${postGlobalBoxShadowHoverCssValue ? `box-shadow: ${postGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockId}.fb_post_grid_container.grid-layout {
            display: grid; 
            grid-template-columns: repeat(${gridColumnsPerSection?.Desktop}, 1fr) !important;
            row-gap: ${gridRowGap?.Desktop}${gridGapUnits?.Desktop};  
            column-gap: ${gridColumnGap?.Desktop}${gridGapUnits?.Desktop}; 
        }

        .${blockId}.fb_post_grid_container.grid-layout .fb_load_more_wrapper {
            grid-column: span ${gridColumnsPerSection?.Desktop};
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_load_more {
            ${loadMoreTextGlobalTypoSwitcher?.fontFamily === true && loadMoreTextGlobalTypographyData?.fontFamily ? `font-family: ${loadMoreTextGlobalTypographyData?.fontFamily};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.fontSize === true && loadMoreTextGlobalTypographyData?.fontSize ? `font-size: ${loadMoreTextGlobalTypographyData?.fontSize};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.fontWeight === true && loadMoreTextGlobalTypographyData?.fontWeight ? `font-weight: ${loadMoreTextGlobalTypographyData?.fontWeight};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.fontStyle === true && loadMoreTextGlobalTypographyData?.fontStyle ? `font-style: ${loadMoreTextGlobalTypographyData?.fontStyle};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.textTransform === true && loadMoreTextGlobalTypographyData?.textTransform ? `text-transform: ${loadMoreTextGlobalTypographyData?.textTransform};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.textDecoration === true && loadMoreTextGlobalTypographyData?.textDecoration ? `text-decoration: ${loadMoreTextGlobalTypographyData?.textDecoration};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.letterSpacing === true && loadMoreTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${loadMoreTextGlobalTypographyData?.letterSpacing};` : ''}
            ${loadMoreTextGlobalTypoSwitcher?.lineHeight === true && loadMoreTextGlobalTypographyData?.lineHeight ? `line-height: ${loadMoreTextGlobalTypographyData?.lineHeight};` : ''}
            
        	${loadMoreTextGlobalTypoSwitcher?.fontFamily === false && loadMoreTextFontFamily && loadMoreTextFontFamily !== 'Default' ? `font-family: ${loadMoreTextFontFamily};` : ''}
			${loadMoreTextGlobalTypoSwitcher?.fontSize === false && loadMoreTextFontSize?.Desktop ? `font-size: ${loadMoreTextFontSize?.Desktop}${loadMoreTextFontSizeUnits?.Desktop};` : ''} 
			${loadMoreTextGlobalTypoSwitcher?.fontWeight === false && loadMoreTextFontWeight ? `font-weight: ${loadMoreTextFontWeight};` : ''}
			${loadMoreTextGlobalTypoSwitcher?.fontStyle === false && loadMoreTextFontStyle ? `font-style: ${loadMoreTextFontStyle};` : ''} 
			${loadMoreTextGlobalTypoSwitcher?.textTransform === false && loadMoreTextTransform ? `text-transform: ${loadMoreTextTransform};` : ''}
			${loadMoreTextGlobalTypoSwitcher?.textDecoration === false && loadMoreTextDecoration ? `text-decoration: ${loadMoreTextDecoration};` : ''} 
			${loadMoreTextGlobalTypoSwitcher?.letterSpacing === false && loadMoreTextLetterSpacing?.Desktop ? `letter-spacing: ${loadMoreTextLetterSpacing?.Desktop}${loadMoreTextLetterSpacingUnits?.Desktop};` : ''}
			${loadMoreTextGlobalTypoSwitcher?.lineHeight === false && loadMoreTextLineHeight?.Desktop ? `line-height: ${loadMoreTextLineHeight?.Desktop}${loadMoreTextLineHeightUnits?.Desktop};` : ''}
            ${loadMoreButtonDesktopPaddingWidth && loadMoreButtonDesktopPadding?.top ? `padding: ${loadMoreButtonDesktopPaddingWidth};` : ''}
            ${loadMoreButtonBorder ? `border: ${loadMoreButtonBorder};` : ''} 
            ${loadMoreButtonDesktopBorderWidth && loadMoreButtonDesktopBorder?.top ? `border-width: ${loadMoreButtonDesktopBorderWidth};` : ''}
            ${loadMoreButtonDesktopBorderRadiusWidth && loadMoreButtonDesktopBorderRadius?.top? `border-radius: ${loadMoreButtonDesktopBorderRadiusWidth};` : ''}
            ${loadMoreButtonBorderColor ? `border-color: ${loadMoreButtonBorderColor};` : ''}
            ${loadMoreTextColor ? `color: ${loadMoreTextColor};` : ''}
            ${loadMoreButtonNormalBackgroundType === 'gradient' ? `   
                ${loadMoreButtonNormalCustomGradientSwitcher && loadMoreButtonNormalCustomGradientInputValue ? `background: ${loadMoreButtonNormalCustomGradientInputValue};` : `background: ${loadMoreButtonNormalGradientColor};`}
            `: `
                ${loadMoreButtonNormalClassicColor ? `background: ${loadMoreButtonNormalClassicColor};` : ''}
            `}

        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_load_more:hover {
            ${loadMoreButtonHoverBackgroundType === 'gradient' ? `   
                ${loadMoreButtonHoverCustomGradientSwitcher && loadMoreButtonHoverCustomGradientInputValue ? `background: ${loadMoreButtonHoverCustomGradientInputValue};` : `background: ${loadMoreButtonHoverGradientColor};`}
            `: `
                ${loadMoreButtonHoverClassicColor ? `background: ${loadMoreButtonHoverClassicColor};` : ''}
            `}
            ${loadMoreTextHoverColor ? `color: ${loadMoreTextHoverColor};` : ''} 
            ${loadMoreButtonBorderHoverColor ? `border-color: ${loadMoreButtonBorderHoverColor};` : ''}
        }
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_load_more .load_more_button_icon svg {
            ${loadMoreIconSize?.Desktop ? `width: ${loadMoreIconSize?.Desktop}${loadMoreIconSizeUnits?.Desktop};` : ''}
            ${loadMoreIconSize?.Desktop ? `height: ${loadMoreIconSize?.Desktop}${loadMoreIconSizeUnits?.Desktop};` : ''}
            ${loadMoreIconColor ? `fill: ${loadMoreIconColor};` : ''}
            ${loadMoreIconDesktopMarginWidth && loadMoreIconDesktopMargin?.top ? `margin: ${loadMoreIconDesktopMarginWidth};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_load_more:hover .load_more_button_icon svg{
            ${loadMoreIconHoverColor ? `fill: ${loadMoreIconHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_load_more_loader {
            border-top: 2px solid ${loadMoreloaderColor ? loadMoreloaderColor : '#FFFFFF'};
			border-right: 2px solid ${loadMoreloaderColor ? loadMoreloaderColor : '#FFFFFF'};
			border-bottom: 2px solid ${loadMoreloaderColor ? loadMoreloaderColor : '#FFFFFF'};
			border-left: 2px solid transparent;
			border-radius: 50%;
			display: inline-block;
			box-sizing: border-box;
            transition: all .3s ease-in-out;
			animation: loader 1s linear infinite;
        }
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper:hover .fb_load_more_loader {
            border-top: 2px solid ${loadMoreloaderHoverColor ? loadMoreloaderHoverColor : '#FFFFFF'};
			border-right: 2px solid ${loadMoreloaderHoverColor ? loadMoreloaderHoverColor : '#FFFFFF'};
			border-bottom: 2px solid ${loadMoreloaderHoverColor ? loadMoreloaderHoverColor : '#FFFFFF'};
            transition: all .3s ease-in-out;
        }


        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous,
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next{
            ${paginationPrevNextWidth?.Desktop ? `width: ${paginationPrevNextWidth?.Desktop}${paginationPrevNextWidthUnits?.Desktop};` : ''}
            ${paginationPrevNextWidth?.Desktop ? `height: ${paginationPrevNextWidth?.Desktop}${paginationPrevNextWidthUnits?.Desktop};` : ''}

            ${paginationArrowBorder ? `border: ${paginationArrowBorder};` : ''} 
            ${paginationArrowBorderColor ? `border-color: ${paginationArrowBorderColor};` : ''}
            ${paginationArrowDesktopBorderWidth && paginationArrowDesktopBorder?.top ? `border-width: ${paginationArrowDesktopBorderWidth};` : ''}
            ${paginationArrowDesktopBorderRadiusWidth && paginationArrowDesktopBorderRadius?.top? `border-radius: ${paginationArrowDesktopBorderRadiusWidth};` : ''}

            ${paginationArrowNormalBackgroundType === 'gradient' ? `   
                ${paginationArrowNormalCustomGradientSwitcher && paginationArrowNormalCustomGradientInputValue ? `background: ${paginationArrowNormalCustomGradientInputValue};` : `background: ${paginationArrowNormalGradientColor};`}
            `: `
                ${paginationArrowNormalClassicColor ? `background: ${paginationArrowNormalClassicColor};` : ''}
            `}
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous:hover,
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next:hover{
            ${paginationArrowBorderHoverColor ? `border-color: ${paginationArrowBorderHoverColor};` : ''}

            ${paginationArrowHoverBackgroundType === 'gradient' ? `    
                ${paginationArrowHoverCustomGradientSwitcher && paginationArrowHoverCustomGradientInputValue ? `background: ${paginationArrowHoverCustomGradientInputValue};` : `background: ${paginationArrowHoverGradientColor};`}
            `: `
                ${paginationArrowHoverClassicColor ? `background: ${paginationArrowHoverClassicColor};` : ''}
            `}
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_icon_Wrapper .fb_pagination_previous_icon,
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_icon_Wrapper .fb_pagination_next_icon{
            ${paginationArrowSize?.Desktop ? `width: ${paginationArrowSize?.Desktop}${paginationArrowSizeUnits?.Desktop};` : ''}
            ${paginationArrowSize?.Desktop ? `height: ${paginationArrowSize?.Desktop}${paginationArrowSizeUnits?.Desktop};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_icon_Wrapper .fb_pagination_previous_icon svg,
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_icon_Wrapper .fb_pagination_next_icon svg{
            ${paginationArrowIconColor ? `fill: ${paginationArrowIconColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous:hover .fb_pagination_previous_icon_Wrapper .fb_pagination_previous_icon svg,
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next:hover .fb_pagination_next_icon_Wrapper .fb_pagination_next_icon svg{
            ${paginationArrowIconHoverColor ? `fill: ${paginationArrowIconHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_text,
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_text{
            ${paginationArrowTextGlobalTypoSwitcher?.fontFamily === true && paginationArrowTextGlobalTypographyData?.fontFamily ? `font-family: ${paginationArrowTextGlobalTypographyData?.fontFamily};` : ''}  
            ${paginationArrowTextGlobalTypoSwitcher?.fontSize === true && paginationArrowTextGlobalTypographyData?.fontSize ? `font-size: ${paginationArrowTextGlobalTypographyData?.fontSize};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.fontWeight === true && paginationArrowTextGlobalTypographyData?.fontWeight ? `font-weight: ${paginationArrowTextGlobalTypographyData?.fontWeight};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.fontStyle === true && paginationArrowTextGlobalTypographyData?.fontStyle ? `font-style: ${paginationArrowTextGlobalTypographyData?.fontStyle};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.textTransform === true && paginationArrowTextGlobalTypographyData?.textTransform ? `text-transform: ${paginationArrowTextGlobalTypographyData?.textTransform};` : ''} 
            ${paginationArrowTextGlobalTypoSwitcher?.textDecoration === true && paginationArrowTextGlobalTypographyData?.textDecoration ? `text-decoration: ${paginationArrowTextGlobalTypographyData?.textDecoration};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.letterSpacing === true && paginationArrowTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${paginationArrowTextGlobalTypographyData?.letterSpacing};` : ''}
            ${paginationArrowTextGlobalTypoSwitcher?.lineHeight === true && paginationArrowTextGlobalTypographyData?.lineHeight ? `line-height: ${paginationArrowTextGlobalTypographyData?.lineHeight};` : ''}
            
        	${paginationArrowTextGlobalTypoSwitcher?.fontFamily === false && paginationArrowTextFontFamily && paginationArrowTextFontFamily !== 'Default' ? `font-family: ${paginationArrowTextFontFamily};` : ''}
			${paginationArrowTextGlobalTypoSwitcher?.fontSize === false && paginationArrowTextFontSize?.Desktop ? `font-size: ${paginationArrowTextFontSize?.Desktop}${paginationArrowTextFontSizeUnits?.Desktop};` : ''} 
			${paginationArrowTextGlobalTypoSwitcher?.fontWeight === false && paginationArrowTextFontWeight ? `font-weight: ${paginationArrowTextFontWeight};` : ''}
			${paginationArrowTextGlobalTypoSwitcher?.fontStyle === false && paginationArrowTextFontStyle ? `font-style: ${paginationArrowTextFontStyle};` : ''}  
			${paginationArrowTextGlobalTypoSwitcher?.textTransform === false && paginationArrowTextTransform ? `text-transform: ${paginationArrowTextTransform};` : ''}
			${paginationArrowTextGlobalTypoSwitcher?.textDecoration === false && paginationArrowTextDecoration ? `text-decoration: ${paginationArrowTextDecoration};` : ''} 
			${paginationArrowTextGlobalTypoSwitcher?.letterSpacing === false && paginationArrowTextLetterSpacing?.Desktop ? `letter-spacing: ${paginationArrowTextLetterSpacing?.Desktop}${paginationArrowTextLetterSpacingUnits?.Desktop};` : ''}
			${paginationArrowTextGlobalTypoSwitcher?.lineHeight === false && paginationArrowTextLineHeight?.Desktop ? `line-height: ${paginationArrowTextLineHeight?.Desktop}${paginationArrowTextLineHeightUnits?.Desktop};` : ''}

            ${paginationArrowTextColor ? `color: ${paginationArrowTextColor};` : ''}
        }
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous:hover .fb_pagination_previous_text,
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next:hover .fb_pagination_next_text{ 
            ${paginationArrowTextHoverColor ? `color: ${paginationArrowTextHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination {
            ${paginationBtnGap?.Desktop ? `gap: ${paginationBtnGap?.Desktop}${paginationBtnGapUnits?.Desktop};` : ''}
        }
                
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item {
            ${paginationBtnSize?.Desktop ? `width: ${paginationBtnSize?.Desktop}${paginationBtnSizeUnits?.Desktop};` : ''}  
            ${paginationBtnSize?.Desktop ? `height: ${paginationBtnSize?.Desktop}${paginationBtnSizeUnits?.Desktop};` : ''}

            ${paginationBtnTextGlobalTypoSwitcher?.fontFamily === true && paginationBtnTextGlobalTypographyData?.fontFamily ? `font-family: ${paginationBtnTextGlobalTypographyData?.fontFamily};` : ''}  
            ${paginationBtnTextGlobalTypoSwitcher?.fontSize === true && paginationBtnTextGlobalTypographyData?.fontSize ? `font-size: ${paginationBtnTextGlobalTypographyData?.fontSize};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.fontWeight === true && paginationBtnTextGlobalTypographyData?.fontWeight ? `font-weight: ${paginationBtnTextGlobalTypographyData?.fontWeight};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.fontStyle === true && paginationBtnTextGlobalTypographyData?.fontStyle ? `font-style: ${paginationBtnTextGlobalTypographyData?.fontStyle};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.textTransform === true && paginationBtnTextGlobalTypographyData?.textTransform ? `text-transform: ${paginationBtnTextGlobalTypographyData?.textTransform};` : ''} 
            ${paginationBtnTextGlobalTypoSwitcher?.textDecoration === true && paginationBtnTextGlobalTypographyData?.textDecoration ? `text-decoration: ${paginationBtnTextGlobalTypographyData?.textDecoration};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.letterSpacing === true && paginationBtnTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${paginationBtnTextGlobalTypographyData?.letterSpacing};` : ''}
            ${paginationBtnTextGlobalTypoSwitcher?.lineHeight === true && paginationBtnTextGlobalTypographyData?.lineHeight ? `line-height: ${paginationBtnTextGlobalTypographyData?.lineHeight};` : ''}
            
        	${paginationBtnTextGlobalTypoSwitcher?.fontFamily === false && paginationBtnTextFontFamily && paginationBtnTextFontFamily !== 'Default' ? `font-family: ${paginationBtnTextFontFamily};` : ''}
			${paginationBtnTextGlobalTypoSwitcher?.fontSize === false && paginationBtnTextFontSize?.Desktop ? `font-size: ${paginationBtnTextFontSize?.Desktop}${paginationBtnTextFontSizeUnits?.Desktop};` : ''} 
			${paginationBtnTextGlobalTypoSwitcher?.fontWeight === false && paginationBtnTextFontWeight ? `font-weight: ${paginationBtnTextFontWeight};` : ''}
			${paginationBtnTextGlobalTypoSwitcher?.fontStyle === false && paginationBtnTextFontStyle ? `font-style: ${paginationBtnTextFontStyle};` : ''}  
			${paginationBtnTextGlobalTypoSwitcher?.textTransform === false && paginationBtnTextTransform ? `text-transform: ${paginationBtnTextTransform};` : ''}
			${paginationBtnTextGlobalTypoSwitcher?.textDecoration === false && paginationBtnTextDecoration ? `text-decoration: ${paginationBtnTextDecoration};` : ''} 
			${paginationBtnTextGlobalTypoSwitcher?.letterSpacing === false && paginationBtnTextLetterSpacing?.Desktop ? `letter-spacing: ${paginationBtnTextLetterSpacing?.Desktop}${paginationBtnTextLetterSpacingUnits?.Desktop};` : ''}
			${paginationBtnTextGlobalTypoSwitcher?.lineHeight === false && paginationBtnTextLineHeight?.Desktop ? `line-height: ${paginationBtnTextLineHeight?.Desktop}${paginationBtnTextLineHeightUnits?.Desktop};` : ''}

            ${paginationBtnTextColor ? `color: ${paginationBtnTextColor};` : ''}

            ${paginationBtnBorder ? `border: ${paginationBtnBorder};` : ''} 
            ${paginationBtnBorderColor ? `border-color: ${paginationBtnBorderColor};` : ''}
            ${paginationBtnDesktopBorderWidth && paginationBtnDesktopBorder?.top ? `border-width: ${paginationBtnDesktopBorderWidth};` : ''}
            ${paginationBtnDesktopBorderRadiusWidth && paginationBtnDesktopBorderRadius?.top? `border-radius: ${paginationBtnDesktopBorderRadiusWidth};` : ''}

            ${paginationBtnNormalBackgroundType === 'gradient' ? `   
                ${paginationBtnNormalCustomGradientSwitcher && paginationBtnNormalCustomGradientInputValue ? `background: ${paginationBtnNormalCustomGradientInputValue};` : `background: ${paginationBtnNormalGradientColor};`}
            `: `
                ${paginationBtnNormalClassicColor ? `background: ${paginationBtnNormalClassicColor};` : ''}
            `}
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item:hover {
            ${paginationBtnTextHoverColor ? `color: ${paginationBtnTextHoverColor};` : ''}
            ${paginationBtnHoverBackgroundType === 'gradient' ? `    
                ${paginationBtnHoverCustomGradientSwitcher && paginationBtnHoverCustomGradientInputValue ? `background: ${paginationBtnHoverCustomGradientInputValue};` : `background: ${paginationBtnHoverGradientColor};`}
            `: `
                ${paginationBtnHoverClassicColor ? `background: ${paginationBtnHoverClassicColor};` : ''}
            `}
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item.active { 
            ${paginationActiveBtnTextColor ? `color: ${paginationActiveBtnTextColor};` : ''} 
            ${paginationActiveBtnNormalBackgroundType === 'gradient' ? `      
                ${paginationActiveBtnNormalCustomGradientSwitcher && paginationActiveBtnNormalCustomGradientInputValue ? `background: ${paginationActiveBtnNormalCustomGradientInputValue};` : `background: ${paginationActiveBtnNormalGradientColor};`}
            `: `
                ${paginationActiveBtnNormalClassicColor ? `background: ${paginationActiveBtnNormalClassicColor};` : ''} 
            `}
        }
        .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item.active:hover { 
            ${paginationActiveBtnTextHoverColor ? `color: ${paginationActiveBtnTextHoverColor};` : ''} 
            ${paginationActiveBtnHoverBackgroundType === 'gradient' ? `    
                ${paginationActiveBtnHoverCustomGradientSwitcher && paginationActiveBtnHoverCustomGradientInputValue ? `background: ${paginationActiveBtnHoverCustomGradientInputValue};` : `background: ${paginationActiveBtnHoverGradientColor};`}
            `: `
                ${paginationActiveBtnHoverClassicColor ? `background: ${paginationActiveBtnHoverClassicColor};` : ''} 
            `}
        }


        .${blockId}.fb_post_grid_container.list-layout {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: ${listRowGap?.Desktop}${listGapUnits?.Desktop}; 
        }
        .${blockId}.fb_post_grid_container.list-layout .fb_post_grid_wrapper {
            display: flex;
            width: 100% !important;
            height: 100% !important;
            overflow: hidden;
            text-decoration: none;
        }
        .${blockId}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper {
            margin-right: ${listImageSpacing?.Desktop}${listGapUnits?.Desktop};
            max-width: 50%;
            height: fit-content;
            overflow: hidden;
            display: inline-block;
            position: relative;
        }

        .${blockId}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper img {
            max-width: 100% ;
            object-fit: cover;
        }
        .${blockId}.fb_post_grid_container.list-layout .fb_post_grid_content_wrapper {
            flex: 1;
            align-self: center;
            display: block;
            text-align: left;
        }
        .${blockId} .loading.post {
            display: grid;
            grid-template-columns: repeat(${gridColumnsPerSection?.Desktop}, 1fr);
            row-gap: ${gridRowGap?.Desktop}${gridGapUnits?.Desktop}; 
            column-gap: ${gridColumnGap?.Desktop}${gridGapUnits?.Desktop};
            width: 100%;
            height: auto;
        }

        .${blockId} .post-card.skeleton .loading:before {
            background: -webkit-gradient(linear, left top, right top, color-stop(8%, ${postGridSkeletonBgColor}), color-stop(30%, ${postGridSkeletonHighlightBgColor}), color-stop(51%, ${postGridSkeletonBgColor}));
            background: -o-linear-gradient(to right, ${postGridSkeletonBgColor} 8%, ${postGridSkeletonHighlightBgColor} 30%, ${postGridSkeletonBgColor} 51%);
            background: linear-gradient(to right, ${postGridSkeletonBgColor} 8%, ${postGridSkeletonHighlightBgColor} 30%, ${postGridSkeletonBgColor} 51%);
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper {
            ${postGridNormalBackgroundType === 'gradient' ? `  
                ${postGridNormalCustomGradientSwitcher && postGridNormalCustomGradientInputValue ? `background: ${postGridNormalCustomGradientInputValue};` : `background: ${postGridNormalGradientColor};`}
            `: `
                ${postGridNormalClassicColor ? `background: ${postGridNormalClassicColor};` : ''}
            `}
			${postGridPaddingDesktopWidth && postGridPaddingDesktop?.top ? `padding: ${postGridPaddingDesktopWidth};` : ''}
			${postGridMarginDesktopWidth && postGridMarginDesktop?.top ? `margin: ${postGridMarginDesktopWidth};` : ''}
			${postGridBorder ? `border: ${postGridBorder};` : ''}
			${postGridBorderDesktopWidth && postGridBorderDesktop?.top? `border-width: ${postGridBorderDesktopWidth};` : ''}
			${postGridBorderRadiusDesktopWidth && postGridBorderRadiusDesktop?.top? `border-radius: ${postGridBorderRadiusDesktopWidth};` : ''}
			${postGridBorderColor ? `border-color: ${postGridBorderColor};` : ''}
            ${postGridBoxShadowCssValue ? `box-shadow: ${postGridBoxShadowCssValue};` : ''}
			transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper:hover {
            ${postGridHoverBackgroundType === 'gradient' ? `  
                ${postGridHoverCustomGradientSwitcher && postGridHoverCustomGradientInputValue ? `background: ${postGridHoverCustomGradientInputValue};` : `background: ${postGridHoverGradientColor};`}
            `: `
                ${postGridHoverClassicColor ? `background: ${postGridHoverClassicColor};` : ''}
            `}
            ${postGridBorderHoverColor ? `border-color: ${postGridBorderHoverColor};` : ''}
            ${postGridBoxShadowHoverCssValue ? `box-shadow: ${postGridBoxShadowHoverCssValue};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image a {
            display: flex;
            ${postImageMarginDesktopWidth && postImageMarginDesktop?.top? `margin: ${postImageMarginDesktopWidth};` : ''}
        }
        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image img {
            ${postImageBorder ? `border: ${postImageBorder};` : ''}
            ${postImageDesktopBorderWidth && postImageDesktopBorder?.top? `border-width: ${postImageDesktopBorderWidth};` : ''}
            ${postImageBorderColor ? `border-color: ${postImageBorderColor};` : ''}
            ${postImageDesktopBorderRadiusWidth && postImageDesktopBorderRadius?.top? `border-radius: ${postImageDesktopBorderRadiusWidth};` : ''}
            ${postImageWidth?.Desktop ? `width: ${postImageWidth?.Desktop}${postImageWidthUnits?.Desktop};` : ''}
            height: clamp(
                ${postImageHeight?.Desktop ? `${postImageHeight?.Desktop - 3}${postImageHeightUnits?.Desktop}` : '18.75rem'}, 
                ${postImageHeight?.Desktop ? `calc(${postImageHeight?.Desktop}${postImageHeightUnits?.Desktop} + 5vw)` : '25vw'}, 
                ${postImageHeight?.Desktop ? `${postImageHeight?.Desktop}${postImageHeightUnits?.Desktop}` : '21.875rem'}
            );
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image:hover img {
            ${postImageBorderHoverColor ? `border-color: ${postImageBorderHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title {
        	${postTitleMarginDesktopWidth && postTitleMarginDesktop?.top? `margin: ${postTitleMarginDesktopWidth};` : ''}
            ${postTitleColor ? `color: ${postTitleColor};` : ''}

            ${postTitleGlobalTypoSwitcher?.fontFamily === true && postTitleGlobalTypographyData?.fontFamily ? `font-family: ${postTitleGlobalTypographyData?.fontFamily};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontSize === true && postTitleGlobalTypographyData?.fontSize ? `font-size: ${postTitleGlobalTypographyData?.fontSize};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontWeight === true && postTitleGlobalTypographyData?.fontWeight ? `font-weight: ${postTitleGlobalTypographyData?.fontWeight};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontStyle === true && postTitleGlobalTypographyData?.fontStyle ? `font-style: ${postTitleGlobalTypographyData?.fontStyle};` : ''}
            ${postTitleGlobalTypoSwitcher?.textTransform === true && postTitleGlobalTypographyData?.textTransform ? `text-transform: ${postTitleGlobalTypographyData?.textTransform};` : ''}
            ${postTitleGlobalTypoSwitcher?.textDecoration === true && postTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${postTitleGlobalTypographyData?.textDecoration};` : ''}
            ${postTitleGlobalTypoSwitcher?.letterSpacing === true && postTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${postTitleGlobalTypoSwitcher?.lineHeight === true && postTitleGlobalTypographyData?.lineHeight ? `line-height: ${postTitleGlobalTypographyData?.lineHeight};` : ''}

			${postTitleGlobalTypoSwitcher?.fontFamily === false && postTitleFontFamily ? `font-family: ${postTitleFontFamily};` : ''}
			${postTitleGlobalTypoSwitcher?.fontSize === false && postTitleFontSize?.Desktop ? `font-size: ${postTitleFontSize?.Desktop}${postTitleFontSizeUnits?.Desktop};` : ''}
			${postTitleGlobalTypoSwitcher?.fontWeight === false && postTitleFontWeight ? `font-weight: ${postTitleFontWeight};` : ''}
			${postTitleGlobalTypoSwitcher?.fontStyle === false && postTitleFontStyle ? `font-style: ${postTitleFontStyle};` : ''}
			${postTitleGlobalTypoSwitcher?.textTransform === false && postTitleTextTransform ? `text-transform: ${postTitleTextTransform};` : ''}
			${postTitleGlobalTypoSwitcher?.textDecoration === false && postTitleTextDecoration ? `text-decoration: ${postTitleTextDecoration};` : ''}
			${postTitleGlobalTypoSwitcher?.letterSpacing === false && postTitleLetterSpacing?.Desktop ? `letter-spacing: ${postTitleLetterSpacing?.Desktop}${postTitleLetterSpacingUnits?.Desktop};` : ''}
			${postTitleGlobalTypoSwitcher?.lineHeight === false && postTitleLineHeight?.Desktop ? `line-height: ${postTitleLineHeight?.Desktop}${postTitleLineHeightUnits?.Desktop};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title:hover {
            ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a {
        	${postTitleColor ? `color: ${postTitleColor};` : ''}
            ${postTitleMarginDesktopWidth && postTitleMarginDesktop?.top? `margin: ${postTitleMarginDesktopWidth};` : ''}

			${postTitleGlobalTypoSwitcher?.fontFamily === true && postTitleGlobalTypographyData?.fontFamily ? `font-family: ${postTitleGlobalTypographyData?.fontFamily};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontSize === true && postTitleGlobalTypographyData?.fontSize ? `font-size: ${postTitleGlobalTypographyData?.fontSize};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontWeight === true && postTitleGlobalTypographyData?.fontWeight ? `font-weight: ${postTitleGlobalTypographyData?.fontWeight};` : ''}
            ${postTitleGlobalTypoSwitcher?.fontStyle === true && postTitleGlobalTypographyData?.fontStyle ? `font-style: ${postTitleGlobalTypographyData?.fontStyle};` : ''}
            ${postTitleGlobalTypoSwitcher?.textTransform === true && postTitleGlobalTypographyData?.textTransform ? `text-transform: ${postTitleGlobalTypographyData?.textTransform};` : ''}
            ${postTitleGlobalTypoSwitcher?.textDecoration === true && postTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${postTitleGlobalTypographyData?.textDecoration};` : ''}
            ${postTitleGlobalTypoSwitcher?.letterSpacing === true && postTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${postTitleGlobalTypoSwitcher?.lineHeight === true && postTitleGlobalTypographyData?.lineHeight ? `line-height: ${postTitleGlobalTypographyData?.lineHeight};` : ''}

			${postTitleGlobalTypoSwitcher?.fontFamily === false && postTitleFontFamily ? `font-family: ${postTitleFontFamily};` : ''}
			${postTitleGlobalTypoSwitcher?.fontSize === false && postTitleFontSize?.Desktop ? `font-size: ${postTitleFontSize?.Desktop}${postTitleFontSizeUnits?.Desktop};` : ''}
			${postTitleGlobalTypoSwitcher?.fontWeight === false && postTitleFontWeight ? `font-weight: ${postTitleFontWeight};` : ''}
			${postTitleGlobalTypoSwitcher?.fontStyle === false && postTitleFontStyle ? `font-style: ${postTitleFontStyle};` : ''}
			${postTitleGlobalTypoSwitcher?.textTransform === false && postTitleTextTransform ? `text-transform: ${postTitleTextTransform};` : ''}
			${postTitleGlobalTypoSwitcher?.textDecoration === false && postTitleTextDecoration ? `text-decoration: ${postTitleTextDecoration};` : ''}
			${postTitleGlobalTypoSwitcher?.letterSpacing === false && postTitleLetterSpacing?.Desktop ? `letter-spacing: ${postTitleLetterSpacing?.Desktop}${postTitleLetterSpacingUnits?.Desktop};` : ''}
			${postTitleGlobalTypoSwitcher?.lineHeight === false && postTitleLineHeight?.Desktop ? `line-height: ${postTitleLineHeight?.Desktop}${postTitleLineHeightUnits?.Desktop};` : ''}
        }
        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a:hover {
            ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc {
        	${postDescriptionColor ? `color: ${postDescriptionColor};` : ''}

            ${postDescriptionGlobalTypoSwitcher?.fontFamily === true && postDescriptionGlobalTypographyData?.fontFamily ? `font-family: ${postDescriptionGlobalTypographyData?.fontFamily};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.fontSize === true && postDescriptionGlobalTypographyData?.fontSize ? `font-size: ${postDescriptionGlobalTypographyData?.fontSize};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.fontWeight === true && postDescriptionGlobalTypographyData?.fontWeight ? `font-weight: ${postDescriptionGlobalTypographyData?.fontWeight};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.fontStyle === true && postDescriptionGlobalTypographyData?.fontStyle ? `font-style: ${postDescriptionGlobalTypographyData?.fontStyle};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.textTransform === true && postDescriptionGlobalTypographyData?.textTransform ? `text-transform: ${postDescriptionGlobalTypographyData?.textTransform};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.textDecoration === true && postDescriptionGlobalTypographyData?.textDecoration ? `text-decoration: ${postDescriptionGlobalTypographyData?.textDecoration};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.letterSpacing === true && postDescriptionGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postDescriptionGlobalTypographyData?.letterSpacing};` : ''}
            ${postDescriptionGlobalTypoSwitcher?.lineHeight === true && postDescriptionGlobalTypographyData?.lineHeight ? `line-height: ${postDescriptionGlobalTypographyData?.lineHeight};` : ''}

			${postDescriptionGlobalTypoSwitcher?.fontFamily === false && postDescriptionFontFamily ? `font-family: ${postDescriptionFontFamily};` : ''}
			${postDescriptionGlobalTypoSwitcher?.fontSize === false && postDescriptionFontSize?.Desktop ? `font-size: ${postDescriptionFontSize?.Desktop}${postDescriptionFontSizeUnits?.Desktop};` : ''}
			${postDescriptionGlobalTypoSwitcher?.fontWeight === false && postDescriptionFontWeight ? `font-weight: ${postDescriptionFontWeight};` : ''}
			${postDescriptionGlobalTypoSwitcher?.fontStyle === false && postDescriptionFontStyle ? `font-style: ${postDescriptionFontStyle};` : ''}
			${postDescriptionGlobalTypoSwitcher?.textTransform === false && postDescriptionTextTransform ? `text-transform: ${postDescriptionTextTransform};` : ''}
			${postDescriptionGlobalTypoSwitcher?.textDecoration === false && postDescriptionTextDecoration ? `text-decoration: ${postDescriptionTextDecoration};` : ''}
			${postDescriptionGlobalTypoSwitcher?.letterSpacing === false && postDescriptionLetterSpacing?.Desktop ? `letter-spacing: ${postDescriptionLetterSpacing?.Desktop}${postDescriptionLetterSpacingUnits?.Desktop};` : ''}
			${postDescriptionGlobalTypoSwitcher?.lineHeight === false && postDescriptionLineHeight?.Desktop ? `line-height: ${postDescriptionLineHeight?.Desktop}${postDescriptionLineHeightUnits?.Desktop};` : ''}
			${postDescriptionMarginDesktopWidth && postDescriptionMarginDesktop?.top? `margin: ${postDescriptionMarginDesktopWidth};` : ''}
        }
        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc:hover {
            ${postDescriptionHoverColor ? `color: ${postDescriptionHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_categories {
            ${postCategoryMarginDesktopWidth && postCategoryMarginDesktop?.top? `margin: ${postCategoryMarginDesktopWidth};` : ''}
            ${postCategoryGap?.Desktop ? `gap: ${postCategoryGap?.Desktop}${postCategoryGapUnits?.Desktop};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_categories a,
        .${blockId}.fb_post_grid_container .fb_post_grid_categories .fb_post_grid_category_name {
            ${postCategoryColor ? `color: ${postCategoryColor};` : ''}
            ${postCategoryBgColor ? `background-color: ${postCategoryBgColor};` : ''}

            ${postCategoryGlobalTypoSwitcher?.fontFamily === true && postCategoryGlobalTypographyData?.fontFamily ? `font-family: ${postCategoryGlobalTypographyData?.fontFamily};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontSize === true && postCategoryGlobalTypographyData?.fontSize ? `font-size: ${postCategoryGlobalTypographyData?.fontSize};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontWeight === true && postCategoryGlobalTypographyData?.fontWeight ? `font-weight: ${postCategoryGlobalTypographyData?.fontWeight};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontStyle === true && postCategoryGlobalTypographyData?.fontStyle ? `font-style: ${postCategoryGlobalTypographyData?.fontStyle};` : ''}
            ${postCategoryGlobalTypoSwitcher?.textTransform === true && postCategoryGlobalTypographyData?.textTransform ? `text-transform: ${postCategoryGlobalTypographyData?.textTransform};` : ''}
            ${postCategoryGlobalTypoSwitcher?.textDecoration === true && postCategoryGlobalTypographyData?.textDecoration ? `text-decoration: ${postCategoryGlobalTypographyData?.textDecoration};` : ''}
            ${postCategoryGlobalTypoSwitcher?.letterSpacing === true && postCategoryGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postCategoryGlobalTypographyData?.letterSpacing};` : ''}
            ${postCategoryGlobalTypoSwitcher?.lineHeight === true && postCategoryGlobalTypographyData?.lineHeight ? `line-height: ${postCategoryGlobalTypographyData?.lineHeight};` : ''}

            ${postCategoryGlobalTypoSwitcher?.fontFamily === false && postCategoryFontFamily ? `font-family: ${postCategoryFontFamily};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontSize === false && postCategoryFontSize?.Desktop ? `font-size: ${postCategoryFontSize?.Desktop}${postCategoryFontSizeUnits?.Desktop};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontWeight === false && postCategoryFontWeight ? `font-weight: ${postCategoryFontWeight};` : ''}
            ${postCategoryGlobalTypoSwitcher?.fontStyle === false && postCategoryFontStyle ? `font-style: ${postCategoryFontStyle};` : ''}
            ${postCategoryGlobalTypoSwitcher?.textTransform === false && postCategoryTextTransform ? `text-transform: ${postCategoryTextTransform};` : ''}
            ${postCategoryGlobalTypoSwitcher?.textDecoration === false && postCategoryTextDecoration ? `text-decoration: ${postCategoryTextDecoration};` : ''}
            ${postCategoryGlobalTypoSwitcher?.letterSpacing === false && postCategoryLetterSpacing?.Desktop ? `letter-spacing: ${postCategoryLetterSpacing?.Desktop}${postCategoryLetterSpacingUnits?.Desktop};` : ''}
            ${postCategoryGlobalTypoSwitcher?.lineHeight === false && postCategoryLineHeight?.Desktop ? `line-height: ${postCategoryLineHeight?.Desktop}${postCategoryLineHeightUnits?.Desktop};` : ''}
            ${postCategoryPaddingDesktopWidth && postCategoryPaddingDesktop?.top? `padding: ${postCategoryPaddingDesktopWidth};` : ''}
            ${postCategoryBorder ? `border: ${postCategoryBorder};` : ''}
            ${postCategoryBorderColor ? `border-color: ${postCategoryBorderColor};` : ''}
            ${postCategoryBorderDesktopWidth && postCategoryDesktopBorder?.top? `border-width: ${postCategoryBorderDesktopWidth};` : ''}
            ${postCategoryBorderRadiusDesktopWidth && postCategoryDesktopBorderRadius?.top? `border-radius: ${postCategoryBorderRadiusDesktopWidth};` : ''}
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_categories a:hover,
        .${blockId}.fb_post_grid_container .fb_post_grid_categories .fb_post_grid_category_name:hover {
            ${postCategoryHoverColor ? `color: ${postCategoryHoverColor};` : ''}
            ${postCategoryBgHoverColor ? `background-color: ${postCategoryBgHoverColor};` : ''}
            ${postCategoryBorderHoverColor ? `border-color: ${postCategoryBorderHoverColor};` : ''}
        }


        .${blockId}.fb_post_grid_container .fb_post_grid_tags {
            ${postTagMarginDesktopWidth && postTagMarginDesktop?.top ? `margin: ${postTagMarginDesktopWidth};` : ''}
            ${postTagGap?.Desktop ? `gap: ${postTagGap?.Desktop}${postTagGapUnits?.Desktop};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_tags a,
        .${blockId}.fb_post_grid_container .fb_post_grid_tags .fb_post_grid_tag_name {
            ${postTagColor ? `color: ${postTagColor};` : ''}
            ${postTagBgColor ? `background-color: ${postTagBgColor};` : ''}

            ${postTagGlobalTypoSwitcher?.fontFamily === true && postTagGlobalTypographyData?.fontFamily ? `font-family: ${postTagGlobalTypographyData?.fontFamily};` : ''}
            ${postTagGlobalTypoSwitcher?.fontSize === true && postTagGlobalTypographyData?.fontSize ? `font-size: ${postTagGlobalTypographyData?.fontSize};` : ''}
            ${postTagGlobalTypoSwitcher?.fontWeight === true && postTagGlobalTypographyData?.fontWeight ? `font-weight: ${postTagGlobalTypographyData?.fontWeight};` : ''}
            ${postTagGlobalTypoSwitcher?.fontStyle === true && postTagGlobalTypographyData?.fontStyle ? `font-style: ${postTagGlobalTypographyData?.fontStyle};` : ''}
            ${postTagGlobalTypoSwitcher?.textTransform === true && postTagGlobalTypographyData?.textTransform ? `text-transform: ${postTagGlobalTypographyData?.textTransform};` : ''}
            ${postTagGlobalTypoSwitcher?.textDecoration === true && postTagGlobalTypographyData?.textDecoration ? `text-decoration: ${postTagGlobalTypographyData?.textDecoration};` : ''}
            ${postTagGlobalTypoSwitcher?.letterSpacing === true && postTagGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postTagGlobalTypographyData?.letterSpacing};` : ''}
            ${postTagGlobalTypoSwitcher?.lineHeight === true && postTagGlobalTypographyData?.lineHeight ? `line-height: ${postTagGlobalTypographyData?.lineHeight};` : ''}

            ${postTagGlobalTypoSwitcher?.fontFamily === false && postTagFontFamily ? `font-family: ${postTagFontFamily};` : ''}
            ${postTagGlobalTypoSwitcher?.fontSize === false && postTagFontSize?.Desktop ? `font-size: ${postTagFontSize?.Desktop}${postTagFontSizeUnits?.Desktop};` : ''}
            ${postTagGlobalTypoSwitcher?.fontWeight === false && postTagFontWeight ? `font-weight: ${postTagFontWeight};` : ''}
            ${postTagGlobalTypoSwitcher?.fontStyle === false && postTagFontStyle ? `font-style: ${postTagFontStyle};` : ''}
            ${postTagGlobalTypoSwitcher?.textTransform === false && postTagTextTransform ? `text-transform: ${postTagTextTransform};` : ''}
            ${postTagGlobalTypoSwitcher?.textDecoration === false && postTagTextDecoration ? `text-decoration: ${postTagTextDecoration};` : ''}
            ${postTagGlobalTypoSwitcher?.letterSpacing === false && postTagLetterSpacing?.Desktop ? `letter-spacing: ${postTagLetterSpacing?.Desktop}${postTagLetterSpacingUnits?.Desktop};` : ''}
            ${postTagGlobalTypoSwitcher?.lineHeight === false && postTagLineHeight?.Desktop ? `line-height: ${postTagLineHeight?.Desktop}${postTagLineHeightUnits?.Desktop};` : ''}
            ${postTagPaddingDesktopWidth && postTagPaddingDesktop?.top ? `padding: ${postTagPaddingDesktopWidth};` : ''}
            ${postTagBorder ? `border: ${postTagBorder};` : ''}
            ${postTagBorderColor ? `border-color: ${postTagBorderColor};` : ''}
            ${postTagBorderDesktopWidth && postTagDesktopBorder?.top ? `border-width: ${postTagBorderDesktopWidth};` : ''}
            ${postTagBorderRadiusDesktopWidth && postTagDesktopBorderRadius?.top ? `border-radius: ${postTagBorderRadiusDesktopWidth};` : ''}
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_tags a:hover,
        .${blockId}.fb_post_grid_container .fb_post_grid_tags .fb_post_grid_tag_name:hover {
            ${postTagHoverColor ? `color: ${postTagHoverColor};` : ''}
            ${postTagBgHoverColor ? `background-color: ${postTagBgHoverColor};` : ''}
            ${postTagBorderHoverColor ? `border-color: ${postTagBorderHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_author {
            ${postAuthorMarginDesktopWidth && postAuthorMarginDesktop?.top ? `margin: ${postAuthorMarginDesktopWidth};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_author,
        .${blockId}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info,
        .${blockId}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info_name {
            ${postAuthorGap?.Desktop ? `gap: ${postAuthorGap?.Desktop}${postAuthorGapUnits?.Desktop};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_avatar {
            ${postAuthorAvatarWidth?.Desktop ? `width: ${postAuthorAvatarWidth?.Desktop}${postAuthorAvatarWidthUnits?.Desktop};` : ''}
            ${postAuthorAvatarWidth?.Desktop ? `height: ${postAuthorAvatarWidth?.Desktop}${postAuthorAvatarWidthUnits?.Desktop};` : ''}
            ${postAuthorAvatarBorder ? `border: ${postAuthorAvatarBorder};` : ''}
            ${postAuthorAvatarBorderColor ? `border-color: ${postAuthorAvatarBorderColor};` : ''}
            ${postAuthorAvatarBorderDesktopWidth && postAuthorAvatarDesktopBorder?.top? `border-width: ${postAuthorAvatarBorderDesktopWidth};` : ''}
            ${postAuthorAvatarBorderRadiusDesktopWidth && postAuthorAvatarDesktopBorderRadius?.top ? `border-radius: ${postAuthorAvatarBorderRadiusDesktopWidth};` : ''}
        }
        .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by,
        .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
        .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
            ${postAuthorGlobalTypoSwitcher?.fontFamily === true && postAuthorGlobalTypographyData?.fontFamily ? `font-family: ${postAuthorGlobalTypographyData?.fontFamily};` : ''}
            ${postAuthorGlobalTypoSwitcher?.fontSize === true && postAuthorGlobalTypographyData?.fontSize ? `font-size: ${postAuthorGlobalTypographyData?.fontSize};` : ''}
            ${postAuthorGlobalTypoSwitcher?.fontWeight === true && postAuthorGlobalTypographyData?.fontWeight ? `font-weight: ${postAuthorGlobalTypographyData?.fontWeight};` : ''}
            ${postAuthorGlobalTypoSwitcher?.fontStyle === true && postAuthorGlobalTypographyData?.fontStyle ? `font-style: ${postAuthorGlobalTypographyData?.fontStyle};` : ''}
            ${postAuthorGlobalTypoSwitcher?.textTransform === true && postAuthorGlobalTypographyData?.textTransform ? `text-transform: ${postAuthorGlobalTypographyData?.textTransform};` : ''}
            ${postAuthorGlobalTypoSwitcher?.textDecoration === true && postAuthorGlobalTypographyData?.textDecoration ? `text-decoration: ${postAuthorGlobalTypographyData?.textDecoration};` : ''}
            ${postAuthorGlobalTypoSwitcher?.letterSpacing === true && postAuthorGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postAuthorGlobalTypographyData?.letterSpacing};` : ''}
            ${postAuthorGlobalTypoSwitcher?.lineHeight === true && postAuthorGlobalTypographyData?.lineHeight ? `line-height: ${postAuthorGlobalTypographyData?.lineHeight};` : ''}

            ${postAuthorGlobalTypoSwitcher?.fontFamily === false && postAuthorFontFamily ? `font-family: ${postAuthorFontFamily};` : ''}
            ${postAuthorGlobalTypoSwitcher?.fontSize === false && postAuthorFontSize?.Desktop ? `font-size: ${postAuthorFontSize?.Desktop}${postAuthorFontSizeUnits?.Desktop};` : ''} 
            ${postAuthorGlobalTypoSwitcher?.fontWeight === false && postAuthorFontWeight ? `font-weight: ${postAuthorFontWeight};` : ''}
            ${postAuthorGlobalTypoSwitcher?.fontStyle === false && postAuthorFontStyle ? `font-style: ${postAuthorFontStyle};` : ''}
            ${postAuthorGlobalTypoSwitcher?.textTransform === false && postAuthorTextTransform ? `text-transform: ${postAuthorTextTransform};` : ''}
            ${postAuthorGlobalTypoSwitcher?.textDecoration === false && postAuthorTextDecoration ? `text-decoration: ${postAuthorTextDecoration};` : ''}
            ${postAuthorGlobalTypoSwitcher?.letterSpacing === false && postAuthorLetterSpacing?.Desktop ? `letter-spacing: ${postAuthorLetterSpacing?.Desktop}${postAuthorLetterSpacingUnits?.Desktop};` : ''}
            ${postAuthorGlobalTypoSwitcher?.lineHeight === false && postAuthorLineHeight?.Desktop ? `line-height: ${postAuthorLineHeight?.Desktop}${postAuthorLineHeightUnits?.Desktop};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by {
            ${postAuthorPrefixColorSwitcher ? `color: ${postAuthorPrefixColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by:hover {
            ${postAuthorPrefixHoverColor ? `color: ${postAuthorPrefixHoverColor};` : ''}
        }
        .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
        .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
            ${postAuthorColor ? `color: ${postAuthorColor};` : ''}
        }
        .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name:hover,
        .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a:hover {
            ${postAuthorHoverColor ? `color: ${postAuthorHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_date {
            ${postDateColor ? `color: ${postDateColor};` : ''}

            ${postDateGlobalTypoSwitcher?.fontFamily === true && postDateGlobalTypographyData?.fontFamily ? `font-family: ${postDateGlobalTypographyData?.fontFamily};` : ''}
            ${postDateGlobalTypoSwitcher?.fontSize === true && postDateGlobalTypographyData?.fontSize ? `font-size: ${postDateGlobalTypographyData?.fontSize};` : ''}
            ${postDateGlobalTypoSwitcher?.fontWeight === true && postDateGlobalTypographyData?.fontWeight ? `font-weight: ${postDateGlobalTypographyData?.fontWeight};` : ''}
            ${postDateGlobalTypoSwitcher?.fontStyle === true && postDateGlobalTypographyData?.fontStyle ? `font-style: ${postDateGlobalTypographyData?.fontStyle};` : ''}
            ${postDateGlobalTypoSwitcher?.textTransform === true && postDateGlobalTypographyData?.textTransform ? `text-transform: ${postDateGlobalTypographyData?.textTransform};` : ''}
            ${postDateGlobalTypoSwitcher?.textDecoration === true && postDateGlobalTypographyData?.textDecoration ? `text-decoration: ${postDateGlobalTypographyData?.textDecoration};` : ''}
            ${postDateGlobalTypoSwitcher?.letterSpacing === true && postDateGlobalTypographyData?.letterSpacing ? `letter-spacing: ${postDateGlobalTypographyData?.letterSpacing};` : ''}
            ${postDateGlobalTypoSwitcher?.lineHeight === true && postDateGlobalTypographyData?.lineHeight ? `line-height: ${postDateGlobalTypographyData?.lineHeight};` : ''}

            ${postDateGlobalTypoSwitcher?.fontFamily === false && postDateFontFamily ? `font-family: ${postDateFontFamily};` : ''}
            ${postDateGlobalTypoSwitcher?.fontSize === false && postDateFontSize?.Desktop ? `font-size: ${postDateFontSize?.Desktop}${postDateFontSizeUnits?.Desktop};` : ''} 
            ${postDateGlobalTypoSwitcher?.fontWeight === false && postDateFontWeight ? `font-weight: ${postDateFontWeight};` : ''}
            ${postDateGlobalTypoSwitcher?.fontStyle === false && postDateFontStyle ? `font-style: ${postDateFontStyle};` : ''}
            ${postDateGlobalTypoSwitcher?.textTransform === false && postDateTextTransform ? `text-transform: ${postDateTextTransform};` : ''}
            ${postDateGlobalTypoSwitcher?.textDecoration === false && postDateTextDecoration ? `text-decoration: ${postDateTextDecoration};` : ''}
            ${postDateGlobalTypoSwitcher?.letterSpacing === false && postDateLetterSpacing?.Desktop ? `letter-spacing: ${postDateLetterSpacing?.Desktop}${postDateLetterSpacingUnits?.Desktop};` : ''}
            ${postDateGlobalTypoSwitcher?.lineHeight === false && postDateLineHeight?.Desktop ? `line-height: ${postDateLineHeight?.Desktop}${postDateLineHeightUnits?.Desktop};` : ''}
        }
        .${blockId}.fb_post_grid_container .fb_post_grid_date:hover {
            ${postDateHoverColor ? `color: ${postDateHoverColor};` : ''}
        }

        .${blockId} .fb_post_grid_read_more_button {
			${buttonGlobalTypoSwitcher?.fontFamily === true && buttonGlobalTypographyData?.fontFamily ? `font-family: ${buttonGlobalTypographyData?.fontFamily};` : ''}
			${buttonGlobalTypoSwitcher?.fontSize === true && buttonGlobalTypographyData?.fontSize ? `font-size: ${buttonGlobalTypographyData?.fontSize};` : ''}
			${buttonGlobalTypoSwitcher?.fontWeight === true && buttonGlobalTypographyData?.fontWeight ? `font-weight: ${buttonGlobalTypographyData?.fontWeight};` : ''}
			${buttonGlobalTypoSwitcher?.fontStyle === true && buttonGlobalTypographyData?.fontStyle ? `font-style: ${buttonGlobalTypographyData?.fontStyle};` : ''}
			${buttonGlobalTypoSwitcher?.textTransform === true && buttonGlobalTypographyData?.textTransform ? `text-transform: ${buttonGlobalTypographyData?.textTransform};` : ''}
			${buttonGlobalTypoSwitcher?.textDecoration === true && buttonGlobalTypographyData?.textDecoration ? `text-decoration: ${buttonGlobalTypographyData?.textDecoration};` : ''}
			${buttonGlobalTypoSwitcher?.letterSpacing === true && buttonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${buttonGlobalTypographyData?.letterSpacing};` : ''}
			${buttonGlobalTypoSwitcher?.lineHeight === true && buttonGlobalTypographyData?.lineHeight ? `line-height: ${buttonGlobalTypographyData?.lineHeight};` : ''}
			
			${buttonGlobalTypoSwitcher?.fontFamily === false && buttonFontFamily && buttonFontFamily !== 'Default' ? `font-family: ${buttonFontFamily};` : ''}
			${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Desktop && buttonFontSizeUnits?.Desktop ? `font-size: ${buttonFontSize?.Desktop}${buttonFontSizeUnits?.Desktop};` : ''}
			${buttonGlobalTypoSwitcher?.fontWeight === false && buttonFontWeight ? `font-weight: ${buttonFontWeight};` : ''}
			${buttonGlobalTypoSwitcher?.fontStyle === false && buttonFontStyle ? `font-style: ${buttonFontStyle};` : ''}
			${buttonGlobalTypoSwitcher?.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
			${buttonGlobalTypoSwitcher?.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
			${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Desktop && buttonLetterSpacingUnits?.Desktop ? `letter-spacing: ${buttonLetterSpacing?.Desktop}${buttonLetterSpacingUnits?.Desktop};` : ''}
			${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Desktop && buttonLineHeightUnits?.Desktop ? `line-height: ${buttonLineHeight?.Desktop}${buttonLineHeightUnits?.Desktop};` : ''}
			
			${buttonBgColor ? `background-color: ${buttonBgColor};` : ''}
			${buttonDesktopPaddingStr && buttonDesktopPadding?.top ? `padding: ${buttonDesktopPaddingStr};` : ''}
			${buttonDesktopMarginStr && buttonDesktopMargin?.top ? `margin: ${buttonDesktopMarginStr};` : ''}
			${buttonBorder ? `border: ${buttonBorder};` : ''}
			${buttonDesktopBorderWidthStr && buttonDesktopBorderWidth?.top ? `border-width: ${buttonDesktopBorderWidthStr};` : ''}
			${buttonDesktopBorderRadiusStr && buttonDesktopBorderRadiusWidth?.top ? `border-radius: ${buttonDesktopBorderRadiusStr};` : ''}
			${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ''}
			${buttonBoxShadowCssValue ? `box-shadow: ${buttonBoxShadowCssValue};` : ''} 
			${buttonWidth?.Desktop && buttonWidthUnits?.Desktop ? `width: ${buttonWidth?.Desktop}${buttonWidthUnits?.Desktop};` : ''}
            ${buttonIconGapSize?.Desktop ? `gap: ${buttonIconGapSize?.Desktop}px;` : ''}
			transition: all 0.3s ease;
		}

		.${blockId} .fb_post_grid_read_more_button:hover {
			${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ''}
			${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : ''}
			${buttonBoxShadowHoverCssValue ? `box-shadow: ${buttonBoxShadowHoverCssValue};` : ''} 
		}

		.${blockId} .fb_post_grid_read_more_button .fb_post_grid_read_more_text {
			${buttonColor ? `color: ${buttonColor};` : ''}  
		}
		.${blockId} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_text {
			${buttonHoverColor ? `color: ${buttonHoverColor};` : ''}
		}
		
		.${blockId} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper {
			${buttonIconBgColor ? `background-color: ${buttonIconBgColor};` : ''}
			${buttonIconBorder ? `border: ${buttonIconBorder};` : ''}
			${buttonIconBorderColor ? `border-color: ${buttonIconBorderColor};` : ''}
			${buttonIconBorderDesktopWidth !== buttonIconBorderDesktop?.top ? `border-width: ${buttonIconBorderDesktop?.top};` : ''}
			${buttonIconBorderRadiusDesktopWidth !== buttonIconBorderRadiusDesktop?.top ? `border-radius: ${buttonIconBorderRadiusDesktop?.top};` : ''}
		}
		.${blockId} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper {
			${buttonIconBgHoverColor ? `background-color: ${buttonIconBgHoverColor};` : ''}
			${buttonIconBorderHoverColor ? `border-color: ${buttonIconBorderHoverColor};` : ''}
		}
		.${blockId} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper svg {
			${buttonIconSize?.Desktop && buttonIconSizeUnits?.Desktop ? `width: ${buttonIconSize?.Desktop}${buttonIconSizeUnits?.Desktop};` : ''}
			${buttonIconSize?.Desktop && buttonIconSizeUnits?.Desktop ? `height: ${buttonIconSize?.Desktop}${buttonIconSizeUnits?.Desktop};` : ''}
			${buttonIconColor ? `fill: ${buttonIconColor};` : ''}
			transform: rotate(${buttonIconRotate?.Desktop}deg);
			transition: all .3s ease-in-out;
			
		}
		.${blockId} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper svg {
			${buttonIconHoverColor ? `fill: ${buttonIconHoverColor};` : ''}
			transform: rotate(${buttonIconRotateHover?.Desktop}deg); 
		}

		.${blockId} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
			${buttonIconImageWidth ? `width: ${buttonIconImageWidth?.Desktop}${buttonIconImageWidthUnits?.Desktop};` : ''}
			${buttonIconImageHeight ? `height: ${buttonIconImageHeight?.Desktop}${buttonIconImageHeightUnits?.Desktop};` : ''}
            object-fit: cover;
			transform: rotate(${buttonImageRotate?.Desktop}deg);
			transition: all .3s ease-in-out;
		}
		.${blockId} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
			transform: rotate(${buttonImageRotateHover?.Desktop}deg);
		}

        .${blockId} .fb_post_grid_style-2 .fb_post_grid_image {
            position: relative;
        }
        
        .${blockId} .fb_post_grid_style-2 .fb_post_grid_categories {
            position: absolute;
            top: 10px;
            left: 10px;
        }
        .${blockId} .fb_post_grid_style-2 .fb_post_grid_tags {
            position: absolute;
            bottom: 10px;
            left: 10px;
        }


        @media only screen and (max-width: 1024px) {

            .${blockId}.fb-post-grid-area {
                ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'left' && postGridHZLeftOffset?.Tablet !== undefined ? `left: ${postGridHZLeftOffset?.Tablet}${postGridHZLeftOffsetUnits?.Tablet};` : ''}
				${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'right' && postGridHZRightOffset?.Tablet !== undefined ? `right: ${postGridHZRightOffset?.Tablet}${postGridHZRightOffsetUnits?.Tablet};` : ''}
				${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'top' && postGridVRTopOffset?.Tablet !== undefined ? `top: ${postGridVRTopOffset?.Tablet}${postGridVRTopOffsetUnits?.Tablet};` : ''}
				${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'bottom' && postGridVRBottomOffset?.Tablet !== undefined ? `bottom: ${postGridVRBottomOffset?.Tablet}${postGridVRBottomOffsetUnits?.Tablet};` : ''}
                ${postGlobalZIndex?.Tablet ? `z-index: ${postGlobalZIndex?.Tablet};` : ''}
            }
            .${blockId}.fb_post_grid_container {
                ${postGlobalTabletPaddingWidth && postGlobalPaddingTablet?.top ? `padding: ${postGlobalTabletPaddingWidth};` : ''} 
                ${postGlobalTabletMarginWidth && postGlobalMarginTablet?.top ? `margin: ${postGlobalTabletMarginWidth};` : ''}  
                ${postGlobalBorder ? `border: ${postGlobalBorder};` : ''} 
                ${postGlobalTabletBorderWidth && postGlobalBorderTablet?.top ? `border-width: ${postGlobalTabletBorderWidth};` : ''}
                ${postGlobalTabletBorderRadiusWidth && postGlobalBorderRadiusTablet?.top ? `border-radius: ${postGlobalTabletBorderRadiusWidth};` : ''}
                ${postGlobalBorderColor ? `border-color: ${postGlobalBorderColor};` : ''}
                ${postGlobalBoxShadowCssValue ? `box-shadow: ${postGlobalBoxShadowCssValue};` : ''}
                ${postGlobalNormalBackgroundType === 'gradient' ? `  
                    ${postGlobalNormalCustomGradientSwitcher && postGlobalNormalCustomGradientInputValue ? `background: ${postGlobalNormalCustomGradientInputValue};` : `background: ${postGlobalNormalGradientColor};`}
                `: `
                    ${postGlobalNormalClassicColor ? `background: ${postGlobalNormalClassicColor};` : ''}
                `}
                transition: all .3s ease-in-out;
                position: relative;
            }
            .${blockId}.fb_post_grid_container:hover {
                ${postGlobalHoverBackgroundType === 'gradient' ? `  
                    ${postGlobalHoverCustomGradientSwitcher && postGlobalHoverCustomGradientInputValue ? `background: ${postGlobalHoverCustomGradientInputValue};` : `background: ${postGlobalHoverGradientColor};`}
                `: `
                    ${postGlobalHoverClassicColor ? `background: ${postGlobalHoverClassicColor};` : ''}
                `}
                ${postGlobalBorderHoverColor ? `border-color: ${postGlobalBorderHoverColor};` : ''}
                ${postGlobalBoxShadowHoverCssValue ? `box-shadow: ${postGlobalBoxShadowHoverCssValue};` : ''}
            }
            .${blockId}.fb_post_grid_container.grid-layout {
                display: grid; 
                grid-template-columns: repeat(${gridColumnsPerSection?.Tablet}, 1fr) !important;
                row-gap: ${gridRowGap?.Tablet}${gridGapUnits?.Tablet};  
                column-gap: ${gridColumnGap?.Tablet}${gridGapUnits?.Tablet}; 
            }

            .${blockId}.fb_post_grid_container.grid-layout .fb_load_more_wrapper {
                grid-column: span ${gridColumnsPerSection?.Tablet};
            }

            .${blockId}.fb_post_grid_container.list-layout {
                display: grid; 
                row-gap: ${listRowGap?.Tablet}${listGapUnits?.Tablet};
            }

            .${blockId}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper {
                margin-right: ${listImageSpacing?.Tablet}${listGapUnits?.Tablet};  
            }

            .${blockId} .loading.post {
                display: grid;
                grid-template-columns: repeat(${gridColumnsPerSection?.Tablet}, 1fr);
                row-gap: ${gridRowGap?.Tablet}${gridGapUnits?.Tablet};
                column-gap: ${gridColumnGap?.Tablet}${gridGapUnits?.Tablet};
                width: 100%;
                height: auto;
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper {
                ${postGridNormalBackgroundType === 'gradient' ? `  
                    ${postGridNormalCustomGradientSwitcher && postGridNormalCustomGradientInputValue ? `background: ${postGridNormalCustomGradientInputValue};` : `background: ${postGridNormalGradientColor};`}
                `: `
                    ${postGridNormalClassicColor ? `background: ${postGridNormalClassicColor};` : ''}   
                `}
                ${postGridPaddingTabletWidth && postGridPaddingTablet?.top? `padding: ${postGridPaddingTabletWidth};` : ''}
                ${postGridMarginTabletWidth && postGridMarginTablet?.top? `margin: ${postGridMarginTabletWidth};` : ''}
                ${postGridBorder ? `border: ${postGridBorder};` : ''}
                ${postGridBorderTabletWidth && postGridBorderTablet?.top? `border-width: ${postGridBorderTabletWidth};` : ''}
                ${postGridBorderRadiusTabletWidth && postGridBorderRadiusTablet?.top? `border-radius: ${postGridBorderRadiusTabletWidth};` : ''}
                ${postGridBorderColor ? `border-color: ${postGridBorderColor};` : ''}
                ${postGridBoxShadowCssValue ? `box-shadow: ${postGridBoxShadowCssValue};` : ''}
                transition: background-color 0.3s ease, border-color 0.3s ease;
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper:hover {
                ${postGridHoverBackgroundType === 'gradient' ? `  
                    ${postGridHoverCustomGradientSwitcher && postGridHoverCustomGradientInputValue ? `background: ${postGridHoverCustomGradientInputValue};` : `background: ${postGridHoverGradientColor};`}
                `: `
                    ${postGridHoverClassicColor ? `background: ${postGridHoverClassicColor};` : ''}
                `}
                ${postGridBorderHoverColor ? `border-color: ${postGridBorderHoverColor};` : ''}
                ${postGridBoxShadowHoverCssValue ? `box-shadow: ${postGridBoxShadowHoverCssValue};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image a {
                ${postImageMarginTabletWidth && postImageMarginTablet?.top? `margin: ${postImageMarginTabletWidth};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image img {
                ${postImageBorder ? `border: ${postImageBorder};` : ''}
                ${postImageTabletBorderWidth && postImageTabletBorder?.top? `border-width: ${postImageTabletBorderWidth};` : ''}
                ${postImageBorderColor ? `border-color: ${postImageBorderColor};` : ''}
                ${postImageTabletBorderRadiusWidth && postImageTabletBorderRadius?.top? `border-radius: ${postImageTabletBorderRadiusWidth};` : ''}
                ${postImageWidth?.Tablet ? `width: ${postImageWidth?.Tablet}${postImageWidthUnits?.Tablet};` : ''}

                height: clamp(
                    ${postImageHeight?.Tablet ? `${postImageHeight?.Tablet - 3}${postImageHeightUnits?.Tablet}` : '14rem'}, 
                    ${postImageHeight?.Tablet ? `calc(${postImageHeight?.Tablet}${postImageHeightUnits?.Tablet} + 4vw)` : '20vw'}, 
                    ${postImageHeight?.Tablet ? `${postImageHeight?.Tablet}${postImageHeightUnits?.Tablet}` : '16rem'}
                );
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image:hover img {
                ${postImageBorderHoverColor ? `border-color: ${postImageBorderHoverColor};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title {
                ${postTitleGlobalTypoSwitcher?.fontSize === false && postTitleFontSize?.Tablet ? `font-size: ${postTitleFontSize?.Tablet}${postTitleFontSizeUnits?.Tablet};` : ''}
                ${postTitleGlobalTypoSwitcher?.letterSpacing === false && postTitleLetterSpacing?.Tablet ? `letter-spacing: ${postTitleLetterSpacing?.Tablet}${postTitleLetterSpacingUnits?.Tablet};` : ''}
                ${postTitleGlobalTypoSwitcher?.lineHeight === false && postTitleLineHeight?.Tablet ? `line-height: ${postTitleLineHeight?.Tablet}${postTitleLineHeightUnits?.Tablet};` : ''}
                ${postTitleMarginTabletWidth && postTitleMarginTablet?.top? `margin: ${postTitleMarginTabletWidth};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title:hover {
                ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a {
                ${postTitleGlobalTypoSwitcher?.fontSize === false && postTitleFontSize?.Tablet ? `font-size: ${postTitleFontSize?.Tablet}${postTitleFontSizeUnits?.Tablet};` : ''}
                ${postTitleGlobalTypoSwitcher?.letterSpacing === false && postTitleLetterSpacing?.Tablet ? `letter-spacing: ${postTitleLetterSpacing?.Tablet}${postTitleLetterSpacingUnits?.Tablet};` : ''}
                ${postTitleGlobalTypoSwitcher?.lineHeight === false && postTitleLineHeight?.Tablet ? `line-height: ${postTitleLineHeight?.Tablet}${postTitleLineHeightUnits?.Tablet};` : ''}
                ${postTitleMarginTabletWidth && postTitleMarginTablet?.top? `margin: ${postTitleMarginTabletWidth};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a:hover {
                ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc {
                ${postDescriptionGlobalTypoSwitcher?.fontSize === false && postDescriptionFontSize?.Tablet ? `font-size: ${postDescriptionFontSize?.Tablet}${postDescriptionFontSizeUnits?.Tablet};` : ''}
                ${postDescriptionGlobalTypoSwitcher?.letterSpacing === false && postDescriptionLetterSpacing?.Tablet ? `letter-spacing: ${postDescriptionLetterSpacing?.Tablet}${postDescriptionLetterSpacingUnits?.Tablet};` : ''}
                ${postDescriptionGlobalTypoSwitcher?.lineHeight === false && postDescriptionLineHeight?.Tablet ? `line-height: ${postDescriptionLineHeight?.Tablet}${postDescriptionLineHeightUnits?.Tablet};` : ''}
                ${postDescriptionMarginTabletWidth && postDescriptionMarginTablet?.top? `margin: ${postDescriptionMarginTabletWidth};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_categories {
                ${postCategoryMarginTabletWidth && postCategoryMarginTablet?.top? `margin: ${postCategoryMarginTabletWidth};` : ''}  
                ${postCategoryGap?.Tablet ? `gap: ${postCategoryGap?.Tablet}${postCategoryGapUnits?.Tablet};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_categories a {
                ${postCategoryGlobalTypoSwitcher?.fontSize === false && postCategoryFontSize?.Tablet ? `font-size: ${postCategoryFontSize?.Tablet}${postCategoryFontSizeUnits?.Tablet};` : ''}
                ${postCategoryGlobalTypoSwitcher?.letterSpacing === false && postCategoryLetterSpacing?.Tablet ? `letter-spacing: ${postCategoryLetterSpacing?.Tablet}${postCategoryLetterSpacingUnits?.Tablet};` : ''}
                ${postCategoryGlobalTypoSwitcher?.lineHeight === false && postCategoryLineHeight?.Tablet ? `line-height: ${postCategoryLineHeight?.Tablet}${postCategoryLineHeightUnits?.Tablet};` : ''}
                ${postCategoryPaddingTabletWidth && postCategoryPaddingTablet?.top? `padding: ${postCategoryPaddingTabletWidth};` : ''}
                ${postCategoryBorderTabletWidth && postCategoryTabletBorder?.top? `border-width: ${postCategoryBorderTabletWidth};` : ''}
                ${postCategoryBorderRadiusTabletWidth && postCategoryTabletBorderRadius?.top? `border-radius: ${postCategoryBorderRadiusTabletWidth};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_categories a:hover  {
                ${postCategoryHoverColor ? `color: ${postCategoryHoverColor};` : ''}
                ${postCategoryBgHoverColor ? `background-color: ${postCategoryBgHoverColor};` : ''}
                ${postCategoryBorderHoverColor ? `border-color: ${postCategoryBorderHoverColor};` : ''}
            }


            .${blockId}.fb_post_grid_container .fb_post_grid_tags {
                ${postTagMarginTabletWidth && postTagMarginTablet?.top ? `margin: ${postTagMarginTabletWidth};` : ''}
                ${postTagGap?.Tablet ? `gap: ${postTagGap?.Tablet}${postTagGapUnits?.Tablet};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_tags a {
                ${postTagGlobalTypoSwitcher?.fontSize === false && postTagFontSize?.Tablet ? `font-size: ${postTagFontSize?.Tablet}${postTagFontSizeUnits?.Tablet};` : ''}
                ${postTagGlobalTypoSwitcher?.letterSpacing === false && postTagLetterSpacing?.Tablet ? `letter-spacing: ${postTagLetterSpacing?.Tablet}${postTagLetterSpacingUnits?.Tablet};` : ''}
                ${postTagGlobalTypoSwitcher?.lineHeight === false && postTagLineHeight?.Tablet ? `line-height: ${postTagLineHeight?.Tablet}${postTagLineHeightUnits?.Tablet};` : ''}
                ${postTagPaddingTabletWidth && postTagPaddingTablet?.top ? `padding: ${postTagPaddingTabletWidth};` : ''}
                ${postTagBorderTabletWidth && postTagTabletBorder?.top ? `border-width: ${postTagBorderTabletWidth};` : ''}
                ${postTagBorderRadiusTabletWidth && postTagTabletBorderRadius?.top ? `border-radius: ${postTagBorderRadiusTabletWidth};` : ''}
                transition: background-color 0.3s ease, border-color 0.3s ease;
            }


            .${blockId}.fb_post_grid_container .fb_post_grid_author {
                ${postAuthorMarginTabletWidth && postAuthorMarginTablet?.top ? `margin: ${postAuthorMarginTabletWidth};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_author,
            .${blockId}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info,
            .${blockId}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info_name {
                ${postAuthorGap?.Tablet ? `gap: ${postAuthorGap?.Tablet}${postAuthorGapUnits?.Tablet};` : ''} 
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_avatar {
                ${postAuthorAvatarWidth?.Tablet ? `width: ${postAuthorAvatarWidth?.Tablet}${postAuthorAvatarWidthUnits?.Tablet};` : ''}
                ${postAuthorAvatarWidth?.Tablet ? `height: ${postAuthorAvatarWidth?.Tablet}${postAuthorAvatarWidthUnits?.Tablet};` : ''}
                ${postAuthorAvatarBorder ? `border: ${postAuthorAvatarBorder};` : ''}
                ${postAuthorAvatarBorderColor ? `border-color: ${postAuthorAvatarBorderColor};` : ''}
                ${postAuthorAvatarBorderTabletWidth && postAuthorAvatarTabletBorder?.top ? `border-width: ${postAuthorAvatarBorderTabletWidth};` : ''}
                ${postAuthorAvatarBorderRadiusTabletWidth && postAuthorAvatarTabletBorderRadius?.top ? `border-radius: ${postAuthorAvatarBorderRadiusTabletWidth};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by,
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
                ${postAuthorGlobalTypoSwitcher?.fontSize === false && postAuthorFontSize?.Tablet ? `font-size: ${postAuthorFontSize?.Tablet}${postAuthorFontSizeUnits?.Tablet};` : ''} 
                ${postAuthorGlobalTypoSwitcher?.letterSpacing === false && postAuthorLetterSpacing?.Tablet ? `letter-spacing: ${postAuthorLetterSpacing?.Tablet}${postAuthorLetterSpacingUnits?.Tablet};` : ''}
                ${postAuthorGlobalTypoSwitcher?.lineHeight === false && postAuthorLineHeight?.Tablet ? `line-height: ${postAuthorLineHeight?.Tablet}${postAuthorLineHeightUnits?.Tablet};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by {
                ${postAuthorPrefixColorSwitcher ? `color: ${postAuthorPrefixColor};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by:hover {
                ${postAuthorPrefixHoverColor ? `color: ${postAuthorPrefixHoverColor};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
                ${postAuthorColor ? `color: ${postAuthorColor};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name:hover,
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a:hover {
                ${postAuthorHoverColor ? `color: ${postAuthorHoverColor};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_date {
                ${postDateGlobalTypoSwitcher?.fontSize === false && postDateFontSize?.Tablet ? `font-size: ${postDateFontSize?.Tablet}${postDateFontSizeUnits?.Tablet};` : ''} 
               ${postDateGlobalTypoSwitcher?.letterSpacing === false && postDateLetterSpacing?.Tablet ? `letter-spacing: ${postDateLetterSpacing?.Tablet}${postDateLetterSpacingUnits?.Tablet};` : ''}
                ${postDateGlobalTypoSwitcher?.lineHeight === false && postDateLineHeight?.Tablet ? `line-height: ${postDateLineHeight?.Tablet}${postDateLineHeightUnits?.Tablet};` : ''}
            }

            .${blockId}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more {
                ${loadMoreTextGlobalTypoSwitcher?.fontSize === false && loadMoreTextFontSize?.Tablet ? `font-size: ${loadMoreTextFontSize?.Tablet}${loadMoreTextFontSizeUnits?.Tablet};` : ''}  
                ${loadMoreTextGlobalTypoSwitcher?.letterSpacing === false && loadMoreTextLetterSpacing?.Tablet ? `letter-spacing: ${loadMoreTextLetterSpacing?.Tablet}${loadMoreTextLetterSpacingUnits?.Tablet};` : ''}
                ${loadMoreTextGlobalTypoSwitcher?.lineHeight === false && loadMoreTextLineHeight?.Tablet ? `line-height: ${loadMoreTextLineHeight?.Tablet}${loadMoreTextLineHeightUnits?.Tablet};` : ''}
                ${loadMoreButtonTabletPaddingWidth && loadMoreButtonTabletPadding?.top ? `padding: ${loadMoreButtonTabletPaddingWidth};` : ''}
                ${loadMoreButtonTabletBorderWidth && loadMoreButtonTabletBorder?.top ? `border-width: ${loadMoreButtonTabletBorderWidth};` : ''}
                ${loadMoreButtonTabletBorderRadiusWidth && loadMoreButtonTabletBorderRadius?.top ? `border-radius: ${loadMoreButtonTabletBorderRadiusWidth};` : ''}
            }

            .${blockId}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more .load_more_button_icon svg {
                ${loadMoreIconSize?.Tablet ? `width: ${loadMoreIconSize?.Tablet}${loadMoreIconSizeUnits?.Tablet};` : ''} 
                ${loadMoreIconSize?.Tablet ? `height: ${loadMoreIconSize?.Tablet}${loadMoreIconSizeUnits?.Tablet};` : ''}
                ${loadMoreIconColor ? `fill: ${loadMoreIconColor};` : ''}
                ${loadMoreIconTabletMarginWidth && loadMoreIconTabletMargin?.top ? `margin: ${loadMoreIconTabletMarginWidth};` : ''}
            }

            .${blockId}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more:hover .load_more_button_icon svg{
                ${loadMoreIconHoverColor ? `fill: ${loadMoreIconHoverColor};` : ''}
            }

            .${blockId} .fb_post_grid_read_more_button {
                ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Tablet && buttonFontSizeUnits?.Tablet ? `font-size: ${buttonFontSize?.Tablet}${buttonFontSizeUnits?.Tablet};` : ''}
                ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Tablet && buttonLetterSpacingUnits?.Tablet ? `letter-spacing: ${buttonLetterSpacing?.Tablet}${buttonLetterSpacingUnits?.Tablet};` : ''}
                ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Tablet && buttonLineHeightUnits?.Tablet ? `line-height: ${buttonLineHeight?.Tablet}${buttonLineHeightUnits?.Tablet};` : ''}
                
                ${buttonTabletPaddingStr && buttonTabPadding?.top ? `padding: ${buttonTabletPaddingStr};` : ''}  
                ${buttonTabletMarginStr && buttonTabMargin?.top ? `margin: ${buttonTabletMarginStr};` : ''} 
                ${buttonTabletBorderWidthStr && buttonTabBorderWidth?.top ? `border-width: ${buttonTabletBorderWidthStr};` : ''}
                ${buttonTabletBorderRadiusStr && buttonTabBorderRadiusWidth?.top ? `border-radius: ${buttonTabletBorderRadiusStr};` : ''}
                ${buttonWidth?.Tablet && buttonWidthUnits?.Tablet ? `width: ${buttonWidth?.Tablet}${buttonWidthUnits?.Tablet};` : ''}
                ${buttonIconGapSize?.Tablet ? `gap: ${buttonIconGapSize?.Tablet}px;` : ''}
            }
            
            .${blockId} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper {
                ${buttonIconBorderTabletWidth !== buttonIconBorderTablet?.top ? `border-width: ${buttonIconBorderTablet?.top};` : ''}
                ${buttonIconBorderRadiusTabletWidth !== buttonIconBorderRadiusTablet?.top ? `border-radius: ${buttonIconBorderRadiusTablet?.top};` : ''}
            }

            .${blockId} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper svg {
                ${buttonIconSize?.Tablet && buttonIconSizeUnits?.Tablet ? `width: ${buttonIconSize?.Tablet}${buttonIconSizeUnits?.Tablet};` : ''}
                ${buttonIconSize?.Tablet && buttonIconSizeUnits?.Tablet ? `height: ${buttonIconSize?.Tablet}${buttonIconSizeUnits?.Tablet};` : ''}
                transform: rotate(${buttonIconRotate?.Tablet}deg);
            }
            .${blockId} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper svg {
                transform: rotate(${buttonIconRotateHover?.Tablet}deg); 
            }

            .${blockId} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
                ${buttonIconImageWidth ? `width: ${buttonIconImageWidth?.Tablet}${buttonIconImageWidthUnits?.Tablet};` : ''}
                ${buttonIconImageHeight ? `height: ${buttonIconImageHeight?.Tablet}${buttonIconImageHeightUnits?.Tablet};` : ''}
                transform: rotate(${buttonImageRotate?.Tablet}deg);
            }
            .${blockId} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
                transform: rotate(${buttonImageRotateHover?.Tablet}deg);
            }

            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous,
            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next{
                ${paginationPrevNextWidth?.Tablet ? `width: ${paginationPrevNextWidth?.Tablet}${paginationPrevNextWidthUnits?.Tablet};` : ''} 
                ${paginationPrevNextWidth?.Tablet ? `height: ${paginationPrevNextWidth?.Tablet}${paginationPrevNextWidthUnits?.Tablet};` : ''}

                ${paginationArrowTabletBorderWidth && paginationArrowTabletBorder?.top ? `border-width: ${paginationArrowTabletBorderWidth};` : ''}
                ${paginationArrowTabletBorderRadiusWidth && paginationArrowTabletBorderRadius?.top? `border-radius: ${paginationArrowTabletBorderRadiusWidth};` : ''}

            }

            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_icon_Wrapper .fb_pagination_previous_icon,
            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_icon_Wrapper .fb_pagination_next_icon{
                ${paginationArrowSize?.Tablet ? `width: ${paginationArrowSize?.Tablet}${paginationArrowSizeUnits?.Tablet};` : ''}
                ${paginationArrowSize?.Tablet ? `height: ${paginationArrowSize?.Tablet}${paginationArrowSizeUnits?.Tablet};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_text,
            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_text{
                ${paginationArrowTextGlobalTypoSwitcher?.fontSize === false && paginationArrowTextFontSize?.Tablet ? `font-size: ${paginationArrowTextFontSize?.Tablet}${paginationArrowTextFontSizeUnits?.Tablet};` : ''} 
                ${paginationArrowTextGlobalTypoSwitcher?.letterSpacing === false && paginationArrowTextLetterSpacing?.Tablet ? `letter-spacing: ${paginationArrowTextLetterSpacing?.Tablet}${paginationArrowTextLetterSpacingUnits?.Tablet};` : ''}
                ${paginationArrowTextGlobalTypoSwitcher?.lineHeight === false && paginationArrowTextLineHeight?.Tablet ? `line-height: ${paginationArrowTextLineHeight?.Tablet}${paginationArrowTextLineHeightUnits?.Tablet};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination {
                ${paginationBtnGap?.Tablet ? `gap: ${paginationBtnGap?.Tablet}${paginationBtnGapUnits?.Tablet};` : ''}
            }
                    
            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item {
                ${paginationBtnSize?.Tablet ? `width: ${paginationBtnSize?.Tablet}${paginationBtnSizeUnits?.Tablet};` : ''}  
                ${paginationBtnSize?.Tablet ? `height: ${paginationBtnSize?.Tablet}${paginationBtnSizeUnits?.Tablet};` : ''}

                ${paginationBtnTextGlobalTypoSwitcher?.fontSize === false && paginationBtnTextFontSize?.Tablet ? `font-size: ${paginationBtnTextFontSize?.Tablet}${paginationBtnTextFontSizeUnits?.Tablet};` : ''} 
                ${paginationBtnTextGlobalTypoSwitcher?.letterSpacing === false && paginationBtnTextLetterSpacing?.Tablet ? `letter-spacing: ${paginationBtnTextLetterSpacing?.Tablet}${paginationBtnTextLetterSpacingUnits?.Tablet};` : ''}
                ${paginationBtnTextGlobalTypoSwitcher?.lineHeight === false && paginationBtnTextLineHeight?.Tablet ? `line-height: ${paginationBtnTextLineHeight?.Tablet}${paginationBtnTextLineHeightUnits?.Tablet};` : ''}

                ${paginationBtnTabletBorderWidth && paginationBtnTabletBorder?.top ? `border-width: ${paginationBtnTabletBorderWidth};` : ''}
                ${paginationBtnTabletBorderRadiusWidth && paginationBtnTabletBorderRadius?.top? `border-radius: ${paginationBtnTabletBorderRadiusWidth};` : ''}
            }

        }

        @media only screen and (max-width: 767px) {


            .${blockId}.fb-post-grid-area {
                ${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'left' && postGridHZLeftOffset?.Mobile !== undefined ? `left: ${postGridHZLeftOffset?.Mobile}${postGridHZLeftOffsetUnits?.Mobile};` : ''}
				${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridHZOrientationType === 'right' && postGridHZRightOffset?.Mobile !== undefined ? `right: ${postGridHZRightOffset?.Mobile}${postGridHZRightOffsetUnits?.Mobile};` : ''}
				${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'top' && postGridVRTopOffset?.Mobile !== undefined ? `top: ${postGridVRTopOffset?.Mobile}${postGridVRTopOffsetUnits?.Mobile};` : ''}
				${postGridPositionType !== 'default' && postGridPositionType !== 'relative' && postGridVROrientationType === 'bottom' && postGridVRBottomOffset?.Mobile !== undefined ? `bottom: ${postGridVRBottomOffset?.Mobile}${postGridVRBottomOffsetUnits?.Mobile};` : ''} 
                ${postGlobalZIndex?.Mobile ? `z-index: ${postGlobalZIndex?.Mobile};` : ''}
            }
            .${blockId}.fb_post_grid_container {
                ${postGlobalMobilePaddingWidth && postGlobalPaddingMobile?.top ? `padding: ${postGlobalMobilePaddingWidth};` : ''} 
                ${postGlobalMobileMarginWidth && postGlobalMarginMobile?.top ? `margin: ${postGlobalMobileMarginWidth};` : ''}  
                ${postGlobalBorder ? `border: ${postGlobalBorder};` : ''} 
                ${postGlobalMobileBorderWidth && postGlobalBorderMobile?.top ? `border-width: ${postGlobalMobileBorderWidth};` : ''}
                ${postGlobalMobileBorderRadiusWidth && postGlobalBorderRadiusMobile?.top ? `border-radius: ${postGlobalMobileBorderRadiusWidth};` : ''}
                ${postGlobalBorderColor ? `border-color: ${postGlobalBorderColor};` : ''}
                ${postGlobalBoxShadowCssValue ? `box-shadow: ${postGlobalBoxShadowCssValue};` : ''}
                ${postGlobalNormalBackgroundType === 'gradient' ? `  
                    ${postGlobalNormalCustomGradientSwitcher && postGlobalNormalCustomGradientInputValue ? `background: ${postGlobalNormalCustomGradientInputValue};` : `background: ${postGlobalNormalGradientColor};`}
                `: `
                    ${postGlobalNormalClassicColor ? `background: ${postGlobalNormalClassicColor};` : ''}
                `}
                transition: all .3s ease-in-out;
                position: relative;
            }
            .${blockId}.fb_post_grid_container:hover {
                ${postGlobalHoverBackgroundType === 'gradient' ? `  
                    ${postGlobalHoverCustomGradientSwitcher && postGlobalHoverCustomGradientInputValue ? `background: ${postGlobalHoverCustomGradientInputValue};` : `background: ${postGlobalHoverGradientColor};`}
                `: `
                    ${postGlobalHoverClassicColor ? `background: ${postGlobalHoverClassicColor};` : ''}
                `}
                ${postGlobalBorderHoverColor ? `border-color: ${postGlobalBorderHoverColor};` : ''}
                ${postGlobalBoxShadowHoverCssValue ? `box-shadow: ${postGlobalBoxShadowHoverCssValue};` : ''}
            }
            .${blockId}.fb_post_grid_container.grid-layout {
                display: grid; 
                grid-template-columns: repeat(${gridColumnsPerSection?.Mobile}, 1fr) !important;
                row-gap: ${gridRowGap?.Mobile}${gridGapUnits?.Mobile};  
                column-gap: ${gridColumnGap?.Mobile}${gridGapUnits?.Mobile}; 
            }

            .${blockId}.fb_post_grid_container.grid-layout .fb_load_more_wrapper {
                grid-column: span ${gridColumnsPerSection?.Mobile};
            }

            .${blockId}.fb_post_grid_container.list-layout .fb_post_grid_wrapper {
                display: block;
            }
            .${blockId}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper {
                max-width: 100%;
                margin-right: 0px;
            }

            .${blockId}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper {
                margin-right: ${listImageSpacing?.Mobile}${listGapUnits?.Mobile};
                max-width: 100%;
                height: fit-content;
                overflow: hidden;
                display: inline-block;
                position: relative;
            }

            .${blockId}.fb_post_grid_container.list-layout .fb_post_grid_wrapper .fb_post_grid_image_wrapper img {
                max-width: 100% ;
                object-fit: cover;
                display: block;
            }
            .${blockId}.fb_post_grid_container.list-layout .fb_post_grid_content_wrapper {
                flex: 1;
                align-self: center;
                display: block;
                text-align: left;
            }
            .${blockId} .loading.post {
                display: grid;
                grid-template-columns: repeat(${gridColumnsPerSection?.Mobile}, 1fr);
                row-gap: ${gridRowGap?.Mobile}${gridGapUnits?.Mobile}; 
                column-gap: ${gridColumnGap?.Mobile}${gridGapUnits?.Mobile};
                width: 100%;
                height: auto;
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper {
                ${postGridNormalBackgroundType === 'gradient' ? `  
                    ${postGridNormalCustomGradientSwitcher && postGridNormalCustomGradientInputValue ? `background: ${postGridNormalCustomGradientInputValue};` : `background: ${postGridNormalGradientColor};`}
                `: `
                    ${postGridNormalClassicColor ? `background: ${postGridNormalClassicColor};` : ''}
                `}
                ${postGridPaddingMobileWidth && postGridPaddingMobile?.top? `padding: ${postGridPaddingMobileWidth};` : ''}
                ${postGridMarginMobileWidth && postGridMarginMobile?.top? `margin: ${postGridMarginMobileWidth};` : ''}
                ${postGridBorder ? `border: ${postGridBorder};` : ''}
                ${postGridBorderMobileWidth && postGridBorderMobile?.top? `border-width: ${postGridBorderMobileWidth};` : ''}
                ${postGridBorderRadiusMobileWidth && postGridBorderRadiusMobile?.top? `border-radius: ${postGridBorderRadiusMobileWidth};` : ''}
                ${postGridBorderColor ? `border-color: ${postGridBorderColor};` : ''}
                ${postGridBoxShadowCssValue ? `box-shadow: ${postGridBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper:hover {
                ${postGridHoverBackgroundType === 'gradient' ? `  
                    ${postGridHoverCustomGradientSwitcher && postGridHoverCustomGradientInputValue ? `background: ${postGridHoverCustomGradientInputValue};` : `background: ${postGridHoverGradientColor};`}
                `: `
                    ${postGridHoverClassicColor ? `background: ${postGridHoverClassicColor};` : ''}
                `}
                ${postGridBorderHoverColor ? `border-color: ${postGridBorderHoverColor};` : ''}
                ${postGridBoxShadowHoverCssValue ? `box-shadow: ${postGridBoxShadowHoverCssValue};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image a {
                ${postImageMarginMobileWidth && postImageMarginMobile?.top? `margin: ${postImageMarginMobileWidth};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image img {
                ${postImageBorder ? `border: ${postImageBorder};` : ''}
                ${postImageMobileBorderWidth && postImageMobileBorder?.top? `border-width: ${postImageMobileBorderWidth};` : ''}
                ${postImageBorderColor ? `border-color: ${postImageBorderColor};` : ''}
                ${postImageMobileBorderRadiusWidth && postImageMobileBorderRadius?.top? `border-radius: ${postImageMobileBorderRadiusWidth};` : ''}
                ${postImageWidth?.Mobile ? `width: ${postImageWidth?.Mobile}${postImageWidthUnits?.Mobile};` : ''}
                height: clamp(
                    ${postImageHeight?.Mobile ? `${postImageHeight?.Mobile - 3}${postImageHeightUnits?.Mobile}` : '10rem'}, 
                    ${postImageHeight?.Mobile ? `calc(${postImageHeight?.Mobile}${postImageHeightUnits?.Mobile} + 3vw)` : '15vw'}, 
                    ${postImageHeight?.Mobile ? `${postImageHeight?.Mobile}${postImageHeightUnits?.Mobile}` : '12rem'}
                );
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image:hover img {
                ${postImageBorderHoverColor ? `border-color: ${postImageBorderHoverColor};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title {
                ${postTitleGlobalTypoSwitcher?.fontSize === false && postTitleFontSize?.Mobile ? `font-size: ${postTitleFontSize?.Mobile}${postTitleFontSizeUnits?.Mobile};` : ''}
                ${postTitleGlobalTypoSwitcher?.letterSpacing === false && postTitleLetterSpacing?.Mobile ? `letter-spacing: ${postTitleLetterSpacing?.Mobile}${postTitleLetterSpacingUnits?.Mobile};` : ''}
                ${postTitleGlobalTypoSwitcher?.lineHeight === false && postTitleLineHeight?.Mobile ? `line-height: ${postTitleLineHeight?.Mobile}${postTitleLineHeightUnits?.Mobile};` : ''}
                ${postTitleMarginMobileWidth && postTitleMarginMobile?.top? `margin: ${postTitleMarginMobileWidth};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title:hover {
                ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a {
                ${postTitleFontSize?.Mobile ? `font-size: ${postTitleFontSize?.Mobile}${postTitleFontSizeUnits?.Mobile};` : ''}
               ${postTitleLetterSpacing?.Mobile ? `letter-spacing: ${postTitleLetterSpacing?.Mobile}${postTitleLetterSpacingUnits?.Mobile};` : ''}
                ${postTitleLineHeight?.Mobile ? `line-height: ${postTitleLineHeight?.Mobile}${postTitleLineHeightUnits?.Mobile};` : ''}
                ${postTitleMarginMobileWidth && postTitleMarginMobile?.top? `margin: ${postTitleMarginMobileWidth};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content a:hover {
                ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc {
                ${postDescriptionGlobalTypoSwitcher?.fontSize === false && postDescriptionFontSize?.Mobile ? `font-size: ${postDescriptionFontSize?.Mobile}${postDescriptionFontSizeUnits?.Mobile};` : ''}
                ${postDescriptionGlobalTypoSwitcher?.letterSpacing === false && postDescriptionLetterSpacing?.Mobile ? `letter-spacing: ${postDescriptionLetterSpacing?.Mobile}${postDescriptionLetterSpacingUnits?.Mobile};` : ''}
                ${postDescriptionGlobalTypoSwitcher?.lineHeight === false && postDescriptionLineHeight?.Mobile ? `line-height: ${postDescriptionLineHeight?.Mobile}${postDescriptionLineHeightUnits?.Mobile};` : ''}
                ${postDescriptionMarginMobileWidth && postDescriptionMarginMobile?.top? `margin: ${postDescriptionMarginMobileWidth};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc:hover {
                ${postDescriptionHoverColor ? `color: ${postDescriptionHoverColor};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_categories {
                ${postCategoryMarginMobileWidth && postCategoryMarginMobile?.top? `margin: ${postCategoryMarginMobileWidth};` : ''}  
                ${postCategoryGap?.Mobile ? `gap: ${postCategoryGap?.Mobile}${postCategoryGapUnits?.Mobile};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_categories a {
                ${postCategoryGlobalTypoSwitcher?.fontSize === false && postCategoryFontSize?.Mobile ? `font-size: ${postCategoryFontSize?.Mobile}${postCategoryFontSizeUnits?.Mobile};` : ''}
                ${postCategoryGlobalTypoSwitcher?.letterSpacing === false && postCategoryLetterSpacing?.Mobile ? `letter-spacing: ${postCategoryLetterSpacing?.Mobile}${postCategoryLetterSpacingUnits?.Mobile};` : ''}
                ${postCategoryGlobalTypoSwitcher?.lineHeight === false && postCategoryLineHeight?.Mobile ? `line-height: ${postCategoryLineHeight?.Mobile}${postCategoryLineHeightUnits?.Mobile};` : ''}
                ${postCategoryPaddingMobileWidth && postCategoryPaddingMobile?.top? `padding: ${postCategoryPaddingMobileWidth};` : ''}
                ${postCategoryBorderMobileWidth && postCategoryMobileBorder?.top? `border-width: ${postCategoryBorderMobileWidth};` : ''}
                ${postCategoryBorderRadiusMobileWidth && postCategoryMobileBorderRadius?.top? `border-radius: ${postCategoryBorderRadiusMobileWidth};` : ''}
            }


            .${blockId}.fb_post_grid_container .fb_post_grid_tags {
                ${postTagMarginMobileWidth && postTagMarginMobile?.top? `margin: ${postTagMarginMobileWidth};` : ''}
                ${postTagGap?.Mobile ? `gap: ${postTagGap?.Mobile}${postTagGapUnits?.Mobile};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_tags a {
                ${postTagGlobalTypoSwitcher?.fontSize === false && postTagFontSize?.Mobile ? `font-size: ${postTagFontSize?.Mobile}${postTagFontSizeUnits?.Mobile};` : ''}
                ${postTagGlobalTypoSwitcher?.letterSpacing === false && postTagLetterSpacing?.Mobile ? `letter-spacing: ${postTagLetterSpacing?.Mobile}${postTagLetterSpacingUnits?.Mobile};` : ''}
                ${postTagGlobalTypoSwitcher?.lineHeight === false && postTagLineHeight?.Mobile ? `line-height: ${postTagLineHeight?.Mobile}${postTagLineHeightUnits?.Mobile};` : ''}
                ${postTagPaddingMobileWidth && postTagPaddingMobile?.top? `padding: ${postTagPaddingMobileWidth};` : ''}
                ${postTagBorderMobileWidth && postTagMobileBorder?.top? `border-width: ${postTagBorderMobileWidth};` : ''}
                ${postTagBorderRadiusMobileWidth && postTagMobileBorderRadius.top? `border-radius: ${postTagBorderRadiusMobileWidth};` : ''}
                transition: background-color 0.3s ease, border-color 0.3s ease;
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_author {
                ${postAuthorMarginMobileWidth && postAuthorMarginMobile?.top? `margin: ${postAuthorMarginMobileWidth};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_author,
            .${blockId}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info,
            .${blockId}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_info_name {
                ${postAuthorGap?.Mobile ? `gap: ${postAuthorGap?.Mobile}${postAuthorGapUnits?.Mobile};` : ''} 
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_author .fb_post_grid_author_avatar {
                ${postAuthorAvatarWidth?.Mobile ? `width: ${postAuthorAvatarWidth?.Mobile}${postAuthorAvatarWidthUnits?.Mobile};` : ''}
                ${postAuthorAvatarWidth?.Mobile ? `height: ${postAuthorAvatarWidth?.Mobile}${postAuthorAvatarWidthUnits?.Mobile};` : ''}
                ${postAuthorAvatarBorder ? `border: ${postAuthorAvatarBorder};` : ''}
                ${postAuthorAvatarBorderColor ? `border-color: ${postAuthorAvatarBorderColor};` : ''}
                ${postAuthorAvatarBorderMobileWidth && postAuthorAvatarMobileBorder?.top ? `border-width: ${postAuthorAvatarBorderMobileWidth};` : ''}
                ${postAuthorAvatarBorderRadiusMobileWidth && postAuthorAvatarMobileBorderRadius?.top? `border-radius: ${postAuthorAvatarBorderRadiusMobileWidth};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by,
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
                ${postAuthorGlobalTypoSwitcher?.fontSize === false && postAuthorFontSize?.Mobile ? `font-size: ${postAuthorFontSize?.Mobile}${postAuthorFontSizeUnits?.Mobile};` : ''} 
                ${postAuthorGlobalTypoSwitcher?.letterSpacing === false && postAuthorLetterSpacing?.Mobile ? `letter-spacing: ${postAuthorLetterSpacing?.Mobile}${postAuthorLetterSpacingUnits?.Mobile};` : ''}
                ${postAuthorGlobalTypoSwitcher?.lineHeight === false && postAuthorLineHeight?.Mobile ? `line-height: ${postAuthorLineHeight?.Mobile}${postAuthorLineHeightUnits?.Mobile};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by {
                ${postAuthorPrefixColorSwitcher ? `color: ${postAuthorPrefixColor};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_posted_by:hover {
                ${postAuthorPrefixHoverColor ? `color: ${postAuthorPrefixHoverColor};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name,
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a {
                ${postAuthorColor ? `color: ${postAuthorColor};` : ''}
            }
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name:hover,
            .${blockId}.fb_post_grid_container .fb_post_grid_author_info_name .fb_post_grid_author_name a:hover {
                ${postAuthorHoverColor ? `color: ${postAuthorHoverColor};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_post_grid_date {
                ${postDateGlobalTypoSwitcher?.fontSize === false && postDateFontSize?.Mobile ? `font-size: ${postDateFontSize?.Mobile}${postDateFontSizeUnits?.Mobile};` : ''} 
                ${postDateGlobalTypoSwitcher?.letterSpacing === false && postDateLetterSpacing?.Mobile ? `letter-spacing: ${postDateLetterSpacing?.Mobile}${postDateLetterSpacingUnits?.Mobile};` : ''}
                ${postDateGlobalTypoSwitcher?.lineHeight === false && postDateLineHeight?.Mobile ? `line-height: ${postDateLineHeight?.Mobile}${postDateLineHeightUnits?.Mobile};` : ''}
            }


            .${blockId}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more {
                ${loadMoreTextGlobalTypoSwitcher?.fontSize === false && loadMoreTextFontSize?.Mobile ? `font-size: ${loadMoreTextFontSize?.Mobile}${loadMoreTextFontSizeUnits?.Mobile};` : ''}  
                ${loadMoreTextGlobalTypoSwitcher?.letterSpacing === false && loadMoreTextLetterSpacing?.Mobile ? `letter-spacing: ${loadMoreTextLetterSpacing?.Mobile}${loadMoreTextLetterSpacingUnits?.Mobile};` : ''}
                ${loadMoreTextGlobalTypoSwitcher?.lineHeight === false && loadMoreTextLineHeight?.Mobile ? `line-height: ${loadMoreTextLineHeight?.Mobile}${loadMoreTextLineHeightUnits?.Mobile};` : ''}
                ${loadMoreButtonMobilePaddingWidth && loadMoreButtonMobilePadding?.top? `padding: ${loadMoreButtonMobilePaddingWidth};` : ''}
                ${loadMoreButtonMobileBorderWidth && loadMoreButtonMobileBorder?.top? `border-width: ${loadMoreButtonMobileBorderWidth};` : ''}
                ${loadMoreButtonMobileBorderRadiusWidth && loadMoreButtonMobileBorderRadius?.top? `border-radius: ${loadMoreButtonMobileBorderRadiusWidth};` : ''}
            }

            .${blockId}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more .load_more_button_icon svg {
                ${loadMoreIconSize?.Mobile ? `width: ${loadMoreIconSize?.Mobile}${loadMoreIconSizeUnits?.Mobile};` : ''}
                ${loadMoreIconSize?.Mobile ? `height: ${loadMoreIconSize?.Mobile}${loadMoreIconSizeUnits?.Mobile};` : ''}
                ${loadMoreIconColor ? `fill: ${loadMoreIconColor};` : ''}
                ${loadMoreIconMobileMarginWidth && loadMoreIconMobileMargin?.top? `margin: ${loadMoreIconMobileMarginWidth};` : ''}
            }

            .${blockId}.fb_post_grid_container.grid-layout .fb_load_more_wrapper .fb_load_more:hover .load_more_button_icon svg{
                ${loadMoreIconHoverColor ? `fill: ${loadMoreIconHoverColor};` : ''}
            }


            .${blockId} .fb_post_grid_read_more_button {
                ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Mobile && buttonFontSizeUnits?.Mobile ? `font-size: ${buttonFontSize?.Mobile}${buttonFontSizeUnits?.Mobile};` : ''}
                ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Mobile && buttonLetterSpacingUnits?.Mobile ? `letter-spacing: ${buttonLetterSpacing?.Mobile}${buttonLetterSpacingUnits?.Mobile};` : ''}
                ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Mobile && buttonLineHeightUnits?.Mobile ? `line-height: ${buttonLineHeight?.Mobile}${buttonLineHeightUnits?.Mobile};` : ''}
                
                ${buttonMobilePaddingStr && buttonMobilePadding?.top ? `padding: ${buttonMobilePaddingStr};` : ''}  
                ${buttonMobileMarginStr && buttonMobileMargin?.top ? `margin: ${buttonMobileMarginStr};` : ''} 
                ${buttonMobileBorderWidthStr && buttonMobileBorderWidth?.top ? `border-width: ${buttonMobileBorderWidthStr};` : ''}
                ${buttonMobileBorderRadiusStr && buttonMobileBorderRadiusWidth?.top ? `border-radius: ${buttonMobileBorderRadiusStr};` : ''}
                ${buttonWidth?.Mobile && buttonWidthUnits?.Mobile ? `width: ${buttonWidth?.Mobile}${buttonWidthUnits?.Mobile};` : ''}
                ${buttonIconGapSize?.Mobile ? `gap: ${buttonIconGapSize?.Mobile}px;` : ''}
            }
            
            .${blockId} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper {
                ${buttonIconBorderMobileWidth !== buttonIconBorderMobile?.top ? `border-width: ${buttonIconBorderMobile?.top};` : ''} 
                ${buttonIconBorderRadiusMobileWidth !== buttonIconBorderRadiusMobile?.top ? `border-radius: ${buttonIconBorderRadiusMobile?.top};` : ''}
            }

            .${blockId} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper svg {
                ${buttonIconSize?.Mobile && buttonIconSizeUnits?.Mobile ? `width: ${buttonIconSize?.Mobile}${buttonIconSizeUnits?.Mobile};` : ''}
                ${buttonIconSize?.Mobile && buttonIconSizeUnits?.Mobile ? `height: ${buttonIconSize?.Mobile}${buttonIconSizeUnits?.Mobile};` : ''}
                transform: rotate(${buttonIconRotate?.Mobile}deg);
            }
            .${blockId} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper svg {
                transform: rotate(${buttonIconRotateHover?.Mobile}deg); 
            }

            .${blockId} .fb_post_grid_read_more_button .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
                ${buttonIconImageWidth ? `width: ${buttonIconImageWidth?.Mobile}${buttonIconImageWidthUnits?.Mobile};` : ''}
                ${buttonIconImageHeight ? `height: ${buttonIconImageHeight?.Mobile}${buttonIconImageHeightUnits?.Mobile};` : ''}
                transform: rotate(${buttonImageRotate?.Mobile}deg);
            }
            .${blockId} .fb_post_grid_read_more_button:hover .fb_post_grid_read_more_icon_wrapper .fb_post_grid_read_more_icon_image {
                transform: rotate(${buttonImageRotateHover?.Mobile}deg);
            }

            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous,
            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next{
                ${paginationPrevNextWidth?.Mobile ? `width: ${paginationPrevNextWidth?.Mobile}${paginationPrevNextWidthUnits?.Mobile};` : ''} 
                ${paginationPrevNextWidth?.Mobile ? `height: ${paginationPrevNextWidth?.Mobile}${paginationPrevNextWidthUnits?.Mobile};` : ''}

                ${paginationArrowMobileBorderWidth && paginationArrowMobileBorder?.top ? `border-width: ${paginationArrowMobileBorderWidth};` : ''}
                ${paginationArrowMobileBorderRadiusWidth && paginationArrowMobileBorderRadius?.top? `border-radius: ${paginationArrowMobileBorderRadiusWidth};` : ''}

            }

            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_icon_Wrapper .fb_pagination_previous_icon,
            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_icon_Wrapper .fb_pagination_next_icon{
                ${paginationArrowSize?.Mobile ? `width: ${paginationArrowSize?.Mobile}${paginationArrowSizeUnits?.Mobile};` : ''}
                ${paginationArrowSize?.Mobile ? `height: ${paginationArrowSize?.Mobile}${paginationArrowSizeUnits?.Mobile};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_previous .fb_pagination_previous_text,
            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination_wrapper .fb_pagination_next .fb_pagination_next_text{ 
                ${paginationArrowTextGlobalTypoSwitcher?.fontSize === false && paginationArrowTextFontSize?.Mobile ? `font-size: ${paginationArrowTextFontSize?.Mobile}${paginationArrowTextFontSizeUnits?.Mobile};` : ''} 
                ${paginationArrowTextGlobalTypoSwitcher?.letterSpacing === false && paginationArrowTextLetterSpacing?.Mobile ? `letter-spacing: ${paginationArrowTextLetterSpacing?.Mobile}${paginationArrowTextLetterSpacingUnits?.Mobile};` : ''}
                ${paginationArrowTextGlobalTypoSwitcher?.lineHeight === false && paginationArrowTextLineHeight?.Mobile ? `line-height: ${paginationArrowTextLineHeight?.Mobile}${paginationArrowTextLineHeightUnits?.Mobile};` : ''}
            }

            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination {
                ${paginationBtnGap?.Mobile ? `gap: ${paginationBtnGap?.Mobile}${paginationBtnGapUnits?.Mobile};` : ''}
            }
                    
            .${blockId}.fb_post_grid_container .fb_load_more_wrapper .fb_pagination .fb_pagination_item {
                ${paginationBtnSize?.Mobile ? `width: ${paginationBtnSize?.Mobile}${paginationBtnSizeUnits?.Mobile};` : ''}  
                ${paginationBtnSize?.Mobile ? `height: ${paginationBtnSize?.Mobile}${paginationBtnSizeUnits?.Mobile};` : ''}

                ${paginationBtnTextGlobalTypoSwitcher?.fontSize === false && paginationBtnTextFontSize?.Mobile ? `font-size: ${paginationBtnTextFontSize?.Mobile}${paginationBtnTextFontSizeUnits?.Mobile};` : ''} 
                ${paginationBtnTextGlobalTypoSwitcher?.letterSpacing === false && paginationBtnTextLetterSpacing?.Mobile ? `letter-spacing: ${paginationBtnTextLetterSpacing?.Mobile}${paginationBtnTextLetterSpacingUnits?.Mobile};` : ''}
                ${paginationBtnTextGlobalTypoSwitcher?.lineHeight === false && paginationBtnTextLineHeight?.Mobile ? `line-height: ${paginationBtnTextLineHeight?.Mobile}${paginationBtnTextLineHeightUnits?.Mobile};` : ''}

                ${paginationBtnMobileBorderWidth && paginationBtnMobileBorder?.top ? `border-width: ${paginationBtnMobileBorderWidth};` : ''}
                ${paginationBtnMobileBorderRadiusWidth && paginationBtnMobileBorderRadius?.top? `border-radius: ${paginationBtnMobileBorderRadiusWidth};` : ''}
            }
        }

    `, [
        blockId,
        deviceType,
        blockStyle,
        postType,
        postPerPage,
        selectedCatSwitcher,
        selectedCat,
        deSelectedCat,
        selectedTagSwitcher,
        selectedTag,
        deSelectedTag,
        selectedAuthorSwitcher,
        selectedAuthor,
        deSelectedAuthor,
        orderBy,
        sortOrder,
        gridColumnsPerSection,
        gridGapUnits,
        listGapUnits,
        gridRowGap,
        listRowGap,
        listImageSpacing,
        gridColumnGap,

        postGridPaddingUnits,
        postGridPaddingDesktop,
        postGridPaddingTablet,
        postGridPaddingMobile,
        postGridPaddingLink,
        postGridPaddingDesktopWidth,
        postGridPaddingTabletWidth,
        postGridPaddingMobileWidth,

        postGridMarginUnits,
        postGridMarginDesktop,
        postGridMarginTablet,
        postGridMarginMobile,
        postGridMarginLink,
        postGridMarginDesktopWidth,
        postGridMarginTabletWidth,
        postGridMarginMobileWidth,

        postGridBgColorSwitcher,
        postGridNormalBackgroundType,
        postGridNormalClassicColor,
        postGridNormalGradientColor,
        postGridNormalCustomGradientSwitcher,
        postGridNormalCustomGradientInputValue,
        postGridHoverBackgroundType,
        postGridHoverClassicColor,
        postGridHoverGradientColor,
        postGridHoverCustomGradientSwitcher,
        postGridHoverCustomGradientInputValue,

        postGridBorder,
        postGridBorderColorSwitcher,
        postGridBorderColor,
        postGridBorderHoverColor,
        postGridBorderUnits,
        postGridBorderDesktop,
        postGridBorderTablet,
        postGridBorderMobile,
        postGridBorderLink,
        postGridBorderDesktopWidth,
        postGridBorderTabletWidth,
        postGridBorderMobileWidth,

        postGridBorderRadiusUnits,
        postGridBorderRadiusDesktop,
        postGridBorderRadiusTablet,
        postGridBorderRadiusMobile,
        postGridBorderRadiusLink,
        postGridBorderRadiusDesktopWidth,
        postGridBorderRadiusTabletWidth,
        postGridBorderRadiusMobileWidth,

        postGridBoxShadowSwitcher,
        postGridBoxShadowValues,
        postGridBoxShadowCssValue,
        postGridBoxShadowHoverValues,
        postGridBoxShadowHoverCssValue,

        postImageWidth,
        postImageWidthUnits,
        postImageHeight,
        postImageHeightUnits,
        postImageBorder,
        postImageBorderColorSwitcher,
        postImageBorderColor,
        postImageBorderHoverColor,
        postImageBorderUnits,
        postImageDesktopBorder,
        postImageTabletBorder,
        postImageMobileBorder,
        postImageBorderLink,
        postImageDesktopBorderWidth,
        postImageTabletBorderWidth,
        postImageMobileBorderWidth,

        postImageBorderRadiusUnits,
        postImageDesktopBorderRadius,
        postImageTabletBorderRadius,
        postImageMobileBorderRadius,
        postImageBorderRadiusLink,
        postImageDesktopBorderRadiusWidth,
        postImageTabletBorderRadiusWidth,
        postImageMobileBorderRadiusWidth,

        postImageMarginUnits,
        postImageMarginDesktop,
        postImageMarginTablet,
        postImageMarginMobile,
        postImageMarginLink,
        postImageMarginDesktopWidth,
        postImageMarginTabletWidth,
        postImageMarginMobileWidth,

        postTitleTag,
        postTitleGlobalTypoSwitcher,
        postTitleGlobalTypographyData,
        postTitleGlobalTypoType,
        postTitleFontFamily,
        postTitleFontSize,
        postTitleFontSizeUnits,
        postTitleFontWeight,
        postTitleFontStyle,
        postTitleTextTransform,
        postTitleTextDecoration,
        postTitleLetterSpacing,
        postTitleLetterSpacingUnits,
        postTitleLineHeight,
        postTitleLineHeightUnits,

        postTitleColorSwitcher,
        postTitleColor,
        postTitleHoverColor,

        postTitleMarginUnits,
        postTitleMarginDesktop,
        postTitleMarginTablet,
        postTitleMarginMobile,
        postTitleMarginLink,
        postTitleMarginDesktopWidth,
        postTitleMarginTabletWidth,
        postTitleMarginMobileWidth,

        postDescriptionTag,
        postDescriptionGlobalTypoSwitcher,
        postDescriptionGlobalTypographyData,
        postDescriptionGlobalTypoType,
        postDescriptionFontFamily,
        postDescriptionFontSize,
        postDescriptionFontSizeUnits,
        postDescriptionFontWeight,
        postDescriptionFontStyle,
        postDescriptionTextTransform,
        postDescriptionTextDecoration,
        postDescriptionLetterSpacing,
        postDescriptionLetterSpacingUnits,
        postDescriptionLineHeight,
        postDescriptionLineHeightUnits,

        postDescriptionColorSwitcher,
        postDescriptionColor,
        postDescriptionHoverColor,

        postDescriptionMarginUnits,
        postDescriptionMarginDesktop,
        postDescriptionMarginTablet,
        postDescriptionMarginMobile,
        postDescriptionMarginLink,
        postDescriptionMarginDesktopWidth,
        postDescriptionMarginTabletWidth,
        postDescriptionMarginMobileWidth,
        postDescriptionExcerptLength,

        showCategorySwitcher,
        postCategoryGlobalTypoSwitcher,
        postCategoryGlobalTypographyData,
        postCategoryGlobalTypoType,
        postCategoryFontFamily,
        postCategoryFontSize,
        postCategoryFontSizeUnits,
        postCategoryFontWeight,
        postCategoryFontStyle,
        postCategoryTextTransform,
        postCategoryTextDecoration,
        postCategoryLetterSpacing,
        postCategoryLetterSpacingUnits,
        postCategoryLineHeight,
        postCategoryLineHeightUnits,

        postCategoryColorSwitcher,
        postCategoryColor,
        postCategoryHoverColor,

        postCategoryBgColorSwitcher,
        postCategoryBgColor,
        postCategoryBgHoverColor,

        postCategoryBorder,
        postCategoryBorderColorSwitcher,
        postCategoryBorderColor,
        postCategoryBorderHoverColor,
        postCategoryBorderUnits,
        postCategoryDesktopBorder,
        postCategoryTabletBorder,
        postCategoryMobileBorder,
        postCategoryBorderLink,
        postCategoryBorderDesktopWidth,
        postCategoryBorderTabletWidth,
        postCategoryBorderMobileWidth,

        postCategoryBorderRadiusUnits,
        postCategoryDesktopBorderRadius,
        postCategoryTabletBorderRadius,
        postCategoryMobileBorderRadius,
        postCategoryBorderRadiusLink,
        postCategoryBorderRadiusDesktopWidth,
        postCategoryBorderRadiusTabletWidth,
        postCategoryBorderRadiusMobileWidth,

        postCategoryPaddingUnits,
        postCategoryPaddingDesktop,
        postCategoryPaddingTablet,
        postCategoryPaddingMobile,
        postCategoryPaddingLink,
        postCategoryPaddingDesktopWidth,
        postCategoryPaddingTabletWidth,
        postCategoryPaddingMobileWidth,

        postCategoryMarginUnits,
        postCategoryMarginDesktop,
        postCategoryMarginTablet,
        postCategoryMarginMobile,
        postCategoryMarginLink,
        postCategoryMarginDesktopWidth,
        postCategoryMarginTabletWidth,
        postCategoryMarginMobileWidth,
        postCategoryGap,
        postCategoryGapUnits,

        showTagSwitcher,
        postTagGlobalTypoSwitcher,
        postTagGlobalTypographyData,
        postTagGlobalTypoType,
        postTagFontFamily,
        postTagFontSize,
        postTagFontSizeUnits,
        postTagFontWeight,
        postTagFontStyle,
        postTagTextTransform,
        postTagTextDecoration,
        postTagLetterSpacing,
        postTagLetterSpacingUnits,
        postTagLineHeight,
        postTagLineHeightUnits,

        postTagColorSwitcher,
        postTagColor,
        postTagHoverColor,

        postTagBgColorSwitcher,
        postTagBgColor,
        postTagBgHoverColor,

        postTagBorder,
        postTagBorderColorSwitcher,
        postTagBorderColor,
        postTagBorderHoverColor,
        postTagBorderUnits,
        postTagDesktopBorder,
        postTagTabletBorder,
        postTagMobileBorder,
        postTagBorderLink,
        postTagBorderDesktopWidth,
        postTagBorderTabletWidth,
        postTagBorderMobileWidth,

        postTagBorderRadiusUnits,
        postTagDesktopBorderRadius,
        postTagTabletBorderRadius,
        postTagMobileBorderRadius,
        postTagBorderRadiusLink,
        postTagBorderRadiusDesktopWidth,
        postTagBorderRadiusTabletWidth,
        postTagBorderRadiusMobileWidth,

        postTagPaddingUnits,
        postTagPaddingDesktop,
        postTagPaddingTablet,
        postTagPaddingMobile,
        postTagPaddingLink,
        postTagPaddingDesktopWidth,
        postTagPaddingTabletWidth,
        postTagPaddingMobileWidth,

        postTagMarginUnits,
        postTagMarginDesktop,
        postTagMarginTablet,
        postTagMarginMobile,
        postTagMarginLink,
        postTagMarginDesktopWidth,
        postTagMarginTabletWidth,
        postTagMarginMobileWidth,

        postTagGap,
        postTagGapUnits,

        showAuthorSwitcher,
        postAuthorGap,
        postAuthorGapUnits,
        postAuthorAvatarSwitcher,
        postAuthorAvatarWidth,
        postAuthorAvatarWidthUnits,

        postAuthorAvatarBorder,
        postAuthorAvatarBorderColorSwitcher,
        postAuthorAvatarBorderColor,
        postAuthorAvatarBorderHoverColor,

        postAuthorAvatarBorderUnits,
        postAuthorAvatarDesktopBorder,
        postAuthorAvatarTabletBorder,
        postAuthorAvatarMobileBorder,
        postAuthorAvatarBorderLink,
        postAuthorAvatarBorderDesktopWidth,
        postAuthorAvatarBorderTabletWidth,
        postAuthorAvatarBorderMobileWidth,

        postAuthorAvatarBorderRadiusUnits,
        postAuthorAvatarDesktopBorderRadius,
        postAuthorAvatarTabletBorderRadius,
        postAuthorAvatarMobileBorderRadius,
        postAuthorAvatarBorderRadiusLink,
        postAuthorAvatarBorderRadiusDesktopWidth,
        postAuthorAvatarBorderRadiusTabletWidth,
        postAuthorAvatarBorderRadiusMobileWidth,

        postAuthorMarginUnits,
        postAuthorMarginDesktop,
        postAuthorMarginTablet,
        postAuthorMarginMobile,
        postAuthorMarginLink,
        postAuthorMarginDesktopWidth,
        postAuthorMarginTabletWidth,
        postAuthorMarginMobileWidth,

        postAuthorGlobalTypoSwitcher,
        postAuthorGlobalTypographyData,
        postAuthorGlobalTypoType,
        postAuthorFontFamily,
        postAuthorFontSize,
        postAuthorFontSizeUnits,
        postAuthorFontWeight,
        postAuthorFontStyle,
        postAuthorTextTransform,
        postAuthorTextDecoration,
        postAuthorLetterSpacing,
        postAuthorLetterSpacingUnits,
        postAuthorLineHeight,
        postAuthorLineHeightUnits,

        postAuthorColorSwitcher,
        postAuthorColor,
        postAuthorHoverColor,

        postAuthorPrefixSwitcher,
        postAuthorPrefix,
        postAuthorPrefixColorSwitcher,
        postAuthorPrefixColor,
        postAuthorPrefixHoverColor,

        showDateSwitcher,
        postDateGlobalTypoSwitcher,
        postDateGlobalTypographyData,
        postDateGlobalTypoType,
        postDateFontFamily,
        postDateFontSize,
        postDateFontSizeUnits,
        postDateFontWeight,
        postDateFontStyle,
        postDateTextTransform,
        postDateTextDecoration,
        postDateLetterSpacing,
        postDateLetterSpacingUnits,
        postDateLineHeight,
        postDateLineHeightUnits,
        postDateColorSwitcher,
        postDateColor,
        postDateHoverColor,


        postGlobalZIndex,
        postGridOverflow,
        postGlobalPaddingUnits,
        postGlobalPaddingDesktop,
        postGlobalPaddingTablet,
        postGlobalPaddingMobile,
        postGlobalPaddingLink,
        postGlobalDesktopPaddingWidth,
        postGlobalTabletPaddingWidth,
        postGlobalMobilePaddingWidth,

        postGlobalMarginUnits,
        postGlobalMarginDesktop,
        postGlobalMarginTablet,
        postGlobalMarginMobile,
        postGlobalMarginLink,
        postGlobalDesktopMarginWidth,
        postGlobalTabletMarginWidth,
        postGlobalMobileMarginWidth,

        postGlobalBgColorSwitcher,
        postGlobalNormalBackgroundType,
        postGlobalNormalClassicColor,
        postGlobalNormalGradientColor,
        postGlobalNormalCustomGradientSwitcher,
        postGlobalNormalCustomGradientInputValue,

        postGlobalHoverBackgroundType,
        postGlobalHoverClassicColor,
        postGlobalHoverGradientColor,
        postGlobalHoverCustomGradientSwitcher,
        postGlobalHoverCustomGradientInputValue,

        postGlobalBorder,
        postGlobalBorderColorSwitcher,
        postGlobalBorderColor,
        postGlobalBorderHoverColor,

        postGlobalBorderUnits,
        postGlobalBorderDesktop,
        postGlobalBorderTablet,
        postGlobalBorderMobile,
        postGlobalBorderLink,
        postGlobalDesktopBorderWidth,
        postGlobalTabletBorderWidth,
        postGlobalMobileBorderWidth,

        postGlobalBorderRadiusUnits,
        postGlobalBorderRadiusDesktop,
        postGlobalBorderRadiusTablet,
        postGlobalBorderRadiusMobile,
        postGlobalBorderRadiusLink,
        postGlobalDesktopBorderRadiusWidth,
        postGlobalTabletBorderRadiusWidth,
        postGlobalMobileBorderRadiusWidth,

        postGlobalBoxShadowSwitcher,
        postGlobalBoxShadowValues,
        postGlobalBoxShadowCssValue,
        postGlobalBoxShadowHoverValues,
        postGlobalBoxShadowHoverCssValue,

        loadMoreSwitcher,
        loadMoreText,
        loadMoreIconAlign,
        loadMoreIcon,

        loadMoreButtonBgColorSwitcher,
        loadMoreButtonNormalBackgroundType,
        loadMoreButtonNormalClassicColor,
        loadMoreButtonNormalGradientColor,
        loadMoreButtonNormalCustomGradientSwitcher,
        loadMoreButtonNormalCustomGradientInputValue,
        loadMoreButtonHoverBackgroundType,
        loadMoreButtonHoverClassicColor,
        loadMoreButtonHoverGradientColor,
        loadMoreButtonHoverCustomGradientSwitcher,
        loadMoreButtonHoverCustomGradientInputValue,

        loadMoreButtonPaddingUnits,
        loadMoreButtonDesktopPadding,
        loadMoreButtonTabletPadding,
        loadMoreButtonMobilePadding,
        loadMoreButtonPaddingLink,
        loadMoreButtonDesktopPaddingWidth,
        loadMoreButtonTabletPaddingWidth,
        loadMoreButtonMobilePaddingWidth,

        loadMoreButtonBorder,
        loadMoreButtonBorderColorSwitcher,
        loadMoreButtonBorderColor,
        loadMoreButtonBorderHoverColor,

        loadMoreButtonBorderUnits,
        loadMoreButtonDesktopBorder,
        loadMoreButtonTabletBorder,
        loadMoreButtonMobileBorder,
        loadMoreButtonBorderLink,
        loadMoreButtonDesktopBorderWidth,
        loadMoreButtonTabletBorderWidth,
        loadMoreButtonMobileBorderWidth,

        loadMoreButtonBorderRadiusUnits,
        loadMoreButtonDesktopBorderRadius,
        loadMoreButtonTabletBorderRadius,
        loadMoreButtonMobileBorderRadius,
        loadMoreButtonBorderRadiusLink,
        loadMoreButtonDesktopBorderRadiusWidth,
        loadMoreButtonTabletBorderRadiusWidth,
        loadMoreButtonMobileBorderRadiusWidth,

        loadMoreTextGlobalTypoSwitcher,
        loadMoreTextGlobalTypographyData,
        loadMoreTextGlobalTypoType,
        loadMoreTextFontFamily,
        loadMoreTextFontSize,
        loadMoreTextFontSizeUnits,
        loadMoreTextFontWeight,
        loadMoreTextFontStyle,
        loadMoreTextTransform,
        loadMoreTextDecoration,
        loadMoreTextLetterSpacing,
        loadMoreTextLetterSpacingUnits,
        loadMoreTextLineHeight,
        loadMoreTextLineHeightUnits,

        loadMoreTextColorSwitcher,
        loadMoreTextColor,
        loadMoreTextHoverColor,
        loadMoreloaderColor,
        
        loadMoreIconSize,
        loadMoreIconSizeUnits,
        loadMoreIconColorSwitcher,
        loadMoreIconColor,
        loadMoreIconHoverColor,
        loadMoreIconMarginUnits,
        loadMoreIconDesktopMargin,
        loadMoreIconTabletMargin,
        loadMoreIconMobileMargin,
        loadMoreIconMarginLink,
        loadMoreIconDesktopMarginWidth,
        loadMoreIconTabletMarginWidth,
        loadMoreIconMobileMarginWidth,

        // Position
        postGridPositionType,
        postGridHZOrientationType,
        postGridVROrientationType,
        postGridHZLeftOffset,
        postGridHZLeftOffsetUnits,
        postGridHZRightOffset,
        postGridHZRightOffsetUnits,
        postGridVRTopOffset,
        postGridVRTopOffsetUnits,
        postGridVRBottomOffset,
        postGridVRBottomOffsetUnits,

        /** Start Read More */
        readMoreSwitcher,
        readMoreText,
        readMoreIconAlign,
        readMoreIcon,
        readMoreIconImageUrl,
        readMoreIconImageAlt,
        readMoreIconImageID,
        /** End Read More */

        /** Start Read More Button style */
        buttonWidth,
        buttonWidthUnits,

        buttonGlobalTypoSwitcher,
        buttonGlobalTypographyData,
        buttonGlobalTypoType,
        buttonGlobalTypoOption,
        buttonFontFamily,
        buttonFontSize,
        buttonFontSizeUnits,
        buttonFontWeight,
        buttonFontStyle,
        buttonTextTransform,
        buttonTextDecoration,
        buttonLetterSpacing,
        buttonLetterSpacingUnits,
        buttonLineHeight,
        buttonLineHeightUnits,

        buttonColorSwitcher,
        buttonColor,
        buttonHoverColor,
        buttonBgColorSwitcher,
        buttonBgColor,
        buttonBgHoverColor,
        buttonBorder,
        buttonBorderColorSwitcher,
        buttonBorderColor,
        buttonBorderHoverColor,

        buttonBorderUnits,
        buttonDesktopBorderWidth,
        buttonTabBorderWidth,
        buttonMobileBorderWidth,
        buttonBorderLink,
        buttonDesktopBorderWidthStr,
        buttonTabletBorderWidthStr,
        buttonMobileBorderWidthStr,

        buttonBorderRadiusUnits,
        buttonDesktopBorderRadiusWidth,
        buttonTabBorderRadiusWidth,
        buttonMobileBorderRadiusWidth,
        buttonBorderRadiusLink,
        buttonDesktopBorderRadiusStr,
        buttonTabletBorderRadiusStr,
        buttonMobileBorderRadiusStr,

        buttonBoxShadowSwitcher,
        buttonBoxShadowValues,
        buttonBoxShadowCssValue,
        buttonBoxShadowHoverValues,
        buttonBoxShadowHoverCssValue,

        buttonPaddingUnits,
        buttonDesktopPadding,
        buttonTabPadding,
        buttonMobilePadding,
        buttonPaddingLink,
        buttonDesktopPaddingStr,
        buttonTabletPaddingStr,
        buttonMobilePaddingStr,

        buttonMarginUnits,
        buttonDesktopMargin,
        buttonTabMargin,
        buttonMobileMargin,
        buttonMarginLink,
        buttonDesktopMarginStr,
        buttonTabletMarginStr,
        buttonMobileMarginStr,

        buttonIconSize,
        buttonIconSizeUnits,
        buttonIconColorSwitcher,
        buttonIconColor,
        buttonIconHoverColor,
        buttonIconBgColorSwitcher,
        buttonIconBgColor,
        buttonIconBgHoverColor,
        buttonIconBorder,
        buttonIconBorderColorSwitcher,
        buttonIconBorderColor,
        buttonIconBorderHoverColor,
        buttonIconBorderUnits,
        buttonIconBorderDesktop,
        buttonIconBorderTablet,
        buttonIconBorderMobile,
        buttonIconBorderLink,
        buttonIconBorderDesktopWidth,
        buttonIconBorderTabletWidth,
        buttonIconBorderMobileWidth,

        buttonIconBorderRadiusUnits,
        buttonIconBorderRadiusDesktop,
        buttonIconBorderRadiusTablet,
        buttonIconBorderRadiusMobile,
        buttonIconBorderRadiusLink,
        buttonIconBorderRadiusDesktopWidth,
        buttonIconBorderRadiusTabletWidth,
        buttonIconBorderRadiusMobileWidth,

        buttonIconGapSize,
        buttonIconGapUnits,
        buttonIconRotateSwitcher,
        buttonIconRotate,
        buttonIconRotateHover,
        buttonImageRotateSwitcher,
        buttonImageRotate,
        buttonImageRotateHover,

        buttonIconImageWidth,
        buttonIconImageWidthUnits,
        buttonIconImageHeight,
        buttonIconImageHeightUnits,
        /** Read More Button */

        /** Start Skeleton Settings */
        postGridSkeletonBgColor,
        postGridSkeletonHighlightBgColor,
        /** End Skeleton Settings */

        /** Start Pagination */
        loadMoreType,
        paginationPrevNextType,
        paginationPrevTxt,
        paginationPrevIcon, 
        paginationNextTxt,
        paginationNextIcon,
        /** End Pagination */

        /** Pagination Arrow */
        paginationArrowSize,
        paginationArrowSizeUnits,

        paginationArrowBgColorSwitcher,
        paginationArrowNormalBackgroundType,
        paginationArrowNormalClassicColor,
        paginationArrowNormalGradientColor,
        paginationArrowNormalCustomGradientSwitcher,
        paginationArrowNormalCustomGradientInputValue,
        paginationArrowHoverBackgroundType,
        paginationArrowHoverClassicColor,
        paginationArrowHoverGradientColor,
        paginationArrowHoverCustomGradientSwitcher,
        paginationArrowHoverCustomGradientInputValue,

        paginationArrowBorder,
        paginationArrowBorderColorSwitcher,
        paginationArrowBorderColor,
        paginationArrowBorderHoverColor,

        paginationArrowBorderUnits,
        paginationArrowDesktopBorder,
        paginationArrowTabletBorder,
        paginationArrowMobileBorder,
        paginationArrowBorderLink,
        paginationArrowDesktopBorderWidth,
        paginationArrowTabletBorderWidth,
        paginationArrowMobileBorderWidth,

        paginationArrowBorderRadiusUnits,
        paginationArrowDesktopBorderRadius,
        paginationArrowTabletBorderRadius,
        paginationArrowMobileBorderRadius,
        paginationArrowBorderRadiusLink,
        paginationArrowDesktopBorderRadiusWidth,
        paginationArrowTabletBorderRadiusWidth,
        paginationArrowMobileBorderRadiusWidth,

        paginationArrowTextGlobalTypoSwitcher,
        paginationArrowTextGlobalTypographyData,
        paginationArrowTextGlobalTypoType,
        paginationArrowTextGlobalTypoOption,
        paginationArrowTextFontFamily,
        paginationArrowTextFontSize,
        paginationArrowTextFontSizeUnits,
        paginationArrowTextFontWeight,
        paginationArrowTextFontStyle,
        paginationArrowTextTransform,
        paginationArrowTextDecoration,
        paginationArrowTextLetterSpacing,
        paginationArrowTextLetterSpacingUnits,
        paginationArrowTextLineHeight,
        paginationArrowTextLineHeightUnits,

        paginationArrowTextColorSwitcher,
        paginationArrowTextColor,
        paginationArrowTextHoverColor,

        paginationPrevNextWidth,
        paginationPrevNextWidthUnits,
        paginationArrowIconColorSwitcher,
        paginationArrowIconColor,
        paginationArrowIconHoverColor,

        /** Pagination Button */
        paginationBtnSize,
        paginationBtnSizeUnits,
        paginationBtnGap,
        paginationBtnGapUnits,

        paginationBtnBgColorSwitcher,
        paginationBtnNormalBackgroundType,
        paginationBtnNormalClassicColor,
        paginationBtnNormalGradientColor,
        paginationBtnNormalCustomGradientSwitcher,
        paginationBtnNormalCustomGradientInputValue,
        paginationBtnHoverBackgroundType,
        paginationBtnHoverClassicColor,
        paginationBtnHoverGradientColor,
        paginationBtnHoverCustomGradientSwitcher,
        paginationBtnHoverCustomGradientInputValue,

        paginationActiveBtnTextColorSwitcher,
        paginationActiveBtnTextColor,
        paginationActiveBtnTextHoverColor,

        paginationActiveBtnBgColorSwitcher,
        paginationActiveBtnNormalBackgroundType,
        paginationActiveBtnNormalClassicColor,
        paginationActiveBtnNormalGradientColor,
        paginationActiveBtnNormalCustomGradientSwitcher,
        paginationActiveBtnNormalCustomGradientInputValue,
        paginationActiveBtnHoverBackgroundType,
        paginationActiveBtnHoverClassicColor,
        paginationActiveBtnHoverGradientColor,
        paginationActiveBtnHoverCustomGradientSwitcher,
        paginationActiveBtnHoverCustomGradientInputValue,

        paginationBtnBorder,
        paginationBtnBorderColorSwitcher,
        paginationBtnBorderColor,
        paginationBtnBorderHoverColor,

        paginationBtnBorderUnits,
        paginationBtnDesktopBorder,
        paginationBtnTabletBorder,
        paginationBtnMobileBorder,
        paginationBtnBorderLink,
        paginationBtnDesktopBorderWidth,
        paginationBtnTabletBorderWidth,
        paginationBtnMobileBorderWidth,

        paginationBtnBorderRadiusUnits,
        paginationBtnDesktopBorderRadius,
        paginationBtnTabletBorderRadius,
        paginationBtnMobileBorderRadius,
        paginationBtnBorderRadiusLink,
        paginationBtnDesktopBorderRadiusWidth,
        paginationBtnTabletBorderRadiusWidth,
        paginationBtnMobileBorderRadiusWidth,

        paginationBtnTextGlobalTypoSwitcher,
        paginationBtnTextGlobalTypographyData,
        paginationBtnTextGlobalTypoType,
        paginationBtnTextGlobalTypoOption,
        paginationBtnTextFontFamily,
        paginationBtnTextFontSize,
        paginationBtnTextFontSizeUnits,
        paginationBtnTextFontWeight,
        paginationBtnTextFontStyle,
        paginationBtnTextTransform,
        paginationBtnTextDecoration,
        paginationBtnTextLetterSpacing,
        paginationBtnTextLetterSpacingUnits,
        paginationBtnTextLineHeight,
        paginationBtnTextLineHeightUnits,

        paginationBtnTextColorSwitcher,
        paginationBtnTextColor,
        paginationBtnTextHoverColor,
    ]);

    const customCss = getCustomCss(postGridGlobalCustomCSS, `.${blockId}`);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss]);

    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();



    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <div className="fb-setting-general-wrapper">

                <PanelBody
                    title={__("General", "frontis-blocks")}
                    initialOpen={true}
                >
                    <SelectControl
                        label={__("Premade Style", "frontis-blocks")}
                        options={PREMADE_STYLE}
                        value={premadeStyle}
                        onChange={(value) => setAttributes({ premadeStyle: value })}
                    />
                    <BaseControl
                        label={__("Element Visibility", "frontis-blocks")}
                        className="fb-setting-show-hide-elements"
                    >
                        <ToggleControl
                            label={__("Show Author", "frontis-blocks")}
                            checked={showAuthorSwitcher}
                            onChange={(value) => setAttributes({ showAuthorSwitcher: value })}
                        />
                        <ToggleControl
                            label={__("Show Excerpt", "frontis-blocks")}
                            checked={showExcerptSwitcher}
                            onChange={(value) => setAttributes({ showExcerptSwitcher: value })}
                        />
                        <ToggleControl
                            label={__("Show Category", "frontis-blocks")}
                            checked={showCategorySwitcher}
                            onChange={(value) => setAttributes({ showCategorySwitcher: value })}
                        />
                        {showCategorySwitcher && (
                            <ToggleControl
                                label={__("Category Link", "frontis-blocks")}
                                checked={categoryLinkSwitcher}
                                onChange={(value) => setAttributes({ categoryLinkSwitcher: value })}
                            />
                        )}
                        <ToggleControl
                            label={__("Show Tag", "frontis-blocks")}
                            checked={showTagSwitcher}
                            onChange={(value) => setAttributes({ showTagSwitcher: value })}
                        />
                        <ToggleControl
                            label={__("Show Date", "frontis-blocks")}
                            checked={showDateSwitcher}
                            onChange={(value) => setAttributes({ showDateSwitcher: value })}
                        />
                        <ToggleControl
                            label={__("Show Load More Button", "frontis-blocks")}
                            checked={loadMoreSwitcher}
                            onChange={(value) => setAttributes({ loadMoreSwitcher: value })}
                        />

                        <ToggleControl
                            label={__("Show Read More Button", "frontis-blocks")}
                            checked={readMoreSwitcher}
                            onChange={(value) => setAttributes({ readMoreSwitcher: value })}
                        />
                        <ToggleControl
                            label={__("Wrapper Link", "frontis-blocks")}
                            checked={postWrapperLinkSwitcher}
                            onChange={(value) => setAttributes({ postWrapperLinkSwitcher: value })}
                        />
                    </BaseControl>
                    
                </PanelBody> 
                <PanelBody
                    title={__("Query", "frontis-blocks")}
                    initialOpen={true}
                >
                    <BaseControl
                        label={__("Post type", "frontis-blocks")} 
                        id="fb-setting-post-type"
                        className="fb-setting-post-type"
                    >
                        <Select2 
                            options={postTypeOptions}
                            value={selectedPostType}
                            onChange={handlePostTypeChange}
                            className="fb-select2-control"
                        />
                    </BaseControl>

                    <FB_IncludeExcludeSwitcherControl
                        label={__("Author", "frontis-blocks")}
                        globalSwitcher={selectedAuthorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({selectedAuthorSwitcher: value})}
                    />

                    {postType && selectedAuthorSwitcher === 'include' &&
                        <BaseControl
                            label={__("Include Authors", "frontis-blocks")}
                            id="fb-setting-author"
                            className="fb-setting-author"
                        >
                            <Select2 
                                options={authorOptions} 
                                value={selectedAuthorOption}
                                onChange={handleAuthorSelectedChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }

                    {postType && selectedAuthorSwitcher === 'exclude' &&
                        <BaseControl
                            label={__("Exclude Authors", "frontis-blocks")}
                            id="fb-setting-author"
                            className="fb-setting-author"
                        >
                            <Select2 
                                options={authorOptions} 
                                value={deSelectedAuthorOption}
                                onChange={handleDeSelectedAuthorChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }

                    <FB_IncludeExcludeSwitcherControl
                        label={__("Category", "frontis-blocks")}
                        globalSwitcher={selectedCatSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({selectedCatSwitcher: value})}
                    />
        
                    {postType && selectedCatSwitcher === 'include' &&
                        <BaseControl
                            label={__("Include Categories", "frontis-blocks")}
                            id="fb-setting-category"
                            className="fb-setting-category"
                        >
                            <Select2 
                                options={taxOptions} 
                                value={selectedOption}
                                onChange={handleCategoryChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }

                    {postType && selectedCatSwitcher === 'exclude' &&
                        <BaseControl
                            label={__("Exclude Categories", "frontis-blocks")}
                            id="fb-setting-category"
                            className="fb-setting-category"
                        >
                            <Select2 
                                options={taxOptions} 
                                value={deSelectedOption}
                                onChange={handleDeSelectedCategoryChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }

                    <FB_IncludeExcludeSwitcherControl
                        label={__("Tag", "frontis-blocks")}
                        globalSwitcher={selectedTagSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({selectedTagSwitcher: value})}
                    />

                    {postType && selectedTagSwitcher === 'include' &&
                        <BaseControl
                            label={__("Include Tags", "frontis-blocks")}
                            id="fb-setting-category"
                            className="fb-setting-category"
                        >
                            <Select2 
                                options={tagOptions} 
                                value={selectedTagOption}
                                onChange={handleTagChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }

                    {postType && selectedTagSwitcher === 'exclude' &&
                        <BaseControl
                            label={__("Exclude Tags", "frontis-blocks")}
                            id="fb-setting-category"
                            className="fb-setting-category"
                        >
                            <Select2 
                                options={tagOptions} 
                                value={deSelectedTagOption}
                                onChange={handleDeSelectedTagChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }
                    
                    <BaseControl
                        label={__("Order By", "frontis-blocks")}
                        id="fb-setting-order-by"
                        className="fb-setting-order-by"
                    >
                        <Select2 
                            options={[
                                { value: "date", label: "Date" },
                                { value: "author", label: "Author" },
                                { value: "title", label: "Title" },
                                { value: "modified", label: "Last Modified" }
                            ]}
                            value={selectedOrderBy}
                            onChange={handleOrderByChange}
                            className="fb-select2-control"
                        />
                    </BaseControl>
                    
                    <BaseControl
                        label={__("Sort Order", "frontis-blocks")}
                        id="fb-setting-sort-order"
                        className="fb-setting-sort-order"
                    >
                        <Select2 
                            options={[
                                { value: "asc", label: "ASC" },
                                { value: "desc", label: "DESC" }
                            ]}
                            value={selectedSortOrder}
                            onChange={handleSortOrderChange}
                            className="fb-select2-control"
                        />
                    </BaseControl>

                    <RangeControl
                        label={__("Post per page", "frontis-blocks")}
                        value={postPerPage}
                        onChange={(value) => setAttributes({ postPerPage: value })}
                        min={1}
                        max={100}
                        step={1}
                        resetFallbackValue={6}
                    />
                    <ToggleControl
                        label={__("Custom Permalink", "frontis-blocks")}
                        checked={customPermalinkSwitcher}
                        onChange={(value) => setAttributes({ customPermalinkSwitcher: value })}
                    />
                    {customPermalinkSwitcher && (
                        <TextControl
                            label={__("Custom Permalink", "frontis-blocks")}
                            value={customPermalink}
                            onChange={(value) => setAttributes({ customPermalink: value })}
                            help={__("Adds a custom prefix to the post URL (e.g., '/news/post-slug'). Applies on frontend only.", "frontis-blocks")}
                        />
                    )}
                </PanelBody>

                <PanelBody
                    title={__("Post Switcher", "frontis-blocks")}
                    initialOpen={false}
                >
                    <div className="fb-setting-switcher-container">
                        <BaseControl
                            className="fb-setting-switcher-panel-wrapper"
                        >
                            <ButtonGroup className="fb-setting-switcher-panel-btn">
                                {POST_SWITCHER.map((item, key) => (
                                    <Button
                                key={key}
                                        onClick={() => setAttributes({postSwitcher: item.value})} 
                                        className={`fb-setting-switcher-panel-btn-switcher ${postSwitcher === item.value ? 'active' : ''}`}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                    </div>
                    {postSwitcher === 'grid' && (
                        <>
                            <FB_Range
                                min={1}
                                max={6}
                                label={__("Columns", "frontis-blocks")}
                                rangeValue={gridColumnsPerSection}
                                onChangeHandler={(value) => setAttributes({ gridColumnsPerSection: value })}
                                deviceType={deviceType}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"3"}
                                isRangeUnit={false}
                            />

                            <FB_Range
                                min={1}
                                max={200}
                                label={__("Row Gap", "frontis-blocks")}
                                rangeValue={gridRowGap}
                                onChangeHandler={(value) => setAttributes({ gridRowGap: value })}
                                rangeUnitHandler={(value) => setAttributes({ gridGapUnits: value })}
                                deviceType={deviceType}
                                units={gridGapUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"30"}
                            />

                            <FB_Range
                                min={1}
                                max={200}
                                label={__("Column Gap", "frontis-blocks")}
                                rangeValue={gridColumnGap}
                                onChangeHandler={(value) => setAttributes({ gridColumnGap: value })}
                                rangeUnitHandler={(value) => setAttributes({ gridGapUnits: value })} 
                                deviceType={deviceType}
                                units={gridGapUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"30"}
                            />
                        </>
                    )}

                    {postSwitcher === 'list' && (
                        <>
                            <FB_Range
                                min={1}
                                max={200}
                                label={__("Row Gap", "frontis-blocks")}
                                rangeValue={listRowGap}
                                onChangeHandler={(value) => setAttributes({ listRowGap: value })}
                                rangeUnitHandler={(value) => setAttributes({ listGapUnits: value })}
                                deviceType={deviceType}
                                units={listGapUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"30"}
                            />

                            <FB_Range
                                min={1}
                                max={100}
                                label={__("Image Spacing", "frontis-blocks")}
                                rangeValue={listImageSpacing}
                                onChangeHandler={(value) => setAttributes({ listImageSpacing: value })}
                                rangeUnitHandler={(value) => setAttributes({ listGapUnits: value })}
                                deviceType={deviceType}
                                units={listGapUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"40"}
                            />
                        </>
                    )}
                </PanelBody>

                <PanelBody
                        title={__("Filter By Taxonomy", "frontis-blocks")}
                        initialOpen={false}
                    >

                        <ToggleControl
                            label={__("Filter", "frontis-blocks")}
                            checked={showFilterByTaxonomy}
                            onChange={(value) => setAttributes({ showFilterByTaxonomy: value })}
                        />

                        {showFilterByTaxonomy && (

                            <>
                            <BaseControl
                                id="fb-setting-taxonomy"
                                className="fb-setting-taxonomy"
                            >
                                <SelectControl
                                    label={__("Select Taxonomy Type", "frontis-blocks")}
                                    value={filterSelectedTaxonomy}
                                    options={TAXONOMY_OPTIONS}
                                    onChange={(value) => setAttributes({ filterSelectedTaxonomy: value })}
                                />

                                {filterSelectedTaxonomy === 'category' && (
                                    <Select2 
                                        options={filterTaxOptions} 
                                        value={filterSelectedOption}
                                        onChange={handleFilterCategoryChange}
                                        isMulti
                                        className="fb-select2-control"
                                    />
                                )}
                                {filterSelectedTaxonomy === 'tag' && ( 
                                    <Select2 
                                        options={filterTagOptions} 
                                        value={filterSelectedTagOption}
                                        onChange={handleFilterTagChange}
                                        isMulti
                                        className="fb-select2-control"
                                    />
                                )}
                                <br/>
                                <ToggleControl
                                    label={__("Show Selected Count", "frontis-blocks")}
                                    checked={filerselectedCountSwitcher}
                                    onChange={(value) => setAttributes({ filerselectedCountSwitcher: value })}
                                />
                                </BaseControl>
                            </>

                        )}

                </PanelBody>  
                {loadMoreSwitcher && (
                    <PanelBody
                        title={__("Pagination", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Pagination Type", "frontis-blocks")}
                            value={loadMoreType}
                            options={PAGINATION_TYPE}
                            onChange={(value) => setAttributes({ loadMoreType: value })}
                        />
                        {loadMoreType === 'button' && (
                            <>
                                <TextControl
                                    label={__("Load More Text", "frontis-blocks")}
                                    value={loadMoreText}
                                    onChange={(value) => setAttributes({ loadMoreText: value })}
                                />
                                <BaseControl
                                    label={__("Icon", "frontis-blocks")}
                                        id="fb-setting-text-alignment"
                                        className="fb-setting-text-alignment"
                                >
                                    <ButtonGroup
                                        className="fb-setting-text-alignment-group-btn"
                                    >
                                        {ICON_ALIGN.map((item, key) => (
                                            <Button
                                                key={key}
                                                onClick={() => setAttributes({ loadMoreIconAlign: item.value })}
                                                className={`fb-setting-text-alignment-single-btn ${loadMoreIconAlign === item.value ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                    {(loadMoreIconAlign === 'icon') && (
                                        <FBIconPicker value={loadMoreIcon} setIconHandler={iconHandler} /> 
                                    )}
                                </BaseControl>
                            </>
                        )}

                        {loadMoreType === 'pagination' && (
                            <>
                                <SelectControl
                                    label={__("Type", "frontis-blocks")}
                                    value={paginationPrevNextType}
                                    options={PAGINATION_PREV_NEXT_TYPE}
                                    onChange={(value) => setAttributes({ paginationPrevNextType: value })}
                                />

                                {paginationPrevNextType === 'text' && (
                                    <>
                                        <TextControl
                                            label={__("Prev Text", "frontis-blocks")}
                                            value={paginationPrevTxt}
                                            onChange={(value) => setAttributes({ paginationPrevTxt: value })}
                                        />
                                        <TextControl
                                            label={__("Next Text", "frontis-blocks")}
                                            value={paginationNextTxt}
                                            onChange={(value) => setAttributes({ paginationNextTxt: value })}
                                        />
                                    </>
                                )}

                                {paginationPrevNextType === 'icon' && (
                                    <>
                                        <BaseControl
                                            label={__("Prev Icon", "frontis-blocks")}
                                        >
                                            <FBIconPicker value={paginationPrevIcon} setIconHandler={prevIconHandler} />
                                        </BaseControl>

                                
                                        <BaseControl
                                            label={__("Next Icon", "frontis-blocks")}
                                        >
                                            <FBIconPicker value={paginationNextIcon} setIconHandler={nextIconHandler} />
                                        </BaseControl>
                                    </>
                                )}
                            </>
                        )}

                    </PanelBody>
                )}  

                {readMoreSwitcher && (
                    <PanelBody
                        title={__("Read More", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <TextControl
                            label={__("Read More Text", "frontis-blocks")}
                            value={readMoreText}
                            onChange={(value) => setAttributes({ readMoreText: value })}
                        />
                        <BaseControl
                            label={__("Icon", "frontis-blocks")}
                            id="fb-setting-text-alignment"
                            className="fb-setting-text-alignment"
                        >
                            <ButtonGroup
                                className="fb-setting-text-alignment-group-btn"
                            >
                                {READ_MORE_ICON_ALIGN.map((item, key) => (
                                    <Button
                                        key={key}
                                        onClick={() => setAttributes({ readMoreIconAlign: item.value })}
                                        className={`fb-setting-text-alignment-single-btn ${readMoreIconAlign === item.value ? 'active' : ''}`}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                            {(readMoreIconAlign === 'icon-text' || readMoreIconAlign === 'icon-only') && (
                                <FBIconPicker value={readMoreIcon} setIconHandler={readMoreIconHandler} /> 
                            )}

                            {(readMoreIconAlign === 'image') && (
                                <FB_ImageControl 
                                    globalImageUrl={readMoreIconImageUrl}
                                    setglobalImageUrl={(value) => setAttributes({ readMoreIconImageUrl: value })}
                                    globalImageAlt={readMoreIconImageAlt}
                                    setglobalImageAlt={(value) => setAttributes({ readMoreIconImageAlt: value })}
                                    globalImageID={readMoreIconImageID}
                                    setglobalImageID={(value) => setAttributes({ readMoreIconImageID: value })}
                                    isImageSize={false}
                                />
                            )}

                        </BaseControl>
                        
                    </PanelBody>
                )}
            </div>
        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>
            <PanelBody title={__("Post Grid Item", "frontis-blocks")} initialOpen={false}>

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={postGridBgColorSwitcher}  
                    setBgColorSwitcher={(value) => setAttributes({ postGridBgColorSwitcher: value })}
                    
                    normalBackgroundType={postGridNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ postGridNormalBackgroundType: value })}
                    normalClassicColor={postGridNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ postGridNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={postGridNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ postGridNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={postGridNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ postGridNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={postGridNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ postGridNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={postGridHoverBackgroundType} 
                    setHoverBackgroundType={(value) => setAttributes({ postGridHoverBackgroundType: value })}
                    hoverClassicColor={postGridHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ postGridHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={postGridHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ postGridHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={postGridHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ postGridHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={postGridHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ postGridHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostGridPaddingUnitsHandler}
                    spacingUnits={postGridPaddingUnits}
                    spacingDesktop={postGridPaddingDesktop}
                    spacingTablet={postGridPaddingTablet}
                    spacingMobile={postGridPaddingMobile}
                    handleSpacingUnitHandler={handlePostGridPaddingUnitChange}
                    spacingCombineBtn={postGridPaddingLink}
                    spacingCombineBtnHandler={handlePostGridPaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostGridMarginUnitsHandler}
                    spacingUnits={postGridMarginUnits}
                    spacingDesktop={postGridMarginDesktop}
                    spacingTablet={postGridMarginTablet}
                    spacingMobile={postGridMarginMobile}
                    handleSpacingUnitHandler={handlePostGridMarginUnitChange}
                    spacingCombineBtn={postGridMarginLink}
                    spacingCombineBtnHandler={handlePostGridMarginCombineBtn}
                    setAttributes={setAttributes}
                />
                <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={postGridBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ postGridBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border", "frontis-blocks")}
                    globalSwitcher={postGridBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postGridBorderColorSwitcher: value })}
                />

                {postGridBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postGridBorderColor}
                        setGlobalColor={(value) => setAttributes({ postGridBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {postGridBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postGridBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ postGridBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostGridBorderUnitsHandler}
                    spacingUnits={postGridBorderUnits}
                    spacingDesktop={postGridBorderDesktop}
                    spacingTablet={postGridBorderTablet}
                    spacingMobile={postGridBorderMobile}
                    handleSpacingUnitHandler={handlePostGridBorderUnitChange}
                    spacingCombineBtn={postGridBorderLink}
                    spacingCombineBtnHandler={handlePostGridBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostGridBorderRadiusUnitsHandler}
                    spacingUnits={postGridBorderRadiusUnits}
                    spacingDesktop={postGridBorderRadiusDesktop}
                    spacingTablet={postGridBorderRadiusTablet}
                    spacingMobile={postGridBorderRadiusMobile}
                    handleSpacingUnitHandler={handlePostGridBorderRadiusUnitChange}
                    spacingCombineBtn={postGridBorderRadiusLink}
                    spacingCombineBtnHandler={handlePostGridBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={postGridBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postGridBoxShadowSwitcher: value })}
                />

                {postGridBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ postGridBoxShadowValues: value })}
                        initialShadowValue={postGridBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ postGridBoxShadowCssValue: value })}
                    />
                )}

                {postGridBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ postGridBoxShadowHoverValues: value })}
                        initialShadowValue={postGridBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ postGridBoxShadowHoverCssValue: value })}
                    />
                )}
            </PanelBody>

            <PanelBody title={__("Thumbnail", "frontis-blocks")} initialOpen={false}>

                <ToggleControl
                    label={__("Thumbnail Link", "frontis-blocks")}
                    checked={thumbnailLinkSwitcher}
                    onChange={(value) => setAttributes({ thumbnailLinkSwitcher: value })}
                />
                
                <SelectControl
                    label={__("Image Size", "frontis-blocks")}
                    value={postImageSize}
                    options={imageSizeOptions}
                    onChange={(value) => setAttributes({ postImageSize: value })}
                />

                <FB_Range
                    min={1}
                    max={postImageWidthUnits[deviceType] === "%" ? 100 : 1000}
                    label={__("Width", "frontis-blocks")}
                    rangeValue={postImageWidth}
                    onChangeHandler={(value) => setAttributes({ postImageWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ postImageWidthUnits: value })}
                    deviceType={deviceType}
                    units={postImageWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"100"}
                />
                <FB_Range
                    min={1}
                    max={postImageHeightUnits[deviceType] === "%" ? 100 : 1000}
                    label={__("Height", "frontis-blocks")}
                    rangeValue={postImageHeight}
                    onChangeHandler={(value) => setAttributes({ postImageHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ postImageHeightUnits: value })}
                    deviceType={deviceType}
                    units={postImageHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"400"}
                />
                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={postImageBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ postImageBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border", "frontis-blocks")}
                    globalSwitcher={postImageBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postImageBorderColorSwitcher: value })}
                />

                {postImageBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postImageBorderColor}
                        setGlobalColor={(value) => setAttributes({ postImageBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {postImageBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postImageBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ postImageBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}


                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostImageBorderUnitsHandler}
                    spacingUnits={postImageBorderUnits}
                    spacingDesktop={postImageDesktopBorder}
                    spacingTablet={postImageTabletBorder}
                    spacingMobile={postImageMobileBorder}
                    handleSpacingUnitHandler={handlePostImageBorderUnitChange}
                    spacingCombineBtn={postImageBorderLink}
                    spacingCombineBtnHandler={handlePostImageBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostImageBorderRadiusUnitsHandler}
                    spacingUnits={postImageBorderRadiusUnits}
                    spacingDesktop={postImageDesktopBorderRadius}
                    spacingTablet={postImageTabletBorderRadius}
                    spacingMobile={postImageMobileBorderRadius}
                    handleSpacingUnitHandler={handlePostImageBorderRadiusUnitChange}
                    spacingCombineBtn={postImageBorderRadiusLink}
                    spacingCombineBtnHandler={handlePostImageBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostImageMarginUnitsHandler}
                    spacingUnits={postImageMarginUnits}
                    spacingDesktop={postImageMarginDesktop}
                    spacingTablet={postImageMarginTablet}
                    spacingMobile={postImageMarginMobile}
                    handleSpacingUnitHandler={handlePostImageMarginUnitChange}
                    spacingCombineBtn={postImageMarginLink}
                    spacingCombineBtnHandler={handlePostImageMarginCombineBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>
            <PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>

                <ToggleControl
                    label={__("Title Link", "frontis-blocks")}
                    checked={titleLinkSwitcher}
                    onChange={(value) => setAttributes({ titleLinkSwitcher: value })}
                />

                <FB_HtmlTagControl
                    label={__("Title Tag", "frontis-blocks")}
                    globalHtmlTag={postTitleTag}
                    setGlobalHtmlTag={(value) => setAttributes({ postTitleTag: value })}
                />

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={postTitleGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ postTitleGlobalTypographyData: value })}

                    globalTypoType={postTitleGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            postTitleGlobalTypoType: value, 
                            postTitleGlobalTypoSwitcher: value === 'default' ? {...postTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...postTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={postTitleGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ postTitleGlobalTypoOption: value })}

                    fontFamily={postTitleFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ postTitleFontFamily: value, postTitleGlobalTypoSwitcher: {...postTitleGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={postTitleFontSize}
                    onChangeFontSize={(value) => setAttributes({ postTitleFontSize: value, postTitleGlobalTypoSwitcher: {...postTitleGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={postTitleFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ postTitleFontSizeUnits: value })}

                    fontWeight={postTitleFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ postTitleFontWeight: value, postTitleGlobalTypoSwitcher: {...postTitleGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={postTitleFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ postTitleFontStyle: value, postTitleGlobalTypoSwitcher: {...postTitleGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={postTitleTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ postTitleTextTransform: value, postTitleGlobalTypoSwitcher: {...postTitleGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={postTitleTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ postTitleTextDecoration: value, postTitleGlobalTypoSwitcher: {...postTitleGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={postTitleLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ postTitleLetterSpacing: value, postTitleGlobalTypoSwitcher: {...postTitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={postTitleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ postTitleLetterSpacingUnits: value })}

                    lineHeight={postTitleLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ postTitleLineHeight: value, postTitleGlobalTypoSwitcher: {...postTitleGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={postTitleLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ postTitleLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={postTitleColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postTitleColorSwitcher: value })}
                />

                {postTitleColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postTitleColor}
                        setGlobalColor={(value) => setAttributes({ postTitleColor: value === undefined ? '' : value })}
                    />
                )}

                {postTitleColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postTitleHoverColor}
                        setGlobalColor={(value) => setAttributes({ postTitleHoverColor: value === undefined ? '' : value })}
                    />
                )}


                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostTitleMarginUnitsHandler}
                    spacingUnits={postTitleMarginUnits}
                    spacingDesktop={postTitleMarginDesktop}
                    spacingTablet={postTitleMarginTablet}
                    spacingMobile={postTitleMarginMobile}
                    handleSpacingUnitHandler={handlePostTitleMarginUnitChange}
                    spacingCombineBtn={postTitleMarginLink}
                    spacingCombineBtnHandler={handlePostTitleMarginCombineBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>

            <PanelBody title={__("Description", "frontis-blocks")} initialOpen={false}>

                <FB_HtmlTagControl
                    label={__("Description Tag", "frontis-blocks")}
                    globalHtmlTag={postDescriptionTag}
                    setGlobalHtmlTag={(value) => setAttributes({ postDescriptionTag: value })}
                />

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={postDescriptionGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ postDescriptionGlobalTypographyData: value })}

                    globalTypoType={postDescriptionGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            postDescriptionGlobalTypoType: value, 
                            postDescriptionGlobalTypoSwitcher: value === 'default' ? {...postDescriptionGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...postDescriptionGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={postDescriptionGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ postDescriptionGlobalTypoOption: value })}

                    fontFamily={postDescriptionFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ postDescriptionFontFamily: value, postDescriptionGlobalTypoSwitcher: {...postDescriptionGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={postDescriptionFontSize}
                    onChangeFontSize={(value) => setAttributes({ postDescriptionFontSize: value, postDescriptionGlobalTypoSwitcher: {...postDescriptionGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={postDescriptionFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ postDescriptionFontSizeUnits: value })}

                    fontWeight={postDescriptionFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ postDescriptionFontWeight: value, postDescriptionGlobalTypoSwitcher: {...postDescriptionGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={postDescriptionFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ postDescriptionFontStyle: value, postDescriptionGlobalTypoSwitcher: {...postDescriptionGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={postDescriptionTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ postDescriptionTextTransform: value, postDescriptionGlobalTypoSwitcher: {...postDescriptionGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={postDescriptionTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ postDescriptionTextDecoration: value, postDescriptionGlobalTypoSwitcher: {...postDescriptionGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={postDescriptionLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ postDescriptionLetterSpacing: value, postDescriptionGlobalTypoSwitcher: {...postDescriptionGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={postDescriptionLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ postDescriptionLetterSpacingUnits: value })}

                    lineHeight={postDescriptionLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ postDescriptionLineHeight: value, postDescriptionGlobalTypoSwitcher: {...postDescriptionGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={postDescriptionLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ postDescriptionLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={postDescriptionColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postDescriptionColorSwitcher: value })}
                />

                {postDescriptionColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postDescriptionColor}
                        setGlobalColor={(value) => setAttributes({ postDescriptionColor: value === undefined ? '' : value })}
                    />
                )}

                {postDescriptionColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postDescriptionHoverColor}
                        setGlobalColor={(value) => setAttributes({ postDescriptionHoverColor: value === undefined ? '' : value })}
                    />
                )}


                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostDescriptionMarginUnitsHandler}
                    spacingUnits={postDescriptionMarginUnits}
                    spacingDesktop={postDescriptionMarginDesktop}
                    spacingTablet={postDescriptionMarginTablet}
                    spacingMobile={postDescriptionMarginMobile}
                    handleSpacingUnitHandler={handlePostDescriptionMarginUnitChange}
                    spacingCombineBtn={postDescriptionMarginLink}
                    spacingCombineBtnHandler={handlePostDescriptionMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <RangeControl
                    label={__("Excerpt Length", "frontis-blocks")}
                    value={postDescriptionExcerptLength}
                    onChange={(value) => setAttributes({ postDescriptionExcerptLength: value === 0 ? undefined : value })}
                    min={1}
                    max={200}
                    step={1}
                    resetFallbackValue={10}
                />

            </PanelBody>

            <PanelBody title={__("Category", "frontis-blocks")} initialOpen={false}>

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={postCategoryGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ postCategoryGlobalTypographyData: value })}

                    globalTypoType={postCategoryGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            postCategoryGlobalTypoType: value, 
                            postCategoryGlobalTypoSwitcher: value === 'default' ? {...postCategoryGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...postCategoryGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={postCategoryGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ postCategoryGlobalTypoOption: value })}

                    fontFamily={postCategoryFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ postCategoryFontFamily: value, postCategoryGlobalTypoSwitcher: {...postCategoryGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={postCategoryFontSize}
                    onChangeFontSize={(value) => setAttributes({ postCategoryFontSize: value, postCategoryGlobalTypoSwitcher: {...postCategoryGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={postCategoryFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ postCategoryFontSizeUnits: value })}

                    fontWeight={postCategoryFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ postCategoryFontWeight: value, postCategoryGlobalTypoSwitcher: {...postCategoryGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={postCategoryFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ postCategoryFontStyle: value, postCategoryGlobalTypoSwitcher: {...postCategoryGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={postCategoryTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ postCategoryTextTransform: value, postCategoryGlobalTypoSwitcher: {...postCategoryGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={postCategoryTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ postCategoryTextDecoration: value, postCategoryGlobalTypoSwitcher: {...postCategoryGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={postCategoryLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ postCategoryLetterSpacing: value, postCategoryGlobalTypoSwitcher: {...postCategoryGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={postCategoryLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ postCategoryLetterSpacingUnits: value })}

                    lineHeight={postCategoryLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ postCategoryLineHeight: value, postCategoryGlobalTypoSwitcher: {...postCategoryGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={postCategoryLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ postCategoryLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={postCategoryColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postCategoryColorSwitcher: value })}
                />

                {postCategoryColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postCategoryColor}
                        setGlobalColor={(value) => setAttributes({ postCategoryColor: value === undefined ? '' : value })}
                    />
                )}

                {postCategoryColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postCategoryHoverColor}
                        setGlobalColor={(value) => setAttributes({ postCategoryHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_SwitcherControl
                    label={__("Background", "frontis-blocks")}
                    globalSwitcher={postCategoryBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postCategoryBgColorSwitcher: value })}
                />

                {postCategoryBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postCategoryBgColor} 
                        setGlobalColor={(value) => setAttributes({ postCategoryBgColor: value === undefined ? '' : value })}
                    />
                )}

                {postCategoryBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postCategoryBgHoverColor}
                        setGlobalColor={(value) => setAttributes({ postCategoryBgHoverColor: value === undefined ? '' : value })}
                    />
                )}



                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostCategoryPaddingUnitsHandler}
                    spacingUnits={postCategoryPaddingUnits}
                    spacingDesktop={postCategoryPaddingDesktop}
                    spacingTablet={postCategoryPaddingTablet}
                    spacingMobile={postCategoryPaddingMobile}
                    handleSpacingUnitHandler={handlePostCategoryPaddingUnitChange}
                    spacingCombineBtn={postCategoryPaddingLink}
                    spacingCombineBtnHandler={handlePostCategoryPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostCategoryMarginUnitsHandler}
                    spacingUnits={postCategoryMarginUnits}
                    spacingDesktop={postCategoryMarginDesktop}
                    spacingTablet={postCategoryMarginTablet}
                    spacingMobile={postCategoryMarginMobile}
                    handleSpacingUnitHandler={handlePostCategoryMarginUnitChange}
                    spacingCombineBtn={postCategoryMarginLink}
                    spacingCombineBtnHandler={handlePostCategoryMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={postCategoryBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ postCategoryBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border", "frontis-blocks")}
                    globalSwitcher={postCategoryBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postCategoryBorderColorSwitcher: value })}
                />

                {postCategoryBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postCategoryBorderColor}
                        setGlobalColor={(value) => setAttributes({ postCategoryBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {postCategoryBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postCategoryBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ postCategoryBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}


                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostCategoryBorderUnitsHandler}
                    spacingUnits={postCategoryBorderUnits}
                    spacingDesktop={postCategoryDesktopBorder}
                    spacingTablet={postCategoryTabletBorder}
                    spacingMobile={postCategoryMobileBorder}
                    handleSpacingUnitHandler={handlePostCategoryBorderUnitChange}
                    spacingCombineBtn={postCategoryBorderLink}
                    spacingCombineBtnHandler={handlePostCategoryBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostCategoryBorderRadiusUnitsHandler}
                    spacingUnits={postCategoryBorderRadiusUnits}
                    spacingDesktop={postCategoryDesktopBorderRadius}
                    spacingTablet={postCategoryTabletBorderRadius}
                    spacingMobile={postCategoryMobileBorderRadius}
                    handleSpacingUnitHandler={handlePostCategoryBorderRadiusUnitChange}
                    spacingCombineBtn={postCategoryBorderRadiusLink}
                    spacingCombineBtnHandler={handlePostCategoryBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Range
                    min={1}
                    max={100}
                    label={__("Gap", "frontis-blocks")}
                    rangeValue={postCategoryGap}
                    onChangeHandler={(value) => setAttributes({ postCategoryGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ postCategoryGapUnits: value })}
                    deviceType={deviceType}
                    units={postCategoryGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"10"}
                />

            </PanelBody>

            <PanelBody title={__("Tags", "frontis-blocks")} initialOpen={false}>

                <ToggleControl
                    label={__("Tag Link", "frontis-blocks")}
                    checked={tagLinkSwitcher}
                    onChange={(value) => setAttributes({ tagLinkSwitcher: value })}
                />

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={postTagGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ postTagGlobalTypographyData: value })}

                    globalTypoType={postTagGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            postTagGlobalTypoType: value, 
                            postTagGlobalTypoSwitcher: value === 'default' ? {...postTagGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...postTagGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={postTagGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ postTagGlobalTypoOption: value })}

                    fontFamily={postTagFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ postTagFontFamily: value, postTagGlobalTypoSwitcher: {...postTagGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={postTagFontSize}
                    onChangeFontSize={(value) => setAttributes({ postTagFontSize: value, postTagGlobalTypoSwitcher: {...postTagGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={postTagFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ postTagFontSizeUnits: value })}

                    fontWeight={postTagFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ postTagFontWeight: value, postTagGlobalTypoSwitcher: {...postTagGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={postTagFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ postTagFontStyle: value, postTagGlobalTypoSwitcher: {...postTagGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={postTagTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ postTagTextTransform: value, postTagGlobalTypoSwitcher: {...postTagGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={postTagTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ postTagTextDecoration: value, postTagGlobalTypoSwitcher: {...postTagGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={postTagLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ postTagLetterSpacing: value, postTagGlobalTypoSwitcher: {...postTagGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={postTagLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ postTagLetterSpacingUnits: value })}

                    lineHeight={postTagLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ postTagLineHeight: value, postTagGlobalTypoSwitcher: {...postTagGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={postTagLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ postTagLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={postTagColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postTagColorSwitcher: value })}
                />

                {postTagColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postTagColor}
                        setGlobalColor={(value) => setAttributes({ postTagColor: value === undefined ? '' : value })}
                    />
                )}

                {postTagColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postTagHoverColor}
                        setGlobalColor={(value) => setAttributes({ postTagHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_SwitcherControl
                    label={__("Background", "frontis-blocks")}
                    globalSwitcher={postTagBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postTagBgColorSwitcher: value })}
                />

                {postTagBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postTagBgColor} 
                        setGlobalColor={(value) => setAttributes({ postTagBgColor: value === undefined ? '' : value })}
                    />
                )}

                {postTagBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postTagBgHoverColor}
                        setGlobalColor={(value) => setAttributes({ postTagBgHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostTagPaddingUnitsHandler}
                    spacingUnits={postTagPaddingUnits}
                    spacingDesktop={postTagPaddingDesktop}
                    spacingTablet={postTagPaddingTablet}
                    spacingMobile={postTagPaddingMobile}
                    handleSpacingUnitHandler={handlePostTagPaddingUnitChange}
                    spacingCombineBtn={postTagPaddingLink}
                    spacingCombineBtnHandler={handlePostTagPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostTagMarginUnitsHandler}
                    spacingUnits={postTagMarginUnits}
                    spacingDesktop={postTagMarginDesktop}
                    spacingTablet={postTagMarginTablet}
                    spacingMobile={postTagMarginMobile}
                    handleSpacingUnitHandler={handlePostTagMarginUnitChange}
                    spacingCombineBtn={postTagMarginLink}
                    spacingCombineBtnHandler={handlePostTagMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={postTagBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ postTagBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border", "frontis-blocks")}
                    globalSwitcher={postTagBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postTagBorderColorSwitcher: value })}
                />

                {postTagBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postTagBorderColor}
                        setGlobalColor={(value) => setAttributes({ postTagBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {postTagBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postTagBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ postTagBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostTagBorderUnitsHandler}
                    spacingUnits={postTagBorderUnits}
                    spacingDesktop={postTagDesktopBorder}
                    spacingTablet={postTagTabletBorder}
                    spacingMobile={postTagMobileBorder}
                    handleSpacingUnitHandler={handlePostTagBorderUnitChange}
                    spacingCombineBtn={postTagBorderLink}
                    spacingCombineBtnHandler={handlePostTagBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostTagBorderRadiusUnitsHandler}
                    spacingUnits={postTagBorderRadiusUnits}
                    spacingDesktop={postTagDesktopBorderRadius}
                    spacingTablet={postTagTabletBorderRadius}
                    spacingMobile={postTagMobileBorderRadius}
                    handleSpacingUnitHandler={handlePostTagBorderRadiusUnitChange}
                    spacingCombineBtn={postTagBorderRadiusLink}
                    spacingCombineBtnHandler={handlePostTagBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Range
                    min={1}
                    max={100}
                    label={__("Gap", "frontis-blocks")}
                    rangeValue={postTagGap}
                    onChangeHandler={(value) => setAttributes({ postTagGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ postTagGapUnits: value })}
                    deviceType={deviceType}
                    units={postTagGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"10"}
                />

            </PanelBody>

            <PanelBody title={__("Author", "frontis-blocks")} initialOpen={false}>

                <ToggleControl
                    label={__("Author Link", "frontis-blocks")}
                    checked={authorLinkSwitcher}
                    onChange={(value) => setAttributes({ authorLinkSwitcher: value })}
                />

                <FB_Range
                    min={1}
                    max={100}
                    label={__("Gap", "frontis-blocks")}
                    rangeValue={postAuthorGap}
                    onChangeHandler={(value) => setAttributes({ postAuthorGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ postAuthorGapUnits: value })}
                    deviceType={deviceType}
                    units={postAuthorGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"10"}
                />
                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostAuthorMarginUnitsHandler}
                    spacingUnits={postAuthorMarginUnits}
                    spacingDesktop={postAuthorMarginDesktop}
                    spacingTablet={postAuthorMarginTablet}
                    spacingMobile={postAuthorMarginMobile}
                    handleSpacingUnitHandler={handlePostAuthorMarginUnitChange}
                    spacingCombineBtn={postAuthorMarginLink}
                    spacingCombineBtnHandler={handlePostAuthorMarginCombineBtn}
                    setAttributes={setAttributes}
                />
                <ToggleControl
                    label={__("Show Author Avatar", "frontis-blocks")}
                    checked={postAuthorAvatarSwitcher}
                    onChange={(value) => setAttributes({ postAuthorAvatarSwitcher: value })}
                />
                <FB_Range
                    min={1}
                    max={200}
                    label={__("Avatar Size", "frontis-blocks")}
                    rangeValue={postAuthorAvatarWidth}
                    onChangeHandler={(value) => setAttributes({ postAuthorAvatarWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ postAuthorAvatarWidthUnits: value })}
                    deviceType={deviceType}
                    units={postAuthorAvatarWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"40"}
                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={postAuthorAvatarBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ postAuthorAvatarBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border", "frontis-blocks")}
                    globalSwitcher={postAuthorAvatarBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postAuthorAvatarBorderColorSwitcher: value })}
                />

                {postAuthorAvatarBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postAuthorAvatarBorderColor}
                        setGlobalColor={(value) => setAttributes({ postAuthorAvatarBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {postAuthorAvatarBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postAuthorAvatarBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ postAuthorAvatarBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostAuthorAvatarBorderUnitsHandler}
                    spacingUnits={postAuthorAvatarBorderUnits}
                    spacingDesktop={postAuthorAvatarDesktopBorder}
                    spacingTablet={postAuthorAvatarTabletBorder}
                    spacingMobile={postAuthorAvatarMobileBorder}
                    handleSpacingUnitHandler={handlePostAuthorAvatarBorderUnitChange}
                    spacingCombineBtn={postAuthorAvatarBorderLink}
                    spacingCombineBtnHandler={handlePostAuthorAvatarBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePostAuthorAvatarBorderRadiusUnitsHandler}
                    spacingUnits={postAuthorAvatarBorderRadiusUnits}
                    spacingDesktop={postAuthorAvatarDesktopBorderRadius}
                    spacingTablet={postAuthorAvatarTabletBorderRadius}
                    spacingMobile={postAuthorAvatarMobileBorderRadius}
                    handleSpacingUnitHandler={handlePostAuthorAvatarBorderRadiusUnitChange}
                    spacingCombineBtn={postAuthorAvatarBorderRadiusLink}
                    spacingCombineBtnHandler={handlePostAuthorAvatarBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={postAuthorGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ postAuthorGlobalTypographyData: value })}

                    globalTypoType={postAuthorGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            postAuthorGlobalTypoType: value, 
                            postAuthorGlobalTypoSwitcher: value === 'default' ? {...postAuthorGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...postAuthorGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={postAuthorGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ postAuthorGlobalTypoOption: value })}

                    fontFamily={postAuthorFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ postAuthorFontFamily: value, postAuthorGlobalTypoSwitcher: {...postAuthorGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={postAuthorFontSize}
                    onChangeFontSize={(value) => setAttributes({ postAuthorFontSize: value, postAuthorGlobalTypoSwitcher: {...postAuthorGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={postAuthorFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ postAuthorFontSizeUnits: value })}

                    fontWeight={postAuthorFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ postAuthorFontWeight: value, postAuthorGlobalTypoSwitcher: {...postAuthorGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={postAuthorFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ postAuthorFontStyle: value, postAuthorGlobalTypoSwitcher: {...postAuthorGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={postAuthorTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ postAuthorTextTransform: value, postAuthorGlobalTypoSwitcher: {...postAuthorGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={postAuthorTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ postAuthorTextDecoration: value, postAuthorGlobalTypoSwitcher: {...postAuthorGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={postAuthorLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ postAuthorLetterSpacing: value, postAuthorGlobalTypoSwitcher: {...postAuthorGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={postAuthorLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ postAuthorLetterSpacingUnits: value })}

                    lineHeight={postAuthorLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ postAuthorLineHeight: value, postAuthorGlobalTypoSwitcher: {...postAuthorGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={postAuthorLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ postAuthorLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Author Color", "frontis-blocks")}
                    globalSwitcher={postAuthorColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postAuthorColorSwitcher: value })}
                />

                {postAuthorColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={postAuthorColor}
                        setGlobalColor={(value) => setAttributes({ postAuthorColor: value === undefined ? '' : value })}
                    />
                )}

                {postAuthorColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={postAuthorHoverColor}
                        setGlobalColor={(value) => setAttributes({ postAuthorHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <ToggleControl
                    label={__("Show Prefix", "frontis-blocks")}
                    checked={postAuthorPrefixSwitcher}
                    onChange={(value) => setAttributes({ postAuthorPrefixSwitcher: value })}
                />


                {postAuthorPrefixSwitcher && (
                    <>
                        <TextControl
                            label={__("Prefix", "frontis-blocks")}
                            value={postAuthorPrefix}
                            onChange={(value) => setAttributes({ postAuthorPrefix: value })}
                            className="fb-post-author-prefix-text"
                        />

                        <FB_SwitcherControl
                            label={__("Prefix Color", "frontis-blocks")}
                            globalSwitcher={postAuthorPrefixColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ postAuthorPrefixColorSwitcher: value })}
                        />

                        {postAuthorPrefixColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={postAuthorPrefixColor}
                                setGlobalColor={(value) => setAttributes({ postAuthorPrefixColor: value === undefined ? '' : value })}
                            />
                        )}

                        {postAuthorPrefixColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={postAuthorPrefixHoverColor} 
                                setGlobalColor={(value) => setAttributes({ postAuthorPrefixHoverColor: value === undefined ? '' : value })}
                            />
                        )}
                    </>
                )} 

            </PanelBody>

            {showDateSwitcher && (
                <PanelBody title={__("Date", "frontis-blocks")} initialOpen={false}>

                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={postDateGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ postDateGlobalTypographyData: value })}

                        globalTypoType={postDateGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                postDateGlobalTypoType: value, 
                                postDateGlobalTypoSwitcher: value === 'default' ? {...postDateGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...postDateGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={postDateGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ postDateGlobalTypoOption: value })}

                        fontFamily={postDateFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ postDateFontFamily: value, postDateGlobalTypoSwitcher: {...postDateGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={postDateFontSize}
                        onChangeFontSize={(value) => setAttributes({ postDateFontSize: value, postDateGlobalTypoSwitcher: {...postDateGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={postDateFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ postDateFontSizeUnits: value })}

                        fontWeight={postDateFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ postDateFontWeight: value, postDateGlobalTypoSwitcher: {...postDateGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={postDateFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ postDateFontStyle: value, postDateGlobalTypoSwitcher: {...postDateGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={postDateTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ postDateTextTransform: value, postDateGlobalTypoSwitcher: {...postDateGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={postDateTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ postDateTextDecoration: value, postDateGlobalTypoSwitcher: {...postDateGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={postDateLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ postDateLetterSpacing: value, postDateGlobalTypoSwitcher: {...postDateGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={postDateLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ postDateLetterSpacingUnits: value })}

                        lineHeight={postDateLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ postDateLineHeight: value, postDateGlobalTypoSwitcher: {...postDateGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={postDateLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ postDateLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Date Color", "frontis-blocks")}
                        globalSwitcher={postDateColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ postDateColorSwitcher: value })}
                    />

                    {postDateColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={postDateColor}
                            setGlobalColor={(value) => setAttributes({ postDateColor: value === undefined ? '' : value })}
                        />
                    )}

                    {postDateColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={postDateHoverColor}
                            setGlobalColor={(value) => setAttributes({ postDateHoverColor: value === undefined ? '' : value })}
                        />
                    )}
                </PanelBody>
            )}

            {loadMoreType === 'button' && (
                <PanelBody title={__("Load More Button", "frontis-blocks")} initialOpen={false}>

                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={loadMoreTextGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ loadMoreTextGlobalTypographyData: value })}

                        globalTypoType={loadMoreTextGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                loadMoreTextGlobalTypoType: value, 
                                loadMoreTextGlobalTypoSwitcher: value === 'default' ? {...loadMoreTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...loadMoreTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={loadMoreTextGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ loadMoreTextGlobalTypoOption: value })}

                        fontFamily={loadMoreTextFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ loadMoreTextFontFamily: value, loadMoreTextGlobalTypoSwitcher: {...loadMoreTextGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={loadMoreTextFontSize}
                        onChangeFontSize={(value) => setAttributes({ loadMoreTextFontSize: value, loadMoreTextGlobalTypoSwitcher: {...loadMoreTextGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={loadMoreTextFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ loadMoreTextFontSizeUnits: value })}

                        fontWeight={loadMoreTextFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ loadMoreTextFontWeight: value, loadMoreTextGlobalTypoSwitcher: {...loadMoreTextGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={loadMoreTextFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ loadMoreTextFontStyle: value, loadMoreTextGlobalTypoSwitcher: {...loadMoreTextGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={loadMoreTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ loadMoreTextTransform: value, loadMoreTextGlobalTypoSwitcher: {...loadMoreTextGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={loadMoreTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ loadMoreTextDecoration: value, loadMoreTextGlobalTypoSwitcher: {...loadMoreTextGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={loadMoreTextLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ loadMoreTextLetterSpacing: value, loadMoreTextGlobalTypoSwitcher: {...loadMoreTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={loadMoreTextLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ loadMoreTextLetterSpacingUnits: value })}

                        lineHeight={loadMoreTextLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ loadMoreTextLineHeight: value, loadMoreTextGlobalTypoSwitcher: {...loadMoreTextGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={loadMoreTextLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ loadMoreTextLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Text Color", "frontis-blocks")}
                        globalSwitcher={loadMoreTextColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ loadMoreTextColorSwitcher: value })}
                    />

                    {loadMoreTextColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={loadMoreTextColor} 
                            setGlobalColor={(value) => setAttributes({ loadMoreTextColor: value === undefined ? '' : value })}
                        />
                    )}

                    {loadMoreTextColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={loadMoreTextHoverColor}
                            setGlobalColor={(value) => setAttributes({ loadMoreTextHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_SwitcherControl
                        label={__("Loader Color", "frontis-blocks")}
                        globalSwitcher={loadMoreloaderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ loadMoreloaderColorSwitcher: value })}
                    />

                    {loadMoreloaderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={loadMoreloaderColor} 
                            setGlobalColor={(value) => setAttributes({ loadMoreloaderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {loadMoreloaderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={loadMoreloaderHoverColor}
                            setGlobalColor={(value) => setAttributes({ loadMoreloaderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Range
                        min={1}
                        max={200}
                        label={__("Icon Size", "frontis-blocks")}
                        rangeValue={loadMoreIconSize}
                        onChangeHandler={(value) => setAttributes({ loadMoreIconSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ loadMoreIconSizeUnits: value })} 
                        deviceType={deviceType}
                        units={loadMoreIconSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"20"}
                    />

                    <FB_SwitcherControl
                        label={__("Icon Color", "frontis-blocks")}
                        globalSwitcher={loadMoreIconColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ loadMoreIconColorSwitcher: value })}
                    />

                    {loadMoreIconColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={loadMoreIconColor} 
                            setGlobalColor={(value) => setAttributes({ loadMoreIconColor: value === undefined ? '' : value })}
                        />
                    )}

                    {loadMoreIconColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={loadMoreIconHoverColor}
                            setGlobalColor={(value) => setAttributes({ loadMoreIconHoverColor: value === undefined ? '' : value })}
                        />
                    )}
                    <FB_Spacing
                        label={__("Icon Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleLoadMoreIconMarginUnitsHandler}
                        spacingUnits={loadMoreIconMarginUnits}
                        spacingDesktop={loadMoreIconDesktopMargin}
                        spacingTablet={loadMoreIconTabletMargin}
                        spacingMobile={loadMoreIconMobileMargin}
                        handleSpacingUnitHandler={handleLoadMoreIconMarginUnitChange}
                        spacingCombineBtn={loadMoreIconMarginLink}
                        spacingCombineBtnHandler={handleLoadMoreIconMarginCombineBtn}
                        setAttributes={setAttributes}
                    />
                
                    <FB_BackgroundColorControl
                        label={__("Background Color", "frontis-blocks")}
                        bgColorSwitcher={loadMoreButtonBgColorSwitcher}  
                        setBgColorSwitcher={(value) => setAttributes({ loadMoreButtonBgColorSwitcher: value })}
                        
                        normalBackgroundType={loadMoreButtonNormalBackgroundType}
                        setNormalBackgroundType={(value) => setAttributes({ loadMoreButtonNormalBackgroundType: value })}
                        normalClassicColor={loadMoreButtonNormalClassicColor}
                        setNormalClassicColor={(value) => setAttributes({ loadMoreButtonNormalClassicColor: value === undefined ? '' : value })}
                        normalGradientColor={loadMoreButtonNormalGradientColor}
                        setNormalGradientColor={(value) => setAttributes({ loadMoreButtonNormalGradientColor: value === undefined ? null : value })}
                        normalCustomGradientSwitcher={loadMoreButtonNormalCustomGradientSwitcher}
                        setNormalCustomGradientSwitcher={(value) => setAttributes({ loadMoreButtonNormalCustomGradientSwitcher: value })}
                        normalCustomGradientInputValue={loadMoreButtonNormalCustomGradientInputValue}
                        setNormalCustomGradientInputValue={(value) => setAttributes({ loadMoreButtonNormalCustomGradientInputValue: value })}

                        hoverBackgroundType={loadMoreButtonHoverBackgroundType} 
                        setHoverBackgroundType={(value) => setAttributes({ loadMoreButtonHoverBackgroundType: value })}
                        hoverClassicColor={loadMoreButtonHoverClassicColor}
                        setHoverClassicColor={(value) => setAttributes({ loadMoreButtonHoverClassicColor: value === undefined ? '' : value })}
                        hoverGradientColor={loadMoreButtonHoverGradientColor} 
                        setHoverGradientColor={(value) => setAttributes({ loadMoreButtonHoverGradientColor: value === undefined ? null : value })}
                        hoverCustomGradientSwitcher={loadMoreButtonHoverCustomGradientSwitcher}
                        setHoverCustomGradientSwitcher={(value) => setAttributes({ loadMoreButtonHoverCustomGradientSwitcher: value })}
                        hoverCustomGradientInputValue={loadMoreButtonHoverCustomGradientInputValue}
                        setHoverCustomGradientInputValue={(value) => setAttributes({ loadMoreButtonHoverCustomGradientInputValue: value })}

                        isBackgroundImage={false}

                    />

                    <FB_Spacing
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleLoadMoreButtonPaddingUnitsHandler}
                        spacingUnits={loadMoreButtonPaddingUnits}
                        spacingDesktop={loadMoreButtonDesktopPadding}
                        spacingTablet={loadMoreButtonTabletPadding}
                        spacingMobile={loadMoreButtonMobilePadding}
                        handleSpacingUnitHandler={handleLoadMoreButtonPaddingUnitChange}
                        spacingCombineBtn={loadMoreButtonPaddingLink}
                        spacingCombineBtnHandler={handleLoadMoreButtonPaddingCombineBtn}
                        setAttributes={setAttributes}
                    />
                    <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={loadMoreButtonBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ loadMoreButtonBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border", "frontis-blocks")}
                        globalSwitcher={loadMoreButtonBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ loadMoreButtonBorderColorSwitcher: value })}
                    />

                    {loadMoreButtonBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={loadMoreButtonBorderColor}
                            setGlobalColor={(value) => setAttributes({ loadMoreButtonBorderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {loadMoreButtonBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={loadMoreButtonBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ loadMoreButtonBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleLoadMoreButtonBorderUnitsHandler}
                        spacingUnits={loadMoreButtonBorderUnits}
                        spacingDesktop={loadMoreButtonDesktopBorder}
                        spacingTablet={loadMoreButtonTabletBorder}
                        spacingMobile={loadMoreButtonMobileBorder}
                        handleSpacingUnitHandler={handleLoadMoreButtonBorderUnitChange}
                        spacingCombineBtn={loadMoreButtonBorderLink}
                        spacingCombineBtnHandler={handleLoadMoreButtonBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleLoadMoreButtonBorderRadiusUnitsHandler}
                        spacingUnits={loadMoreButtonBorderRadiusUnits}
                        spacingDesktop={loadMoreButtonDesktopBorderRadius}
                        spacingTablet={loadMoreButtonTabletBorderRadius}
                        spacingMobile={loadMoreButtonMobileBorderRadius}
                        handleSpacingUnitHandler={handleLoadMoreButtonBorderRadiusUnitChange}
                        spacingCombineBtn={loadMoreButtonBorderRadiusLink}
                        spacingCombineBtnHandler={handleLoadMoreButtonBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />

                </PanelBody>
            )}

            <PanelBody
                title={__("Read More", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Width", "frontis-blocks")}
                    rangeValue={buttonWidth}
                    onChangeHandler={(value) => setAttributes({ buttonWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ buttonWidthUnits: value })}
                    deviceType={deviceType}
                    units={buttonWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={buttonGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ buttonGlobalTypographyData: value })}

                    globalTypoType={buttonGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            buttonGlobalTypoType: value, 
                            buttonGlobalTypoSwitcher: value === 'default' ? {...buttonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...buttonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={buttonGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ buttonGlobalTypoOption: value })}

                    fontFamily={buttonFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ buttonFontFamily: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={buttonFontSize}
                    onChangeFontSize={(value) => setAttributes({ buttonFontSize: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={buttonFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ buttonFontSizeUnits: value })}

                    fontWeight={buttonFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ buttonFontWeight: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={buttonFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ buttonFontStyle: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={buttonTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ buttonTextTransform: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={buttonTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ buttonTextDecoration: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={buttonLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ buttonLetterSpacing: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={buttonLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ buttonLetterSpacingUnits: value })}

                    lineHeight={buttonLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ buttonLineHeight: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={buttonLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ buttonLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={buttonColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ buttonColorSwitcher: value })}
                />

                {buttonColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={buttonColor}
                        setGlobalColor={(value) => setAttributes({ buttonColor: value === undefined ? '' : value })}
                    />
                )}

                {buttonColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={buttonHoverColor}
                        setGlobalColor={(value) => setAttributes({ buttonHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={buttonBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ buttonBgColorSwitcher: value })}
                />

                {buttonBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={buttonBgColor}
                        setGlobalColor={(value) => setAttributes({ buttonBgColor: value === undefined ? '' : value })}
                    />
                )}

                {buttonBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={buttonBgHoverColor}
                        setGlobalColor={(value) => setAttributes({ buttonBgHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={buttonBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ buttonBorder: value })}
                />


                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={buttonBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ buttonBorderColorSwitcher: value })}
                />

                {buttonBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={buttonBorderColor}
                        setGlobalColor={(value) => setAttributes({ buttonBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {buttonBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={buttonBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ buttonBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleBorderUnitsChange}
                    spacingUnits={buttonBorderUnits}
                    spacingDesktop={buttonDesktopBorderWidth}
                    spacingTablet={buttonTabBorderWidth}
                    spacingMobile={buttonMobileBorderWidth}
                    handleSpacingUnitHandler={handleBorderWidthChange}
                    spacingCombineBtn={buttonBorderLink}
                    spacingCombineBtnHandler={handleBorderLinkToggle}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleBorderRadiusUnitsChange}
                    spacingUnits={buttonBorderRadiusUnits}
                    spacingDesktop={buttonDesktopBorderRadiusWidth}
                    spacingTablet={buttonTabBorderRadiusWidth}
                    spacingMobile={buttonMobileBorderRadiusWidth}
                    handleSpacingUnitHandler={handleBorderRadiusChange}
                    spacingCombineBtn={buttonBorderRadiusLink}
                    spacingCombineBtnHandler={handleBorderRadiusLinkToggle}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={buttonBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ buttonBoxShadowSwitcher: value })}
                />

                {buttonBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ buttonBoxShadowValues: value })}
                        initialShadowValue={buttonBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ buttonBoxShadowCssValue: value })}
                    />
                )}

                {buttonBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ buttonBoxShadowHoverValues: value })}
                        initialShadowValue={buttonBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ buttonBoxShadowHoverCssValue: value })}
                    />
                )}

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePaddingUnitsHandler}
                    spacingUnits={buttonPaddingUnits}
                    spacingDesktop={buttonDesktopPadding}
                    spacingTablet={buttonTabPadding}
                    spacingMobile={buttonMobilePadding}
                    handleSpacingUnitHandler={handlePaddingUnitChange}
                    spacingCombineBtn={buttonPaddingLink}
                    spacingCombineBtnHandler={handlePaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleMarginUnitsHandler}
                    spacingUnits={buttonMarginUnits}
                    spacingDesktop={buttonDesktopMargin}
                    spacingTablet={buttonTabMargin}
                    spacingMobile={buttonMobileMargin}
                    handleSpacingUnitHandler={handleMarginUnitChange}
                    spacingCombineBtn={buttonMarginLink}
                    spacingCombineBtnHandler={handleMarginCombineBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>

            {(readMoreIconAlign === 'icon-text' || readMoreIconAlign === 'icon-only') && (
                <PanelBody
                    title={__("Read More Button Icon", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_Range
                        min={1}
                        max={100}
                        label={__("Icon Size", "frontis-blocks")}
                        rangeValue={buttonIconSize}
                        onChangeHandler={(value) => setAttributes({ buttonIconSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ buttonIconSizeUnits: value })}
                        deviceType={deviceType}
                        units={buttonIconSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={25}
                    />

                    <FB_SwitcherControl
                        label={__("Icon Color", "frontis-blocks")}
                        globalSwitcher={buttonIconColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ buttonIconColorSwitcher: value })}
                    />

                    {buttonIconColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={buttonIconColor}
                            setGlobalColor={(value) => setAttributes({ buttonIconColor: value === undefined ? '' : value })}
                        />
                    )}

                    {buttonIconColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={buttonIconHoverColor}
                            setGlobalColor={(value) => setAttributes({ buttonIconHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_SwitcherControl
                        label={__("Background Color", "frontis-blocks")}
                        globalSwitcher={buttonIconBgColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ buttonIconBgColorSwitcher: value })}
                    />

                    {buttonIconBgColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={buttonIconBgColor}
                            setGlobalColor={(value) => setAttributes({ buttonIconBgColor: value === undefined ? '' : value })}
                        />
                    )}

                    {buttonIconBgColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={buttonIconBgHoverColor}
                            setGlobalColor={(value) => setAttributes({ buttonIconBgHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={buttonIconBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ buttonIconBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={buttonIconBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ buttonIconBorderColorSwitcher: value })}
                    />

                    {buttonIconBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={buttonIconBorderColor}
                            setGlobalColor={(value) => setAttributes({ buttonIconBorderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {buttonIconBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={buttonIconBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ buttonIconBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlebuttonIconBorderUnitsHandler}
                        spacingUnits={buttonIconBorderUnits}
                        spacingDesktop={buttonIconBorderDesktop}
                        spacingTablet={buttonIconBorderTablet}
                        spacingMobile={buttonIconBorderMobile}
                        handleSpacingUnitHandler={handlebuttonIconBorderUnitChange}
                        spacingCombineBtn={buttonIconBorderLink}
                        spacingCombineBtnHandler={handlebuttonIconBorderCombineBtn}
                        setAttributes={setAttributes}
                    />
                    <FB_Spacing 
                        label={__("Radius Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlebuttonIconBorderRadiusUnitsHandler}
                        spacingUnits={buttonIconBorderRadiusUnits}
                        spacingDesktop={buttonIconBorderRadiusDesktop}
                        spacingTablet={buttonIconBorderRadiusTablet}
                        spacingMobile={buttonIconBorderRadiusMobile}
                        handleSpacingUnitHandler={handlebuttonIconBorderRadiusUnitChange}
                        spacingCombineBtn={buttonIconBorderRadiusLink}
                        spacingCombineBtnHandler={handlebuttonIconBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Icon Gap", "frontis-blocks")}
                        rangeValue={buttonIconGapSize}
                        onChangeHandler={(value) => setAttributes({ buttonIconGapSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ buttonIconGapUnits: value })}
                        deviceType={deviceType}
                        units={buttonIconGapUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={''}
                    />

                    <FB_SwitcherControl
                        label={__("Icon Rotation", "frontis-blocks")}
                        globalSwitcher={buttonIconRotateSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ buttonIconRotateSwitcher: value })}
                    />

                    {buttonIconRotateSwitcher === 'normal' && (
                        <FB_Range 
                            min={-360}
                            max={360}
                            label={__("Icon Rotation", "frontis-blocks")}
                            rangeValue={buttonIconRotate}
                            onChangeHandler={(value) => setAttributes({ buttonIconRotate: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />
                    )}

                    {buttonIconRotateSwitcher === 'hover' && (
                        <FB_Range
                            min={-360}
                            max={360}
                            label={__("Icon Rotation", "frontis-blocks")}
                            rangeValue={buttonIconRotateHover}
                            onChangeHandler={(value) => setAttributes({ buttonIconRotateHover: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />
                    )}

                </PanelBody>
            )}
            {(readMoreIconAlign === 'image') &&(
                <PanelBody
                    title={__("Read More Button Image", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_Range
                        min={1}
                        max={100}
                        label={__("Image Width", "frontis-blocks")}
                        rangeValue={buttonIconImageWidth}
                        onChangeHandler={(value) => setAttributes({ buttonIconImageWidth: value })}
                        rangeUnitHandler={(value) => setAttributes({ buttonIconImageWidthUnits: value })}
                        deviceType={deviceType}
                        units={buttonIconImageWidthUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={20}
                    />

                    <FB_Range
                        min={1}
                        max={100}
                        label={__("Image Height", "frontis-blocks")}
                        rangeValue={buttonIconImageHeight}
                        onChangeHandler={(value) => setAttributes({ buttonIconImageHeight: value })}
                        rangeUnitHandler={(value) => setAttributes({ buttonIconImageHeightUnits: value })}
                        deviceType={deviceType}
                        units={buttonIconImageHeightUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={20}
                    />
                    
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Image Gap", "frontis-blocks")}
                        rangeValue={buttonIconGapSize}
                        onChangeHandler={(value) => setAttributes({ buttonIconGapSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ buttonIconGapUnits: value })}
                        deviceType={deviceType}
                        units={buttonIconGapUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={''}
                    />


                    <FB_SwitcherControl
                        label={__("Image Rotation", "frontis-blocks")}
                        globalSwitcher={buttonImageRotateSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ buttonImageRotateSwitcher: value })}
                    />

                    {buttonImageRotateSwitcher === 'normal' && ( 
                        <FB_Range 
                            min={-360}
                            max={360}
                            label={__("Image Rotation", "frontis-blocks")}
                            rangeValue={buttonImageRotate}
                            onChangeHandler={(value) => setAttributes({ buttonImageRotate: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />
                    )}

                    {buttonImageRotateSwitcher === 'hover' && (
                        <FB_Range
                            min={-360}
                            max={360}
                            label={__("Image Rotation", "frontis-blocks")}
                            rangeValue={buttonImageRotateHover}
                            onChangeHandler={(value) => setAttributes({ buttonImageRotateHover: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />
                    )}
                </PanelBody>
            )}
            
            {loadMoreType === 'pagination' && (
                <PanelBody title={__("Pagination Arrows", "frontis-blocks")} initialOpen={false}>



                    {paginationPrevNextType === 'icon' && (
                        <>
                            <FB_Range
                                min={1}
                                max={100}
                                label={__("Arrow Size", "frontis-blocks")}
                                rangeValue={paginationArrowSize}
                                onChangeHandler={(value) => setAttributes({ paginationArrowSize: value })}
                                rangeUnitHandler={(value) => setAttributes({ paginationArrowSizeUnits: value })} 
                                deviceType={deviceType}
                                units={paginationArrowSizeUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                            />

                            <FB_SwitcherControl
                                label={__("Arrow Color", "frontis-blocks")}
                                globalSwitcher={paginationArrowIconColorSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ paginationArrowIconColorSwitcher: value })}
                            />

                            {paginationArrowIconColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Normal Color", "frontis-blocks")}
                                    globalColor={paginationArrowIconColor} 
                                    setGlobalColor={(value) => setAttributes({ paginationArrowIconColor: value === undefined ? '' : value })}
                                />
                            )}

                            {paginationArrowIconColorSwitcher === 'hover' && (
                                <FB_ColorControl
                                    label={__("Hover Color", "frontis-blocks")}
                                    globalColor={paginationArrowIconHoverColor}
                                    setGlobalColor={(value) => setAttributes({ paginationArrowIconHoverColor: value === undefined ? '' : value })}
                                />
                            )}
                        </>
                    )}

                    {paginationPrevNextType === 'text' && (
                        <>
                            <FB_TypographyControl
                                globalTypoControlActive={true}
                                globalTypoSwitcher={paginationArrowTextGlobalTypoSwitcher}
                                storeGlobalTypographyData={(value) => setAttributes({ paginationArrowTextGlobalTypographyData: value })}

                                globalTypoType={paginationArrowTextGlobalTypoType}
                                onChangeGlobalTypoType={(value) => {
                                    setAttributes({ 
                                        paginationArrowTextGlobalTypoType: value, 
                                        paginationArrowTextGlobalTypoSwitcher: value === 'default' ? {...paginationArrowTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...paginationArrowTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                    })
                                }}

                                globalTypoOption={paginationArrowTextGlobalTypoOption}
                                onChangeGlobalTypoOption={(value) => setAttributes({ paginationArrowTextGlobalTypoOption: value })}

                                fontFamily={paginationArrowTextFontFamily}
                                onChangeFontFamily={(value) => setAttributes({ paginationArrowTextFontFamily: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, fontFamily: value && false} })}

                                fontSize={paginationArrowTextFontSize}
                                onChangeFontSize={(value) => setAttributes({ paginationArrowTextFontSize: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, fontSize: value && false} })}

                                fontSizeUnits={paginationArrowTextFontSizeUnits}
                                onChangeFontSizeUnit={(value) => setAttributes({ paginationArrowTextFontSizeUnits: value })}

                                fontWeight={paginationArrowTextFontWeight}
                                onChangeFontWeight={(value) => setAttributes({ paginationArrowTextFontWeight: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, fontWeight: value && false} })}

                                fontStyle={paginationArrowTextFontStyle}
                                onChangeFontStyle={(value) => setAttributes({ paginationArrowTextFontStyle: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, fontStyle: value && false} })}

                                textTransform={paginationArrowTextTransform}
                                onChangeTextTransform={(value) => setAttributes({ paginationArrowTextTransform: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, textTransform: value && false} })}

                                textDecoration={paginationArrowTextDecoration}
                                onChangeTextDecoration={(value) => setAttributes({ paginationArrowTextDecoration: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, textDecoration: value && false} })}

                                letterSpacing={paginationArrowTextLetterSpacing}
                                onChangeLetterSpacing={(value) => setAttributes({ paginationArrowTextLetterSpacing: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                                letterSpacingUnits={paginationArrowTextLetterSpacingUnits}
                                onChangeLetterSpacingUnit={(value) => setAttributes({ paginationArrowTextLetterSpacingUnits: value })}

                                lineHeight={paginationArrowTextLineHeight}
                                onChangeLineHeight={(value) => setAttributes({ paginationArrowTextLineHeight: value, paginationArrowTextGlobalTypoSwitcher: {...paginationArrowTextGlobalTypoSwitcher, lineHeight: value && false} })}

                                lineHeightUnits={paginationArrowTextLineHeightUnits}
                                onChangeLineHeightUnit={(value) => setAttributes({ paginationArrowTextLineHeightUnits: value })}

                                deviceType={deviceType}
                                setAttributes={setAttributes}
                            />

                            <FB_SwitcherControl
                                label={__("Text Color", "frontis-blocks")}
                                globalSwitcher={paginationArrowTextColorSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ paginationArrowTextColorSwitcher: value })}
                            />

                            {paginationArrowTextColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Normal Color", "frontis-blocks")}
                                    globalColor={paginationArrowTextColor} 
                                    setGlobalColor={(value) => setAttributes({ paginationArrowTextColor: value === undefined ? '' : value })}
                                />
                            )}

                            {paginationArrowTextColorSwitcher === 'hover' && (
                                <FB_ColorControl
                                    label={__("Hover Color", "frontis-blocks")}
                                    globalColor={paginationArrowTextHoverColor}
                                    setGlobalColor={(value) => setAttributes({ paginationArrowTextHoverColor: value === undefined ? '' : value })}
                                />
                            )}
                        </>
                    )}

                    <FB_BackgroundColorControl
                        label={__("Background Color", "frontis-blocks")}
                        bgColorSwitcher={paginationArrowBgColorSwitcher}  
                        setBgColorSwitcher={(value) => setAttributes({ paginationArrowBgColorSwitcher: value })}
                        
                        normalBackgroundType={paginationArrowNormalBackgroundType}
                        setNormalBackgroundType={(value) => setAttributes({ paginationArrowNormalBackgroundType: value })}
                        normalClassicColor={paginationArrowNormalClassicColor}
                        setNormalClassicColor={(value) => setAttributes({ paginationArrowNormalClassicColor: value === undefined ? '' : value })}
                        normalGradientColor={paginationArrowNormalGradientColor}
                        setNormalGradientColor={(value) => setAttributes({ paginationArrowNormalGradientColor: value === undefined ? null : value })}
                        normalCustomGradientSwitcher={paginationArrowNormalCustomGradientSwitcher}
                        setNormalCustomGradientSwitcher={(value) => setAttributes({ paginationArrowNormalCustomGradientSwitcher: value })}
                        normalCustomGradientInputValue={paginationArrowNormalCustomGradientInputValue}
                        setNormalCustomGradientInputValue={(value) => setAttributes({ paginationArrowNormalCustomGradientInputValue: value })}

                        hoverBackgroundType={paginationArrowHoverBackgroundType} 
                        setHoverBackgroundType={(value) => setAttributes({ paginationArrowHoverBackgroundType: value })}
                        hoverClassicColor={paginationArrowHoverClassicColor}
                        setHoverClassicColor={(value) => setAttributes({ paginationArrowHoverClassicColor: value === undefined ? '' : value })}
                        hoverGradientColor={paginationArrowHoverGradientColor} 
                        setHoverGradientColor={(value) => setAttributes({ paginationArrowHoverGradientColor: value === undefined ? null : value })}
                        hoverCustomGradientSwitcher={paginationArrowHoverCustomGradientSwitcher}
                        setHoverCustomGradientSwitcher={(value) => setAttributes({ paginationArrowHoverCustomGradientSwitcher: value })}
                        hoverCustomGradientInputValue={paginationArrowHoverCustomGradientInputValue}
                        setHoverCustomGradientInputValue={(value) => setAttributes({ paginationArrowHoverCustomGradientInputValue: value })}

                        isBackgroundImage={false}

                    />

                    <FB_Range
                        min={1}
                        max={200}
                        label={__("Width", "frontis-blocks")}
                        rangeValue={paginationPrevNextWidth}
                        onChangeHandler={(value) => setAttributes({ paginationPrevNextWidth: value })}
                        rangeUnitHandler={(value) => setAttributes({ paginationPrevNextWidthUnits: value })} 
                        deviceType={deviceType}
                        units={paginationPrevNextWidthUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"36"}
                    />

                    <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={paginationArrowBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ paginationArrowBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border", "frontis-blocks")}
                        globalSwitcher={paginationArrowBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ paginationArrowBorderColorSwitcher: value })}
                    />

                    {paginationArrowBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={paginationArrowBorderColor}
                            setGlobalColor={(value) => setAttributes({ paginationArrowBorderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {paginationArrowBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={paginationArrowBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ paginationArrowBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePaginationArrowBorderUnitsHandler}
                        spacingUnits={paginationArrowBorderUnits}
                        spacingDesktop={paginationArrowDesktopBorder}
                        spacingTablet={paginationArrowTabletBorder}
                        spacingMobile={paginationArrowMobileBorder}
                        handleSpacingUnitHandler={handlePaginationArrowBorderUnitChange}
                        spacingCombineBtn={paginationArrowBorderLink}
                        spacingCombineBtnHandler={handlePaginationArrowBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePaginationArrowBorderRadiusUnitsHandler}
                        spacingUnits={paginationArrowBorderRadiusUnits}
                        spacingDesktop={paginationArrowDesktopBorderRadius}
                        spacingTablet={paginationArrowTabletBorderRadius}
                        spacingMobile={paginationArrowMobileBorderRadius}
                        handleSpacingUnitHandler={handlePaginationArrowBorderRadiusUnitChange}
                        spacingCombineBtn={paginationArrowBorderRadiusLink}
                        spacingCombineBtnHandler={handlePaginationArrowBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />

                </PanelBody>
            )}

            {loadMoreType === 'pagination' && (
                <PanelBody title={__("Pagination Numbers", "frontis-blocks")} initialOpen={false}>

                    <FB_Range
                        min={1}
                        max={200}
                        label={__("Width", "frontis-blocks")}
                        rangeValue={paginationBtnSize}
                        onChangeHandler={(value) => setAttributes({ paginationBtnSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ paginationBtnSizeUnits: value })} 
                        deviceType={deviceType}
                        units={paginationBtnSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                    />

                    <FB_Range
                        min={1}
                        max={200}
                        label={__("Gap", "frontis-blocks")}
                        rangeValue={paginationBtnGap}
                        onChangeHandler={(value) => setAttributes({ paginationBtnGap: value })}
                        rangeUnitHandler={(value) => setAttributes({ paginationBtnGapUnits: value })} 
                        deviceType={deviceType}
                        units={paginationBtnGapUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                    />

                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={paginationBtnTextGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ paginationBtnTextGlobalTypographyData: value })}

                        globalTypoType={paginationBtnTextGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                paginationBtnTextGlobalTypoType: value, 
                                paginationBtnTextGlobalTypoSwitcher: value === 'default' ? {...paginationBtnTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...paginationBtnTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={paginationBtnTextGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ paginationBtnTextGlobalTypoOption: value })}

                        fontFamily={paginationBtnTextFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ paginationBtnTextFontFamily: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={paginationBtnTextFontSize}
                        onChangeFontSize={(value) => setAttributes({ paginationBtnTextFontSize: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={paginationBtnTextFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ paginationBtnTextFontSizeUnits: value })}

                        fontWeight={paginationBtnTextFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ paginationBtnTextFontWeight: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={paginationBtnTextFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ paginationBtnTextFontStyle: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={paginationBtnTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ paginationBtnTextTransform: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={paginationBtnTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ paginationBtnTextDecoration: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={paginationBtnTextLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ paginationBtnTextLetterSpacing: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={paginationBtnTextLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ paginationBtnTextLetterSpacingUnits: value })}

                        lineHeight={paginationBtnTextLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ paginationBtnTextLineHeight: value, paginationBtnTextGlobalTypoSwitcher: {...paginationBtnTextGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={paginationBtnTextLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ paginationBtnTextLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Text Color", "frontis-blocks")}
                        globalSwitcher={paginationBtnTextColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ paginationBtnTextColorSwitcher: value })}
                    />

                    {paginationBtnTextColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={paginationBtnTextColor} 
                            setGlobalColor={(value) => setAttributes({ paginationBtnTextColor: value === undefined ? '' : value })}
                        />
                    )}

                    {paginationBtnTextColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={paginationBtnTextHoverColor}
                            setGlobalColor={(value) => setAttributes({ paginationBtnTextHoverColor: value === undefined ? '' : value })}
                        />
                    )}
                
                    <FB_BackgroundColorControl
                        label={__("Background Color", "frontis-blocks")}
                        bgColorSwitcher={paginationBtnBgColorSwitcher}  
                        setBgColorSwitcher={(value) => setAttributes({ paginationBtnBgColorSwitcher: value })}
                        
                        normalBackgroundType={paginationBtnNormalBackgroundType}
                        setNormalBackgroundType={(value) => setAttributes({ paginationBtnNormalBackgroundType: value })}
                        normalClassicColor={paginationBtnNormalClassicColor}
                        setNormalClassicColor={(value) => setAttributes({ paginationBtnNormalClassicColor: value === undefined ? '' : value })}
                        normalGradientColor={paginationBtnNormalGradientColor}
                        setNormalGradientColor={(value) => setAttributes({ paginationBtnNormalGradientColor: value === undefined ? null : value })}
                        normalCustomGradientSwitcher={paginationBtnNormalCustomGradientSwitcher}
                        setNormalCustomGradientSwitcher={(value) => setAttributes({ paginationBtnNormalCustomGradientSwitcher: value })}
                        normalCustomGradientInputValue={paginationBtnNormalCustomGradientInputValue}
                        setNormalCustomGradientInputValue={(value) => setAttributes({ paginationBtnNormalCustomGradientInputValue: value })}

                        hoverBackgroundType={paginationBtnHoverBackgroundType} 
                        setHoverBackgroundType={(value) => setAttributes({ paginationBtnHoverBackgroundType: value })}
                        hoverClassicColor={paginationBtnHoverClassicColor}
                        setHoverClassicColor={(value) => setAttributes({ paginationBtnHoverClassicColor: value === undefined ? '' : value })}
                        hoverGradientColor={paginationBtnHoverGradientColor} 
                        setHoverGradientColor={(value) => setAttributes({ paginationBtnHoverGradientColor: value === undefined ? null : value })}
                        hoverCustomGradientSwitcher={paginationBtnHoverCustomGradientSwitcher}
                        setHoverCustomGradientSwitcher={(value) => setAttributes({ paginationBtnHoverCustomGradientSwitcher: value })}
                        hoverCustomGradientInputValue={paginationBtnHoverCustomGradientInputValue}
                        setHoverCustomGradientInputValue={(value) => setAttributes({ paginationBtnHoverCustomGradientInputValue: value })}

                        isBackgroundImage={false}

                    />

                    <FB_SwitcherControl
                        label={__("Active Text Color", "frontis-blocks")}
                        globalSwitcher={paginationActiveBtnTextColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ paginationActiveBtnTextColorSwitcher: value })}
                    />

                    {paginationActiveBtnTextColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={paginationActiveBtnTextColor} 
                            setGlobalColor={(value) => setAttributes({ paginationActiveBtnTextColor: value === undefined ? '' : value })}
                        />
                    )}

                    {paginationActiveBtnTextColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={paginationActiveBtnTextHoverColor}
                            setGlobalColor={(value) => setAttributes({ paginationActiveBtnTextHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_BackgroundColorControl
                        label={__("Active Background Color", "frontis-blocks")}
                        bgColorSwitcher={paginationActiveBtnBgColorSwitcher}  
                        setBgColorSwitcher={(value) => setAttributes({ paginationActiveBtnBgColorSwitcher: value })}
                        
                        normalBackgroundType={paginationActiveBtnNormalBackgroundType}
                        setNormalBackgroundType={(value) => setAttributes({ paginationActiveBtnNormalBackgroundType: value })}
                        normalClassicColor={paginationActiveBtnNormalClassicColor}
                        setNormalClassicColor={(value) => setAttributes({ paginationActiveBtnNormalClassicColor: value === undefined ? '' : value })}
                        normalGradientColor={paginationActiveBtnNormalGradientColor}
                        setNormalGradientColor={(value) => setAttributes({ paginationActiveBtnNormalGradientColor: value === undefined ? null : value })}
                        normalCustomGradientSwitcher={paginationActiveBtnNormalCustomGradientSwitcher}
                        setNormalCustomGradientSwitcher={(value) => setAttributes({ paginationActiveBtnNormalCustomGradientSwitcher: value })}
                        normalCustomGradientInputValue={paginationActiveBtnNormalCustomGradientInputValue}
                        setNormalCustomGradientInputValue={(value) => setAttributes({ paginationActiveBtnNormalCustomGradientInputValue: value })}

                        hoverBackgroundType={paginationActiveBtnHoverBackgroundType} 
                        setHoverBackgroundType={(value) => setAttributes({ paginationActiveBtnHoverBackgroundType: value })}
                        hoverClassicColor={paginationActiveBtnHoverClassicColor}
                        setHoverClassicColor={(value) => setAttributes({ paginationActiveBtnHoverClassicColor: value === undefined ? '' : value })}
                        hoverGradientColor={paginationActiveBtnHoverGradientColor} 
                        setHoverGradientColor={(value) => setAttributes({ paginationActiveBtnHoverGradientColor: value === undefined ? null : value })}
                        hoverCustomGradientSwitcher={paginationActiveBtnHoverCustomGradientSwitcher}
                        setHoverCustomGradientSwitcher={(value) => setAttributes({ paginationActiveBtnHoverCustomGradientSwitcher: value })}
                        hoverCustomGradientInputValue={paginationActiveBtnHoverCustomGradientInputValue}
                        setHoverCustomGradientInputValue={(value) => setAttributes({ paginationActiveBtnHoverCustomGradientInputValue: value })}

                        isBackgroundImage={false}

                    />

                    <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={paginationBtnBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ paginationBtnBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border", "frontis-blocks")}
                        globalSwitcher={paginationBtnBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ paginationBtnBorderColorSwitcher: value })}
                    />

                    {paginationBtnBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={paginationBtnBorderColor}
                            setGlobalColor={(value) => setAttributes({ paginationBtnBorderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {paginationBtnBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={paginationBtnBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ paginationBtnBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePaginationBtnBorderUnitsHandler}
                        spacingUnits={paginationBtnBorderUnits}
                        spacingDesktop={paginationBtnDesktopBorder}
                        spacingTablet={paginationBtnTabletBorder}
                        spacingMobile={paginationBtnMobileBorder}
                        handleSpacingUnitHandler={handlePaginationBtnBorderUnitChange}
                        spacingCombineBtn={paginationBtnBorderLink}
                        spacingCombineBtnHandler={handlePaginationBtnBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePaginationBtnBorderRadiusUnitsHandler}
                        spacingUnits={paginationBtnBorderRadiusUnits}
                        spacingDesktop={paginationBtnDesktopBorderRadius}
                        spacingTablet={paginationBtnTabletBorderRadius}
                        spacingMobile={paginationBtnMobileBorderRadius}
                        handleSpacingUnitHandler={handlePaginationBtnBorderRadiusUnitChange}
                        spacingCombineBtn={paginationBtnBorderRadiusLink}
                        spacingCombineBtnHandler={handlePaginationBtnBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />

                </PanelBody>
            )}

            <PanelBody title={__("Skeleton Settings", "frontis-blocks")} initialOpen={false}>

                    <FB_ColorControl
                        label={__("Background Color", "frontis-blocks")}
                        globalColor={postGridSkeletonBgColor}
                        setGlobalColor={(value) => setAttributes({ postGridSkeletonBgColor: value === undefined ? '' : value })}
                    />

                    <FB_ColorControl
                        label={__("Highlight Background Color", "frontis-blocks")}
                        globalColor={postGridSkeletonHighlightBgColor}
                        setGlobalColor={(value) => setAttributes({ postGridSkeletonHighlightBgColor: value === undefined ? '' : value })}
                    />

            </PanelBody>

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
                            rangeValue={postGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ postGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={postGridOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ postGridOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={postGridPositionType}
                            setPositionType={(value) => setAttributes({ postGridPositionType: value })}
                                                                            
                            HZOrientationType={postGridHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ postGridHZOrientationType: value })
                            }
                            VROrientationType={postGridVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ postGridVROrientationType: value })
                            }
                                                                                
                            HZLeftOffset={postGridHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ postGridHZLeftOffset: value })}
                            HZLeftOffsetUnits={postGridHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ postGridHZLeftOffsetUnits: value })}
                            HZRightOffset={postGridHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ postGridHZRightOffset: value })}
                            HZRightOffsetUnits={postGridHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ postGridHZRightOffsetUnits: value })}
                                                                            
                            VRTopOffset={postGridVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ postGridVRTopOffset: value })}
                            VRTopOffsetUnits={postGridVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ postGridVRTopOffsetUnits: value })}
                            VRBottomOffset={postGridVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ postGridVRBottomOffset: value })}
                            VRBottomOffsetUnits={postGridVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ postGridVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={postGridGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ postGridGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={postGridGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ postGridGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                        
                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing 
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={postGlobalPaddingUnits}
                            spacingDesktop={postGlobalPaddingDesktop}
                            spacingTablet={postGlobalPaddingTablet}
                            spacingMobile={postGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={postGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing 
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={postGlobalMarginUnits}
                            spacingDesktop={postGlobalMarginDesktop}
                            spacingTablet={postGlobalMarginTablet}
                            spacingMobile={postGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={postGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody title="Background Color" initialOpen={false} >

                        <FB_BackgroundColorControl
                            label={__("Background Color", "frontis-blocks")}
                            bgColorSwitcher={postGlobalBgColorSwitcher} 
                            setBgColorSwitcher={(value) => setAttributes({ postGlobalBgColorSwitcher: value })}
                            
                            normalBackgroundType={postGlobalNormalBackgroundType}
                            setNormalBackgroundType={(value) => setAttributes({ postGlobalNormalBackgroundType: value })}
                            normalClassicColor={postGlobalNormalClassicColor}
                            setNormalClassicColor={(value) => setAttributes({ postGlobalNormalClassicColor: value === undefined ? '' : value })}
                            normalGradientColor={postGlobalNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ postGlobalNormalGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={postGlobalNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ postGlobalNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={postGlobalNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ postGlobalNormalCustomGradientInputValue: value })}
                            
                            hoverBackgroundType={postGlobalHoverBackgroundType}
                            setHoverBackgroundType={(value) => setAttributes({ postGlobalHoverBackgroundType: value })}
                            hoverClassicColor={postGlobalHoverClassicColor}
                            setHoverClassicColor={(value) => setAttributes({ postGlobalHoverClassicColor: value === undefined ? '' : value })}
                            hoverGradientColor={postGlobalHoverGradientColor} 
                            setHoverGradientColor={(value) => setAttributes({ postGlobalHoverGradientColor: value === undefined ? null : value })}
                            hoverCustomGradientSwitcher={postGlobalHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ postGlobalHoverCustomGradientSwitcher: value })}
                            hoverCustomGradientInputValue={postGlobalHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ postGlobalHoverCustomGradientInputValue: value })}

                            isBackgroundImage={false}

                        />
                    </PanelBody>
                    <PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

                        <SelectControl
                                label={__("Border Style", "frontis-blocks")}
                                value={postGlobalBorder}
                                options={BORDER_STYLES}
                                onChange={(value) => setAttributes({ postGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={postGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ postGlobalBorderColorSwitcher: value })}
                        />

                        {postGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={postGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ postGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {postGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={postGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ postGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing 
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={postGlobalBorderUnits}
                            spacingDesktop={postGlobalBorderDesktop}
                            spacingTablet={postGlobalBorderTablet}
                            spacingMobile={postGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={postGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing 
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={postGlobalBorderRadiusUnits}
                            spacingDesktop={postGlobalBorderRadiusDesktop}
                            spacingTablet={postGlobalBorderRadiusTablet}
                            spacingMobile={postGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={postGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={postGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ postGlobalBoxShadowSwitcher: value })}
                        />

                        {postGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ postGlobalBoxShadowValues: value })}
                                initialShadowValue={postGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ postGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {postGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ postGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={postGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ postGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}

                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={postGridDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ postGridDesktopSwitcher: value })}

                            tabletValue={postGridTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ postGridTabletSwitcher: value })}

                            mobileValue={postGridMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ postGridMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor  
                            value={postGridGlobalCustomCSS} 
                            onChangeValue={(value) => setAttributes({ postGridGlobalCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
        </>
	);

    return (
        <>

            <style>
                {editorStyle}
            </style>

            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}