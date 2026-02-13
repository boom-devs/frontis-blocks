import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { useEffect, useMemo, memo, useState } from '@wordpress/element';
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
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ImageControl from '@Components/image-control';
import FB_InspectorControls from '@Components/InspectorControls';

import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
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
	/** End Pagination Button Border */

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
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}
export default memo(Inspector);