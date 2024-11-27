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
    TextControl,
} from '@wordpress/components';

import { BORDER_STYLES } from './constants/constants';

/**
 * External Dependencies
 */
import Select2 from "react-select";

import FB_Spacing from '@Components/spacing';
import FB_ColorControl from '@Components/color-control';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_Range from '@Components/range';
import FB_IncludeExcludeSwitcherControl from '@Components/switcher-include-exclude-control';
import FB_HtmlTagControl from '@Components/html-tag-control';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
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
		columnsPerSection,
		gapUnits,
		rowGap,
		columnGap,

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
        postGridBgColor,
        postGridBgHoverColor,

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

        postGridBoxShadowValues,
        postGridBoxShadowCssValue,
        /** End grid */ 

        /** Start Image */
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
        /** End description */

	} = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-post-grid-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


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

    /** Start category */
	const allTaxs = FrontisBlocksData.all_cats;
	const allTaxonomies = allTaxs[postType];

	const taxOptions = allTaxonomies?.terms?.category?.map(item => ({
		value: item.id,
		label: item.name
	})) || [];

    const createOptionFromCategory = (categoryIds) => categoryIds.map(catId => ({
        value: catId,
        label: taxOptions.find(option => option.value === catId)?.label || ''
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

    const createOptionFromTag = (tagIds) => tagIds.map(tagId => ({
        value: tagId,
        label: tagOptions.find(option => option.value === tagId)?.label || ''
    }));

    const [selectedTagOption, setSelectedTagOption] = useState(createOptionFromTag(selectedTag));
    const [deSelectedTagOption, setDeSelectedTagOption] = useState(createOptionFromTag(deSelectedTag));

    const updateTagSelection = (optionSetter, attributeKey) => (options) => {
        optionSetter(options);
        setAttributes({ [attributeKey]: options.map(option => option.value) });
    };

    const handleTagChange = updateTagSelection(setSelectedTagOption, 'selectedTag');
    const handleDeSelectedTagChange = updateTagSelection(setDeSelectedTagOption, 'deSelectedTag');
    /** End tag */

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
    const [selectedSortOrder, setSelectedSortOrder] = useState({ value: 'desc', label: 'DESC' });
    /** End sort order */

    const handleSortOrderChange = (option) => {
        setSelectedSortOrder(option);
        setAttributes({ sortOrder: option.value });
    };

    /** Start order by */
    const [selectedOrderBy, setSelectedOrderBy] = useState({ value: 'date', label: 'Date' });

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
    const postGridPaddingDesktopWidth = `${postGridPaddingDesktop.top}${postGridPaddingUnits.Desktop} ${postGridPaddingDesktop.right}${postGridPaddingUnits.Desktop} ${postGridPaddingDesktop.bottom}${postGridPaddingUnits.Desktop} ${postGridPaddingDesktop.left}${postGridPaddingUnits.Desktop}`;
    const postGridPaddingTabletWidth = `${postGridPaddingTablet.top}${postGridPaddingUnits.Tablet} ${postGridPaddingTablet.right}${postGridPaddingUnits.Tablet} ${postGridPaddingTablet.bottom}${postGridPaddingUnits.Tablet} ${postGridPaddingTablet.left}${postGridPaddingUnits.Tablet}`;
    const postGridPaddingMobileWidth = `${postGridPaddingMobile.top}${postGridPaddingUnits.Mobile} ${postGridPaddingMobile.right}${postGridPaddingUnits.Mobile} ${postGridPaddingMobile.bottom}${postGridPaddingUnits.Mobile} ${postGridPaddingMobile.left}${postGridPaddingUnits.Mobile}`;
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
    const postGridMarginDesktopWidth = `${postGridMarginDesktop.top}${postGridMarginUnits.Desktop} ${postGridMarginDesktop.right}${postGridMarginUnits.Desktop} ${postGridMarginDesktop.bottom}${postGridMarginUnits.Desktop} ${postGridMarginDesktop.left}${postGridMarginUnits.Desktop}`;
    const postGridMarginTabletWidth = `${postGridMarginTablet.top}${postGridMarginUnits.Tablet} ${postGridMarginTablet.right}${postGridMarginUnits.Tablet} ${postGridMarginTablet.bottom}${postGridMarginUnits.Tablet} ${postGridMarginTablet.left}${postGridMarginUnits.Tablet}`;
    const postGridMarginMobileWidth = `${postGridMarginMobile.top}${postGridMarginUnits.Mobile} ${postGridMarginMobile.right}${postGridMarginUnits.Mobile} ${postGridMarginMobile.bottom}${postGridMarginUnits.Mobile} ${postGridMarginMobile.left}${postGridMarginUnits.Mobile}`;
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
    const postGridBorderDesktopWidth = `${postGridBorderDesktop.top}${postGridBorderUnits.Desktop} ${postGridBorderDesktop.right}${postGridBorderUnits.Desktop} ${postGridBorderDesktop.bottom}${postGridBorderUnits.Desktop} ${postGridBorderDesktop.left}${postGridBorderUnits.Desktop}`;
    const postGridBorderTabletWidth = `${postGridBorderTablet.top}${postGridBorderUnits.Tablet} ${postGridBorderTablet.right}${postGridBorderUnits.Tablet} ${postGridBorderTablet.bottom}${postGridBorderUnits.Tablet} ${postGridBorderTablet.left}${postGridBorderUnits.Tablet}`;
    const postGridBorderMobileWidth = `${postGridBorderMobile.top}${postGridBorderUnits.Mobile} ${postGridBorderMobile.right}${postGridBorderUnits.Mobile} ${postGridBorderMobile.bottom}${postGridBorderUnits.Mobile} ${postGridBorderMobile.left}${postGridBorderUnits.Mobile}`;
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
    const postGridBorderRadiusDesktopWidth = `${postGridBorderRadiusDesktop.top}${postGridBorderRadiusUnits.Desktop} ${postGridBorderRadiusDesktop.right}${postGridBorderRadiusUnits.Desktop} ${postGridBorderRadiusDesktop.bottom}${postGridBorderRadiusUnits.Desktop} ${postGridBorderRadiusDesktop.left}${postGridBorderRadiusUnits.Desktop}`;
    const postGridBorderRadiusTabletWidth = `${postGridBorderRadiusTablet.top}${postGridBorderRadiusUnits.Tablet} ${postGridBorderRadiusTablet.right}${postGridBorderRadiusUnits.Tablet} ${postGridBorderRadiusTablet.bottom}${postGridBorderRadiusUnits.Tablet} ${postGridBorderRadiusTablet.left}${postGridBorderRadiusUnits.Tablet}`;
    const postGridBorderRadiusMobileWidth = `${postGridBorderRadiusMobile.top}${postGridBorderRadiusUnits.Mobile} ${postGridBorderRadiusMobile.right}${postGridBorderRadiusUnits.Mobile} ${postGridBorderRadiusMobile.bottom}${postGridBorderRadiusUnits.Mobile} ${postGridBorderRadiusMobile.left}${postGridBorderRadiusUnits.Mobile}`;
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
    const postImageDesktopBorderWidth = `${postImageDesktopBorder.top}${postImageBorderUnits.Desktop} ${postImageDesktopBorder.right}${postImageBorderUnits.Desktop} ${postImageDesktopBorder.bottom}${postImageBorderUnits.Desktop} ${postImageDesktopBorder.left}${postImageBorderUnits.Desktop}`;
    const postImageTabletBorderWidth = `${postImageTabletBorder.top}${postImageBorderUnits.Tablet} ${postImageTabletBorder.right}${postImageBorderUnits.Tablet} ${postImageTabletBorder.bottom}${postImageBorderUnits.Tablet} ${postImageTabletBorder.left}${postImageBorderUnits.Tablet}`;
    const postImageMobileBorderWidth = `${postImageMobileBorder.top}${postImageBorderUnits.Mobile} ${postImageMobileBorder.right}${postImageBorderUnits.Mobile} ${postImageMobileBorder.bottom}${postImageBorderUnits.Mobile} ${postImageMobileBorder.left}${postImageBorderUnits.Mobile}`;
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
    const postImageDesktopBorderRadiusWidth = `${postImageDesktopBorderRadius.top}${postImageBorderRadiusUnits.Desktop} ${postImageDesktopBorderRadius.right}${postImageBorderRadiusUnits.Desktop} ${postImageDesktopBorderRadius.bottom}${postImageBorderRadiusUnits.Desktop} ${postImageDesktopBorderRadius.left}${postImageBorderRadiusUnits.Desktop}`;
    const postImageTabletBorderRadiusWidth = `${postImageTabletBorderRadius.top}${postImageBorderRadiusUnits.Tablet} ${postImageTabletBorderRadius.right}${postImageBorderRadiusUnits.Tablet} ${postImageTabletBorderRadius.bottom}${postImageBorderRadiusUnits.Tablet} ${postImageTabletBorderRadius.left}${postImageBorderRadiusUnits.Tablet}`;
    const postImageMobileBorderRadiusWidth = `${postImageMobileBorderRadius.top}${postImageBorderRadiusUnits.Mobile} ${postImageMobileBorderRadius.right}${postImageBorderRadiusUnits.Mobile} ${postImageMobileBorderRadius.bottom}${postImageBorderRadiusUnits.Mobile} ${postImageMobileBorderRadius.left}${postImageBorderRadiusUnits.Mobile}`;
    /** End Image Border Radius */

    /** Start Post Image Margin */
    const handlePostImageMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( postGridMarginLink ) {
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
    const postImageMarginDesktopWidth = `${postImageMarginDesktop.top}${postImageMarginUnits.Desktop} ${postImageMarginDesktop.right}${postImageMarginUnits.Desktop} ${postImageMarginDesktop.bottom}${postImageMarginUnits.Desktop} ${postImageMarginDesktop.left}${postImageMarginUnits.Desktop}`;
    const postImageMarginTabletWidth = `${postImageMarginTablet.top}${postImageMarginUnits.Tablet} ${postImageMarginTablet.right}${postImageMarginUnits.Tablet} ${postImageMarginTablet.bottom}${postImageMarginUnits.Tablet} ${postImageMarginTablet.left}${postImageMarginUnits.Tablet}`;
    const postImageMarginMobileWidth = `${postImageMarginMobile.top}${postImageMarginUnits.Mobile} ${postImageMarginMobile.right}${postImageMarginUnits.Mobile} ${postImageMarginMobile.bottom}${postImageMarginUnits.Mobile} ${postImageMarginMobile.left}${postImageMarginUnits.Mobile}`;
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
    const postTitleMarginDesktopWidth = `${postTitleMarginDesktop.top}${postTitleMarginUnits.Desktop} ${postTitleMarginDesktop.right}${postTitleMarginUnits.Desktop} ${postTitleMarginDesktop.bottom}${postTitleMarginUnits.Desktop} ${postTitleMarginDesktop.left}${postTitleMarginUnits.Desktop}`;
    const postTitleMarginTabletWidth = `${postTitleMarginTablet.top}${postTitleMarginUnits.Tablet} ${postTitleMarginTablet.right}${postTitleMarginUnits.Tablet} ${postTitleMarginTablet.bottom}${postTitleMarginUnits.Tablet} ${postTitleMarginTablet.left}${postTitleMarginUnits.Tablet}`;
    const postTitleMarginMobileWidth = `${postTitleMarginMobile.top}${postTitleMarginUnits.Mobile} ${postTitleMarginMobile.right}${postTitleMarginUnits.Mobile} ${postTitleMarginMobile.bottom}${postTitleMarginUnits.Mobile} ${postTitleMarginMobile.left}${postTitleMarginUnits.Mobile}`;
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
    const postDescriptionMarginDesktopWidth = `${postDescriptionMarginDesktop.top}${postDescriptionMarginUnits.Desktop} ${postDescriptionMarginDesktop.right}${postDescriptionMarginUnits.Desktop} ${postDescriptionMarginDesktop.bottom}${postDescriptionMarginUnits.Desktop} ${postDescriptionMarginDesktop.left}${postDescriptionMarginUnits.Desktop}`;
    const postDescriptionMarginTabletWidth = `${postDescriptionMarginTablet.top}${postDescriptionMarginUnits.Tablet} ${postDescriptionMarginTablet.right}${postDescriptionMarginUnits.Tablet} ${postDescriptionMarginTablet.bottom}${postDescriptionMarginUnits.Tablet} ${postDescriptionMarginTablet.left}${postDescriptionMarginUnits.Tablet}`;
    const postDescriptionMarginMobileWidth = `${postDescriptionMarginMobile.top}${postDescriptionMarginUnits.Mobile} ${postDescriptionMarginMobile.right}${postDescriptionMarginUnits.Mobile} ${postDescriptionMarginMobile.bottom}${postDescriptionMarginUnits.Mobile} ${postDescriptionMarginMobile.left}${postDescriptionMarginUnits.Mobile}`;
    /** End Description Margin */



    const allBlockStyle = useMemo(() => `
        .${blockId}.fb_post_grid_container {
            display: grid; 
            grid-template-columns: repeat(${columnsPerSection.Desktop}, 1fr) !important;
            row-gap: ${rowGap.Desktop}${gapUnits.Desktop}; 
            column-gap: ${columnGap.Desktop}${gapUnits.Desktop}; 
        }

        .${blockId}.fb_post_grid_container .fb_load_more_wrapper {
            grid-column: span ${columnsPerSection.Desktop};
        }
        .skeleton-item {
            display: grid;
            grid-template-columns: repeat(${columnsPerSection.Desktop}, 1fr);
            row-gap: ${rowGap.Desktop}${gapUnits.Desktop};
            column-gap: ${columnGap.Desktop}${gapUnits.Desktop};
            width: 100%;
            height: auto;
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper {
            ${postGridBgColor ? `background-color: ${postGridBgColor};` : ''}
			${postGridPaddingDesktopWidth ? `padding: ${postGridPaddingDesktopWidth};` : ''}
			${postGridMarginDesktopWidth ? `margin: ${postGridMarginDesktopWidth};` : ''}
			${postGridBorder ? `border: ${postGridBorder};` : ''}
			${postGridBorderDesktopWidth ? `border-width: ${postGridBorderDesktopWidth};` : ''}
			${postGridBorderRadiusDesktopWidth ? `border-radius: ${postGridBorderRadiusDesktopWidth};` : ''}
			${postGridBorderColor ? `border-color: ${postGridBorderColor};` : ''}
            ${postGridBoxShadowCssValue ? `box-shadow: ${postGridBoxShadowCssValue};` : ''}
			transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper:hover {
            ${postGridBgHoverColor ? `background-color: ${postGridBgHoverColor};` : ''}
            ${postGridBorderHoverColor ? `border-color: ${postGridBorderHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image {
            ${postImageWidth.Desktop ? `width: ${postImageWidth.Desktop}${postImageWidthUnits.Desktop};` : ''}
            ${postImageHeight.Desktop ? `height: ${postImageHeight.Desktop}${postImageHeightUnits.Desktop};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image img {
            ${postImageBorder ? `border: ${postImageBorder};` : ''}
            ${postImageDesktopBorderWidth ? `border-width: ${postImageDesktopBorderWidth};` : ''}
            ${postImageBorderColor ? `border-color: ${postImageBorderColor};` : ''}
            ${postImageDesktopBorderRadiusWidth ? `border-radius: ${postImageDesktopBorderRadiusWidth};` : ''}
            ${postImageMarginDesktopWidth ? `margin: ${postImageMarginDesktopWidth};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_image:hover img {
            ${postImageBorderHoverColor ? `border-color: ${postImageBorderHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title {
        	${postTitleColor ? `color: ${postTitleColor};` : ''}
			${postTitleFontFamily ? `font-family: ${postTitleFontFamily};` : ''}
			${postTitleFontSize.Desktop ? `font-size: ${postTitleFontSize.Desktop}${postTitleFontSizeUnits.Desktop};` : ''}
			${postTitleFontWeight ? `font-weight: ${postTitleFontWeight};` : ''}
			${postTitleFontStyle ? `font-style: ${postTitleFontStyle};` : ''}
			${postTitleTextTransform ? `text-transform: ${postTitleTextTransform};` : ''}
			${postTitleTextDecoration ? `text-decoration: ${postTitleTextDecoration};` : ''}
			${postTitleLetterSpacing.Desktop ? `letter-spacing: ${postTitleLetterSpacing.Desktop}${postTitleLetterSpacingUnits.Desktop};` : ''}
			${postTitleLineHeight.Desktop ? `line-height: ${postTitleLineHeight.Desktop}${postTitleLineHeightUnits.Desktop};` : ''}
			${postTitleMarginDesktopWidth ? `margin: ${postTitleMarginDesktopWidth};` : ''}
        }
        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_title:hover {
            ${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ''}
        }

        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc {
        	${postDescriptionColor ? `color: ${postDescriptionColor};` : ''}
			${postDescriptionFontFamily ? `font-family: ${postDescriptionFontFamily};` : ''}
			${postDescriptionFontSize.Desktop ? `font-size: ${postDescriptionFontSize.Desktop}${postDescriptionFontSizeUnits.Desktop};` : ''}
			${postDescriptionFontWeight ? `font-weight: ${postDescriptionFontWeight};` : ''}
			${postDescriptionFontStyle ? `font-style: ${postDescriptionFontStyle};` : ''}
			${postDescriptionTextTransform ? `text-transform: ${postDescriptionTextTransform};` : ''}
			${postDescriptionTextDecoration ? `text-decoration: ${postDescriptionTextDecoration};` : ''}
			${postDescriptionLetterSpacing.Desktop ? `letter-spacing: ${postDescriptionLetterSpacing.Desktop}${postDescriptionLetterSpacingUnits.Desktop};` : ''}
			${postDescriptionLineHeight.Desktop ? `line-height: ${postDescriptionLineHeight.Desktop}${postDescriptionLineHeightUnits.Desktop};` : ''}
			${postDescriptionMarginDesktopWidth ? `margin: ${postDescriptionMarginDesktopWidth};` : ''}
        }
        .${blockId}.fb_post_grid_container .fb_post_grid_wrapper .fb_post_grid_content .fb_post_desc:hover {
            ${postDescriptionHoverColor ? `color: ${postDescriptionHoverColor};` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${blockId}.fb_post_grid_container { 
                display: grid;
                grid-template-columns: repeat(${columnsPerSection.Tablet}, 1fr) !important;
                row-gap: ${rowGap.Tablet}${gapUnits.Tablet};
                column-gap: ${columnGap.Tablet}${gapUnits.Tablet};
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockId}.fb_post_grid_container { 
                display: grid;
                grid-template-columns: repeat(${columnsPerSection.Mobile}, 1fr) !important;
                row-gap: ${rowGap.Mobile}${gapUnits.Mobile};
                column-gap: ${columnGap.Mobile}${gapUnits.Mobile};
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
        columnsPerSection,
        gapUnits,
        rowGap,
        columnGap,

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
        postGridBgColor,
        postGridBgHoverColor,

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

        postGridBoxShadowValues,
        postGridBoxShadowCssValue,

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
    ]);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle]);

    const editorStyle = allBlockStyle.replace(/\s+/g, ' ').trim();

    return (
        <>

            <style>
                {editorStyle}
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
								name:"styles",
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
                                        <div className="fb-advanced-wrapper">
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
                                                           {value: "date", label: "Date"},
                                                            {value: "author", label: "Author"},
                                                            {value: "title", label: "Title"},
                                                            {value: "modified", label: "Last Modified"}
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
                                                           {value: "asc", label: "ASC"},
                                                            {value: "desc", label: "DESC"}
                                                        ]}
                                                        value={selectedSortOrder}
                                                        onChange={handleSortOrderChange}
                                                        className="fb-select2-control"
                                                    />
                                                </BaseControl>

												<NumberControl
													label={__('Post per page', 'frontis-blocks')}
													isShiftStepEnabled={ true }
													onChange={ (value) => setAttributes({postPerPage: value}) }
													shiftStep={ 1 }
													value={ postPerPage }
												/>
                                            </PanelBody>

                                            <PanelBody
                                                title={__("Grid", "frontis-blocks")}
                                                initialOpen={false}
                                            >

                                                <FB_Range
                                                    min={1}
                                                    max={6}
                                                    label={__("Columns", "frontis-blocks")}
                                                    rangeValue={columnsPerSection}
                                                    onChangeHandler={(value) => setAttributes({ columnsPerSection: value })}
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
                                                    rangeValue={rowGap}
                                                    onChangeHandler={(value) => setAttributes({ rowGap: value })}
                                                    rangeUnitHandler={(value) => setAttributes({ gapUnits: value })}
                                                    deviceType={deviceType}
                                                    units={gapUnits}
                                                    setAttributes={setAttributes}
                                                    rangeStep={1}
                                                    resetFallbackValue={"30"}
                                                />

                                                <FB_Range
                                                    min={1}
                                                    max={200}
                                                    label={__("Column Gap", "frontis-blocks")}
                                                    rangeValue={columnGap}
                                                    onChangeHandler={(value) => setAttributes({ columnGap: value })}
                                                    rangeUnitHandler={(value) => setAttributes({ gapUnits: value })}
                                                    deviceType={deviceType}
                                                    units={gapUnits}
                                                    setAttributes={setAttributes}
                                                    rangeStep={1}
                                                    resetFallbackValue={"30"}
                                                />

                                            </PanelBody>
                                        </div>
                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Post Grid Item", "frontis-blocks")} initialOpen={false}>

                                            <FB_SwitcherControl
                                                label={__("Background", "frontis-blocks")}
                                                globalSwitcher={postGridBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ postGridBgColorSwitcher: value })}
                                            />

                                            {postGridBgColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={postGridBgColor}
                                                    setGlobalColor={(value) => setAttributes({ postGridBgColor: value })}
                                                />
                                            )}

                                            {postGridBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={postGridBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ postGridBgHoverColor: value })}
                                                />
                                            )}

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
                                                    setGlobalColor={(value) => setAttributes({ postGridBorderColor: value })}
                                                />
                                            )}

                                            {postGridBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={postGridBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ postGridBorderHoverColor: value })}
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
                                            <FB_BoxShadowControl
                                                onBoxShadowChange={(value) => setAttributes({ postGridBoxShadowValues: value })}
                                                initialShadowValue={postGridBoxShadowValues}
                                                onBoxShadowStyleChange={(value) => setAttributes({ postGridBoxShadowCssValue: value })}
                                            />
                                        </PanelBody>

                                        <PanelBody title={__("Thumbnail", "frontis-blocks")} initialOpen={false}>

                                            <FB_Range
                                                min={1}
                                                max={2000}
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
                                                max={2000}
                                                label={__("Height", "frontis-blocks")}
                                                rangeValue={postImageHeight}
                                                onChangeHandler={(value) => setAttributes({ postImageHeight: value })}
                                                rangeUnitHandler={(value) => setAttributes({ postImageHeightUnits: value })}
                                                deviceType={deviceType}
                                                units={postImageHeightUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={"100"}
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
                                                    setGlobalColor={(value) => setAttributes({ postImageBorderColor: value })}
                                                />
                                            )}

                                            {postImageBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={postImageBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ postImageBorderHoverColor: value })}
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

                                            <FB_HtmlTagControl
                                                label={__("Title Tag", "frontis-blocks")}
                                                globalHtmlTag={postTitleTag}
                                                setGlobalHtmlTag={(value) => setAttributes({ postTitleTag: value })}
                                            />

                                            <FB_TypographyControl
                                                fontFamily={postTitleFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ postTitleFontFamily: value })}

                                                fontSize={postTitleFontSize}
                                                onChangeFontSize={(value) => setAttributes({ postTitleFontSize: value })}

                                                fontSizeUnits={postTitleFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ postTitleFontSizeUnits: value })}

                                                fontWeight={postTitleFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ postTitleFontWeight: value })}

                                                fontStyle={postTitleFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ postTitleFontStyle: value })}

                                                textTransform={postTitleTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ postTitleTextTransform: value })}

                                                textDecoration={postTitleTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ postTitleTextDecoration: value })}

                                                letterSpacing={postTitleLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ postTitleLetterSpacing: value })}

                                                letterSpacingUnits={postTitleLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ postTitleLetterSpacingUnits: value })}

                                                lineHeight={postTitleLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ postTitleLineHeight: value })}

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
                                                    setGlobalColor={(value) => setAttributes({ postTitleColor: value })}
                                                />
                                            )}

                                            {postTitleColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={postTitleHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ postTitleHoverColor: value })}
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
                                                fontFamily={postDescriptionFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ postDescriptionFontFamily: value })}

                                                fontSize={postDescriptionFontSize}
                                                onChangeFontSize={(value) => setAttributes({ postDescriptionFontSize: value })}

                                                fontSizeUnits={postDescriptionFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ postDescriptionFontSizeUnits: value })}

                                                fontWeight={postDescriptionFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ postDescriptionFontWeight: value })}

                                                fontStyle={postDescriptionFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ postDescriptionFontStyle: value })}

                                                textTransform={postDescriptionTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ postDescriptionTextTransform: value })}

                                                textDecoration={postDescriptionTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ postDescriptionTextDecoration: value })}

                                                letterSpacing={postDescriptionLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ postDescriptionLetterSpacing: value })}

                                                letterSpacingUnits={postDescriptionLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ postDescriptionLetterSpacingUnits: value })}

                                                lineHeight={postDescriptionLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ postDescriptionLineHeight: value })}

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
                                                    setGlobalColor={(value) => setAttributes({ postDescriptionColor: value })}
                                                />
                                            )}

                                            {postDescriptionColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={postDescriptionHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ postDescriptionHoverColor: value })}
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

                                        </PanelBody>
                                    </>
                                )}
                            {tab.name === "advanced" && (
                                    <>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-inner-wrapper">
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