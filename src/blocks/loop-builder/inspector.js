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
} from '@Constants/fbConstants';

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
		postType,
		postPerPage,
		postOffset,
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
        /** End description */

        /** Start category */
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

        thumbnailLinkSwitcher,
        categoryLinkSwitcher,
        tagLinkSwitcher,
        authorLinkSwitcher,
        titleLinkSwitcher,

        /** Start Post Grid Settings */
        postGridSkeletonBgColor,
        postGridSkeletonHighlightBgColor,
        /** End Post Grid Settings */
	} = attributes;

    const deviceType= useDeviceType();
    
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-loop-builder-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


    useEffect(() => {
        setAttributes({ postPerPage: postPerPage === 0 ? undefined : postPerPage });
        setAttributes({ postOffset: postOffset === 0 ? undefined : postOffset });
    }, [postPerPage, postOffset]);


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

    /** Start category */
	const allTaxs = FrontisBlocksData.all_cats;
	const allTaxonomies = allTaxs[postType];
    /** End Taxonomies Options */   

	const taxOptions = allTaxonomies?.terms?.category?.map(item => ({
		value: item.id,
		label: item.name
	})) || [];

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
    /** End category */

    /** Start tag */
    const tagOptions = allTaxonomies?.terms?.post_tag?.map(item => ({
        value: item.id,
        label: item.name
    })) || [];


    const filterTagOptions = [
        { value: 0, label: 'All' },
        ...tagOptions
    ];

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

    /** End Tag */

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

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <div className="fb-setting-general-wrapper">
                <PanelBody
                    title={__("Query", "frontis-blocks")}
                    initialOpen={true}
                >
                    <RangeControl
                        label={__("Post per page", "frontis-blocks")}
                        value={postPerPage}
                        onChange={(value) => setAttributes({ postPerPage: value })}
                        min={1}
                        max={100}
                        step={1}
                        resetFallbackValue={6}
                    />
                    <RangeControl
                        label={__("Posts offset ", "frontis-blocks")}
                        value={postOffset} 
                        onChange={(value) => setAttributes({ postOffset: value })}
                        min={0}
                        max={100}
                        step={1}
                        resetFallbackValue={0}
                    />
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
                    
                </PanelBody>
            </div>
        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>

        </>
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
        <>

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