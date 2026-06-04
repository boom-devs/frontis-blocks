import { __ } from "@wordpress/i18n";
import { useEffect, useMemo, memo, useState, useCallback } from "@wordpress/element";
import {
	PanelBody,
	BaseControl,
	RangeControl,
	ToggleControl,
	SelectControl,
	ButtonGroup,
	Button,
} from "@wordpress/components";
import Select2 from "react-select";
import {
	POST_CATEGORY_PREMADE_STYLE,
	OVERFLOW_OP,
	SELECTION_TYPE_OPTIONS,
	ORDER_BY_OPTIONS,
	SORT_ORDER_OPTIONS,
	POST_SWITCHER,
	LIST_STYLE_OPTIONS,
	READ_MORE_ICON_ALIGN,
	BORDER_STYLES,
	IMAGE_AUTO_FIT,
	ITEM_POSITION,
} from "@Constants/fbConstants";
import getCustomCss from "@Utils/getCustomCss";
import { useDeviceType } from "@Config/displayType";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_PositionControl from "@Components/position-control";
import FB_Range from "@Components/range";
import FBIconPicker from "../../components/icon-picker";
import FB_ImageControl from "@Components/image-control";
import FB_InputControl from "@Components/input-control";
import FB_Spacing from "@Components/spacing";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_SwitcherControl from "@Components/switcher-control";
import FB_ColorControl from "@Components/color-control";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_TypographyControl from "@Components/typography-control";
import FB_Presets from '@Components/presets';

import generateSvgIcon from "@Utils/generateSvgIcon";

import "./editor.scss";

const Inspector = ({ attributes, setAttributes, clientId }) => {
	const {
		blockID,
		blockStyle,
		premadeStyle,
		taxonomyType,
		showAuthor,
		showCategoryImage,
		mediaSize,
		mediaHeight,
		mediaSizeUnits,
		mediaHeightUnits,
		autoFitSwitch,
		imageFit,
		imagePosition,
		authorAvatarSize,
		authorAvatarSizeUnits,
		authorAvatarGaps,
		authorAvatarGapUnits,
		showLabel,
		showCount,
		showDescription,
		showEmpty,
		showChildCategories,
		selectionType,
		includeTaxonomies,
		excludeTaxonomies,
		orderBy,
		sortOrder,
		perPage,

		layoutType,
		gridColumns,
		gridGapUnits,
		gridRowGap,
		gridColumnGap,
		listStyle,
		listIndentation,
		listIndentationUnits,
		postCategoryGlobalCustomCSS,

		readMoreSwitcher,
		readMoreText,
		readMoreIconAlign,
		readMoreIcon,
		readMoreIconFrontend,
		readMoreIconImageUrl,
		readMoreIconImageAlt,
		readMoreIconImageID,

		readMoreIconImagedisplay,

		/* Position */
		postCategoryPositionType,
		postCategoryHZOrientationType,
		postCategoryVROrientationType,
		postCategoryHZLeftOffset,
		postCategoryHZLeftOffsetUnits,
		postCategoryHZRightOffset,
		postCategoryHZRightOffsetUnits,
		postCategoryVRTopOffset,
		postCategoryVRTopOffsetUnits,
		postCategoryVRBottomOffset,
		postCategoryVRBottomOffsetUnits,

		/** Start Grid */

		taxonomyHeight,
		taxonomyHeightUnits,

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

		/** Background */
		postCategoryBgColorSwitcher,
		postCategoryNormalBackgroundType,
		postCategoryNormalClassicColor,
		postCategoryNormalGradientColor,
		postCategoryNormalCustomGradientSwitcher,
		postCategoryNormalCustomGradientInputValue,
		postCategoryHoverBackgroundType,
		postCategoryHoverClassicColor,
		postCategoryHoverGradientColor,
		postCategoryHoverCustomGradientSwitcher,
		postCategoryHoverCustomGradientInputValue,

		/** Border */
		postCategoryBorder,
		postCategoryBorderColorSwitcher,
		postCategoryBorderColor,
		postCategoryBorderHoverColor,
		postCategoryBorderUnits,
		postCategoryBorderDesktop,
		postCategoryBorderTablet,
		postCategoryBorderMobile,
		postCategoryBorderLink,

		/** Border Radius */
		postCategoryBorderRadiusUnits,
		postCategoryBorderRadiusDesktop,
		postCategoryBorderRadiusTablet,
		postCategoryBorderRadiusMobile,
		postCategoryBorderRadiusLink,

		/** Box Shadow */
		postCategoryBoxShadowSwitcher,
		postCategoryBoxShadowValues,
		postCategoryBoxShadowCssValue,
		postCategoryBoxShadowHoverValues,
		postCategoryBoxShadowHoverCssValue,

		/** Start title     */
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
		/** End title */
		
		/** Start Author Name     */
		authorNameGlobalTypoSwitcher,
		authorNameGlobalTypographyData,
		authorNameGlobalTypoType,
		authorNameGlobalTypoOption,
		authorNameFontFamily,
		authorNameFontSize,
		authorNameFontSizeUnits,
		authorNameFontWeight,
		authorNameFontStyle,
		authorNameTextTransform,
		authorNameTextDecoration,
		authorNameLetterSpacing,
		authorNameLetterSpacingUnits,
		authorNameLineHeight,
		authorNameLineHeightUnits,

		authorNameColorSwitcher,
		authorNameColor,
		authorNameHoverColor,

		postAuthorMarginUnits,
		postAuthorMarginDesktop,
		postAuthorMarginTablet,
		postAuthorMarginMobile,
		postAuthorMarginLink,
		/** End Author Name */

		/** Start description     */
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

		postDescriptionSpacing,
		postDescriptionSpacingUnits,

		postDescriptionExcerptLength,
		/** End description */

		/** Start count     */
		postCountGlobalTypoSwitcher,
		postCountGlobalTypographyData,
		postCountGlobalTypoType,
		postCountGlobalTypoOption,
		postCountFontFamily,
		postCountFontSize,
		postCountFontSizeUnits,
		postCountFontWeight,
		postCountFontStyle,
		postCountTextTransform,
		postCountTextDecoration,
		postCountLetterSpacing,
		postCountLetterSpacingUnits,
		postCountLineHeight,
		postCountLineHeightUnits,

		postCountColorSwitcher,
		postCountColor,
		postCountHoverColor,

		postCountSpacing,
		postCountSpacingUnits,
		labelGaps,
		labelGapUnits,
		/** End count */

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

		buttonIconPaddingUnits,
		buttonIconDesktopPadding,
		buttonIconTabPadding,
		buttonIconMobilePadding,
		buttonIconPaddingLink,

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

		/** Start List Layout */
		postListTypeColorSwitcher,
		postListTypeColor,
		postListTypeHoverColor,

		postListItemSpacing,
		postListItemSpacingUnits,

		separatorStyle,
		separatorThickness,
		separatorThicknessUnits,
		separatorWidth,
		separatorWidthUnits,
		separatorColorSwitcher,
		separatorColor,
		separatorHoverColor,

		postCountBgColorSwitcher,
		postCountNormalBackgroundType,
		postCountNormalClassicColor,
		postCountNormalGradientColor,
		postCountNormalCustomGradientSwitcher,
		postCountNormalCustomGradientInputValue,
		postCountHoverBackgroundType,
		postCountHoverClassicColor,
		postCountHoverGradientColor,
		postCountHoverCustomGradientSwitcher,
		postCountHoverCustomGradientInputValue,

		postCountPaddingUnits,
		postCountPaddingDesktop,
		postCountPaddingTablet,
		postCountPaddingMobile,
		postCountPaddingLink,

		postCountBorder,
		postCountBorderColorSwitcher,
		postCountBorderColor,
		postCountBorderHoverColor,
		postCountBorderUnits,
		postCountBorderDesktop,
		postCountBorderTablet,
		postCountBorderMobile,
		postCountBorderLink,

		postCountBorderRadiusUnits,
		postCountBorderRadiusDesktop,
		postCountBorderRadiusTablet,
		postCountBorderRadiusMobile,
		postCountBorderRadiusLink,

		postCountBoxShadowSwitcher,
		postCountBoxShadowValues,
		postCountBoxShadowCssValue,
		postCountBoxShadowHoverValues,
		postCountBoxShadowHoverCssValue,
		/** End List Layout */

		/** Start Global Setting */
		postGlobalZIndex,
		postCategoryOverflow,
		postCategoryGlobalWraperID,
		postCategoryGlobalWraperClass,

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

		postCategoryDesktopSwitcher,
		postCategoryTabletSwitcher,
		postCategoryMobileSwitcher,
	} = attributes;

	const deviceType = useDeviceType();

	const readMoreIconHandler = (icon) => {
		setAttributes({ readMoreIcon: icon });
	};

	/**
	 * Generate SVG Icons for Icon
	 */
	useEffect(() => {
		setAttributes({
			readMoreIconFrontend: generateSvgIcon(readMoreIcon),
		});
	}, [readMoreIcon]);

	// ---- FETCH CORE DATA ----
	const { useSelect } = wp.data;

	// Stable data from WordPress
	const allPostTypes = useSelect(
		(select) => select("core").getPostTypes({ per_page: -1 }) || [],
		[]
	);

	const allTaxonomies = useSelect(
		(select) => select("core").getTaxonomies({ per_page: -1 }) || [],
		[]
	);

	// Only depend on allTaxonomies & taxonomyType
	const selectedTaxonomyObj = useMemo(
		() => allTaxonomies.find((tax) => tax.slug === taxonomyType),
		[allTaxonomies, taxonomyType]
	);

	// Filter post types that have taxonomies
	const filteredPostTypes = useMemo(() => {
		return allPostTypes.filter(
			(pt) =>
				pt.visibility?.show_ui &&
				pt.taxonomies?.length > 0 &&
				!["attachment", "wp_block", "nav_menu_item", "revision", "page"].includes(pt.slug)
		);
	}, [allPostTypes]);

	// Helper: get post type label for a taxonomy
	const getPostTypeLabelForTaxonomy = useCallback(
		(taxSlug) => {
			const taxonomy = allTaxonomies.find((tax) => tax.slug === taxSlug);
			if (!taxonomy?.types?.length) return null;

			const preferred = taxonomy.types.find((type) =>
				filteredPostTypes.some((pt) => pt.slug === type)
			);
			const postTypeSlug = preferred || taxonomy.types[0];
			const postType = allPostTypes.find((pt) => pt.slug === postTypeSlug);

			return postType?.labels?.name || postTypeSlug;
		},
		[allTaxonomies, filteredPostTypes, allPostTypes]
	);

	// Stable taxonomy options
	const dynamicTaxonomyOptions = useMemo(() => {
		const options = [];
		const addedTaxonomies = new Set();

		filteredPostTypes.forEach((pt) => {
			const taxList = allTaxonomies
				.filter((tax) => tax.types?.includes(pt.slug))
				.map((tax) => ({
					value: tax.slug,
					label: `    ${tax.labels?.singular_name || tax.name} (${tax.slug})`,
					isDisabled: false,
					isCustom: tax._isCustom || false,
				}));

			if (taxList.length) {
				options.push({
					value: `group-${pt.slug}`,
					label: pt.labels?.name || pt.slug,
					isDisabled: true,
				});

				taxList.forEach((tax) => {
					if (!addedTaxonomies.has(tax.value)) {
						addedTaxonomies.add(tax.value);
						options.push(tax);
					}
				});
			}
		});

		// Only add current custom taxonomy if it's not already in the list
		if (taxonomyType && !addedTaxonomies.has(taxonomyType)) {
			const customTax = allTaxonomies.find((tax) => tax.slug === taxonomyType);
			const label = customTax
				? `Custom ${customTax.labels?.singular_name || customTax.name} (${customTax.slug})`
				: `Custom ${taxonomyType} (custom)`;

			options.push({
				value: taxonomyType,
				label,
				isDisabled: false,
				isCustom: true,
			});
		}

		return options;
	}, [filteredPostTypes, allTaxonomies, taxonomyType]);

	useEffect(() => {
		if (taxonomyType) return;
		if (!allTaxonomies.length || !filteredPostTypes.length) return;

		const firstValid = dynamicTaxonomyOptions.find(opt => 
			!opt.isDisabled && opt.value && !opt.isCustom
		);

		if (firstValid) {
			// Batch update to avoid multiple re-renders
			wp.data.dispatch('core/block-editor').updateBlockAttributes(
				clientId,
				{
					taxonomyType: firstValid.value,
					includeTaxonomies: [],
					excludeTaxonomies: [],
				}
			);
		}
	}, [
		taxonomyType,
		allTaxonomies.length,
		filteredPostTypes.length,
		dynamicTaxonomyOptions,
		clientId
	]);

	// Handle taxonomy change
	const handleTaxonomyChange = useCallback(
		(option) => {
			if (!option || option.isDisabled) return;

			setAttributes({
				taxonomyType: option.value,
				includeTaxonomies: [],
				excludeTaxonomies: [],
			});

			if (option.isCustom) {
				wp.data.dispatch("core/notices").createNotice(
					"info",
					`Custom taxonomy "${option.value}" selected. Make sure it exists.`,
					{ isDismissible: true }
				);
			}
		},
		[setAttributes]
	);

	// Current selected taxonomy for display
	const selectedTaxonomy = useMemo(() => {
		if (!taxonomyType) return null;

		const found = dynamicTaxonomyOptions.find((opt) => opt.value === taxonomyType);
		if (found) return found;

		const taxFromApi = allTaxonomies.find((tax) => tax.slug === taxonomyType);
		if (taxFromApi) {
			return {
				value: taxFromApi.slug,
				label: `Custom ${taxFromApi.labels?.singular_name || taxFromApi.name} (${taxFromApi.slug})`,
				isDisabled: false,
				isCustom: true,
			};
		}

		return {
			value: taxonomyType,
			label: `Custom ${taxonomyType} (custom)`,
			isDisabled: false,
			isCustom: true,
		};
	}, [dynamicTaxonomyOptions, taxonomyType, allTaxonomies]);

	const postTypeLabel = useMemo(() => {
		if (!taxonomyType) return "";
		return getPostTypeLabelForTaxonomy(taxonomyType) || "";
	}, [taxonomyType, getPostTypeLabelForTaxonomy]);

	// Fetch terms for selected taxonomy
	const taxonomyItems = useSelect(
		(select) => {
			if (!taxonomyType) return [];
			const args = {
				per_page: 100,
				hide_empty: false,
			};
			// Only add parent: 0 if showChildCategories is FALSE
			if (!showChildCategories) {
				args.parent = 0;
			}
			return select("core").getEntityRecords("taxonomy", taxonomyType, args) || [];
		},
		[taxonomyType, showChildCategories] // ← showChildCategories add koro dependency te!
	);

	const taxonomyOptions = useMemo(
		() =>
			taxonomyItems.map((term) => ({
				value: term.id,
				label: term.name,
			})),
		[taxonomyItems]
	);

	const handleIncludeTaxonomiesChange = useCallback(
		(options) => {
			setAttributes({
				includeTaxonomies: options ? options.map((opt) => opt.value) : [],
			});
		},
		[setAttributes]
	);

	const handleExcludeTaxonomiesChange = useCallback(
		(options) => {
			setAttributes({
				excludeTaxonomies: options ? options.map((opt) => opt.value) : [],
			});
		},
		[setAttributes]
	);

	// Optional: Validate custom taxonomy
	const validateTaxonomy = useCallback(async (taxSlug) => {
		try {
			await wp.apiFetch({ path: `/wp/v2/taxonomies/${taxSlug}` });
			return { isValid: true };
		} catch {
			return { isValid: false };
		}
	}, []);

	useEffect(() => {
		if (taxonomyType && taxonomyType !== "category") {
			validateTaxonomy(taxonomyType).then((result) => {
				if (!result.isValid) {
					console.warn(`Taxonomy "${taxonomyType}" might not exist.`);
				}
			});
		}
	}, [taxonomyType, validateTaxonomy]);

	/** Start Post Author Item Margin */
	const handlePostAuthorMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (postAuthorMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postAuthorMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postAuthorMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postAuthorMarginMobile: {
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
						postAuthorMarginDesktop: {
							...postAuthorMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postAuthorMarginTablet: {
							...postAuthorMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postAuthorMarginMobile: {
							...postAuthorMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePostAuthorMarginCombineBtn = () => {
		setAttributes({ postAuthorMarginLink: !postAuthorMarginLink });
	};

	const handlePostAuthorMarginUnitsHandler = (unit) => {
		setAttributes({
			postAuthorMarginUnits: {
				...postAuthorMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Post Author Item Margin */

	/** Start Post Category Item Padding */
	const handlePostCategoryPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (postCategoryPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postCategoryPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCategoryPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCategoryPaddingMobile: {
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
						postCategoryPaddingDesktop: {
							...postCategoryPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCategoryPaddingTablet: {
							...postCategoryPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCategoryPaddingMobile: {
							...postCategoryPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePostCategoryPaddingCombineBtn = () => {
		setAttributes({ postCategoryPaddingLink: !postCategoryPaddingLink });
	};

	const handlePostCategoryPaddingUnitsHandler = (unit) => {
		setAttributes({
			postCategoryPaddingUnits: {
				...postCategoryPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Post Category Item Padding */

	/** Start Post Category Item Margin */
	const handlePostCategoryMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (postCategoryMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postCategoryMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCategoryMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCategoryMarginMobile: {
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
						postCategoryMarginDesktop: {
							...postCategoryMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCategoryMarginTablet: {
							...postCategoryMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCategoryMarginMobile: {
							...postCategoryMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePostCategoryMarginCombineBtn = () => {
		setAttributes({ postCategoryMarginLink: !postCategoryMarginLink });
	};

	const handlePostCategoryMarginUnitsHandler = (unit) => {
		setAttributes({
			postCategoryMarginUnits: {
				...postCategoryMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Post Category Item Margin */

	/** Start Post Category Item Border */
	const handlePostCategoryBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (postCategoryBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postCategoryBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCategoryBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCategoryBorderMobile: {
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
						postCategoryBorderDesktop: {
							...postCategoryBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCategoryBorderTablet: {
							...postCategoryBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCategoryBorderMobile: {
							...postCategoryBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePostCategoryBorderCombineBtn = () => {
		setAttributes({ postCategoryBorderLink: !postCategoryBorderLink });
	};

	const handlePostCategoryBorderUnitsHandler = (unit) => {
		setAttributes({
			postCategoryBorderUnits: {
				...postCategoryBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Post Category Item Border */

	/** Start Post Cateogry Item Border Radius */
	const handlePostCategoryBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (postCategoryBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postCategoryBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCategoryBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCategoryBorderRadiusMobile: {
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
						postCategoryBorderRadiusDesktop: {
							...postCategoryBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCategoryBorderRadiusTablet: {
							...postCategoryBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCategoryBorderRadiusMobile: {
							...postCategoryBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePostCategoryBorderRadiusCombineBtn = () => {
		setAttributes({
			postCategoryBorderRadiusLink: !postCategoryBorderRadiusLink,
		});
	};

	const handlePostCategoryBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			postCategoryBorderRadiusUnits: {
				...postCategoryBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Post Cateogry Item Border Radius */

	// Read More Button

	/** Start border width */
	const handleBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						buttonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileBorderWidth: {
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
						buttonDesktopBorderWidth: {
							...buttonDesktopBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabBorderWidth: {
							...buttonTabBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileBorderWidth: {
							...buttonMobileBorderWidth,
							[position]: value,
						},
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
				[deviceType]: unit,
			},
		});
	};
	/** End border width */

	/** Start border radius */
	const handleBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						buttonDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileBorderRadiusWidth: {
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
						buttonDesktopBorderRadiusWidth: {
							...buttonDesktopBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabBorderRadiusWidth: {
							...buttonTabBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileBorderRadiusWidth: {
							...buttonMobileBorderRadiusWidth,
							[position]: value,
						},
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
				[deviceType]: unit,
			},
		});
	};
	/** End Border Radius */

	/** Start padding */
	const handlePaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						buttonDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobilePadding: {
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
						buttonDesktopPadding: {
							...buttonDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabPadding: { ...buttonTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobilePadding: { ...buttonMobilePadding, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePaddingCombineBtn = () => {
		setAttributes({ buttonPaddingLink: !buttonPaddingLink });
	};

	const handlePaddingUnitsHandler = (unit) => {
		setAttributes({
			buttonPaddingUnits: {
				...buttonPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Padding */

	/** Start Margin */
	const handleMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						buttonDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileMargin: {
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
						buttonDesktopMargin: { ...buttonDesktopMargin, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						buttonTabMargin: { ...buttonTabMargin, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						buttonMobileMargin: { ...buttonMobileMargin, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMarginCombineBtn = () => {
		setAttributes({ buttonMarginLink: !buttonMarginLink });
	};

	const handleMarginUnitsHandler = (unit) => {
		setAttributes({
			buttonMarginUnits: {
				...buttonMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End margin */

	// read more button icon
	/** Start Icon border */
	const handlebuttonIconBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonIconBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						buttonIconBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonIconBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonIconBorderMobile: {
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
						buttonIconBorderDesktop: {
							...buttonIconBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonIconBorderTablet: {
							...buttonIconBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonIconBorderMobile: {
							...buttonIconBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlebuttonIconBorderCombineBtn = () => {
		setAttributes({ buttonIconBorderLink: !buttonIconBorderLink });
	};

	const handlebuttonIconBorderUnitsHandler = (unit) => {
		setAttributes({
			buttonIconBorderUnits: {
				...buttonIconBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Border */

	/** Start Icon border radius*/
	const handlebuttonIconBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonIconBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						buttonIconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonIconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonIconBorderRadiusMobile: {
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
						buttonIconBorderRadiusDesktop: {
							...buttonIconBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonIconBorderRadiusTablet: {
							...buttonIconBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonIconBorderRadiusMobile: {
							...buttonIconBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlebuttonIconBorderRadiusCombineBtn = () => {
		setAttributes({ buttonIconBorderRadiusLink: !buttonIconBorderRadiusLink });
	};

	const handlebuttonIconBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			buttonIconBorderRadiusUnits: {
				...buttonIconBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Border Radius */

	// start icon padding

	/** Start padding */
	const handleButtonIconPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonIconPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						buttonIconDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonIconTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonIconMobilePadding: {
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
						buttonIconDesktopPadding: {
							...buttonIconDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						buttonIconTabPadding: {
							...buttonIconTabPadding,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						buttonIconMobilePadding: {
							...buttonIconMobilePadding,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonIconPaddingCombineBtn = () => {
		setAttributes({ buttonIconPaddingLink: !buttonIconPaddingLink });
	};

	const handleButtonIconPaddingUnitsHandler = (unit) => {
		setAttributes({
			buttonIconPaddingUnits: {
				...buttonIconPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	// end icon padding

	/** start post count padding */
	const handlePostCountPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (postCountPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postCountPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCountPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCountPaddingMobile: {
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
						postCountPaddingDesktop: {
							...postCountPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCountPaddingTablet: {
							...postCountPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCountPaddingMobile: {
							...postCountPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePostCountPaddingCombineBtn = () => {
		setAttributes({ postCountPaddingLink: !postCountPaddingLink });
	};

	const handlePostCountPaddingUnitsHandler = (unit) => {
		setAttributes({
			postCountPaddingUnits: {
				...postCountPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End post count padding */

	/** Start Post Count Border */
	const handlePostCountBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (postCountBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postCountBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCountBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCountBorderMobile: {
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
						postCountBorderDesktop: {
							...postCountBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCountBorderTablet: {
							...postCountBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCountBorderMobile: {
							...postCountBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePostCountBorderCombineBtn = () => {
		setAttributes({ postCountBorderLink: !postCountBorderLink });
	};

	const handlePostCountBorderUnitsHandler = (unit) => {
		setAttributes({
			postCountBorderUnits: {
				...postCountBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Start Post Count Border Radius */
	const handlePostCountBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (postCountBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postCountBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCountBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCountBorderRadiusMobile: {
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
						postCountBorderRadiusDesktop: {
							...postCountBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postCountBorderRadiusTablet: {
							...postCountBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postCountBorderRadiusMobile: {
							...postCountBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlePostCountBorderRadiusCombineBtn = () => {
		setAttributes({ postCountBorderRadiusLink: !postCountBorderRadiusLink });
	};

	const handlePostCountBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			postCountBorderRadiusUnits: {
				...postCountBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Post Count Border Radius */

	/* Start Global Padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalPaddingMobile: {
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
						postGlobalPaddingDesktop: {
							...postGlobalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalPaddingTablet: {
							...postGlobalPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalPaddingMobile: {
							...postGlobalPaddingMobile,
							[position]: value,
						},
					});
				default:
					break;
			}
		}
	};

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ postGlobalPaddingLink: !postGlobalPaddingLink });
	};

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			postGlobalPaddingUnits: {
				...postGlobalPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/* End Global Padding */

	/* Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalMarginMobile: {
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
						postGlobalMarginDesktop: {
							...postGlobalMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalMarginTablet: {
							...postGlobalMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalMarginMobile: {
							...postGlobalMarginMobile,
							[position]: value,
						},
					});
				default:
					break;
			}
		}
	};

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ postGlobalMarginLink: !postGlobalMarginLink });
	};

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			postGlobalMarginUnits: {
				...postGlobalMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/* End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderMobile: {
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
						postGlobalBorderDesktop: {
							...postGlobalBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderTablet: {
							...postGlobalBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderMobile: {
							...postGlobalBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ postGlobalBorderLink: !postGlobalBorderLink });
	};

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			postGlobalBorderUnits: {
				...postGlobalBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Global Border */

	/** Start Global Border Radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (postGlobalBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						postGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderRadiusMobile: {
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
						postGlobalBorderRadiusDesktop: {
							...postGlobalBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						postGlobalBorderRadiusTablet: {
							...postGlobalBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						postGlobalBorderRadiusMobile: {
							...postGlobalBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes({ postGlobalBorderRadiusLink: !postGlobalBorderRadiusLink });
	};

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			postGlobalBorderRadiusUnits: {
				...postGlobalBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Global Border Radius */

	const generalControls = (
		<>
			<div className="fb-setting-general-wrapper">
				
				<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
					<BaseControl
						label={__("Premade Style", "frontis-blocks")}
						id="fb-setting-premade-style"
						className="fb-setting-premade-style"
					>
						<SelectControl
							value={premadeStyle}
							// options={POST_CATEGORY_PREMADE_STYLE}
							options={
								layoutType === "list"
									? POST_CATEGORY_PREMADE_STYLE.filter(
											(opt) =>
												opt.value === "style-1" || opt.value === "style-2",
									  )
									: POST_CATEGORY_PREMADE_STYLE
							}
							onChange={(value) => setAttributes({ premadeStyle: value })}
						/>
						
					</BaseControl>

					{/* Taxonomy Type Control */}
					<BaseControl
						label={__("Taxonomy", "frontis-blocks")}
						id="fb-setting-taxonomy-type"
						className="fb-setting-taxonomy-type"
					>
						<Select2
							options={dynamicTaxonomyOptions}
							value={selectedTaxonomy}
							onChange={handleTaxonomyChange}
							className="fb-select2-control"
							isSearchable={true}
							isLoading={!allTaxonomies.length}
							isDisabled={!dynamicTaxonomyOptions.length}
							placeholder={
								taxonomyType 
									? `Selected: ${taxonomyType}` 
									: "Select Taxonomy"
							}
							noOptionsMessage={({ inputValue }) => 
								inputValue 
									? `No taxonomy found for "${inputValue}"` 
									: "No taxonomies available. Please check if any post type has taxonomies."
							}
							styles={{
								option: (provided, state) => ({
									...provided,
									fontWeight: state.data.isDisabled ? "600" : "normal",
									color: state.data.isDisabled ? "#1f1e1e" : 
										state.data.isCustom ? "#d63638" : "#000000", // Custom taxonomies in red
									paddingLeft: state.data.isDisabled ? "10px" : "15px",
									fontStyle: state.data.isCustom ? "italic" : "normal",
								}),
								menu: (provided) => ({
									...provided,
									zIndex: 999999,
								}),
								singleValue: (provided, state) => ({
									...provided,
									color: state.data.isCustom ? "#d63638" : "#000000",
									fontStyle: state.data.isCustom ? "italic" : "normal",
								}),
							}}
							formatOptionLabel={(option, { context }) => {
								// Custom taxonomy হলে icon দেখান
								const label = context === "value" ? option.label.trim() : option.label;
								
								if (option.isCustom && context === "menu") {
									return (
										<span style={{ whiteSpace: "pre" }}>
											🔧 {label.replace('🔧 ', '')}
										</span>
									);
								}
								
								return (
									<span style={{ whiteSpace: context === "value" ? "normal" : "pre" }}>
										{label}
									</span>
								);
							}}
						/>
					</BaseControl>

					<BaseControl
						label={__("Element Visibility", "frontis-blocks")}
						className="fb-setting-show-hide-elements"
					>
						<ToggleControl
							label={__("Show Author", "frontis-blocks")}
							checked={showAuthor}
							onChange={(value) => setAttributes({ showAuthor: value })}
						/>

						{(premadeStyle === "style-3" || premadeStyle === "style-4") && (
							<ToggleControl
								label={__("Show Category Image", "frontis-blocks")}
								checked={showCategoryImage}
								onChange={(value) => setAttributes({ showCategoryImage: value })}
							/>
						)}

						<ToggleControl
							label={__("Show Count", "frontis-blocks")}
							checked={showCount}
							onChange={(value) => setAttributes({ showCount: value })}
						/>

						{showCount && (
							<ToggleControl
								label={__("Count With Post Type Name", "frontis-blocks")}
								checked={showLabel}
								onChange={(value) => setAttributes({ showLabel: value })}
							/>
						)}

						<ToggleControl
							label={__("Show Description", "frontis-blocks")}
							checked={showDescription}
							onChange={(value) => setAttributes({ showDescription: value })}
						/>

						<ToggleControl
							label={__("Show Empty Taxonomies", "frontis-blocks")}
							checked={showEmpty}
							onChange={(value) => setAttributes({ showEmpty: value })}
						/>

						{/* Show Child Categories only for hierarchical taxonomies */}
						{taxonomyType && selectedTaxonomyObj?.hierarchical && (
							<ToggleControl
								label={__("Show Child Terms", "frontis-blocks")}
								checked={showChildCategories}
								onChange={(value) =>
									setAttributes({ showChildCategories: value })
								}
							/>
						)}

						{(layoutType === "grid" || ( layoutType === "list" && premadeStyle === "style-2" )) && (
							<ToggleControl
								label={__("Show View All Button", "frontis-blocks")}
								checked={readMoreSwitcher}
								onChange={(value) => setAttributes({ readMoreSwitcher: value })}
							/>
						)}

						<div className="fb-control-divider"></div>

						<RangeControl
							label={__("Item Limit", "frontis-blocks")}
							value={perPage}
							onChange={(value) => setAttributes({ perPage: value })}
							min={1}
							max={50}
						/>

						{ showDescription &&
						 <RangeControl
							label={__("Description Length", "frontis-blocks")}
							value={postDescriptionExcerptLength}
							onChange={(value) =>
								setAttributes({
									postDescriptionExcerptLength: value === 0 ? undefined : value,
								})
							}
							min={1}
							max={200}
							step={1}
							resetFallbackValue={10}
						/>}

					</BaseControl>
				</PanelBody>

				{/* Layout Settings Panel */}
				<PanelBody
					title={__("Layout Settings", "frontis-blocks")}
					initialOpen={false}
				>
					<BaseControl
						label={__("Layout Type", "frontis-blocks")}
						className="fb-setting-layout-type"
					>
						<ButtonGroup className="fb-setting-layout-type-group">
							{POST_SWITCHER.map((option, key) => (
								<Button
									key={key}
									className={`fb-setting-switcher-panel-btn-switcher ${
										layoutType === option.value ? "active" : ""
									}`}
									onClick={() => setAttributes({ layoutType: option.value })}
								>
									{option.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{layoutType === "grid" && (
						<>
							<FB_Range
								min={1}
								max={6}
								label={__("Columns", "frontis-blocks")}
								rangeValue={gridColumns}
								onChangeHandler={(value) =>
									setAttributes({ gridColumns: value })
								}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={''}
								isRangeUnit={false}
							/>

							<FB_Range
								min={0}
								max={100}
								label={__("Row Gap", "frontis-blocks")}
								rangeValue={gridRowGap}
								onChangeHandler={(value) =>
									setAttributes({ gridRowGap: value })
								}
								rangeUnitHandler={(value) =>
									setAttributes({ gridGapUnits: value })
								}
								deviceType={deviceType}
								units={gridGapUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={30}
							/>

							<FB_Range
								min={0}
								max={100}
								label={__("Column Gap", "frontis-blocks")}
								rangeValue={gridColumnGap}
								onChangeHandler={(value) =>
									setAttributes({ gridColumnGap: value })
								}
								rangeUnitHandler={(value) =>
									setAttributes({ gridGapUnits: value })
								}
								deviceType={deviceType}
								units={gridGapUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={30}
							/>
						</>
					)}

					{layoutType === "list" && (
						<>
							{premadeStyle !== "style-2" && (
								<SelectControl
									label={__("List Style", "frontis-blocks")}
									value={listStyle}
									options={LIST_STYLE_OPTIONS}
									onChange={(value) => setAttributes({ listStyle: value })}
								/>
							)}

							{listStyle !== "none" && (
								<FB_Range
									min={0}
									max={100}
									label={__("Indentation", "frontis-blocks")}
									rangeValue={listIndentation}
									onChangeHandler={(value) =>
										setAttributes({ listIndentation: value })
									}
									rangeUnitHandler={(value) =>
										setAttributes({ listIndentationUnits: value })
									}
									deviceType={deviceType}
									units={listIndentationUnits}
									setAttributes={setAttributes}
									rangeStep={1}
									resetFallbackValue={""}
								/>
							)}
						</>
					)}
				</PanelBody>

				{/* Ordering Panel */}
				<PanelBody title={__("Ordering", "frontis-blocks")} initialOpen={false}>
					<SelectControl
						label={__("Order By", "frontis-blocks")}
						value={orderBy}
						options={ORDER_BY_OPTIONS}
						onChange={(value) => setAttributes({ orderBy: value })}
					/>

					<SelectControl
						label={__("Sort Order", "frontis-blocks")}
						value={sortOrder}
						options={SORT_ORDER_OPTIONS}
						onChange={(value) => setAttributes({ sortOrder: value })}
					/>
				</PanelBody>

				{/* Include/Exclude Panel */}
				<PanelBody
					title={__("Filter Taxonomies", "frontis-blocks")}
					initialOpen={false}
				>
					<SelectControl
						label={__("Selection Type", "frontis-blocks")}
						value={selectionType}
						options={SELECTION_TYPE_OPTIONS}
						onChange={(value) => setAttributes({ selectionType: value })}
					/>

					{selectionType === "include" && (
						<BaseControl
							label={__("Include Taxonomies", "frontis-blocks")}
							help={__("Only show these specific taxonomies", "frontis-blocks")}
						>
							<Select2
								options={taxonomyOptions}
								value={taxonomyOptions.filter((opt) =>
									includeTaxonomies.includes(opt.value),
								)}
								onChange={handleIncludeTaxonomiesChange}
								isMulti
								className="fb-select2-control"
								isLoading={!allTaxonomies}
							/>
						</BaseControl>
					)}

					{selectionType === "exclude" && (
						<BaseControl
							label={__("Exclude Taxonomies", "frontis-blocks")}
							help={__("Hide these specific taxonomies", "frontis-blocks")}
						>
							<Select2
								options={taxonomyOptions}
								value={taxonomyOptions.filter((opt) =>
									excludeTaxonomies.includes(opt.value),
								)}
								onChange={handleExcludeTaxonomiesChange}
								isMulti
								className="fb-select2-control"
								isLoading={!allTaxonomies}
							/>
						</BaseControl>
					)}
				</PanelBody>

				{ (layoutType === "grid" || ( layoutType === "list" && premadeStyle === "style-2" )) && readMoreSwitcher && (
					<PanelBody
						title={__("View All Button", "frontis-blocks")}
						initialOpen={false}
					>
						<BaseControl
							label={__("Icon Alignment", "frontis-blocks")}
							id="fb-readmore-icon-align"
						>
							<ButtonGroup className="fb-setting-icon-align-group">
								{READ_MORE_ICON_ALIGN.map((option, key) => (
									<Button
										key={key}
										className={`fb-setting-switcher-panel-btn-switcher ${
											readMoreIconAlign === option.value ? "active" : ""
										}`}
										onClick={() =>
											setAttributes({ readMoreIconAlign: option.value })
										}
									>
										{option.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>

						{(readMoreIconAlign === "icon-text" ||
							readMoreIconAlign === "icon-only") && (
							<FBIconPicker
								value={readMoreIcon}
								setIconHandler={readMoreIconHandler}
							/>
						)}

						{readMoreIconAlign === "image" && (
							<FB_ImageControl
								globalImageUrl={readMoreIconImageUrl}
								setglobalImageUrl={(value) =>
									setAttributes({ readMoreIconImageUrl: value })
								}
								globalImageAlt={readMoreIconImageAlt}
								setglobalImageAlt={(value) =>
									setAttributes({ readMoreIconImageAlt: value })
								}
								globalImageID={readMoreIconImageID}
								setglobalImageID={(value) =>
									setAttributes({ readMoreIconImageID: value })
								}
								globalImageSize={readMoreIconImagedisplay}
								setglobalImageSize={(value) =>
									setAttributes({ readMoreIconImagedisplay: value })
								}
							/>
						)}
					</PanelBody>
				)}
			</div>
		</>
	);

	const styleControls = (
		<>
			{premadeStyle === "style-4" && (
				<PanelBody title={__("Category Image", "frontis-blocks")} initialOpen={true}>
					<FB_Range
						min={1}
						max={1400}
						label={__("Width", "frontis-blocks")}
						rangeValue={mediaSize}
						onChangeHandler={(value) => setAttributes({ mediaSize: value })}
						rangeUnitHandler={(value) => setAttributes({ mediaSizeUnits: value })}
						deviceType={deviceType}
						units={mediaSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={"100"}
						units_types_arr={[
							{ label: 'px', value: 'px' },
							{ label: 'em', value: 'em' },
							{ label: 'rem', value: 'rem' },
							{ label: 'vh', value: 'vh' },
							{ label: 'vw', value: 'vw' },
						]}
					/>
					<FB_Range
						min={1}
						max={1400}
						label={__("Height", "frontis-blocks")}
						rangeValue={mediaHeight}
						onChangeHandler={(value) => setAttributes({ mediaHeight: value })}
						rangeUnitHandler={(value) => setAttributes({ mediaHeightUnits: value })}
						deviceType={deviceType}
						units={mediaHeightUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={"100"}
						units_types_arr={[
							{ label: 'px', value: 'px' },
							{ label: 'em', value: 'em' },
							{ label: 'rem', value: 'rem' },
							{ label: 'vh', value: 'vh' },
							{ label: 'vw', value: 'vw' },
						]}
					/>
	
					<ToggleControl
						label={__("Auto Fit Image?", "frontis-block")}
						checked={autoFitSwitch}
						onChange={(newValue) => {
							setAttributes({ autoFitSwitch: newValue });
						}}
					/>

					{autoFitSwitch && (
						<SelectControl
							label={__("Image Fit Options", "frontis-blocks")}
							value={imageFit || "cover"}
							options={IMAGE_AUTO_FIT}
							onChange={(size) =>
								setAttributes({ imageFit: size })
							}
						/>
					)}
					<SelectControl
						label={__("Image Position", "frontis-blocks")}
						value={imagePosition}
						options={ITEM_POSITION}
						onChange={(value) => setAttributes({ imagePosition: value })}
					/>
				</PanelBody>
			)}
			{layoutType === "grid" && (
				<PanelBody title={__("Items", "frontis-blocks")} initialOpen={false}>
					<FB_Range
						min={0}
						max={500}
						label={__("Minimum Height", "frontis-blocks")}
						rangeValue={taxonomyHeight}
						onChangeHandler={(value) =>
							setAttributes({ taxonomyHeight: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ taxonomyHeightUnits: value })
						}
						deviceType={deviceType}
						units={taxonomyHeightUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>

					<div className="fb-control-divier"></div>

					<FB_BackgroundColorControl
						label={__("Background Color", "frontis-blocks")}
						bgColorSwitcher={postCategoryBgColorSwitcher}
						setBgColorSwitcher={(value) =>
							setAttributes({ postCategoryBgColorSwitcher: value })
						}
						normalBackgroundType={postCategoryNormalBackgroundType}
						setNormalBackgroundType={(value) =>
							setAttributes({ postCategoryNormalBackgroundType: value })
						}
						normalClassicColor={postCategoryNormalClassicColor}
						setNormalClassicColor={(value) =>
							setAttributes({
								postCategoryNormalClassicColor:
									value === undefined ? "" : value,
							})
						}
						normalGradientColor={postCategoryNormalGradientColor}
						setNormalGradientColor={(value) =>
							setAttributes({
								postCategoryNormalGradientColor:
									value === undefined ? "" : value,
							})
						}
						normalCustomGradientSwitcher={
							postCategoryNormalCustomGradientSwitcher
						}
						setNormalCustomGradientSwitcher={(value) =>
							setAttributes({ postCategoryNormalCustomGradientSwitcher: value })
						}
						normalCustomGradientInputValue={
							postCategoryNormalCustomGradientInputValue
						}
						setNormalCustomGradientInputValue={(value) =>
							setAttributes({
								postCategoryNormalCustomGradientInputValue: value,
							})
						}
						hoverBackgroundType={postCategoryHoverBackgroundType}
						setHoverBackgroundType={(value) =>
							setAttributes({ postCategoryHoverBackgroundType: value })
						}
						hoverClassicColor={postCategoryHoverClassicColor}
						setHoverClassicColor={(value) =>
							setAttributes({
								postCategoryHoverClassicColor: value === undefined ? "" : value,
							})
						}
						hoverGradientColor={postCategoryHoverGradientColor}
						setHoverGradientColor={(value) =>
							setAttributes({
								postCategoryHoverGradientColor:
									value === undefined ? "" : value,
							})
						}
						hoverCustomGradientSwitcher={
							postCategoryHoverCustomGradientSwitcher
						}
						setHoverCustomGradientSwitcher={(value) =>
							setAttributes({ postCategoryHoverCustomGradientSwitcher: value })
						}
						hoverCustomGradientInputValue={
							postCategoryHoverCustomGradientInputValue
						}
						setHoverCustomGradientInputValue={(value) =>
							setAttributes({
								postCategoryHoverCustomGradientInputValue: value,
							})
						}
						isBackgroundImage={false}
					/>

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
						setGlobalSwitcher={(value) =>
							setAttributes({ postCategoryBorderColorSwitcher: value })
						}
					/>

					{postCategoryBorderColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={postCategoryBorderColor}
							setGlobalColor={(value) =>
								setAttributes({
									postCategoryBorderColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					{postCategoryBorderColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={postCategoryBorderHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									postCategoryBorderHoverColor:
										value === undefined ? "" : value,
								})
							}
						/>
					)}

					<FB_Spacing
						label={__("Border", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlePostCategoryBorderUnitsHandler}
						spacingUnits={postCategoryBorderUnits}
						spacingDesktop={postCategoryBorderDesktop}
						spacingTablet={postCategoryBorderTablet}
						spacingMobile={postCategoryBorderMobile}
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
						spacingDesktop={postCategoryBorderRadiusDesktop}
						spacingTablet={postCategoryBorderRadiusTablet}
						spacingMobile={postCategoryBorderRadiusMobile}
						handleSpacingUnitHandler={handlePostCategoryBorderRadiusUnitChange}
						spacingCombineBtn={postCategoryBorderRadiusLink}
						spacingCombineBtnHandler={handlePostCategoryBorderRadiusCombineBtn}
						setAttributes={setAttributes}
					/>

					<FB_SwitcherControl
						label={__("Box Shadow", "frontis-blocks")}
						globalSwitcher={postCategoryBoxShadowSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ postCategoryBoxShadowSwitcher: value })
						}
					/>

					{postCategoryBoxShadowSwitcher === "normal" && (
						<FB_BoxShadowControl
							label={__("Normal Shadow", "frontis-blocks")}
							onBoxShadowChange={(value) =>
								setAttributes({ postCategoryBoxShadowValues: value })
							}
							initialShadowValue={postCategoryBoxShadowValues}
							onBoxShadowStyleChange={(value) =>
								setAttributes({ postCategoryBoxShadowCssValue: value })
							}
						/>
					)}

					{postCategoryBoxShadowSwitcher === "hover" && (
						<FB_BoxShadowControl
							label={__("Hover Shadow", "frontis-blocks")}
							onBoxShadowChange={(value) =>
								setAttributes({ postCategoryBoxShadowHoverValues: value })
							}
							initialShadowValue={postCategoryBoxShadowHoverValues}
							onBoxShadowStyleChange={(value) =>
								setAttributes({ postCategoryBoxShadowHoverCssValue: value })
							}
						/>
					)}
				</PanelBody>
			)}

			{layoutType === "list" && (
				<PanelBody title={__("List", "frontis-blocks")} initialOpen={false}>
					<FB_SwitcherControl
						// label={__("Bullet/Numbers Color", "frontis-blocks")}
						label={
							premadeStyle === "style-2"
								? __("Divider/Border Color", "frontis-blocks")
								: __("Bullet/Numbers Color", "frontis-blocks")
						}
						globalSwitcher={postListTypeColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ postListTypeColorSwitcher: value })
						}
					/>

					{postListTypeColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={postListTypeColor}
							setGlobalColor={(value) =>
								setAttributes({
									postListTypeColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					{postListTypeColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={postListTypeHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									postListTypeHoverColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					<div className="fb-control-divider"></div>

					<FB_Range
						min={1}
						max={100}
						label={__("Spacing", "frontis-blocks")}
						rangeValue={postListItemSpacing}
						onChangeHandler={(value) =>
							setAttributes({ postListItemSpacing: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ postListItemSpacingUnits: value })
						}
						deviceType={deviceType}
						units={postListItemSpacingUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
				</PanelBody>
			)}

			{/* Separator Panel */}
			{layoutType === "list" && (
				<PanelBody
					title={__("Separator", "frontis-blocks")}
					initialOpen={false}
				>
					<SelectControl
						label={__("Separator Style", "frontis-blocks")}
						value={separatorStyle}
						options={BORDER_STYLES}
						onChange={(value) => setAttributes({ separatorStyle: value })}
					/>

					{separatorStyle !== "none" && (
						<>
							<FB_SwitcherControl
								label={__("Separator Color", "frontis-blocks")}
								globalSwitcher={separatorColorSwitcher}
								setGlobalSwitcher={(value) =>
									setAttributes({ separatorColorSwitcher: value })
								}
							/>

							{separatorColorSwitcher === "normal" && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={separatorColor}
									setGlobalColor={(value) =>
										setAttributes({
											separatorColor: value === undefined ? "" : value,
										})
									}
								/>
							)}

							{separatorColorSwitcher === "hover" && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={separatorHoverColor}
									setGlobalColor={(value) =>
										setAttributes({
											separatorHoverColor: value === undefined ? "" : value,
										})
									}
								/>
							)}

							<FB_Range
								min={1}
								max={100}
								label={__("Separator Width", "frontis-blocks")}
								rangeValue={separatorWidth}
								onChangeHandler={(value) =>
									setAttributes({ separatorWidth: value })
								}
								rangeUnitHandler={(value) =>
									setAttributes({ separatorWidthUnits: value })
								}
								deviceType={deviceType}
								units={separatorWidthUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={100}
							/>
							<FB_Range
								min={1}
								max={20}
								label={__("Thickness", "frontis-blocks")}
								rangeValue={separatorThickness}
								onChangeHandler={(value) =>
									setAttributes({ separatorThickness: value })
								}
								rangeUnitHandler={(value) =>
									setAttributes({ separatorThicknessUnits: value })
								}
								deviceType={deviceType}
								units={separatorThicknessUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={1}
							/>
						</>
					)}
				</PanelBody>
			)}

			{showCount && (
				<PanelBody title={__("Count", "frontis-blocks")} initialOpen={false}>
					<FB_Range
						min={1}
						max={100}
						label={__("Label Gap", "frontis-blocks")}
						rangeValue={labelGaps}
						onChangeHandler={(value) =>
							setAttributes({ labelGaps: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ labelGapUnits: value })
						}
						deviceType={deviceType}
						units={labelGapUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={postCountGlobalTypoSwitcher}
						storeGlobalTypographyData={(value) =>
							setAttributes({ postCountGlobalTypographyData: value })
						}
						globalTypoType={postCountGlobalTypoType}
						onChangeGlobalTypoType={(value) => {
							setAttributes({
								postCountGlobalTypoType: value,
								postCountGlobalTypoSwitcher:
									value === "default"
										? {
												...postCountGlobalTypoSwitcher,
												fontFamily: false,
												fontSize: false,
												fontWeight: false,
												fontStyle: false,
												textTransform: false,
												textDecoration: false,
												letterSpacing: false,
												lineHeight: false,
										  }
										: {
												...postCountGlobalTypoSwitcher,
												fontFamily: true,
												fontSize: true,
												fontWeight: true,
												fontStyle: true,
												textTransform: true,
												textDecoration: true,
												letterSpacing: true,
												lineHeight: true,
										  },
							});
						}}
						globalTypoOption={postCountGlobalTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({ postCountGlobalTypoOption: value })
						}
						fontFamily={postCountFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({
								postCountFontFamily: value,
								postCountGlobalTypoSwitcher: {
									...postCountGlobalTypoSwitcher,
									fontFamily: value && false,
								},
							})
						}
						fontSize={postCountFontSize}
						onChangeFontSize={(value) =>
							setAttributes({
								postCountFontSize: value,
								postCountGlobalTypoSwitcher: {
									...postCountGlobalTypoSwitcher,
									fontSize: value && false,
								},
							})
						}
						fontSizeUnits={postCountFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({ postCountFontSizeUnits: value })
						}
						fontWeight={postCountFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({
								postCountFontWeight: value,
								postCountGlobalTypoSwitcher: {
									...postCountGlobalTypoSwitcher,
									fontWeight: value && false,
								},
							})
						}
						fontStyle={postCountFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({
								postCountFontStyle: value,
								postCountGlobalTypoSwitcher: {
									...postCountGlobalTypoSwitcher,
									fontStyle: value && false,
								},
							})
						}
						textTransform={postCountTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({
								postCountTextTransform: value,
								postCountGlobalTypoSwitcher: {
									...postCountGlobalTypoSwitcher,
									textTransform: value && false,
								},
							})
						}
						textDecoration={postCountTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({
								postCountTextDecoration: value,
								postCountGlobalTypoSwitcher: {
									...postCountGlobalTypoSwitcher,
									textDecoration: value && false,
								},
							})
						}
						letterSpacing={postCountLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({
								postCountLetterSpacing: value,
								postCountGlobalTypoSwitcher: {
									...postCountGlobalTypoSwitcher,
									letterSpacing: value && false,
								},
							})
						}
						letterSpacingUnits={postCountLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({ postCountLetterSpacingUnits: value })
						}
						lineHeight={postCountLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({
								postCountLineHeight: value,
								postCountGlobalTypoSwitcher: {
									...postCountGlobalTypoSwitcher,
									lineHeight: value && false,
								},
							})
						}
						lineHeightUnits={postCountLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({ postCountLineHeightUnits: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>

					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={postCountColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ postCountColorSwitcher: value })
						}
					/>

					{postCountColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={postCountColor}
							setGlobalColor={(value) =>
								setAttributes({
									postCountColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					{postCountColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={postCountHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									postCountHoverColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					<div className="fb-control-divider"></div>

					<FB_Range
						min={1}
						max={100}
						label={__("Spacing", "frontis-blocks")}
						rangeValue={postCountSpacing}
						onChangeHandler={(value) =>
							setAttributes({ postCountSpacing: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ postCountSpacingUnits: value })
						}
						deviceType={deviceType}
						units={postCountSpacingUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>

					<FB_BackgroundColorControl
						label={__("Background Color", "frontis-blocks")}
						bgColorSwitcher={postCountBgColorSwitcher}
						setBgColorSwitcher={(value) =>
							setAttributes({ postCountBgColorSwitcher: value })
						}
						normalBackgroundType={postCountNormalBackgroundType}
						setNormalBackgroundType={(value) =>
							setAttributes({ postCountNormalBackgroundType: value })
						}
						normalClassicColor={postCountNormalClassicColor}
						setNormalClassicColor={(value) =>
							setAttributes({
								postCountNormalClassicColor: value === undefined ? "" : value,
							})
						}
						normalGradientColor={postCountNormalGradientColor}
						setNormalGradientColor={(value) =>
							setAttributes({
								postCountNormalGradientColor: value === undefined ? "" : value,
							})
						}
						normalCustomGradientSwitcher={postCountNormalCustomGradientSwitcher}
						setNormalCustomGradientSwitcher={(value) =>
							setAttributes({ postCountNormalCustomGradientSwitcher: value })
						}
						normalCustomGradientInputValue={
							postCountNormalCustomGradientInputValue
						}
						setNormalCustomGradientInputValue={(value) =>
							setAttributes({ postCountNormalCustomGradientInputValue: value })
						}
						hoverBackgroundType={postCountHoverBackgroundType}
						setHoverBackgroundType={(value) =>
							setAttributes({ postCountHoverBackgroundType: value })
						}
						hoverClassicColor={postCountHoverClassicColor}
						setHoverClassicColor={(value) =>
							setAttributes({
								postCountHoverClassicColor: value === undefined ? "" : value,
							})
						}
						hoverGradientColor={postCountHoverGradientColor}
						setHoverGradientColor={(value) =>
							setAttributes({
								postCountHoverGradientColor: value === undefined ? "" : value,
							})
						}
						hoverCustomGradientSwitcher={postCountHoverCustomGradientSwitcher}
						setHoverCustomGradientSwitcher={(value) =>
							setAttributes({ postCountHoverCustomGradientSwitcher: value })
						}
						hoverCustomGradientInputValue={
							postCountHoverCustomGradientInputValue
						}
						setHoverCustomGradientInputValue={(value) =>
							setAttributes({ postCountHoverCustomGradientInputValue: value })
						}
						isBackgroundImage={false}
					/>

					<FB_Spacing
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlePostCountPaddingUnitsHandler}
						spacingUnits={postCountPaddingUnits}
						spacingDesktop={postCountPaddingDesktop}
						spacingTablet={postCountPaddingTablet}
						spacingMobile={postCountPaddingMobile}
						handleSpacingUnitHandler={handlePostCountPaddingUnitChange}
						spacingCombineBtn={postCountPaddingLink}
						spacingCombineBtnHandler={handlePostCountPaddingCombineBtn}
						setAttributes={setAttributes}
					/>

					<SelectControl
						label={__("Border Style", "frontis-blocks")}
						value={postCountBorder}
						options={BORDER_STYLES}
						onChange={(value) => setAttributes({ postCountBorder: value })}
					/>

					<FB_SwitcherControl
						label={__("Border", "frontis-blocks")}
						globalSwitcher={postCountBorderColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ postCountBorderColorSwitcher: value })
						}
					/>

					{postCountBorderColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={postCountBorderColor}
							setGlobalColor={(value) =>
								setAttributes({
									postCountBorderColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					{postCountBorderColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={postCountBorderHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									postCountBorderHoverColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					<FB_Spacing
						label={__("Border", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlePostCountBorderUnitsHandler}
						spacingUnits={postCountBorderUnits}
						spacingDesktop={postCountBorderDesktop}
						spacingTablet={postCountBorderTablet}
						spacingMobile={postCountBorderMobile}
						handleSpacingUnitHandler={handlePostCountBorderUnitChange}
						spacingCombineBtn={postCountBorderLink}
						spacingCombineBtnHandler={handlePostCountBorderCombineBtn}
						setAttributes={setAttributes}
					/>

					<FB_Spacing
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlePostCountBorderRadiusUnitsHandler}
						spacingUnits={postCountBorderRadiusUnits}
						spacingDesktop={postCountBorderRadiusDesktop}
						spacingTablet={postCountBorderRadiusTablet}
						spacingMobile={postCountBorderRadiusMobile}
						handleSpacingUnitHandler={handlePostCountBorderRadiusUnitChange}
						spacingCombineBtn={postCountBorderRadiusLink}
						spacingCombineBtnHandler={handlePostCountBorderRadiusCombineBtn}
						setAttributes={setAttributes}
					/>

					<FB_SwitcherControl
						label={__("Box Shadow", "frontis-blocks")}
						globalSwitcher={postCountBoxShadowSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ postCountBoxShadowSwitcher: value })
						}
					/>

					{postCountBoxShadowSwitcher === "normal" && (
						<FB_BoxShadowControl
							label={__("Normal Shadow", "frontis-blocks")}
							onBoxShadowChange={(value) =>
								setAttributes({ postCountBoxShadowValues: value })
							}
							initialShadowValue={postCountBoxShadowValues}
							onBoxShadowStyleChange={(value) =>
								setAttributes({ postCountBoxShadowCssValue: value })
							}
						/>
					)}

					{postCountBoxShadowSwitcher === "hover" && (
						<FB_BoxShadowControl
							label={__("Hover Shadow", "frontis-blocks")}
							onBoxShadowChange={(value) =>
								setAttributes({ postCountBoxShadowHoverValues: value })
							}
							initialShadowValue={postCountBoxShadowHoverValues}
							onBoxShadowStyleChange={(value) =>
								setAttributes({ postCountBoxShadowHoverCssValue: value })
							}
						/>
					)}
				</PanelBody>
			)}

			<PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={postTitleGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ postTitleGlobalTypographyData: value })
					}
					globalTypoType={postTitleGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							postTitleGlobalTypoType: value,
							postTitleGlobalTypoSwitcher:
								value === "default"
									? {
										...postTitleGlobalTypoSwitcher,
										fontFamily: false,
										fontSize: false,
										fontWeight: false,
										fontStyle: false,
										textTransform: false,
										textDecoration: false,
										letterSpacing: false,
										lineHeight: false,
									}
									: {
										...postTitleGlobalTypoSwitcher,
										fontFamily: true,
										fontSize: true,
										fontWeight: true,
										fontStyle: true,
										textTransform: true,
										textDecoration: true,
										letterSpacing: true,
										lineHeight: true,
									},
						});
					}}
					globalTypoOption={postTitleGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ postTitleGlobalTypoOption: value })
					}
					fontFamily={postTitleFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							postTitleFontFamily: value,
							postTitleGlobalTypoSwitcher: {
								...postTitleGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={postTitleFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							postTitleFontSize: value,
							postTitleGlobalTypoSwitcher: {
								...postTitleGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={postTitleFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ postTitleFontSizeUnits: value })
					}
					fontWeight={postTitleFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							postTitleFontWeight: value,
							postTitleGlobalTypoSwitcher: {
								...postTitleGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={postTitleFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							postTitleFontStyle: value,
							postTitleGlobalTypoSwitcher: {
								...postTitleGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={postTitleTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							postTitleTextTransform: value,
							postTitleGlobalTypoSwitcher: {
								...postTitleGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={postTitleTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							postTitleTextDecoration: value,
							postTitleGlobalTypoSwitcher: {
								...postTitleGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={postTitleLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							postTitleLetterSpacing: value,
							postTitleGlobalTypoSwitcher: {
								...postTitleGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={postTitleLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ postTitleLetterSpacingUnits: value })
					}
					lineHeight={postTitleLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							postTitleLineHeight: value,
							postTitleGlobalTypoSwitcher: {
								...postTitleGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={postTitleLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ postTitleLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={postTitleColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ postTitleColorSwitcher: value })
					}
				/>

				{postTitleColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={postTitleColor}
						setGlobalColor={(value) => {
							setAttributes({
								postTitleColor: value === undefined ? '' : value,
							});
						}}
					/>
				)}

				{postTitleColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={postTitleHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								postTitleHoverColor: value === undefined ? '' : value,
							})
						}
					/>
				)}
			</PanelBody>

			{showDescription && (
				<PanelBody
					title={__("Description", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={postDescriptionGlobalTypoSwitcher}
						storeGlobalTypographyData={(value) =>
							setAttributes({ postDescriptionGlobalTypographyData: value })
						}
						globalTypoType={postDescriptionGlobalTypoType}
						onChangeGlobalTypoType={(value) => {
							setAttributes({
								postDescriptionGlobalTypoType: value,
								postDescriptionGlobalTypoSwitcher:
									value === "default"
										? {
												...postDescriptionGlobalTypoSwitcher,
												fontFamily: false,
												fontSize: false,
												fontWeight: false,
												fontStyle: false,
												textTransform: false,
												textDecoration: false,
												letterSpacing: false,
												lineHeight: false,
										  }
										: {
												...postDescriptionGlobalTypoSwitcher,
												fontFamily: true,
												fontSize: true,
												fontWeight: true,
												fontStyle: true,
												textTransform: true,
												textDecoration: true,
												letterSpacing: true,
												lineHeight: true,
										  },
							});
						}}
						globalTypoOption={postDescriptionGlobalTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({ postDescriptionGlobalTypoOption: value })
						}
						fontFamily={postDescriptionFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({
								postDescriptionFontFamily: value,
								postDescriptionGlobalTypoSwitcher: {
									...postDescriptionGlobalTypoSwitcher,
									fontFamily: value && false,
								},
							})
						}
						fontSize={postDescriptionFontSize}
						onChangeFontSize={(value) =>
							setAttributes({
								postDescriptionFontSize: value,
								postDescriptionGlobalTypoSwitcher: {
									...postDescriptionGlobalTypoSwitcher,
									fontSize: value && false,
								},
							})
						}
						fontSizeUnits={postDescriptionFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({ postDescriptionFontSizeUnits: value })
						}
						fontWeight={postDescriptionFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({
								postDescriptionFontWeight: value,
								postDescriptionGlobalTypoSwitcher: {
									...postDescriptionGlobalTypoSwitcher,
									fontWeight: value && false,
								},
							})
						}
						fontStyle={postDescriptionFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({
								postDescriptionFontStyle: value,
								postDescriptionGlobalTypoSwitcher: {
									...postDescriptionGlobalTypoSwitcher,
									fontStyle: value && false,
								},
							})
						}
						textTransform={postDescriptionTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({
								postDescriptionTextTransform: value,
								postDescriptionGlobalTypoSwitcher: {
									...postDescriptionGlobalTypoSwitcher,
									textTransform: value && false,
								},
							})
						}
						textDecoration={postDescriptionTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({
								postDescriptionTextDecoration: value,
								postDescriptionGlobalTypoSwitcher: {
									...postDescriptionGlobalTypoSwitcher,
									textDecoration: value && false,
								},
							})
						}
						letterSpacing={postDescriptionLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({
								postDescriptionLetterSpacing: value,
								postDescriptionGlobalTypoSwitcher: {
									...postDescriptionGlobalTypoSwitcher,
									letterSpacing: value && false,
								},
							})
						}
						letterSpacingUnits={postDescriptionLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({ postDescriptionLetterSpacingUnits: value })
						}
						lineHeight={postDescriptionLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({
								postDescriptionLineHeight: value,
								postDescriptionGlobalTypoSwitcher: {
									...postDescriptionGlobalTypoSwitcher,
									lineHeight: value && false,
								},
							})
						}
						lineHeightUnits={postDescriptionLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({ postDescriptionLineHeightUnits: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>

					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={postDescriptionColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ postDescriptionColorSwitcher: value })
						}
					/>

					{postDescriptionColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={postDescriptionColor}
							setGlobalColor={(value) =>
								setAttributes({
									postDescriptionColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					{postDescriptionColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={postDescriptionHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									postDescriptionHoverColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					<div className="fb-control-divider"></div>

					<FB_Range
						min={1}
						max={100}
						label={__("Spacing", "frontis-blocks")}
						rangeValue={postDescriptionSpacing}
						onChangeHandler={(value) =>
							setAttributes({ postDescriptionSpacing: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ postDescriptionSpacingUnits: value })
						}
						deviceType={deviceType}
						units={postDescriptionSpacingUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
				</PanelBody>
			)}

			{(layoutType === "grid" || ( layoutType === "list" && premadeStyle === "style-2" )) && readMoreSwitcher && (
				<PanelBody
					title={__("View All", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_Range
						min={1}
						max={100}
						label={__("Width", "frontis-blocks")}
						rangeValue={buttonWidth}
						onChangeHandler={(value) => setAttributes({ buttonWidth: value })}
						rangeUnitHandler={(value) =>
							setAttributes({ buttonWidthUnits: value })
						}
						deviceType={deviceType}
						units={buttonWidthUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>

					{readMoreIconAlign !== "icon-only" && (
						<FB_TypographyControl
							globalTypoControlActive={true}
							globalTypoSwitcher={buttonGlobalTypoSwitcher}
							storeGlobalTypographyData={(value) =>
								setAttributes({ buttonGlobalTypographyData: value })
							}
							globalTypoType={buttonGlobalTypoType}
							onChangeGlobalTypoType={(value) => {
								setAttributes({
									buttonGlobalTypoType: value,
									buttonGlobalTypoSwitcher:
										value === "default"
											? {
													...buttonGlobalTypoSwitcher,
													fontFamily: false,
													fontSize: false,
													fontWeight: false,
													fontStyle: false,
													textTransform: false,
													textDecoration: false,
													letterSpacing: false,
													lineHeight: false,
											  }
											: {
													...buttonGlobalTypoSwitcher,
													fontFamily: true,
													fontSize: true,
													fontWeight: true,
													fontStyle: true,
													textTransform: true,
													textDecoration: true,
													letterSpacing: true,
													lineHeight: true,
											  },
								});
							}}
							globalTypoOption={buttonGlobalTypoOption}
							onChangeGlobalTypoOption={(value) =>
								setAttributes({ buttonGlobalTypoOption: value })
							}
							fontFamily={buttonFontFamily}
							onChangeFontFamily={(value) =>
								setAttributes({
									buttonFontFamily: value,
									buttonGlobalTypoSwitcher: {
										...buttonGlobalTypoSwitcher,
										fontFamily: value && false,
									},
								})
							}
							fontSize={buttonFontSize}
							onChangeFontSize={(value) =>
								setAttributes({
									buttonFontSize: value,
									buttonGlobalTypoSwitcher: {
										...buttonGlobalTypoSwitcher,
										fontSize: value && false,
									},
								})
							}
							fontSizeUnits={buttonFontSizeUnits}
							onChangeFontSizeUnit={(value) =>
								setAttributes({ buttonFontSizeUnits: value })
							}
							fontWeight={buttonFontWeight}
							onChangeFontWeight={(value) =>
								setAttributes({
									buttonFontWeight: value,
									buttonGlobalTypoSwitcher: {
										...buttonGlobalTypoSwitcher,
										fontWeight: value && false,
									},
								})
							}
							fontStyle={buttonFontStyle}
							onChangeFontStyle={(value) =>
								setAttributes({
									buttonFontStyle: value,
									buttonGlobalTypoSwitcher: {
										...buttonGlobalTypoSwitcher,
										fontStyle: value && false,
									},
								})
							}
							textTransform={buttonTextTransform}
							onChangeTextTransform={(value) =>
								setAttributes({
									buttonTextTransform: value,
									buttonGlobalTypoSwitcher: {
										...buttonGlobalTypoSwitcher,
										textTransform: value && false,
									},
								})
							}
							textDecoration={buttonTextDecoration}
							onChangeTextDecoration={(value) =>
								setAttributes({
									buttonTextDecoration: value,
									buttonGlobalTypoSwitcher: {
										...buttonGlobalTypoSwitcher,
										textDecoration: value && false,
									},
								})
							}
							letterSpacing={buttonLetterSpacing}
							onChangeLetterSpacing={(value) =>
								setAttributes({
									buttonLetterSpacing: value,
									buttonGlobalTypoSwitcher: {
										...buttonGlobalTypoSwitcher,
										letterSpacing: value && false,
									},
								})
							}
							letterSpacingUnits={buttonLetterSpacingUnits}
							onChangeLetterSpacingUnit={(value) =>
								setAttributes({ buttonLetterSpacingUnits: value })
							}
							lineHeight={buttonLineHeight}
							onChangeLineHeight={(value) =>
								setAttributes({
									buttonLineHeight: value,
									buttonGlobalTypoSwitcher: {
										...buttonGlobalTypoSwitcher,
										lineHeight: value && false,
									},
								})
							}
							lineHeightUnits={buttonLineHeightUnits}
							onChangeLineHeightUnit={(value) =>
								setAttributes({ buttonLineHeightUnits: value })
							}
							deviceType={deviceType}
							setAttributes={setAttributes}
						/>
					)}

					{readMoreIconAlign !== "icon-only" && (
						<FB_SwitcherControl
							label={__("Color", "frontis-blocks")}
							globalSwitcher={buttonColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ buttonColorSwitcher: value })
							}
						/>
					)}

					{buttonColorSwitcher === "normal" &&
						readMoreIconAlign !== "icon-only" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={buttonColor}
								setGlobalColor={(value) =>
									setAttributes({
										buttonColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

					{buttonColorSwitcher === "hover" &&
						readMoreIconAlign !== "icon-only" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={buttonHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										buttonHoverColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

					<FB_SwitcherControl
						label={__("Background Color", "frontis-blocks")}
						globalSwitcher={buttonBgColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ buttonBgColorSwitcher: value })
						}
					/>

					{buttonBgColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={buttonBgColor}
							setGlobalColor={(value) =>
								setAttributes({
									buttonBgColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					{buttonBgColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={buttonBgHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									buttonBgHoverColor: value === undefined ? "" : value,
								})
							}
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
						setGlobalSwitcher={(value) =>
							setAttributes({ buttonBorderColorSwitcher: value })
						}
					/>

					{buttonBorderColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={buttonBorderColor}
							setGlobalColor={(value) =>
								setAttributes({
									buttonBorderColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					{buttonBorderColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={buttonBorderHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									buttonBorderHoverColor: value === undefined ? "" : value,
								})
							}
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
						setGlobalSwitcher={(value) =>
							setAttributes({ buttonBoxShadowSwitcher: value })
						}
					/>

					{buttonBoxShadowSwitcher === "normal" && (
						<FB_BoxShadowControl
							label={__("Normal Shadow", "frontis-blocks")}
							onBoxShadowChange={(value) =>
								setAttributes({ buttonBoxShadowValues: value })
							}
							initialShadowValue={buttonBoxShadowValues}
							onBoxShadowStyleChange={(value) =>
								setAttributes({ buttonBoxShadowCssValue: value })
							}
						/>
					)}

					{buttonBoxShadowSwitcher === "hover" && (
						<FB_BoxShadowControl
							label={__("Hover Shadow", "frontis-blocks")}
							onBoxShadowChange={(value) =>
								setAttributes({ buttonBoxShadowHoverValues: value })
							}
							initialShadowValue={buttonBoxShadowHoverValues}
							onBoxShadowStyleChange={(value) =>
								setAttributes({ buttonBoxShadowHoverCssValue: value })
							}
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

					{readMoreIconAlign !== "icon-only" &&
						readMoreIconAlign !== "none" && (
							<FB_Range
								min={0}
								max={100}
								label={__("Gap", "frontis-blocks")}
								rangeValue={buttonIconGapSize}
								onChangeHandler={(value) =>
									setAttributes({ buttonIconGapSize: value })
								}
								rangeUnitHandler={(value) =>
									setAttributes({ buttonIconGapUnits: value })
								}
								deviceType={deviceType}
								units={buttonIconGapUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
							/>
						)}
				</PanelBody>
			)}

			{(layoutType === "grid" || ( layoutType === "list" && premadeStyle === "style-2" )) &&
				readMoreSwitcher &&
				(readMoreIconAlign === "icon-text" ||
					readMoreIconAlign === "icon-only") && (
					<PanelBody
						title={__("View All Button Icon", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_Range
							min={1}
							max={100}
							label={__("Icon Size", "frontis-blocks")}
							rangeValue={buttonIconSize}
							onChangeHandler={(value) =>
								setAttributes({ buttonIconSize: value })
							}
							rangeUnitHandler={(value) =>
								setAttributes({ buttonIconSizeUnits: value })
							}
							deviceType={deviceType}
							units={buttonIconSizeUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={16}
						/>

						<FB_SwitcherControl
							label={__("Icon Color", "frontis-blocks")}
							globalSwitcher={buttonIconColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ buttonIconColorSwitcher: value })
							}
						/>

						{buttonIconColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={buttonIconColor}
								setGlobalColor={(value) =>
									setAttributes({
										buttonIconColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

						{buttonIconColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={buttonIconHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										buttonIconHoverColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

						<FB_SwitcherControl
							label={__("Background Color", "frontis-blocks")}
							globalSwitcher={buttonIconBgColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ buttonIconBgColorSwitcher: value })
							}
						/>

						{buttonIconBgColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={buttonIconBgColor}
								setGlobalColor={(value) =>
									setAttributes({
										buttonIconBgColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

						{buttonIconBgColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={buttonIconBgHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										buttonIconBgHoverColor: value === undefined ? "" : value,
									})
								}
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
							setGlobalSwitcher={(value) =>
								setAttributes({ buttonIconBorderColorSwitcher: value })
							}
						/>

						{buttonIconBorderColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={buttonIconBorderColor}
								setGlobalColor={(value) =>
									setAttributes({
										buttonIconBorderColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

						{buttonIconBorderColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={buttonIconBorderHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										buttonIconBorderHoverColor:
											value === undefined ? "" : value,
									})
								}
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
							label={__("Border Radius", "frontis-blocks")}
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

						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleButtonIconPaddingUnitsHandler}
							spacingUnits={buttonIconPaddingUnits}
							spacingDesktop={buttonIconDesktopPadding}
							spacingTablet={buttonIconTabPadding}
							spacingMobile={buttonIconMobilePadding}
							handleSpacingUnitHandler={handleButtonIconPaddingUnitChange}
							spacingCombineBtn={buttonIconPaddingLink}
							spacingCombineBtnHandler={handleButtonIconPaddingCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Icon Rotation", "frontis-blocks")}
							globalSwitcher={buttonIconRotateSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ buttonIconRotateSwitcher: value })
							}
						/>

						{buttonIconRotateSwitcher === "normal" && (
							<FB_Range
								min={-360}
								max={360}
								label={__("Icon Rotation", "frontis-blocks")}
								rangeValue={buttonIconRotate}
								onChangeHandler={(value) =>
									setAttributes({
										buttonIconRotate: value === 0 ? undefined : value,
									})
								}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
								isRangeUnit={false}
							/>
						)}

						{buttonIconRotateSwitcher === "hover" && (
							<FB_Range
								min={-360}
								max={360}
								label={__("Icon Rotation", "frontis-blocks")}
								rangeValue={buttonIconRotateHover}
								onChangeHandler={(value) =>
									setAttributes({
										buttonIconRotateHover: value === 0 ? undefined : value,
									})
								}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
								isRangeUnit={false}
							/>
						)}
					</PanelBody>
				)}

			{(layoutType === "grid" || ( layoutType === "list" && premadeStyle === "style-2" )) &&
				readMoreSwitcher &&
				readMoreIconAlign === "image" && (
					<PanelBody
						title={__("View All Button Image", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_Range
							min={1}
							max={100}
							label={__("Image Width", "frontis-blocks")}
							rangeValue={buttonIconImageWidth}
							onChangeHandler={(value) =>
								setAttributes({ buttonIconImageWidth: value })
							}
							rangeUnitHandler={(value) =>
								setAttributes({ buttonIconImageWidthUnits: value })
							}
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
							onChangeHandler={(value) =>
								setAttributes({ buttonIconImageHeight: value })
							}
							rangeUnitHandler={(value) =>
								setAttributes({ buttonIconImageHeightUnits: value })
							}
							deviceType={deviceType}
							units={buttonIconImageHeightUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={20}
						/>

						<FB_SwitcherControl
							label={__("Image Rotation", "frontis-blocks")}
							globalSwitcher={buttonImageRotateSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ buttonImageRotateSwitcher: value })
							}
						/>

						{buttonImageRotateSwitcher === "normal" && (
							<FB_Range
								min={-360}
								max={360}
								label={__("Image Rotation", "frontis-blocks")}
								rangeValue={buttonImageRotate}
								onChangeHandler={(value) =>
									setAttributes({
										buttonImageRotate: value === 0 ? undefined : value,
									})
								}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
								isRangeUnit={false}
							/>
						)}

						{buttonImageRotateSwitcher === "hover" && (
							<FB_Range
								min={-360}
								max={360}
								label={__("Image Rotation", "frontis-blocks")}
								rangeValue={buttonImageRotateHover}
								onChangeHandler={(value) =>
									setAttributes({
										buttonImageRotateHover: value === 0 ? undefined : value,
									})
								}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
								isRangeUnit={false}
							/>
						)}
					</PanelBody>
				)}

			<PanelBody title={__("Author", "frontis-blocks")} initialOpen={false}>
				<FB_Range
						min={1}
						max={100}
						label={__("Gap", "frontis-blocks")}
						rangeValue={authorAvatarGaps}
						onChangeHandler={(value) =>
							setAttributes({ authorAvatarGaps: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ authorAvatarGapUnits: value })
						}
						deviceType={deviceType}
						units={authorAvatarGapUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
				{showAuthor && (
					<FB_Range
						min={0}
						max={100}
						label={__("Avatar Size", "frontis-blocks")}
						rangeValue={authorAvatarSize}
						onChangeHandler={(value) =>
							setAttributes({ authorAvatarSize: value })
						}
						rangeUnitHandler={(value) =>
							setAttributes({ authorAvatarSizeUnits: value })
						}
						deviceType={deviceType}
						units={authorAvatarSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={40}
					/>
				)}
				<FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={authorNameGlobalTypoSwitcher}
					storeGlobalTypographyData={(value) =>
						setAttributes({ authorNameGlobalTypographyData: value })
					}
					globalTypoType={authorNameGlobalTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							authorNameGlobalTypoType: value,
							authorNameGlobalTypoSwitcher:
								value === "default"
									? {
										...authorNameGlobalTypoSwitcher,
										fontFamily: false,
										fontSize: false,
										fontWeight: false,
										fontStyle: false,
										textTransform: false,
										textDecoration: false,
										letterSpacing: false,
										lineHeight: false,
									}
									: {
										...authorNameGlobalTypoSwitcher,
										fontFamily: true,
										fontSize: true,
										fontWeight: true,
										fontStyle: true,
										textTransform: true,
										textDecoration: true,
										letterSpacing: true,
										lineHeight: true,
									},
						});
					}}
					globalTypoOption={authorNameGlobalTypoOption}
					onChangeGlobalTypoOption={(value) =>
						setAttributes({ authorNameGlobalTypoOption: value })
					}
					fontFamily={authorNameFontFamily}
					onChangeFontFamily={(value) =>
						setAttributes({
							authorNameFontFamily: value,
							authorNameGlobalTypoSwitcher: {
								...authorNameGlobalTypoSwitcher,
								fontFamily: value && false,
							},
						})
					}
					fontSize={authorNameFontSize}
					onChangeFontSize={(value) =>
						setAttributes({
							authorNameFontSize: value,
							authorNameGlobalTypoSwitcher: {
								...authorNameGlobalTypoSwitcher,
								fontSize: value && false,
							},
						})
					}
					fontSizeUnits={authorNameFontSizeUnits}
					onChangeFontSizeUnit={(value) =>
						setAttributes({ authorNameFontSizeUnits: value })
					}
					fontWeight={authorNameFontWeight}
					onChangeFontWeight={(value) =>
						setAttributes({
							authorNameFontWeight: value,
							authorNameGlobalTypoSwitcher: {
								...authorNameGlobalTypoSwitcher,
								fontWeight: value && false,
							},
						})
					}
					fontStyle={authorNameFontStyle}
					onChangeFontStyle={(value) =>
						setAttributes({
							authorNameFontStyle: value,
							authorNameGlobalTypoSwitcher: {
								...authorNameGlobalTypoSwitcher,
								fontStyle: value && false,
							},
						})
					}
					textTransform={authorNameTextTransform}
					onChangeTextTransform={(value) =>
						setAttributes({
							authorNameTextTransform: value,
							authorNameGlobalTypoSwitcher: {
								...authorNameGlobalTypoSwitcher,
								textTransform: value && false,
							},
						})
					}
					textDecoration={authorNameTextDecoration}
					onChangeTextDecoration={(value) =>
						setAttributes({
							authorNameTextDecoration: value,
							authorNameGlobalTypoSwitcher: {
								...authorNameGlobalTypoSwitcher,
								textDecoration: value && false,
							},
						})
					}
					letterSpacing={authorNameLetterSpacing}
					onChangeLetterSpacing={(value) =>
						setAttributes({
							authorNameLetterSpacing: value,
							authorNameGlobalTypoSwitcher: {
								...authorNameGlobalTypoSwitcher,
								letterSpacing: value && false,
							},
						})
					}
					letterSpacingUnits={authorNameLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) =>
						setAttributes({ authorNameLetterSpacingUnits: value })
					}
					lineHeight={authorNameLineHeight}
					onChangeLineHeight={(value) =>
						setAttributes({
							authorNameLineHeight: value,
							authorNameGlobalTypoSwitcher: {
								...authorNameGlobalTypoSwitcher,
								lineHeight: value && false,
							},
						})
					}
					lineHeightUnits={authorNameLineHeightUnits}
					onChangeLineHeightUnit={(value) =>
						setAttributes({ authorNameLineHeightUnits: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={authorNameColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ authorNameColorSwitcher: value })
					}
				/>

				{authorNameColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={authorNameColor}
						setGlobalColor={(value) => {
							setAttributes({
								authorNameColor: value === undefined ? '' : value,
							});
						}}
					/>
				)}

				{authorNameColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={authorNameHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								authorNameHoverColor: value === undefined ? '' : value,
							})
						}
					/>
				)}

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
			</PanelBody>
		</>
	);
	const advancedControls = (
		<>
			<div className="fb-setting-advanced-tab-wrapper">
				<div className="fb-setting-inner-wrapper">
					<PanelBody
						title={__("Layout", "frontis-blocks")}
						initialOpen={true}
						className="fb-setting-layout-header"
					>
						<FB_Range
							min={0}
							max={10000000}
							label={__("Z Index", "frontis-blocks")}
							rangeValue={postGlobalZIndex}
							onChangeHandler={(value) =>
								setAttributes({
									postGlobalZIndex: value === 0 ? undefined : value,
								})
							}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}
						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={postCategoryOverflow}
							options={OVERFLOW_OP}
							onChange={(value) =>
								setAttributes({ postCategoryOverflow: value })
							}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={postCategoryPositionType}
							setPositionType={(value) =>
								setAttributes({ postCategoryPositionType: value })
							}
							HZOrientationType={postCategoryHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ postCategoryHZOrientationType: value })
							}
							VROrientationType={postCategoryVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ postCategoryVROrientationType: value })
							}
							HZLeftOffset={postCategoryHZLeftOffset}
							setHZLeftOffset={(value) =>
								setAttributes({ postCategoryHZLeftOffset: value })
							}
							HZLeftOffsetUnits={postCategoryHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) =>
								setAttributes({ postCategoryHZLeftOffsetUnits: value })
							}
							HZRightOffset={postCategoryHZRightOffset}
							setHZRightOffset={(value) =>
								setAttributes({ postCategoryHZRightOffset: value })
							}
							HZRightOffsetUnits={postCategoryHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) =>
								setAttributes({ postCategoryHZRightOffsetUnits: value })
							}
							VRTopOffset={postCategoryVRTopOffset}
							setVRTopOffset={(value) =>
								setAttributes({ postCategoryVRTopOffset: value })
							}
							VRTopOffsetUnits={postCategoryVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) =>
								setAttributes({ postCategoryVRTopOffsetUnits: value })
							}
							VRBottomOffset={postCategoryVRBottomOffset}
							setVRBottomOffset={(value) =>
								setAttributes({ postCategoryVRBottomOffset: value })
							}
							VRBottomOffsetUnits={postCategoryVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) =>
								setAttributes({ postCategoryVRBottomOffsetUnits: value })
							}
							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={postCategoryGlobalWraperID}
							onChangeValue={(value) =>
								setAttributes({ postCategoryGlobalWraperID: value })
							}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={postCategoryGlobalWraperClass}
							onChangeValue={(value) =>
								setAttributes({ postCategoryGlobalWraperClass: value })
							}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
					</PanelBody>

					<PanelBody
						title={__("Padding and Margin", "frontis-blocks")}
						initialOpen={false}
					>
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

					<PanelBody title="Background Color" initialOpen={false}>
						<FB_BackgroundColorControl
							label={__("Background Color", "frontis-blocks")}
							bgColorSwitcher={postGlobalBgColorSwitcher}
							setBgColorSwitcher={(value) =>
								setAttributes({ postGlobalBgColorSwitcher: value })
							}
							normalBackgroundType={postGlobalNormalBackgroundType}
							setNormalBackgroundType={(value) =>
								setAttributes({ postGlobalNormalBackgroundType: value })
							}
							normalClassicColor={postGlobalNormalClassicColor}
							setNormalClassicColor={(value) =>
								setAttributes({
									postGlobalNormalClassicColor:
										value === undefined ? "" : value,
								})
							}
							normalGradientColor={postGlobalNormalGradientColor}
							setNormalGradientColor={(value) =>
								setAttributes({
									postGlobalNormalGradientColor:
										value === undefined ? "" : value,
								})
							}
							normalCustomGradientSwitcher={
								postGlobalNormalCustomGradientSwitcher
							}
							setNormalCustomGradientSwitcher={(value) =>
								setAttributes({ postGlobalNormalCustomGradientSwitcher: value })
							}
							normalCustomGradientInputValue={
								postGlobalNormalCustomGradientInputValue
							}
							setNormalCustomGradientInputValue={(value) =>
								setAttributes({
									postGlobalNormalCustomGradientInputValue: value,
								})
							}
							hoverBackgroundType={postGlobalHoverBackgroundType}
							setHoverBackgroundType={(value) =>
								setAttributes({ postGlobalHoverBackgroundType: value })
							}
							hoverClassicColor={postGlobalHoverClassicColor}
							setHoverClassicColor={(value) =>
								setAttributes({
									postGlobalHoverClassicColor: value === undefined ? "" : value,
								})
							}
							hoverGradientColor={postGlobalHoverGradientColor}
							setHoverGradientColor={(value) =>
								setAttributes({
									postGlobalHoverGradientColor:
										value === undefined ? "" : value,
								})
							}
							hoverCustomGradientSwitcher={
								postGlobalHoverCustomGradientSwitcher
							}
							setHoverCustomGradientSwitcher={(value) =>
								setAttributes({ postGlobalHoverCustomGradientSwitcher: value })
							}
							hoverCustomGradientInputValue={
								postGlobalHoverCustomGradientInputValue
							}
							setHoverCustomGradientInputValue={(value) =>
								setAttributes({
									postGlobalHoverCustomGradientInputValue: value,
								})
							}
							isBackgroundImage={false}
						/>
					</PanelBody>

					<PanelBody
						title={__("Border and Shadow", "frontis-blocks")}
						initialOpen={false}
					>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={postGlobalBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ postGlobalBorder: value })}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={postGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ postGlobalBorderColorSwitcher: value })
							}
						/>

						{postGlobalBorderColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={postGlobalBorderColor}
								setGlobalColor={(value) =>
									setAttributes({
										postGlobalBorderColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

						{postGlobalBorderColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={postGlobalBorderHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										postGlobalBorderHoverColor:
											value === undefined ? "" : value,
									})
								}
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
							setGlobalSwitcher={(value) =>
								setAttributes({ postGlobalBoxShadowSwitcher: value })
							}
						/>

						{postGlobalBoxShadowSwitcher === "normal" && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ postGlobalBoxShadowValues: value })
								}
								initialShadowValue={postGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({ postGlobalBoxShadowCssValue: value })
								}
							/>
						)}

						{postGlobalBoxShadowSwitcher === "hover" && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ postGlobalBoxShadowHoverValues: value })
								}
								initialShadowValue={postGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({ postGlobalBoxShadowHoverCssValue: value })
								}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={postCategoryDesktopSwitcher}
							setDesktopValue={(value) =>
								setAttributes({ postCategoryDesktopSwitcher: value })
							}
							tabletValue={postCategoryTabletSwitcher}
							setTabletValue={(value) =>
								setAttributes({ postCategoryTabletSwitcher: value })
							}
							mobileValue={postCategoryMobileSwitcher}
							setMobileValue={(value) =>
								setAttributes({ postCategoryMobileSwitcher: value })
							}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={postCategoryGlobalCustomCSS}
							onChangeValue={(value) =>
								setAttributes({ postCategoryGlobalCustomCSS: value })
							}
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