import { __ } from "@wordpress/i18n";
import { useEffect, useMemo, useState } from "@wordpress/element";
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
} from "@Constants/fbConstants";
import loadGoogleFont from "@Utils/loadGoogleFont";
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

import generateSvgIcon from "@Utils/generateSvgIcon";

import "./editor.scss";

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		premadeStyle,
		taxonomyType,
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

	useEffect(() => {
		if (clientId && typeof clientId === "string" && !blockId) {
			setAttributes({
				blockId: "fb-post-category-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

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

	// Fetch all post types
	const { useSelect } = wp.data;
	const postTypes =
		useSelect((select) => select("core").getPostTypes({ per_page: -1 }), []) ||
		[];
	// Filter post types: only those visible in UI, with taxonomies, and exclude internal types
	const filteredPostTypes = postTypes.filter(
		(pt) =>
			pt.visibility?.show_ui &&
			pt.taxonomies?.length > 0 &&
			!["attachment", "wp_block", "nav_menu_item", "revision", "page"].includes(
				pt.slug,
			),
	);

	// Fetch all taxonomies
	const allTaxonomies =
		useSelect((select) => select("core").getTaxonomies({ per_page: -1 }), []) ||
		[];

	const dynamicTaxonomyOptions = useMemo(() => {
		return filteredPostTypes.flatMap((pt) => {
			const taxonomiesForPostType = allTaxonomies
				.filter((tax) => tax.types?.includes(pt.slug))
				.map((tax) => ({
					value: tax.slug,
					label: `  ${tax.labels?.singular_name || tax.name}`, // Indent taxonomies with 4 spaces (one tab)
				}));
			if (taxonomiesForPostType.length > 0) {
				return [
					{
						value: `group-${pt.slug}`,
						label: pt.labels?.name || pt.slug,
						isDisabled: true, // Post type as non-selectable group header
					},
					...taxonomiesForPostType,
				];
			}
			return [];
		});
	}, [filteredPostTypes, allTaxonomies]);

	const [selectedTaxonomy, setSelectedTaxonomy] = useState(() => {
		return (
			dynamicTaxonomyOptions.find(
				(opt) => opt.value === taxonomyType && !opt.isDisabled,
			) ||
			dynamicTaxonomyOptions.find((opt) => !opt.isDisabled) ||
			null
		);
	});

	useEffect(() => {
		if (
			dynamicTaxonomyOptions.length > 0 &&
			(!taxonomyType ||
				!dynamicTaxonomyOptions.find(
					(opt) => opt.value === taxonomyType && !opt.isDisabled,
				))
		) {
			const defaultTax = dynamicTaxonomyOptions.find((opt) => !opt.isDisabled);
			if (defaultTax) {
				setSelectedTaxonomy(defaultTax);
				setAttributes({ taxonomyType: defaultTax.value });
			}
		} else if (!taxonomyType && dynamicTaxonomyOptions.length === 0) {
			setSelectedTaxonomy(null);
			setAttributes({ taxonomyType: "" });
		} else if (taxonomyType) {
			const currentTax =
				dynamicTaxonomyOptions.find(
					(opt) => opt.value === taxonomyType && !opt.isDisabled,
				) || null;
			setSelectedTaxonomy(currentTax);
		}
	}, [dynamicTaxonomyOptions, taxonomyType]);

	// Handle taxonomy change (only allow selection of taxonomies, not group headers)
	const handleTaxonomyChange = (option) => {
		if (option && !option.isDisabled) {
			setSelectedTaxonomy(option);
			setAttributes({
				taxonomyType: option.value,
				includeTaxonomies: [],
				excludeTaxonomies: [],
				showChildCategories: false,
			});
		}
	};

	// Get selected taxonomy object for hierarchical check
	const selectedTaxonomyObj = allTaxonomies.find(
		(tax) => tax.slug === taxonomyType,
	);

	// Fetch taxonomy terms for include/exclude
	const taxonomyItems = useSelect(
		(select) => {
			return taxonomyType
				? select("core").getEntityRecords("taxonomy", taxonomyType, {
						per_page: 100,
						hide_empty: false,
				  })
				: [];
		},
		[taxonomyType],
	);

	const taxonomyOptions = taxonomyItems
		? taxonomyItems.map((tax) => ({
				value: tax.id,
				label: tax.name,
		  }))
		: [];

	const handleIncludeTaxonomiesChange = (options) => {
		setAttributes({
			includeTaxonomies: options ? options.map((opt) => opt.value) : [],
		});
	};

	const handleExcludeTaxonomiesChange = (options) => {
		setAttributes({
			excludeTaxonomies: options ? options.map((opt) => opt.value) : [],
		});
	};

	/** Start Load Google Font */
	useEffect(() => {
		if (postTitleFontFamily !== "Default") {
			loadGoogleFont(postTitleFontFamily);
		}
		if (postDescriptionFontFamily !== "Default") {
			loadGoogleFont(postDescriptionFontFamily);
		}

		if (postCountFontFamily !== "Default") {
			loadGoogleFont(postCountFontFamily);
		}

		// if (postCategoryFontFamily !== 'Default') {
		// 		loadGoogleFont(postCategoryFontFamily);
		// }
		// if (postTagFontFamily !== 'Default') {
		// 		loadGoogleFont(postTagFontFamily);
		// }
		// if (postAuthorFontFamily !== 'Default') {
		// 		loadGoogleFont(postAuthorFontFamily);
		// }
		// if (postDateFontFamily !== 'Default') {
		// 		loadGoogleFont(postDateFontFamily);
		// }

		if (buttonFontFamily !== "Default") {
			loadGoogleFont(buttonFontFamily);
		}
	}, [
		postTitleFontFamily,
		postDescriptionFontFamily,
		postCountFontFamily,
		buttonFontFamily,
	]);
	/** End Load Google Font */

	/* =============================================================================================== */

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
	const postCategoryPaddingDesktopWidth = `${postCategoryPaddingDesktop.top}${postCategoryPaddingUnits.Desktop} ${postCategoryPaddingDesktop.right}${postCategoryPaddingUnits.Desktop} ${postCategoryPaddingDesktop.bottom}${postCategoryPaddingUnits.Desktop} ${postCategoryPaddingDesktop.left}${postCategoryPaddingUnits.Desktop}`;
	const postCategoryPaddingTabletWidth = `${postCategoryPaddingTablet.top}${postCategoryPaddingUnits.Tablet} ${postCategoryPaddingTablet.right}${postCategoryPaddingUnits.Tablet} ${postCategoryPaddingTablet.bottom}${postCategoryPaddingUnits.Tablet} ${postCategoryPaddingTablet.left}${postCategoryPaddingUnits.Tablet}`;
	const postCategoryPaddingMobileWidth = `${postCategoryPaddingMobile.top}${postCategoryPaddingUnits.Mobile} ${postCategoryPaddingMobile.right}${postCategoryPaddingUnits.Mobile} ${postCategoryPaddingMobile.bottom}${postCategoryPaddingUnits.Mobile} ${postCategoryPaddingMobile.left}${postCategoryPaddingUnits.Mobile}`;
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
	const postCategoryMarginDesktopWidth = `${postCategoryMarginDesktop.top}${postCategoryMarginUnits.Desktop} ${postCategoryMarginDesktop.right}${postCategoryMarginUnits.Desktop} ${postCategoryMarginDesktop.bottom}${postCategoryMarginUnits.Desktop} ${postCategoryMarginDesktop.left}${postCategoryMarginUnits.Desktop}`;
	const postCategoryMarginTabletWidth = `${postCategoryMarginTablet.top}${postCategoryMarginUnits.Tablet} ${postCategoryMarginTablet.right}${postCategoryMarginUnits.Tablet} ${postCategoryMarginTablet.bottom}${postCategoryMarginUnits.Tablet} ${postCategoryMarginTablet.left}${postCategoryMarginUnits.Tablet}`;
	const postCategoryMarginMobileWidth = `${postCategoryMarginMobile.top}${postCategoryMarginUnits.Mobile} ${postCategoryMarginMobile.right}${postCategoryMarginUnits.Mobile} ${postCategoryMarginMobile.bottom}${postCategoryMarginUnits.Mobile} ${postCategoryMarginMobile.left}${postCategoryMarginUnits.Mobile}`;
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
	const postCategoryBorderDesktopWidth = `${postCategoryBorderDesktop.top}${postCategoryBorderUnits.Desktop} ${postCategoryBorderDesktop.right}${postCategoryBorderUnits.Desktop} ${postCategoryBorderDesktop.bottom}${postCategoryBorderUnits.Desktop} ${postCategoryBorderDesktop.left}${postCategoryBorderUnits.Desktop}`;
	const postCategoryBorderTabletWidth = `${postCategoryBorderTablet.top}${postCategoryBorderUnits.Tablet} ${postCategoryBorderTablet.right}${postCategoryBorderUnits.Tablet} ${postCategoryBorderTablet.bottom}${postCategoryBorderUnits.Tablet} ${postCategoryBorderTablet.left}${postCategoryBorderUnits.Tablet}`;
	const postCategoryBorderMobileWidth = `${postCategoryBorderMobile.top}${postCategoryBorderUnits.Mobile} ${postCategoryBorderMobile.right}${postCategoryBorderUnits.Mobile} ${postCategoryBorderMobile.bottom}${postCategoryBorderUnits.Mobile} ${postCategoryBorderMobile.left}${postCategoryBorderUnits.Mobile}`;
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
	const postCategoryBorderRadiusDesktopWidth = `${postCategoryBorderRadiusDesktop.top}${postCategoryBorderRadiusUnits.Desktop} ${postCategoryBorderRadiusDesktop.right}${postCategoryBorderRadiusUnits.Desktop} ${postCategoryBorderRadiusDesktop.bottom}${postCategoryBorderRadiusUnits.Desktop} ${postCategoryBorderRadiusDesktop.left}${postCategoryBorderRadiusUnits.Desktop}`;
	const postCategoryBorderRadiusTabletWidth = `${postCategoryBorderRadiusTablet.top}${postCategoryBorderRadiusUnits.Tablet} ${postCategoryBorderRadiusTablet.right}${postCategoryBorderRadiusUnits.Tablet} ${postCategoryBorderRadiusTablet.bottom}${postCategoryBorderRadiusUnits.Tablet} ${postCategoryBorderRadiusTablet.left}${postCategoryBorderRadiusUnits.Tablet}`;
	const postCategoryBorderRadiusMobileWidth = `${postCategoryBorderRadiusMobile.top}${postCategoryBorderRadiusUnits.Mobile} ${postCategoryBorderRadiusMobile.right}${postCategoryBorderRadiusUnits.Mobile} ${postCategoryBorderRadiusMobile.bottom}${postCategoryBorderRadiusUnits.Mobile} ${postCategoryBorderRadiusMobile.left}${postCategoryBorderRadiusUnits.Mobile}`;
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

	/** Default border width for different devices */
	const buttonDesktopBorderWidthStr = `${buttonDesktopBorderWidth.top}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.right}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.bottom}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.left}${buttonBorderUnits.Desktop}`;
	const buttonTabletBorderWidthStr = `${buttonTabBorderWidth.top}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.right}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.bottom}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.left}${buttonBorderUnits.Tablet}`;
	const buttonMobileBorderWidthStr = `${buttonMobileBorderWidth.top}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.right}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.bottom}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.left}${buttonBorderUnits.Mobile}`;
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
	/** End border radius */

	/** Default border radius for different devices */
	const buttonDesktopBorderRadiusStr = `${buttonDesktopBorderRadiusWidth.top}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.right}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.left}${buttonBorderRadiusUnits.Desktop}`;
	const buttonTabletBorderRadiusStr = `${buttonTabBorderRadiusWidth.top}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.right}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.left}${buttonBorderRadiusUnits.Tablet}`;
	const buttonMobileBorderRadiusStr = `${buttonMobileBorderRadiusWidth.top}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.right}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.left}${buttonBorderRadiusUnits.Mobile}`;
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
	/** end padding */

	/** Default padding for each device */
	const buttonDesktopPaddingStr = `${buttonDesktopPadding.top}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.right}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.bottom}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.left}${buttonPaddingUnits.Desktop}`;
	const buttonTabletPaddingStr = `${buttonTabPadding.top}${buttonPaddingUnits.Tablet} ${buttonTabPadding.right}${buttonPaddingUnits.Tablet} ${buttonTabPadding.bottom}${buttonPaddingUnits.Tablet} ${buttonTabPadding.left}${buttonPaddingUnits.Tablet}`;
	const buttonMobilePaddingStr = `${buttonMobilePadding.top}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.right}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.bottom}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.left}${buttonPaddingUnits.Mobile}`;
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

	/** Default margin for each device */
	const buttonDesktopMarginStr = `${buttonDesktopMargin.top}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.right}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.bottom}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.left}${buttonMarginUnits.Desktop}`;
	const buttonTabletMarginStr = `${buttonTabMargin.top}${buttonMarginUnits.Tablet} ${buttonTabMargin.right}${buttonMarginUnits.Tablet} ${buttonTabMargin.bottom}${buttonMarginUnits.Tablet} ${buttonTabMargin.left}${buttonMarginUnits.Tablet}`;
	const buttonMobileMarginStr = `${buttonMobileMargin.top}${buttonMarginUnits.Mobile} ${buttonMobileMargin.right}${buttonMarginUnits.Mobile} ${buttonMobileMargin.bottom}${buttonMarginUnits.Mobile} ${buttonMobileMargin.left}${buttonMarginUnits.Mobile}`;
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
	/** End Icon border */
	const buttonIconBorderDesktopWidth = `${buttonIconBorderDesktop.top}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.right}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.bottom}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.left}${buttonIconBorderUnits.Desktop}`;
	const buttonIconBorderTabletWidth = `${buttonIconBorderTablet.top}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.right}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.bottom}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.left}${buttonIconBorderUnits.Tablet}`;
	const buttonIconBorderMobileWidth = `${buttonIconBorderMobile.top}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.right}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.bottom}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.left}${buttonIconBorderUnits.Mobile}`;
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
	/** end Global border */

	/** End Icon Border Radius */
	const buttonIconBorderRadiusDesktopWidth = `${buttonIconBorderRadiusDesktop.top}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.right}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.bottom}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.left}${buttonIconBorderRadiusUnits.Desktop}`;
	const buttonIconBorderRadiusTabletWidth = `${buttonIconBorderRadiusTablet.top}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.right}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.bottom}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.left}${buttonIconBorderRadiusUnits.Tablet}`;
	const buttonIconBorderRadiusMobileWidth = `${buttonIconBorderRadiusMobile.top}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.right}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.bottom}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.left}${buttonIconBorderRadiusUnits.Mobile}`;
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
	/** end padding */

	/** Default padding for each device */
	const buttonIconDesktopPaddingStr = `${buttonIconDesktopPadding.top}${buttonIconPaddingUnits.Desktop} ${buttonIconDesktopPadding.right}${buttonIconPaddingUnits.Desktop} ${buttonIconDesktopPadding.bottom}${buttonIconPaddingUnits.Desktop} ${buttonIconDesktopPadding.left}${buttonIconPaddingUnits.Desktop}`;
	const buttonIconTabletPaddingStr = `${buttonIconTabPadding.top}${buttonIconPaddingUnits.Tablet} ${buttonIconTabPadding.right}${buttonIconPaddingUnits.Tablet} ${buttonIconTabPadding.bottom}${buttonIconPaddingUnits.Tablet} ${buttonIconTabPadding.left}${buttonIconPaddingUnits.Tablet}`;
	const buttonIconMobilePaddingStr = `${buttonIconMobilePadding.top}${buttonIconPaddingUnits.Mobile} ${buttonIconMobilePadding.right}${buttonIconPaddingUnits.Mobile} ${buttonIconMobilePadding.bottom}${buttonIconPaddingUnits.Mobile} ${buttonIconMobilePadding.left}${buttonIconPaddingUnits.Mobile}`;
	// end icon padding
	// End read more button icon
	/** End Read More Button */

	/** Post Count */

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

	const postCountPaddingDesktopWidth = `${postCountPaddingDesktop.top}${postCountPaddingUnits.Desktop} ${postCountPaddingDesktop.right}${postCountPaddingUnits.Desktop} ${postCountPaddingDesktop.bottom}${postCountPaddingUnits.Desktop} ${postCountPaddingDesktop.left}${postCountPaddingUnits.Desktop}`;
	const postCountPaddingTabletWidth = `${postCountPaddingTablet.top}${postCountPaddingUnits.Tablet} ${postCountPaddingTablet.right}${postCountPaddingUnits.Tablet} ${postCountPaddingTablet.bottom}${postCountPaddingUnits.Tablet} ${postCountPaddingTablet.left}${postCountPaddingUnits.Tablet}`;
	const postCountPaddingMobileWidth = `${postCountPaddingMobile.top}${postCountPaddingUnits.Mobile} ${postCountPaddingMobile.right}${postCountPaddingUnits.Mobile} ${postCountPaddingMobile.bottom}${postCountPaddingUnits.Mobile} ${postCountPaddingMobile.left}${postCountPaddingUnits.Mobile}`;
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

	const postCountBorderDesktopWidth = `${postCountBorderDesktop.top}${postCountBorderUnits.Desktop} ${postCountBorderDesktop.right}${postCountBorderUnits.Desktop} ${postCountBorderDesktop.bottom}${postCountBorderUnits.Desktop} ${postCountBorderDesktop.left}${postCountBorderUnits.Desktop}`;
	const postCountBorderTabletWidth = `${postCountBorderTablet.top}${postCountBorderUnits.Tablet} ${postCountBorderTablet.right}${postCountBorderUnits.Tablet} ${postCountBorderTablet.bottom}${postCountBorderUnits.Tablet} ${postCountBorderTablet.left}${postCountBorderUnits.Tablet}`;
	const postCountBorderMobileWidth = `${postCountBorderMobile.top}${postCountBorderUnits.Mobile} ${postCountBorderMobile.right}${postCountBorderUnits.Mobile} ${postCountBorderMobile.bottom}${postCountBorderUnits.Mobile} ${postCountBorderMobile.left}${postCountBorderUnits.Mobile}`;
	/** End Post Count Border */

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

	const postCountBorderRadiusDesktopWidth = `${postCountBorderRadiusDesktop.top}${postCountBorderRadiusUnits.Desktop} ${postCountBorderRadiusDesktop.right}${postCountBorderRadiusUnits.Desktop} ${postCountBorderRadiusDesktop.bottom}${postCountBorderRadiusUnits.Desktop} ${postCountBorderRadiusDesktop.left}${postCountBorderRadiusUnits.Desktop}`;
	const postCountBorderRadiusTabletWidth = `${postCountBorderRadiusTablet.top}${postCountBorderRadiusUnits.Tablet} ${postCountBorderRadiusTablet.right}${postCountBorderRadiusUnits.Tablet} ${postCountBorderRadiusTablet.bottom}${postCountBorderRadiusUnits.Tablet} ${postCountBorderRadiusTablet.left}${postCountBorderRadiusUnits.Tablet}`;
	const postCountBorderRadiusMobileWidth = `${postCountBorderRadiusMobile.top}${postCountBorderRadiusUnits.Mobile} ${postCountBorderRadiusMobile.right}${postCountBorderRadiusUnits.Mobile} ${postCountBorderRadiusMobile.bottom}${postCountBorderRadiusUnits.Mobile} ${postCountBorderRadiusMobile.left}${postCountBorderRadiusUnits.Mobile}`;
	/** End Post Count Border Radius */

	/** End Post Count */

	/* =============================================================================================== */

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

	const postGlobalDesktopPaddingWidth = `${postGlobalPaddingDesktop.top}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.right}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.bottom}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.left}${postGlobalPaddingUnits.Desktop}`;
	const postGlobalTabletPaddingWidth = `${postGlobalPaddingTablet.top}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.right}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.bottom}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.left}${postGlobalPaddingUnits.Tablet}`;
	const postGlobalMobilePaddingWidth = `${postGlobalPaddingMobile.top}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.right}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.bottom}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.left}${postGlobalPaddingUnits.Mobile}`;
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

	const postGlobalDesktopMarginWidth = `${postGlobalMarginDesktop.top}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.right}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.bottom}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.left}${postGlobalMarginUnits.Desktop}`;
	const postGlobalTabletMarginWidth = `${postGlobalMarginTablet.top}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.right}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.bottom}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.left}${postGlobalMarginUnits.Tabelet}`;
	const postGlobalMobileMarginWidth = `${postGlobalMarginMobile.top}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.right}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.bottom}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.left}${postGlobalMarginUnits.Mobile}`;
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
	const postGlobalDesktopBorderWidth = `${postGlobalBorderDesktop.top}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.right}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.bottom}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.left}${postGlobalBorderUnits.Desktop}`;
	const postGlobalTabletBorderWidth = `${postGlobalBorderTablet.top}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.right}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.bottom}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.left}${postGlobalBorderUnits.Tablet}`;
	const postGlobalMobileBorderWidth = `${postGlobalBorderMobile.top}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.right}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.bottom}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.left}${postGlobalBorderUnits.Mobile}`;
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
	/** End Global Border */

	/** End Global Border Radius */
	const postGlobalDesktopBorderRadiusWidth = `${postGlobalBorderRadiusDesktop.top}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.right}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.bottom}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.left}${postGlobalBorderRadiusUnits.Desktop}`;
	const postGlobalTabletBorderRadiusWidth = `${postGlobalBorderRadiusTablet.top}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.right}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.bottom}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.left}${postGlobalBorderRadiusUnits.Tablet}`;
	const postGlobalMobileBorderRadiusWidth = `${postGlobalBorderRadiusMobile.top}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.right}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.bottom}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.left}${postGlobalBorderRadiusUnits.Mobile}`;
	/** End Global Border Radius */

	// Helper function to calculate inner padding
	const calculateInnerPadding = (originalValue, unit) => {
		const calculatedValue = Math.max(10, (originalValue * 10) / 24);
		return `${calculatedValue}${unit}`;
	};

	// Calculate inner padding strings
	const postCategoryInnerPaddingDesktopWidth = `${calculateInnerPadding(
		postCategoryPaddingDesktop.top,
		postCategoryPaddingUnits.Desktop,
	)} ${calculateInnerPadding(
		postCategoryPaddingDesktop.right,
		postCategoryPaddingUnits.Desktop,
	)} ${calculateInnerPadding(
		postCategoryPaddingDesktop.bottom,
		postCategoryPaddingUnits.Desktop,
	)} ${calculateInnerPadding(
		postCategoryPaddingDesktop.left,
		postCategoryPaddingUnits.Desktop,
	)}`;

	const postCategoryInnerPaddingTabletWidth = `${calculateInnerPadding(
		postCategoryPaddingTablet.top,
		postCategoryPaddingUnits.Tablet,
	)} ${calculateInnerPadding(
		postCategoryPaddingTablet.right,
		postCategoryPaddingUnits.Tablet,
	)} ${calculateInnerPadding(
		postCategoryPaddingTablet.bottom,
		postCategoryPaddingUnits.Tablet,
	)} ${calculateInnerPadding(
		postCategoryPaddingTablet.left,
		postCategoryPaddingUnits.Tablet,
	)}`;

	const postCategoryInnerPaddingMobileWidth = `${calculateInnerPadding(
		postCategoryPaddingMobile.top,
		postCategoryPaddingUnits.Mobile,
	)} ${calculateInnerPadding(
		postCategoryPaddingMobile.right,
		postCategoryPaddingUnits.Mobile,
	)} ${calculateInnerPadding(
		postCategoryPaddingMobile.bottom,
		postCategoryPaddingUnits.Mobile,
	)} ${calculateInnerPadding(
		postCategoryPaddingMobile.left,
		postCategoryPaddingUnits.Mobile,
	)}`;

	const allBlockStyle = useMemo(
		() => `

			/* Common styles */

				.${blockId} .fb_post_category_container  .fb-taxonomy-item .fb-taxonomy-link-count{
						display: flex;
						flex-direction: column;
						${
							premadeStyle === "style-1"
								? ""
								: `
									gap: 32px;
								
							`
						}
				}


				.${blockId} .fb-taxonomy-list .fb-taxonomy-item .fb-taxonomy-link-count {
					flex-direction: row;
					align-items: center;
					gap: 16px;
				}

				.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link, .${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name{
					line-height: 130%;
					letter-spacing: -2%;
					color: #15171C;
					margin: 0;
					font-size: 24px;
					font-weight: 500;
					width: fit-content;
				}

				.${blockId}.fb-taxonomy-style-1 .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link:hover, 
				.${blockId}.fb-taxonomy-style-1 .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name:hover,
				.${blockId} .fb-taxonomy-list .fb-taxonomy-item .fb-taxonomy-link:hover,
				.${blockId} .fb-taxonomy-list .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name:hover {
					color: #399cff;
				}

								.${blockId}.fb-taxonomy-style-2 .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link:hover, 
				.${blockId}.fb-taxonomy-style-2 .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name:hover{
							text-decoration: underline;
				}

				.${blockId}.fb-taxonomy-style-3 .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link:hover{
					color: unset;
				}

        .${blockId} .fb-taxonomy-description {
            color: #555E72;
            font-size: 18px;
            line-height: 140%;
            margin: 0;
						margin-top: 14px;
        }

        .${blockId} .fb-taxonomy-count {
						width: fit-content;
						height: auto;
						display: flex;
						justify-content: center;
						align-items: center;
						line-height: 24px;
            color: #15171C;
						border-radius: 50px;
            font-size: 16px;
            font-weight: 500;
						box-sizing: content-box;
        }

				.${blockId} .fb-taxonomy-grid .fb-taxonomy-count {
						background: #D7E9FF;
						padding: 6px 14px;
				}

				.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button {
						width: fit-content;		
						display: inline-flex;
						align-items: center;
						justify-content: center;
						gap: 10px;
						padding: 14px 18px;
						background-color: #0B0C0E;
						color: #FFFFFF;
						text-decoration: none;
						border-radius: 50px;
						font-size: 16px;
						font-weight: 500;
						line-height: 20px;
						letter-spacing: -2%;
						box-sizing: border-box;
						z-index: 2;
						transition: all 0.3s ease;
				}

				.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover{
						background-color: #3991FF;
						color: white;
						text-decoration: none;
				}

				.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-wrapper{
							display: flex;
							align-items: center;	
				}

				.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon {
					display: flex;
				}

				.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
					width: 16px;
					height: 16px;
					fill: currentColor;
				}

				.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image{
					width: 20px;
					height: 20px;
				}

				.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
						
        .${blockId} .fb-empty-indicator {
            color: #dc3545;
            font-size: 12px;
            font-style: italic;
            margin-left: 5px;
        }

        .${blockId} .fb-no-taxonomies,
        .${blockId} .fb-taxonomy-error {
            text-align: center;
            color: #6c757d;
            font-style: italic;
            padding: 20px;
        }

				/** list style */

				.${blockId} .fb-taxonomy-list{
						margin: 0;
				}

				.${blockId} .fb_taxonomy_sublist{
						display: flex;
						flex-direction: column;
				}

				.${blockId} .fb_taxonomy_sublist .fb-taxonomy-item {
						margin-left: 62px;
				}
				
				.${blockId} .fb-taxonomy-list .fb-taxonomy-item .fb-tax-separator{
					border-color: #e5e5e5;
				}

				/* LIST LAYOUT - style-1 specific styles for taxonomy item in list layout */
				${
					premadeStyle === "style-1"
						? `
					
					.${blockId} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"] {
							margin-bottom: 10px;
							margin-left: 0;
					}

					.${blockId} .fb_taxonomy_sublist {
						padding-top: 10px;
						padding-bottom: 10px;
						padding-left: 0;
						gap: 10px;
					}


					.${blockId} .fb-taxonomy-list .fb-taxonomy-count{
							font-size: 24px;
					}

					`
						: ""
				}

				/* LIST LAYOUT - style-2 specific styles for taxonomy item in list layout */
				${
					premadeStyle === "style-2"
						? `

					.${blockId}.fb-taxonomy-style-2 .fb-taxonomy-list {
						list-style-type: none;
						padding-left: 0;
					}

					.${blockId} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"] {
							margin-bottom: 32px;
					}

					.${blockId} .fb_taxonomy_sublist {
						padding-top: 32px;
						padding-bottom: 32px;
						gap: 32px;
					}
	
					.${blockId} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"]  { 
							border-left-style: solid;
							border-left-width: 3px;
							border-color: #3991FF;
							padding-left: 24px;
					}

					.${blockId} .fb_taxonomy_sublist .fb-taxonomy-item{
						border-left-style: solid;
						border-left-width: 3px;
						border-color: #0B0C0E;
						padding-left: 24px;
					}
	
					.${blockId}.fb-taxonomy-style-2 .fb-taxonomy-list .fb-taxonomy-count {
							background: #FAD6D9;
							padding: 6px 14px;
					}

					.${blockId} .fb-taxonomy-list .fb-taxonomy-item .fb-taxonomy-read-more-button {
							margin-top: 32px;
					}

					.${blockId}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button{
							padding: 6px 0px !important;
							background: transparent !important;
							border-top: 0 !important;
							border-left: 0 !important;
							border-right: 0 !important;
							border-bottom-width: 1px;
							border-bottom-style: solid;
							border-color: #0B0C0E !important;
							border-radius: inherit !important;
							transition: all .3s ease;
					}

					.${blockId}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-text{
							color: #0B0C0E !important;
					}

					.${blockId}.fb-taxonomy-style-2 .fb-taxonomy-list .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon{
						border: none !important;
						background-color: unset !important;
						padding: inherit !important;
					}

					.${blockId}.fb-taxonomy-style-2 .fb-taxonomy-list .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
							fill: #0B0C0E !important;
							transition: all .3s ease;
					}

					.${blockId}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover {
						border-color: #3991FF !important;
					}

					.${blockId}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-text{
						color: #3991FF !important;
					}

					.${blockId}.fb-taxonomy-style-2 .fb-taxonomy-list .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-icon svg{
						fill: #3991FF !important;
					}
					
					
					`
						: ""
				}
						

			/* style-1 specific styles for taxonomy item in grid */
			
			${
				premadeStyle === "style-1"
					? `
				.${blockId} .fb-taxonomy-grid {
					grid-template-columns: repeat(3, 1fr);
				}

				.${blockId} .fb-taxonomy-grid .fb-taxonomy-item {
					padding: 24px;
					border-radius: 10px;
				}
	
				.${blockId} .fb-taxonomy-grid  .fb-taxonomy-item .fb-taxonomy-link-count{
						gap: 42px;
				}

				
				.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link, .${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name{
					font-size: 24px;
					font-weight: 500;
				}
	
				.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-read-more-button {
					margin-top: 42px;
				}

				`
					: ""
			}

			

			/* style-2 specific styles for taxonomy item in grid */

			${
				premadeStyle === "style-2"
					? `

				.${blockId} .fb-taxonomy-grid {
					grid-template-columns: repeat(3, 1fr);
				}


				.${blockId}.fb-taxonomy-style-2 .fb-taxonomy-grid .fb-taxonomy-item {
					background: #FFFFFF;
					${
						postCategoryBorderRadiusDesktopWidth &&
						postCategoryBorderRadiusDesktop.top
							? ""
							: "border-radius: 20px;"
					}
					padding: 10px;
					padding-bottom: 24px;
					box-shadow: 0 8px 24px rgba(0, 0, 0, 0.02), 0 0px 6px rgba(0, 0, 0, 0.02);
				}
	
				.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-meta {
					height: 100%;
					background: #EBF4FF;
					padding: 24px;
						${
							postCategoryBorderRadiusDesktopWidth &&
							postCategoryBorderRadiusDesktop.top
								? ""
								: "border-radius: 10px;"
						}
				}

				.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link, .${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name{
					font-size: 32px;
					font-weight: 600;
				}
	
				.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-read-more-button {
					margin-left: 14px;
					margin-top: 32px;
				}
				
				`
					: ""
			}

			
			/* Style-3 specific styles for image in grid */

				${
					premadeStyle === "style-3"
						? `

					.${blockId} .fb-taxonomy-grid {
						grid-template-columns: repeat(3, 1fr);
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item {
						position: relative;
						min-height: 300px;
						overflow: hidden;
						padding: 20px;
						border-radius: 8px;
					}
						

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-count{
						background: #FFFFFF;
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						z-index: 0;
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image:before{
						background: linear-gradient(45deg, rgba(0, 0, 0, .2), transparent);
						content: "";
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						z-index: 1;
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						vertical-align: middle;
						transition: transform 0.4s cubic-bezier(0.33, 0.04, 0.63, 0.99),
										filter 0.4s ease; /* Slightly longer duration for smoothness */
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item:hover .fb-taxonomy-image img{
						transform: scale(1.08) translateY(-8px);
						filter: brightness(1.05);
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link-count,
					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-meta{
						z-index: 2;
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link, .${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name {
						color: #FFFFFF;
						font-size: 24px;
						font-weight: 500;
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-description{
						color: #F7F7F7;
					}

					.${blockId}.fb-taxonomy-style-3 .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-read-more-button{
						width: 100%;
						border: solid;
						border-width: 1px;
						border-color: #FFFFFF4D;
						border-radius: 8px;
						background: transparent;
						backdrop-filter: blur(10px);
					}

					`
						: ""
				}

				${
					premadeStyle === "style-4"
						? `
						

					.${blockId} .fb-taxonomy-grid {
						grid-template-columns: repeat(2, 1fr);
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item {
						padding: 32px;
						border-radius: 14px;
						flex-direction: row !important;
						padding: 0 !important;
						overflow: hidden;
						box-shadow: 0 8px 24px rgba(0, 0, 0, 0.02), 0 0px 6px rgba(0, 0, 0, 0.02);
					}
						
					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-count{
						background: #F9F9F9;
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image-container{
						position: relative;
						overflow: hidden;
						width: 100%;
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-card-content{
						width: 100%;
						padding: 32px 24px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image-container .fb-taxonomy-image {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						z-index: 0;
					}


					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-image img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						vertical-align: middle;
						transition: transform 0.4s cubic-bezier(0.33, 0.04, 0.63, 0.99),
										filter 0.4s ease; /* Slightly longer duration for smoothness */
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item:hover .fb-taxonomy-image img{
						transform: scale(1.08) translateY(-8px);
						filter: brightness(1.05);
					}

					.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-read-more-button {
						margin-top: 32px;
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover{
							background-color: #F89B2E;
					}

					`
						: ""
				}



				/* Main block styles */

        .${blockId} {
            width: 100%;
        }


        .${blockId} .fb-taxonomy-grid {
            display: grid;
						${gridColumns.Desktop ? `
							grid-template-columns: repeat(${gridColumns.Desktop}, 1fr);
							` : ''}
							row-gap: ${gridRowGap.Desktop}${gridGapUnits.Desktop};
							column-gap: ${gridColumnGap.Desktop}${gridGapUnits.Desktop};							
        }


        .${blockId} .fb-taxonomy-grid .fb-taxonomy-item {
				 		${
							premadeStyle === "style-4"
								? `background: #FFFFFF;`
								: `
									${premadeStyle === "style-3" ? `background: #3991FF;` : "background: #EBF4FF;"}
								`
						}
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						word-break: break-all;
        }

				.${blockId} .fb_post_category_container .fb-taxonomy-item{
					transition: all 0.3s ease;
				}


				${
					premadeStyle === "style-2"
						? `

						.${blockId}.fb-taxonomy-style-2 .fb-taxonomy-grid .fb-taxonomy-item {					
						
								${
									postCategoryInnerPaddingDesktopWidth &&
									postCategoryPaddingDesktop.top
										? `
										padding: ${postCategoryInnerPaddingDesktopWidth};
									`
										: ""
								}
						
							${
								postCategoryPaddingDesktopWidth &&
								postCategoryPaddingDesktop.top
									? `padding-bottom: ${postCategoryPaddingDesktop.top}${postCategoryPaddingUnits.Desktop};`
									: ""
							}

						}				


						.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-meta{
						
								${
									postCategoryNormalBackgroundType === "gradient"
										? `  
															${
																postCategoryNormalCustomGradientSwitcher &&
																postCategoryNormalCustomGradientInputValue
																	? `background: ${postCategoryNormalCustomGradientInputValue};`
																	: `background: ${postCategoryNormalGradientColor};`
															}
													`
										: `
															${
																postCategoryNormalClassicColor
																	? `background: ${postCategoryNormalClassicColor};`
																	: ""
															}
													`
								}

								${
									postCategoryPaddingDesktopWidth &&
									postCategoryPaddingDesktop.top
										? `padding: ${postCategoryPaddingDesktopWidth};`
										: ""
								}

								  ${
										postCategoryBorderRadiusDesktopWidth &&
										postCategoryBorderRadiusDesktop.top
											? `border-radius: ${
													postCategoryBorderRadiusDesktop.top / 2
											  }${postCategoryBorderRadiusUnits.Desktop} ${
													postCategoryBorderRadiusDesktop.right / 2
											  }${postCategoryBorderRadiusUnits.Desktop} ${
													postCategoryBorderRadiusDesktop.bottom / 2
											  }${postCategoryBorderRadiusUnits.Desktop} ${
													postCategoryBorderRadiusDesktop.left / 2
											  }${postCategoryBorderRadiusUnits.Desktop};`
											: ""
									}

						}
					`
						: ""
				}



				  	.${blockId} .fb-taxonomy-grid .fb-taxonomy-item {

								${
									taxonomyHeight.Desktop
										? `min-height: ${taxonomyHeight.Desktop}${taxonomyHeightUnits.Desktop};`
										: ""
								}

                ${
									postCategoryNormalBackgroundType === "gradient"
										? `  
                    ${
											postCategoryNormalCustomGradientSwitcher &&
											postCategoryNormalCustomGradientInputValue
												? `background: ${postCategoryNormalCustomGradientInputValue};`
												: `background: ${postCategoryNormalGradientColor};`
										}
                `
										: `
                    ${
											postCategoryNormalClassicColor
												? `background: ${postCategoryNormalClassicColor};`
												: ""
										}
                `
								}

								${
									postCategoryPaddingDesktopWidth &&
									postCategoryPaddingDesktop.top
										? `padding: ${postCategoryPaddingDesktopWidth};`
										: ""
								}
								${
									postCategoryMarginDesktopWidth &&
									postCategoryMarginDesktop.top
										? `margin: ${postCategoryMarginDesktopWidth};`
										: ""
								}

								${postCategoryBorder ? `border: ${postCategoryBorder};` : ""}
								${
									postCategoryBorderDesktopWidth &&
									postCategoryBorderDesktop.top
										? `border-width: ${postCategoryBorderDesktopWidth};`
										: ""
								}
								${
									postCategoryBorderRadiusDesktopWidth &&
									postCategoryBorderRadiusDesktop.top
										? `border-radius: ${postCategoryBorderRadiusDesktopWidth};`
										: ""
								}
								${postCategoryBorderColor ? `border-color: ${postCategoryBorderColor};` : ""}
            		${
									postCategoryBoxShadowCssValue
										? `box-shadow: ${postCategoryBoxShadowCssValue};`
										: ""
								}
								
                transition: background-color 0.3s ease, border-color 0.3s ease;
            }

            .${blockId} .fb-taxonomy-grid .fb-taxonomy-item:hover {
                ${
									postCategoryHoverBackgroundType === "gradient"
										? `  
                    ${
											postCategoryHoverCustomGradientSwitcher &&
											postCategoryHoverCustomGradientInputValue
												? `background: ${postCategoryHoverCustomGradientInputValue};`
												: `background: ${postCategoryHoverGradientColor};`
										}
                `
										: `
                    ${
											postCategoryHoverClassicColor
												? `background: ${postCategoryHoverClassicColor};`
												: ""
										}
                `
								}
								${
									postCategoryBorderHoverColor
										? `border-color: ${postCategoryBorderHoverColor};`
										: ""
								}
            		${
									postCategoryBoxShadowHoverCssValue
										? `box-shadow: ${postCategoryBoxShadowHoverCssValue};`
										: ""
								}
            }

			${
				premadeStyle === "style-4"
					? `
				.${blockId}.fb-taxonomy-style-4 .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-card-content{
					${
						postCategoryPaddingDesktopWidth && postCategoryPaddingDesktop.top
							? `padding: ${postCategoryPaddingDesktopWidth};`
							: ""
					}
				}
			`
					: ""
			}



			.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link, .${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name {

			
            ${postTitleColor ? `color: ${postTitleColor};` : ""}

            ${
							postTitleGlobalTypoSwitcher.fontFamily === true &&
							postTitleGlobalTypographyData.fontFamily
								? `font-family: ${postTitleGlobalTypographyData.fontFamily};`
								: ""
						}
            ${
							postTitleGlobalTypoSwitcher.fontSize === true &&
							postTitleGlobalTypographyData.fontSize
								? `font-size: ${postTitleGlobalTypographyData.fontSize};`
								: ""
						}
            ${
							postTitleGlobalTypoSwitcher.fontWeight === true &&
							postTitleGlobalTypographyData.fontWeight
								? `font-weight: ${postTitleGlobalTypographyData.fontWeight};`
								: ""
						}
            ${
							postTitleGlobalTypoSwitcher.fontStyle === true &&
							postTitleGlobalTypographyData.fontStyle
								? `font-style: ${postTitleGlobalTypographyData.fontStyle};`
								: ""
						}
            ${
							postTitleGlobalTypoSwitcher.textTransform === true &&
							postTitleGlobalTypographyData.textTransform
								? `text-transform: ${postTitleGlobalTypographyData.textTransform};`
								: ""
						}
            ${
							postTitleGlobalTypoSwitcher.textDecoration === true &&
							postTitleGlobalTypographyData.textDecoration
								? `text-decoration: ${postTitleGlobalTypographyData.textDecoration};`
								: ""
						}
            ${
							postTitleGlobalTypoSwitcher.letterSpacing === true &&
							postTitleGlobalTypographyData.letterSpacing
								? `letter-spacing: ${postTitleGlobalTypographyData.letterSpacing};`
								: ""
						}
            ${
							postTitleGlobalTypoSwitcher.lineHeight === true &&
							postTitleGlobalTypographyData.lineHeight
								? `line-height: ${postTitleGlobalTypographyData.lineHeight};`
								: ""
						}

						${
							postTitleGlobalTypoSwitcher.fontFamily === false &&
							postTitleFontFamily
								? `font-family: ${postTitleFontFamily};`
								: ""
						}
						${
							postTitleGlobalTypoSwitcher.fontSize === false &&
							postTitleFontSize.Desktop
								? `font-size: ${postTitleFontSize.Desktop}${postTitleFontSizeUnits.Desktop};`
								: ""
						}
						${
							postTitleGlobalTypoSwitcher.fontWeight === false &&
							postTitleFontWeight
								? `font-weight: ${postTitleFontWeight};`
								: ""
						}
						${
							postTitleGlobalTypoSwitcher.fontStyle === false &&
							postTitleFontStyle
								? `font-style: ${postTitleFontStyle};`
								: ""
						}
						${
							postTitleGlobalTypoSwitcher.textTransform === false &&
							postTitleTextTransform
								? `text-transform: ${postTitleTextTransform};`
								: ""
						}
						${
							postTitleGlobalTypoSwitcher.textDecoration === false &&
							postTitleTextDecoration
								? `text-decoration: ${postTitleTextDecoration};`
								: ""
						}
						${
							postTitleGlobalTypoSwitcher.letterSpacing === false &&
							postTitleLetterSpacing.Desktop
								? `letter-spacing: ${postTitleLetterSpacing.Desktop}${postTitleLetterSpacingUnits.Desktop};`
								: ""
						}
						${
							postTitleGlobalTypoSwitcher.lineHeight === false &&
							postTitleLineHeight.Desktop
								? `line-height: ${postTitleLineHeight.Desktop}${postTitleLineHeightUnits.Desktop};`
								: ""
						}
			}

			

				.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link:hover, .${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name:hover {
					${postTitleHoverColor ? `color: ${postTitleHoverColor};` : ""}
				}


				.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-description{
						${postDescriptionColor ? `color: ${postDescriptionColor};` : ""}

            ${
							postDescriptionGlobalTypoSwitcher.fontFamily === true &&
							postDescriptionGlobalTypographyData.fontFamily
								? `font-family: ${postDescriptionGlobalTypographyData.fontFamily};`
								: ""
						}
${
	postDescriptionGlobalTypoSwitcher.fontSize === true &&
	postDescriptionGlobalTypographyData.fontSize
		? `font-size: ${postDescriptionGlobalTypographyData.fontSize};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.fontWeight === true &&
	postDescriptionGlobalTypographyData.fontWeight
		? `font-weight: ${postDescriptionGlobalTypographyData.fontWeight};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.fontStyle === true &&
	postDescriptionGlobalTypographyData.fontStyle
		? `font-style: ${postDescriptionGlobalTypographyData.fontStyle};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.textTransform === true &&
	postDescriptionGlobalTypographyData.textTransform
		? `text-transform: ${postDescriptionGlobalTypographyData.textTransform};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.textDecoration === true &&
	postDescriptionGlobalTypographyData.textDecoration
		? `text-decoration: ${postDescriptionGlobalTypographyData.textDecoration};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.letterSpacing === true &&
	postDescriptionGlobalTypographyData.letterSpacing
		? `letter-spacing: ${postDescriptionGlobalTypographyData.letterSpacing};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.lineHeight === true &&
	postDescriptionGlobalTypographyData.lineHeight
		? `line-height: ${postDescriptionGlobalTypographyData.lineHeight};`
		: ""
}

${
	postDescriptionGlobalTypoSwitcher.fontFamily === false &&
	postDescriptionFontFamily
		? `font-family: ${postDescriptionFontFamily};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.fontSize === false &&
	postDescriptionFontSize.Desktop
		? `font-size: ${postDescriptionFontSize.Desktop}${postDescriptionFontSizeUnits.Desktop};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.fontWeight === false &&
	postDescriptionFontWeight
		? `font-weight: ${postDescriptionFontWeight};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.fontStyle === false &&
	postDescriptionFontStyle
		? `font-style: ${postDescriptionFontStyle};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.textTransform === false &&
	postDescriptionTextTransform
		? `text-transform: ${postDescriptionTextTransform};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.textDecoration === false &&
	postDescriptionTextDecoration
		? `text-decoration: ${postDescriptionTextDecoration};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.letterSpacing === false &&
	postDescriptionLetterSpacing.Desktop
		? `letter-spacing: ${postDescriptionLetterSpacing.Desktop}${postDescriptionLetterSpacingUnits.Desktop};`
		: ""
}
${
	postDescriptionGlobalTypoSwitcher.lineHeight === false &&
	postDescriptionLineHeight.Desktop
		? `line-height: ${postDescriptionLineHeight.Desktop}${postDescriptionLineHeightUnits.Desktop};`
		: ""
}



						${
							postDescriptionSpacing.Desktop
								? `margin-top: ${postDescriptionSpacing.Desktop}${postDescriptionSpacingUnits.Desktop};`
								: ""
						}

				}
 
					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-description:hover{
							${postDescriptionHoverColor ? `color: ${postDescriptionHoverColor};` : ""}
					}

						.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count {
							${
								postCountSpacing.Desktop
									? `gap: ${postCountSpacing.Desktop}${postCountSpacingUnits.Desktop};`
									: ""
							}
						}


						.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count .fb-taxonomy-count{
						
							${postCountColor ? `color: ${postCountColor};` : ""}

							${
								postCountGlobalTypoSwitcher.fontFamily === true &&
								postCountGlobalTypographyData.fontFamily
									? `font-family: ${postCountGlobalTypographyData.fontFamily};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.fontSize === true &&
								postCountGlobalTypographyData.fontSize
									? `font-size: ${postCountGlobalTypographyData.fontSize};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.fontWeight === true &&
								postCountGlobalTypographyData.fontWeight
									? `font-weight: ${postCountGlobalTypographyData.fontWeight};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.fontStyle === true &&
								postCountGlobalTypographyData.fontStyle
									? `font-style: ${postCountGlobalTypographyData.fontStyle};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.textTransform === true &&
								postCountGlobalTypographyData.textTransform
									? `text-transform: ${postCountGlobalTypographyData.textTransform};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.textDecoration === true &&
								postCountGlobalTypographyData.textDecoration
									? `text-decoration: ${posCounteGlobalTypographyData.textDecoration};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.letterSpacing === true &&
								postCountGlobalTypographyData.letterSpacing
									? `letter-spacing: ${postCountGlobalTypographyData.letterSpacing};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.lineHeight === true &&
								postCountGlobalTypographyData.lineHeight
									? `line-height: ${postCountGlobalTypographyData.lineHeight};`
									: ""
							}

							${
								postCountGlobalTypoSwitcher.fontFamily === false &&
								postCountFontFamily
									? `font-family: ${postCountFontFamily};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.fontSize === false &&
								postCountFontSize.Desktop
									? `font-size: ${postCountFontSize.Desktop}${postCountFontSizeUnits.Desktop};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.fontWeight === false &&
								postCountFontWeight
									? `font-weight: ${postCountFontWeight};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.fontStyle === false &&
								postCountFontStyle
									? `font-style: ${postCountFontStyle};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.textTransform === false &&
								postCountTextTransform
									? `text-transform: ${postCountTextTransform};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.textDecoration === false &&
								postCountTextDecoration
									? `text-decoration: ${postCountTextDecoration};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.letterSpacing === false &&
								postCountLetterSpacing.Desktop
									? `letter-spacing: ${postCountLetterSpacing.Desktop}${postCountLetterSpacingUnits.Desktop};`
									: ""
							}
							${
								postCountGlobalTypoSwitcher.lineHeight === false &&
								postCountLineHeight.Desktop
									? `line-height: ${postCountLineHeight.Desktop}${postCountLineHeightUnits.Desktop};`
									: ""
							}
							${
								postCountNormalBackgroundType === "gradient"
									? `
									${
										postCountNormalCustomGradientSwitcher &&
										postCountNormalCustomGradientInputValue
											? `background: ${postCountNormalCustomGradientInputValue};`
											: `background: ${postCountNormalGradientColor};`
									}
								`
									: `
									${
										postCountNormalClassicColor
											? `background: ${postCountNormalClassicColor};`
											: ""
									}
							`
							}

							${
								postCountPaddingDesktopWidth && postCountPaddingDesktop.top
									? `padding: ${postCountPaddingDesktopWidth};`
									: ""
							}

							${postCountBorder ? `border: ${postCountBorder};` : ""}
							${
								postCountBorderDesktopWidth && postCountBorderDesktop.top
									? `border-width: ${postCountBorderDesktopWidth};`
									: ""
							}
							${
								postCountBorderRadiusDesktopWidth &&
								postCountBorderRadiusDesktop.top
									? `border-radius: ${postCountBorderRadiusDesktopWidth};`
									: ""
							}
							${postCountBorderColor ? `border-color: ${postCountBorderColor};` : ""}
            	${
								postCountBoxShadowCssValue
									? `box-shadow: ${postCountBoxShadowCssValue};`
									: ""
							}
						
							transition: background-color .3s ease, border-color .3s ease;
						}


						.${blockId} .fb_post_category_container .fb-taxonomy-item:hover .fb-taxonomy-count{
							${postCountHoverColor ? `color: ${postCountHoverColor};` : ""}
							${
								postCountHoverBackgroundType === "gradient"
									? `  
							${
								postCountHoverCustomGradientSwitcher &&
								postCountHoverCustomGradientInputValue
									? `background: ${postCountHoverCustomGradientInputValue};`
									: `background: ${postCountHoverGradientColor};`
							}
							`
									: `
									${
										postCountHoverClassicColor
											? `background: ${postCountHoverClassicColor};`
											: ""
									}
							`
							}
							${
								postCountBorderHoverColor
									? `border-color: ${postCountBorderHoverColor};`
									: ""
							}
            	${
								postCountBoxShadowHoverCssValue
									? `box-shadow: ${postCountBoxShadowHoverCssValue};`
									: ""
							}
						}




					.${blockId}.fb-post-category-area .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button {

						${
							buttonWidth.Desktop && buttonWidthUnits.Desktop
								? `width: ${buttonWidth.Desktop}${buttonWidthUnits.Desktop};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.fontFamily === true &&
							buttonGlobalTypographyData.fontFamily
								? `font-family: ${buttonGlobalTypographyData.fontFamily};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.fontSize === true &&
							buttonGlobalTypographyData.fontSize
								? `font-size: ${buttonGlobalTypographyData.fontSize};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.fontWeight === true &&
							buttonGlobalTypographyData.fontWeight
								? `font-weight: ${buttonGlobalTypographyData.fontWeight};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.fontStyle === true &&
							buttonGlobalTypographyData.fontStyle
								? `font-style: ${buttonGlobalTypographyData.fontStyle};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.textTransform === true &&
							buttonGlobalTypographyData.textTransform
								? `text-transform: ${buttonGlobalTypographyData.textTransform};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.textDecoration === true &&
							buttonGlobalTypographyData.textDecoration
								? `text-decoration: ${buttonGlobalTypographyData.textDecoration};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.letterSpacing === true &&
							buttonGlobalTypographyData.letterSpacing
								? `letter-spacing: ${buttonGlobalTypographyData.letterSpacing};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.lineHeight === true &&
							buttonGlobalTypographyData.lineHeight
								? `line-height: ${buttonGlobalTypographyData.lineHeight};`
								: ""
						}
						
						${
							buttonGlobalTypoSwitcher.fontFamily === false &&
							buttonFontFamily &&
							buttonFontFamily !== "Default"
								? `font-family: ${buttonFontFamily};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.fontSize === false &&
							buttonFontSize.Desktop &&
							buttonFontSizeUnits.Desktop
								? `font-size: ${buttonFontSize.Desktop}${buttonFontSizeUnits.Desktop};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.fontWeight === false && buttonFontWeight
								? `font-weight: ${buttonFontWeight};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.fontStyle === false && buttonFontStyle
								? `font-style: ${buttonFontStyle};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.textTransform === false &&
							buttonTextTransform
								? `text-transform: ${buttonTextTransform};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.textDecoration === false &&
							buttonTextDecoration
								? `text-decoration: ${buttonTextDecoration};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.letterSpacing === false &&
							buttonLetterSpacing.Desktop &&
							buttonLetterSpacingUnits.Desktop
								? `letter-spacing: ${buttonLetterSpacing.Desktop}${buttonLetterSpacingUnits.Desktop};`
								: ""
						}
						${
							buttonGlobalTypoSwitcher.lineHeight === false &&
							buttonLineHeight.Desktop &&
							buttonLineHeightUnits.Desktop
								? `line-height: ${buttonLineHeight.Desktop}${buttonLineHeightUnits.Desktop};`
								: ""
						}
						${buttonBgColor ? `background-color: ${buttonBgColor};` : ""}

						${buttonBorder ? `border: ${buttonBorder};` : ""}
						${
							buttonDesktopBorderWidthStr && buttonDesktopBorderWidth?.top
								? `border-width: ${buttonDesktopBorderWidthStr};`
								: ""
						}
						${
							buttonDesktopBorderRadiusStr &&
							buttonDesktopBorderRadiusWidth?.top
								? `border-radius: ${buttonDesktopBorderRadiusStr};`
								: ""
						}
						${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ""}
						${buttonBoxShadowCssValue ? `box-shadow: ${buttonBoxShadowCssValue};` : ""} 
						${
							buttonDesktopPaddingStr && buttonDesktopPadding?.top
								? `padding: ${buttonDesktopPaddingStr};`
								: ""
						}
						${
							buttonDesktopMarginStr && buttonDesktopMargin?.top
								? `margin: ${buttonDesktopMarginStr};`
								: ""
						}

						${
							buttonIconGapSize.Desktop
								? `gap: ${buttonIconGapSize.Desktop}${buttonIconGapUnits.Desktop};`
								: ""
						}
						
						transition: all 0.3s ease;
					}


					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover{
						${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : ""}
						${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ""}
							${
								buttonBoxShadowHoverCssValue
									? `box-shadow: ${buttonBoxShadowHoverCssValue};`
									: ""
							}
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-text{
							${buttonColor ? `color: ${buttonColor};` : ""}
							transition: all 0.3s ease;
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-text {
						${buttonHoverColor ? `color: ${buttonHoverColor};` : ""}
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon {
						${buttonIconBgColor ? `background-color: ${buttonIconBgColor};` : ""}
						${buttonIconBorder ? `border: ${buttonIconBorder};` : ""}
						${buttonIconBorderColor ? `border-color: ${buttonIconBorderColor};` : ""}
						${
							buttonIconBorderDesktopWidth !== buttonIconBorderDesktop.top
								? `border-width: ${buttonIconBorderDesktopWidth};`
								: ""
						}
						${
							buttonIconBorderRadiusDesktopWidth !==
							buttonIconBorderRadiusDesktop.top
								? `border-radius: ${buttonIconBorderRadiusDesktopWidth};`
								: ""
						}
						${
							buttonIconDesktopPaddingStr && buttonIconDesktopPadding?.top
								? `padding: ${buttonIconDesktopPaddingStr}`
								: ""
						}
					}
					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-icon-wrapper {
						${buttonIconBgHoverColor ? `background-color: ${buttonIconBgHoverColor};` : ""}
						${
							buttonIconBorderHoverColor
								? `border-color: ${buttonIconBorderHoverColor};`
								: ""
						}
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
						${
							buttonIconSize.Desktop && buttonIconSizeUnits.Desktop
								? `width: ${buttonIconSize.Desktop}${buttonIconSizeUnits.Desktop};`
								: ""
						}
						${
							buttonIconSize.Desktop && buttonIconSizeUnits.Desktop
								? `height: ${buttonIconSize.Desktop}${buttonIconSizeUnits.Desktop};`
								: ""
						}
						${buttonIconColor ? `fill: ${buttonIconColor};` : ""}
						${
							buttonIconRotate.Desktop
								? `transform: rotate(${buttonIconRotate.Desktop}deg);`
								: ""
						}
						transition: all .3s ease-in-out;
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-icon svg{
						${buttonIconHoverColor ? `fill: ${buttonIconHoverColor};` : ""}
						${
							buttonIconRotateHover.Desktop
								? `transform: rotate(${buttonIconRotateHover.Desktop}deg);`
								: ""
						}
					}



					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image{
							${
								buttonIconImageWidth
									? `width: ${buttonIconImageWidth.Desktop}${buttonIconImageWidthUnits.Desktop};`
									: ""
							}
							${
								buttonIconImageHeight
									? `height: ${buttonIconImageHeight.Desktop}${buttonIconImageHeightUnits.Desktop};`
									: ""
							}
							${
								buttonImageRotate.Desktop
									? `transform: rotate(${buttonImageRotate.Desktop}deg);`
									: ""
							}
							transition: all .3s ease-in-out;
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-icon-image {
							${
								buttonImageRotateHover.Desktop
									? `transform: rotate(${buttonImageRotateHover.Desktop}deg);`
									: ""
							}
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image img{
							${readMoreIconImagedisplay ? `object-fit: ${readMoreIconImagedisplay};` : ""}
					}
					


        /* List Layout Styles - Desktop  */

				${ layoutType === "list" &&
					premadeStyle === "style-1"
						? `

					.${blockId}.fb-taxonomy-style-1 .fb-taxonomy-list {
						list-style: ${
							listStyle === "bullet"
								? "disc"
								: listStyle === "number"
								? "decimal"
								: "none"
						};

						${listStyle === "none" ? `padding-left: 0px;` : ""}

					}

					`
						: ""
				}


				${ layoutType === "list" &&
					premadeStyle === "style-2"
						? `
						.${blockId} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"]{
							${postListTypeColor ? `border-color: ${postListTypeColor};` : ""}
						}


						${buttonBgColor ? `
							.${blockId}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button{
								border-color: ${buttonBgColor} !important;
							}
							.${blockId}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-text{
									color: ${buttonBgColor} !important;
							}
							.${blockId}.fb-taxonomy-style-2 .fb-taxonomy-list .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
									fill: ${buttonBgColor} !important;
							}

							` : ""}

						${buttonBgHoverColor ? `
							.${blockId}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover {
								border-color: ${buttonBgHoverColor} !important;
							}
							.${blockId}.fb-taxonomy-style-2 .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-text{
								color: ${buttonBgHoverColor} !important;
							}
							.${blockId}.fb-taxonomy-style-2 .fb-taxonomy-list .fb_taxonomy_sublist .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-icon svg{
								fill: ${buttonBgHoverColor} !important;
							}
						
						` : ""}


					`
						: ""
				}


				.${blockId} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"] {
						${
							postListItemSpacing.Desktop
								? `
						margin-bottom: ${postListItemSpacing.Desktop}${postListItemSpacingUnits.Desktop};
					`
								: ""
						}
				}
			
				.${blockId} .fb_taxonomy_sublist {
					${
						postListItemSpacing.Desktop
							? `
							padding-top: ${postListItemSpacing.Desktop}${postListItemSpacingUnits.Desktop};
							padding-bottom: ${postListItemSpacing.Desktop}${postListItemSpacingUnits.Desktop};
							gap: ${postListItemSpacing.Desktop}${postListItemSpacingUnits.Desktop}; 
						`
							: ""
					}
				}


        .${blockId} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id] {
						${
							listIndentation.Desktop
								? `padding-left: ${listIndentation.Desktop}${listIndentationUnits.Desktop};`
								: ""
						}
						transition: all .3s ease;
        }


				.${blockId} .fb-taxonomy-list .fb-taxonomy-item::marker{
						${postListTypeColor ? `color: ${postListTypeColor};` : ""}
							 ${
									postTitleGlobalTypoSwitcher.fontSize === true &&
									postTitleGlobalTypographyData.fontSize
										? `font-size: ${postTitleGlobalTypographyData.fontSize};`
										: ""
								}
						${
							postTitleGlobalTypoSwitcher.fontSize === false &&
							postTitleFontSize.Desktop
								? `font-size: ${postTitleFontSize.Desktop}${postTitleFontSizeUnits.Desktop};`
								: ""
						}
						transition: all .3s ease-in-out;
				}

				.${blockId} .fb-taxonomy-list .fb-taxonomy-item:hover::marker{
					${postListTypeHoverColor ? `color: ${postListTypeHoverColor};` : ""}
				}

				.${blockId} .fb-taxonomy-list .fb-taxonomy-item .fb-tax-separator{
						${
							separatorWidth.Desktop && separatorWidthUnits.Desktop
								? `width: ${separatorWidth.Desktop}${separatorWidthUnits.Desktop};`
								: ""
						}
						${separatorStyle ? `border-top-style: ${separatorStyle};` : ""}
						${
							separatorThickness.Desktop && separatorThicknessUnits.Desktop
								? `border-top-width: ${separatorThickness.Desktop}${separatorThicknessUnits.Desktop};`
								: ""
						}
						${separatorColor ? `border-color: ${separatorColor};` : ""}

						transition: all .3s ease;
				}

				.${blockId} .fb-taxonomy-list .fb-taxonomy-item:hover .fb-tax-separator{
						${separatorHoverColor ? `border-color: ${separatorHoverColor};` : ""}
				}


				/* Advance Control Global Style */
				.${blockId}.fb-post-category-area {
			   ${postCategoryPositionType === "default" ? `position: relative;` : ""}
            ${
							postCategoryPositionType !== "default" &&
							postCategoryPositionType !== "relative"
								? `width: 100%;`
								: ""
						}
            ${
							postCategoryPositionType !== "default"
								? `position: ${postCategoryPositionType};`
								: ""
						}
            ${
							postCategoryPositionType !== "default" &&
							postCategoryPositionType !== "relative" &&
							postCategoryHZOrientationType === "left" &&
							postCategoryHZLeftOffset.Desktop !== undefined
								? `left: ${postCategoryHZLeftOffset.Desktop}${postCategoryHZLeftOffsetUnits.Desktop};`
								: ""
						}
            ${
							postCategoryPositionType !== "default" &&
							postCategoryPositionType !== "relative" &&
							postCategoryHZOrientationType === "right" &&
							postCategoryHZRightOffset.Desktop !== undefined
								? `right: ${postCategoryHZRightOffset.Desktop}${postCategoryHZRightOffsetUnits.Desktop};`
								: ""
						}
            ${
							postCategoryPositionType !== "default" &&
							postCategoryPositionType !== "relative" &&
							postCategoryVROrientationType === "top" &&
							postCategoryVRTopOffset.Desktop !== undefined
								? `top: ${postCategoryVRTopOffset.Desktop}${postCategoryVRTopOffsetUnits.Desktop};`
								: ""
						}
            ${
							postCategoryPositionType !== "default" &&
							postCategoryPositionType !== "relative" &&
							postCategoryVROrientationType === "bottom" &&
							postCategoryVRBottomOffset.Desktop !== undefined
								? `bottom: ${postCategoryVRBottomOffset.Desktop}${postCategoryVRBottomOffsetUnits.Desktop};`
								: ""
						}


					${postGlobalZIndex.Desktop ? `z-index: ${postGlobalZIndex.Desktop};` : ""}

				
				}

				.${blockId}.fb-post-category-area  {
						${
							postGlobalDesktopPaddingWidth && postGlobalPaddingDesktop.top
								? `padding: ${postGlobalDesktopPaddingWidth};`
								: ""
						}
						${
							postGlobalDesktopMarginWidth && postGlobalMarginDesktop.top
								? `margin: ${postGlobalDesktopMarginWidth};`
								: ""
						}

						${postGlobalBorder ? `border: ${postGlobalBorder};` : ""} 
            ${
							postGlobalDesktopBorderWidth && postGlobalBorderDesktop.top
								? `border-width: ${postGlobalDesktopBorderWidth};`
								: ""
						}
            ${
							postGlobalDesktopBorderRadiusWidth &&
							postGlobalBorderRadiusDesktop.top
								? `border-radius: ${postGlobalDesktopBorderRadiusWidth}!important;`
								: ""
						}
            ${
							postGlobalBorderColor
								? `border-color: ${postGlobalBorderColor};`
								: ""
						}
            ${
							postGlobalBoxShadowCssValue
								? `box-shadow: ${postGlobalBoxShadowCssValue};`
								: ""
						}
						${
							postGlobalNormalBackgroundType === "gradient"
								? `  
                ${
									postGlobalNormalCustomGradientSwitcher &&
									postGlobalNormalCustomGradientInputValue
										? `background: ${postGlobalNormalCustomGradientInputValue};`
										: `background: ${postGlobalNormalGradientColor};`
								}
            `
								: `
                ${
									postGlobalNormalClassicColor
										? `background: ${postGlobalNormalClassicColor};`
										: ""
								}
            `
						}

						${
							postCategoryOverflow !== "default"
								? `overflow: ${postCategoryOverflow};`
								: ""
						}

						transition: all 0.3s ease-in-out;
				}

				.${blockId}.fb-post-category-area:hover {
						  ${
								postGlobalHoverBackgroundType === "gradient"
									? `  
                ${
									postGlobalHoverCustomGradientSwitcher &&
									postGlobalHoverCustomGradientInputValue
										? `background: ${postGlobalHoverCustomGradientInputValue};`
										: `background: ${postGlobalHoverGradientColor};`
								}
            `
									: `
                ${
									postGlobalHoverClassicColor
										? `background: ${postGlobalHoverClassicColor};`
										: ""
								}
								  ${
										postGlobalBorderHoverColor
											? `border-color: ${postGlobalBorderHoverColor};`
											: ""
									}
                ${
									postGlobalBoxShadowHoverCssValue
										? `box-shadow: ${postGlobalBoxShadowHoverCssValue};`
										: ""
								}
            `
							}
				}


        /* ===================== Tablet device ===================== */

        @media only screen and (max-width: 1024px) {

						/* grid layout - Tablet */ 
						.${blockId} .fb-taxonomy-grid {
                grid-template-columns: repeat(${gridColumns.Tablet}, 1fr);
                row-gap: ${gridRowGap.Tablet}${gridGapUnits.Tablet};
                column-gap: ${gridColumnGap.Tablet}${gridGapUnits.Tablet};
            }


						.${blockId} .fb-taxonomy-grid .fb-taxonomy-item {

								${
									taxonomyHeight.Tablet
										? `min-height: ${taxonomyHeight.Tablet}${taxonomyHeightUnits.Tablet};`
										: ""
								}
							 ${
									postCategoryPaddingTabletWidth &&
									postCategoryPaddingTablet.top
										? `padding: ${postCategoryPaddingTabletWidth};`
										: ""
								}
													${
														postCategoryMarginTabletWidth &&
														postCategoryMarginTablet.top
															? `margin: ${postCategoryMarginTabletWidth};`
															: ""
													}
						
													${
														postCategoryBorderTabletWidth &&
														postCategoryBorderTablet.top
															? `border-width: ${postCategoryBorderTabletWidth};`
															: ""
													}
													${
														postCategoryBorderRadiusTabletWidth &&
														postCategoryBorderRadiusTablet.top
															? `border-radius: ${postCategoryBorderRadiusTabletWidth};`
															: ""
													}
											
						}


						${
							premadeStyle === "style-2"
								? `

								.${blockId}.fb-taxonomy-style-2 .fb-taxonomy-grid .fb-taxonomy-item {			

																${
																	postCategoryInnerPaddingTabletWidth &&
																	postCategoryPaddingTablet.top
																		? `
										padding: ${postCategoryInnerPaddingTabletWidth};
									`
																		: ""
																}
								
									${
										postCategoryPaddingTabletWidth &&
										postCategoryPaddingTablet.top
											? `padding-bottom: ${postCategoryPaddingTablet.top}${postCategoryPaddingUnits.Tablet};`
											: ""
									}
								}

								.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-meta{

										${
											postCategoryPaddingTabletWidth &&
											postCategoryPaddingTablet.top
												? `padding: ${postCategoryPaddingTabletWidth};`
												: ""
										}

										 ${
												postCategoryBorderRadiusTabletWidth &&
												postCategoryBorderRadiusTablet.top
													? `border-radius: ${
															postCategoryBorderRadiusTablet.top / 2
													  }${postCategoryBorderRadiusUnits.Tablet} ${
															postCategoryBorderRadiusTablet.right / 2
													  }${postCategoryBorderRadiusUnits.Tablet} ${
															postCategoryBorderRadiusTablet.bottom / 2
													  }${postCategoryBorderRadiusUnits.Tablet} ${
															postCategoryBorderRadiusTablet.left / 2
													  }${postCategoryBorderRadiusUnits.Tablet};`
													: ""
											}

								}
							`
								: ""
						}						


							${
								premadeStyle === "style-4"
									? `
								.${blockId}.fb-taxonomy-style-4 .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-card-content{
									${
										postCategoryPaddingTabletWidth &&
										postCategoryPaddingTablet.top
											? `padding: ${postCategoryPaddingTabletWidth};`
											: ""
									}
								}
							`
									: ""
							}



						.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link, .${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name {
							  ${
									postTitleGlobalTypoSwitcher.fontSize === false &&
									postTitleFontSize.Tablet
										? `font-size: ${postTitleFontSize.Tablet}${postTitleFontSizeUnits.Tablet};`
										: ""
								}
                ${
									postTitleGlobalTypoSwitcher.letterSpacing === false &&
									postTitleLetterSpacing.Tablet
										? `letter-spacing: ${postTitleLetterSpacing.Tablet}${postTitleLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									postTitleGlobalTypoSwitcher.lineHeight === false &&
									postTitleLineHeight.Tablet
										? `line-height: ${postTitleLineHeight.Tablet}${postTitleLineHeightUnits.Tablet};`
										: ""
								}
						}


						.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-description{
								 ${
										postDescriptionGlobalTypoSwitcher.fontSize === false &&
										postDescriptionFontSize.Tablet
											? `font-size: ${postDescriptionFontSize.Tablet}${postDescriptionFontSizeUnits.Tablet};`
											: ""
									}
                ${
									postDescriptionGlobalTypoSwitcher.letterSpacing === false &&
									postDescriptionLetterSpacing.Tablet
										? `letter-spacing: ${postDescriptionLetterSpacing.Tablet}${postDescriptionLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									postDescriptionGlobalTypoSwitcher.lineHeight === false &&
									postDescriptionLineHeight.Tablet
										? `line-height: ${postDescriptionLineHeight.Tablet}${postDescriptionLineHeightUnits.Tablet};`
										: ""
								}

								${
									postDescriptionSpacing.Tablet
										? `margin-top: ${postDescriptionSpacing.Tablet}${postDescriptionSpacingUnits.Tablet};`
										: ""
								}
						}

						.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count {
							${
								postCountSpacing.Tablet
									? `gap: ${postCountSpacing.Tablet}${postCountSpacingUnits.Tablet};`
									: ""
							}
						}


						.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count .fb-taxonomy-count{
							 ${
									postCountGlobalTypoSwitcher.fontSize === false &&
									postCountFontSize.Tablet
										? `font-size: ${postCountFontSize.Tablet}${postCountFontSizeUnits.Tablet};`
										: ""
								}
                ${
									postCountGlobalTypoSwitcher.letterSpacing === false &&
									postCountLetterSpacing.Tablet
										? `letter-spacing: ${postCountLetterSpacing.Tablet}${postCountLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									postCountGlobalTypoSwitcher.lineHeight === false &&
									postCountLineHeight.Tablet
										? `line-height: ${postCountLineHeight.Tablet}${postCountLineHeightUnits.Tablet};`
										: ""
								}

								${
									postCountPaddingTabletWidth && postCountPaddingTablet.top
										? `padding: ${postCountPaddingTabletWidth};`
										: ""
								}
								 ${
										postCountBorderTabletWidth && postCountBorderTablet.top
											? `border-width: ${postCountBorderTabletWidth};`
											: ""
									}
                ${
									postCountBorderRadiusTabletWidth &&
									postCountBorderRadiusTablet.top
										? `border-radius: ${postCountBorderRadiusTabletWidth};`
										: ""
								}
						}
					


						.${blockId}.fb-post-category-area .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button {
								${
									buttonWidth.Tablet && buttonWidthUnits.Tablet
										? `width: ${buttonWidth.Tablet}${buttonWidthUnits.Tablet};`
										: ""
								}
								${
									buttonGlobalTypoSwitcher.fontSize === false &&
									buttonFontSize.Tablet &&
									buttonFontSizeUnits.Tablet
										? `font-size: ${buttonFontSize.Tablet}${buttonFontSizeUnits.Tablet};`
										: ""
								}
                ${
									buttonGlobalTypoSwitcher.letterSpacing === false &&
									buttonLetterSpacing.Tablet &&
									buttonLetterSpacingUnits.Tablet
										? `letter-spacing: ${buttonLetterSpacing.Tablet}${buttonLetterSpacingUnits.Tablet};`
										: ""
								}
                ${
									buttonGlobalTypoSwitcher.lineHeight === false &&
									buttonLineHeight.Tablet &&
									buttonLineHeightUnits.Tablet
										? `line-height: ${buttonLineHeight.Tablet}${buttonLineHeightUnits.Tablet};`
										: ""
								}
								    ${
											buttonTabletBorderWidthStr && buttonTabBorderWidth?.top
												? `border-width: ${buttonTabletBorderWidthStr};`
												: ""
										}
                ${
									buttonTabletBorderRadiusStr && buttonTabBorderRadiusWidth?.top
										? `border-radius: ${buttonTabletBorderRadiusStr};`
										: ""
								}
								   ${
											buttonTabletPaddingStr && buttonTabPadding?.top
												? `padding: ${buttonTabletPaddingStr};`
												: ""
										}  
                ${
									buttonTabletMarginStr && buttonTabMargin?.top
										? `margin: ${buttonTabletMarginStr};`
										: ""
								} 

								${
									buttonIconGapSize.Tablet
										? `gap: ${buttonIconGapSize.Tablet}${buttonIconGapUnits.Tablet};`
										: ""
								}
					}

					.${blockId}.fb-post-category-area .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon{
							  ${
									buttonIconBorderTabletWidth !== buttonIconBorderTablet.top
										? `border-width: ${buttonIconBorderTabletWidth};`
										: ""
								}
                ${
									buttonIconBorderRadiusTabletWidth !==
									buttonIconBorderRadiusTablet.top
										? `border-radius: ${buttonIconBorderRadiusTabletWidth};`
										: ""
								}

								${
									buttonIconTabletPaddingStr && buttonIconTabPadding?.top
										? `padding: ${buttonIconTabletPaddingStr};`
										: ""
								}
					}

					.${blockId}.fb-post-category-area .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
							   ${
										buttonIconSize.Tablet && buttonIconSizeUnits.Tablet
											? `width: ${buttonIconSize.Tablet}${buttonIconSizeUnits.Tablet};`
											: ""
									}
                ${
									buttonIconSize.Tablet && buttonIconSizeUnits.Tablet
										? `height: ${buttonIconSize.Tablet}${buttonIconSizeUnits.Tablet};`
										: ""
								}
								${
									buttonIconRotate.Tablet
										? `transform: rotate(${buttonIconRotate.Tablet}deg);`
										: ""
								}
					}

					.${blockId}.fb-post-category-area .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-icon svg{
								${
									buttonIconRotateHover.Tablet
										? `transform: rotate(${buttonIconRotateHover.Tablet}deg);`
										: ""
								}
					}

					.${blockId}.fb-post-category-area .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image{
								  ${
										buttonIconImageWidth
											? `width: ${buttonIconImageWidth.Tablet}${buttonIconImageWidthUnits.Tablet};`
											: ""
									}
                ${
									buttonIconImageHeight
										? `height: ${buttonIconImageHeight.Tablet}${buttonIconImageHeightUnits.Tablet};`
										: ""
								}
								${
									buttonImageRotate.Tablet
										? `transform: rotate(${buttonImageRotate.Tablet}deg);`
										: ""
								}
					}

					.${blockId}.fb-post-category-area .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-icon-image{
						${
							buttonImageRotateHover.Tablet
								? `transform: rotate(${buttonImageRotateHover.Tablet}deg);`
								: ""
						}
					}


					/* List Layout Styles - Tablet */
						.${blockId} .fb-taxonomy-list .fb-taxonomy-item::marker{
								${
									postTitleGlobalTypoSwitcher.fontSize === false &&
									postTitleFontSize.Tablet
										? `font-size: ${postTitleFontSize.Tablet}${postTitleFontSizeUnits.Tablet};`
										: ""
								}
						}


					.${blockId} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id] {
								${
									listIndentation.Tablet
										? `padding-left: ${listIndentation.Tablet}${listIndentationUnits.Tablet};`
										: ""
								}
            }

				.${blockId} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"] {
						${
							postListItemSpacing.Tablet
								? `
									margin-bottom: ${postListItemSpacing.Tablet}${postListItemSpacingUnits.Tablet};
								`
								: ""
						}
				}
			
				.${blockId} .fb_taxonomy_sublist {
					${
						postListItemSpacing.Tablet
							? `
							padding-top: ${postListItemSpacing.Tablet}${postListItemSpacingUnits.Tablet};
							padding-bottom: ${postListItemSpacing.Tablet}${postListItemSpacingUnits.Tablet};
							gap: ${postListItemSpacing.Tablet}${postListItemSpacingUnits.Tablet}; 
						`
							: ""
					}
				}

					.${blockId} .fb-taxonomy-list .fb-taxonomy-item .fb-tax-separator{
						${
							separatorWidth.Tablet && separatorWidthUnits.Tablet
								? `width: ${separatorWidth.Tablet}${separatorWidthUnits.Tablet};`
								: ""
						}
						${
							separatorThickness.Tablet && separatorThicknessUnits.Tablet
								? `border-top-width: ${separatorThickness.Tablet}${separatorThicknessUnits.Tablet};`
								: ""
						}
					}
						
						/* Advance Control Global Style - Tablet */
						.${blockId}.fb-post-category-area {
								${
									postCategoryPositionType !== "default" &&
									postCategoryPositionType !== "relative" &&
									postCategoryHZOrientationType === "left" &&
									postCategoryHZLeftOffset.Tablet !== undefined
										? `left: ${postCategoryHZLeftOffset.Tablet}${postCategoryHZLeftOffsetUnits.Tablet};`
										: ""
								}
								${
									postCategoryPositionType !== "default" &&
									postCategoryPositionType !== "relative" &&
									postCategoryHZOrientationType === "right" &&
									postCategoryHZRightOffset.Tablet !== undefined
										? `right: ${postCategoryHZRightOffset.Tablet}${postCategoryHZRightOffsetUnits.Tablet};`
										: ""
								}
								${
									postCategoryPositionType !== "default" &&
									postCategoryPositionType !== "relative" &&
									postCategoryVROrientationType === "top" &&
									postCategoryVRTopOffset.Tablet !== undefined
										? `top: ${postCategoryVRTopOffset.Tablet}${postCategoryVRTopOffsetUnits.Tablet};`
										: ""
								}
								${
									postCategoryPositionType !== "default" &&
									postCategoryPositionType !== "relative" &&
									postCategoryVROrientationType === "bottom" &&
									postCategoryVRBottomOffset.Tablet !== undefined
										? `bottom: ${postCategoryVRBottomOffset.Tablet}${postCategoryVRBottomOffsetUnits.Tablet};`
										: ""
								}
								${postGlobalZIndex.Tablet ? `z-index: ${postGlobalZIndex.Tablet}` : ""}
						}
								
						.${blockId}.fb-post-category-area  {
								${
									postGlobalTabletPaddingWidth && postGlobalPaddingTablet.top
										? `padding: ${postGlobalTabletPaddingWidth};`
										: ""
								}
								${
									postGlobalTabletMarginWidth && postGlobalMarginTablet.top
										? `margin: ${postGlobalTabletMarginWidth};`
										: ""
								}

								${postGlobalBorder ? `border: ${postGlobalBorder};` : ""} 
                ${
									postGlobalTabletBorderWidth && postGlobalBorderTablet.top
										? `border-width: ${postGlobalTabletBorderWidth};`
										: ""
								}
                ${
									postGlobalTabletBorderRadiusWidth &&
									postGlobalBorderRadiusTablet.top
										? `border-radius: ${postGlobalTabletBorderRadiusWidth}!important;`
										: ""
								}

						}


						

				}
				
				/* ===================== Mobile device ===================== */

        @media only screen and (max-width: 767px) {
					
					/* Grid Layout Styles - Mobile */
					.${blockId} .fb-taxonomy-grid {
                grid-template-columns: repeat(${gridColumns.Mobile}, 1fr);
                row-gap: ${gridRowGap.Mobile}${gridGapUnits.Mobile};
                column-gap: ${gridColumnGap.Mobile}${gridGapUnits.Mobile};
        	}
					


				.${blockId} .fb-taxonomy-grid .fb-taxonomy-item {
						${
							taxonomyHeight.Mobile
								? `min-height: ${taxonomyHeight.Mobile}${taxonomyHeightUnits.Mobile};`
								: ""
						}
						${
							postCategoryPaddingMobileWidth && postCategoryPaddingMobile.top
								? `padding: ${postCategoryPaddingMobileWidth};`
								: ""
						}
						${
							postCategoryMarginMobileWidth && postCategoryMarginMobile.top
								? `margin: ${postCategoryMarginMobileWidth};`
								: ""
						}
						${
							postCategoryBorderMobileWidth && postCategoryBorderMobile.top
								? `border-width: ${postCategoryBorderMobileWidth};`
								: ""
						}
						${
							postCategoryBorderRadiusMobileWidth &&
							postCategoryBorderRadiusMobile.top
								? `border-radius: ${postCategoryBorderRadiusMobileWidth};`
								: ""
						}
				}

						${
							premadeStyle === "style-2"
								? `

								.${blockId}.fb-taxonomy-style-2 .fb-taxonomy-grid .fb-taxonomy-item {		
								
																${
																	postCategoryInnerPaddingMobileWidth &&
																	postCategoryPaddingMobile.top
																		? `
										padding: ${postCategoryInnerPaddingMobileWidth};
									`
																		: ""
																}
								
									${
										postCategoryPaddingMobileWidth &&
										postCategoryPaddingMobile.top
											? `padding-bottom: ${postCategoryPaddingMobile.top}${postCategoryPaddingUnits.Mobile};`
											: ""
									}
								}

								.${blockId} .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-meta{

										${
											postCategoryPaddingMobileWidth &&
											postCategoryPaddingMobile.top
												? `padding: ${postCategoryPaddingMobileWidth};`
												: ""
										}

										  ${
												postCategoryBorderRadiusMobileWidth &&
												postCategoryBorderRadiusMobile.top
													? `border-radius: ${
															postCategoryBorderRadiusMobile.top / 2
													  }${postCategoryBorderRadiusUnits.Mobile} ${
															postCategoryBorderRadiusMobile.right / 2
													  }${postCategoryBorderRadiusUnits.Mobile} ${
															postCategoryBorderRadiusMobile.bottom / 2
													  }${postCategoryBorderRadiusUnits.Mobile} ${
															postCategoryBorderRadiusMobile.left / 2
													  }${postCategoryBorderRadiusUnits.Mobile};`
													: ""
											}

								}
							`
								: ""
						}	


						${
							premadeStyle === "style-4"
								? `
								.${blockId}.fb-taxonomy-style-4 .fb-taxonomy-grid .fb-taxonomy-item .fb-taxonomy-card-content{
									${
										postCategoryPaddingMobileWidth &&
										postCategoryPaddingMobile.top
											? `padding: ${postCategoryPaddingMobileWidth};`
											: ""
									}
								}
							`
								: ""
						}



					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link, .${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link .fb-taxonomy-name  {

					  ${
							postTitleGlobalTypoSwitcher.fontSize === false &&
							postTitleFontSize.Mobile
								? `font-size: ${postTitleFontSize.Mobile}${postTitleFontSizeUnits.Mobile};`
								: ""
						}
						${
							postTitleGlobalTypoSwitcher.letterSpacing === false &&
							postTitleLetterSpacing.Mobile
								? `letter-spacing: ${postTitleLetterSpacing.Mobile}${postTitleLetterSpacingUnits.Mobile};`
								: ""
						}
						${
							postTitleGlobalTypoSwitcher.lineHeight === false &&
							postTitleLineHeight.Mobile
								? `line-height: ${postTitleLineHeight.Mobile}${postTitleLineHeightUnits.Mobile};`
								: ""
						}
					}


					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-description{
						 ${
								postDescriptionGlobalTypoSwitcher.fontSize === false &&
								postDescriptionFontSize.Mobile
									? `font-size: ${postDescriptionFontSize.Mobile}${postDescriptionFontSizeUnits.Mobile};`
									: ""
							}
                ${
									postDescriptionGlobalTypoSwitcher.letterSpacing === false &&
									postDescriptionLetterSpacing.Mobile
										? `letter-spacing: ${postDescriptionLetterSpacing.Mobile}${postDescriptionLetterSpacingUnits.Mobile};`
										: ""
								}
                ${
									postDescriptionGlobalTypoSwitcher.lineHeight === false &&
									postDescriptionLineHeight.Mobile
										? `line-height: ${postDescriptionLineHeight.Mobile}${postDescriptionLineHeightUnits.Mobile};`
										: ""
								}
								${
									postDescriptionSpacing.Mobile
										? `margin-top: ${postDescriptionSpacing.Mobile}${postDescriptionSpacingUnits.Mobile};`
										: ""
								}
					}

						.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count {
							${
								postCountSpacing.Mobile
									? `gap: ${postCountSpacing.Mobile}${postCountSpacingUnits.Mobile};`
									: ""
							}
						}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-link-count .fb-taxonomy-count{
						 ${
								postCountGlobalTypoSwitcher.fontSize === false &&
								postCountFontSize.Mobile
									? `font-size: ${postCountFontSize.Mobile}${postCountFontSizeUnits.Mobile};`
									: ""
							}
                ${
									postCountGlobalTypoSwitcher.letterSpacing === false &&
									postCountLetterSpacing.Mobile
										? `letter-spacing: ${postCountLetterSpacing.Mobile}${postCountLetterSpacingUnits.Mobile};`
										: ""
								}
                ${
									postCountGlobalTypoSwitcher.lineHeight === false &&
									postCountLineHeight.Mobile
										? `line-height: ${postCountLineHeight.Mobile}${postCountLineHeightUnits.Mobile};`
										: ""
								}
								
							${
								postCountPaddingMobileWidth && postCountPaddingMobile.top
									? `padding: ${postCountPaddingMobileWidth};`
									: ""
							}
							 ${
									postCountBorderMobileWidth && postCountBorderMobile.top
										? `border-width: ${postCountBorderMobileWidth};`
										: ""
								}
                ${
									postCountBorderRadiusMobileWidth &&
									postCountBorderRadiusMobile.top
										? `border-radius: ${postCountBorderRadiusMobileWidth};`
										: ""
								}
					}


					.${blockId}.fb-post-category-area .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button {
						${
							buttonWidth.Mobile && buttonWidthUnits.Mobile
								? `width: ${buttonWidth.Mobile}${buttonWidthUnits.Mobile};`
								: ""
						}
						                ${
															buttonGlobalTypoSwitcher.fontSize === false &&
															buttonFontSize.Mobile &&
															buttonFontSizeUnits.Mobile
																? `font-size: ${buttonFontSize.Mobile}${buttonFontSizeUnits.Mobile};`
																: ""
														}
                ${
									buttonGlobalTypoSwitcher.letterSpacing === false &&
									buttonLetterSpacing.Mobile &&
									buttonLetterSpacingUnits.Mobile
										? `letter-spacing: ${buttonLetterSpacing.Mobile}${buttonLetterSpacingUnits.Mobile};`
										: ""
								}
                ${
									buttonGlobalTypoSwitcher.lineHeight === false &&
									buttonLineHeight.Mobile &&
									buttonLineHeightUnits.Mobile
										? `line-height: ${buttonLineHeight.Mobile}${buttonLineHeightUnits.Mobile};`
										: ""
								}
								   ${
											buttonMobileBorderWidthStr && buttonMobileBorderWidth?.top
												? `border-width: ${buttonMobileBorderWidthStr};`
												: ""
										}
                ${
									buttonMobileBorderRadiusStr &&
									buttonMobileBorderRadiusWidth?.top
										? `border-radius: ${buttonMobileBorderRadiusStr};`
										: ""
								}
								 ${
										buttonMobilePaddingStr && buttonMobilePadding?.top
											? `padding: ${buttonMobilePaddingStr};`
											: ""
									}  
                ${
									buttonMobileMarginStr && buttonMobileMargin?.top
										? `margin: ${buttonMobileMarginStr};`
										: ""
								} 

								${
									buttonIconGapSize.Mobile
										? `gap: ${buttonIconGapSize.Mobile}${buttonIconGapUnits.Mobile};`
										: ""
								}
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon {
						    ${
									buttonIconBorderMobileWidth !== buttonIconBorderMobile.top
										? `border-width: ${buttonIconBorderMobileWidth};`
										: ""
								} 
                ${
									buttonIconBorderRadiusMobileWidth !==
									buttonIconBorderRadiusMobile.top
										? `border-radius: ${buttonIconBorderRadiusMobileWidth};`
										: ""
								}

								${
									buttonIconMobilePaddingStr && buttonIconMobilePadding?.top
										? `padding: ${buttonIconMobilePaddingStr};`
										: ""
								}
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon svg{
						  ${
								buttonIconSize.Mobile && buttonIconSizeUnits.Mobile
									? `width: ${buttonIconSize.Mobile}${buttonIconSizeUnits.Mobile};`
									: ""
							}
              ${
								buttonIconSize.Mobile && buttonIconSizeUnits.Mobile
									? `height: ${buttonIconSize.Mobile}${buttonIconSizeUnits.Mobile};`
									: ""
							}
							${
								buttonIconRotate.Mobile
									? `transform: rotate(${buttonIconRotate.Mobile}deg);`
									: ""
							}
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-icon svg{
							${
								buttonIconRotateHover.Mobile
									? `transform: rotate(${buttonIconRotateHover.Mobile}deg);`
									: ""
							}
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button .fb-taxonomy-read-more-icon-image{
							${
								buttonIconImageWidth
									? `width: ${buttonIconImageWidth.Mobile}${buttonIconImageWidthUnits.Mobile};`
									: ""
							}
            	${
								buttonIconImageHeight
									? `height: ${buttonIconImageHeight.Mobile}${buttonIconImageHeightUnits.Mobile};`
									: ""
							}
							${
								buttonImageRotate.Mobile
									? `transform: rotate(${buttonImageRotate.Mobile}deg);`
									: ""
							}
					}

					.${blockId} .fb_post_category_container .fb-taxonomy-item .fb-taxonomy-read-more-button:hover .fb-taxonomy-read-more-icon-image{
							${
								buttonImageRotateHover.Mobile
									? `transform: rotate(${buttonImageRotateHover.Mobile}deg);`
									: ""
							}
					}


					/* List Layout Styles - Mobile */



        

			.${blockId} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id="0"] {
						${
							postListItemSpacing.Mobile
								? `margin-bottom: ${postListItemSpacing.Mobile}${postListItemSpacingUnits.Mobile};`
								: ""
						}
			}

								.${blockId} .fb_taxonomy_sublist {
						${
							postListItemSpacing.Mobile
								? `
								padding-top: ${postListItemSpacing.Mobile}${postListItemSpacingUnits.Mobile};
								padding-bottom: ${postListItemSpacing.Mobile}${postListItemSpacingUnits.Mobile};
								gap: ${postListItemSpacing.Mobile}${postListItemSpacingUnits.Mobile}; 
							`
								: ""
						}
					}


														.${blockId} .fb-taxonomy-list .fb-taxonomy-item::marker{
								 ${
										postTitleGlobalTypoSwitcher.fontSize === false &&
										postTitleFontSize.Mobile
											? `font-size: ${postTitleFontSize.Mobile}${postTitleFontSizeUnits.Mobile};`
											: ""
									}
						}

						 .${blockId} .fb-taxonomy-list .fb-taxonomy-item[data-parent-id] {
									${
										listIndentation.Mobile
											? ` padding-left: ${listIndentation.Mobile}${listIndentationUnits.Mobile};`
											: ""
									}
            }

						.${blockId} .fb-taxonomy-list .fb-taxonomy-item .fb-tax-separator{
							${
								separatorWidth.Mobile && separatorWidthUnits.Mobile
									? `width: ${separatorWidth.Mobile}${separatorWidthUnits.Mobile};`
									: ""
							}
							${
								separatorThickness.Mobile && separatorThicknessUnits.Mobile
									? `border-top-width: ${separatorThickness.Mobile}${separatorThicknessUnits.Mobile};`
									: ""
							}
						}


					/* Advance Control Global Style - Mobile */
					.${blockId}.fb-post-category-area {
							${
								postCategoryPositionType !== "default" &&
								postCategoryPositionType !== "relative" &&
								postCategoryHZOrientationType === "left" &&
								postCategoryHZLeftOffset.Mobile !== undefined
									? `left: ${postCategoryHZLeftOffset.Mobile}${postCategoryHZLeftOffsetUnits.Mobile};`
									: ""
							}
							${
								postCategoryPositionType !== "default" &&
								postCategoryPositionType !== "relative" &&
								postCategoryHZOrientationType === "right" &&
								postCategoryHZRightOffset.Mobile !== undefined
									? `right: ${postCategoryHZRightOffset.Mobile}${postCategoryHZRightOffsetUnits.Mobile};`
									: ""
							}
							${
								postCategoryPositionType !== "default" &&
								postCategoryPositionType !== "relative" &&
								postCategoryVROrientationType === "top" &&
								postCategoryVRTopOffset.Mobile !== undefined
									? `top: ${postCategoryVRTopOffset.Mobile}${postCategoryVRTopOffsetUnits.Mobile};`
									: ""
							}
							${
								postCategoryPositionType !== "default" &&
								postCategoryPositionType !== "relative" &&
								postCategoryVROrientationType === "bottom" &&
								postCategoryVRBottomOffset.Mobile !== undefined
									? `bottom: ${postCategoryVRBottomOffset.Mobile}${postCategoryVRBottomOffsetUnits.Mobile};`
									: ""
							} 

									${postGlobalZIndex.Mobile ? `z-index: ${postGlobalZIndex.Mobile}` : ""}
					}

					.${blockId}.fb-post-category-area  {
							${
								postGlobalMobilePaddingWidth && postGlobalPaddingMobile.top
									? `padding: ${postGlobalMobilePaddingWidth}`
									: ""
							}
							${
								postGlobalMobileMarginWidth && postGlobalMarginMobile.top
									? `margin: ${postGlobalMobileMarginWidth}`
									: ""
							}

							${postGlobalBorder ? `border: ${postGlobalBorder};` : ""} 
              ${
								postGlobalMobileBorderWidth && postGlobalBorderMobile.top
									? `border-width: ${postGlobalMobileBorderWidth};`
									: ""
							}
              ${
								postGlobalMobileBorderRadiusWidth &&
								postGlobalBorderRadiusMobile.top
									? `border-radius: ${postGlobalMobileBorderRadiusWidth}!important;`
									: ""
							}
					}


        }


    `,
		[
			blockId,
			premadeStyle,
			gridColumns,
			gridGapUnits,
			gridRowGap,
			gridColumnGap,
			listStyle,
			listIndentation,
			listIndentationUnits,

			readMoreSwitcher,
			readMoreText,
			readMoreIconAlign,
			readMoreIcon,
			readMoreIconImageUrl,
			readMoreIconImageAlt,
			readMoreIconImageID,

			readMoreIconImagedisplay,

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

			postCategoryBorder,
			postCategoryBorderColorSwitcher,
			postCategoryBorderColor,
			postCategoryBorderHoverColor,
			postCategoryBorderUnits,
			postCategoryBorderDesktop,
			postCategoryBorderTablet,
			postCategoryBorderMobile,
			postCategoryBorderLink,

			postCategoryBorderRadiusUnits,
			postCategoryBorderRadiusDesktop,
			postCategoryBorderRadiusTablet,
			postCategoryBorderRadiusMobile,
			postCategoryBorderRadiusLink,

			postCategoryBoxShadowSwitcher,
			postCategoryBoxShadowValues,
			postCategoryBoxShadowCssValue,
			postCategoryBoxShadowHoverValues,
			postCategoryBoxShadowHoverCssValue,

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
			postDescriptionSpacing,
			postDescriptionSpacingUnits,
			postDescriptionExcerptLength,

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

			buttonIconPaddingUnits,
			buttonIconDesktopPadding,
			buttonIconTabPadding,
			buttonIconMobilePadding,
			buttonIconPaddingLink,
			buttonIconDesktopPaddingStr,
			buttonIconTabletPaddingStr,
			buttonIconMobilePaddingStr,

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
		],
	);

	const customCss = getCustomCss(postCategoryGlobalCustomCSS, `.${blockId}`);
	const editorStyle = `${allBlockStyle} ${customCss}`
		.replace(/\s+/g, " ")
		.trim();

	useEffect(() => {
		setAttributes({ blockStyle: editorStyle });
	}, [editorStyle]);

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
								dynamicTaxonomyOptions.length
									? "Select Taxonomy"
									: "Taxonomy not available"
							}
							styles={{
								option: (provided, state) => ({
									...provided,
									fontWeight: state.data.isDisabled ? "600" : "normal", // Bold for post type headers
									color: state.data.isDisabled ? "#1f1e1e" : "#000000", // Dark color for headers, default for taxonomies
									paddingLeft: state.data.isDisabled ? "10px" : "15px", // 10px for headers, 20px (1em + 10px) for taxonomies
								}),

								menu: (provided) => ({
									...provided,
									zIndex: 999999,
								}),
							}}
							formatOptionLabel={(option, { context }) => (
								// remove whitespace for selected value, preserve for dropdown list
								<span
									style={{
										whiteSpace: context === "value" ? "normal" : "pre",
									}}
								>
									{context === "value" ? option.label.trim() : option.label}
								</span>
							)}
						/>
					</BaseControl>

					<BaseControl
						label={__("Element Visibility", "frontis-blocks")}
						className="fb-setting-show-hide-elements"
					>
						<ToggleControl
							label={__("Show Count", "frontis-blocks")}
							checked={showCount}
							onChange={(value) => setAttributes({ showCount: value })}
						/>

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
						setGlobalColor={(value) =>
							setAttributes({
								postTitleColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{postTitleColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={postTitleHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								postTitleHoverColor: value === undefined ? "" : value,
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
						title={__("Read More Button Image", "frontis-blocks")}
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

						{/* <FB_Range
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
							/> */}

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
			<style>{editorStyle}</style>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
}
