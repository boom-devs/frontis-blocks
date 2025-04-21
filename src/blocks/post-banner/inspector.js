import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	SelectControl,
	ToggleControl
} from '@wordpress/components';
import { useEffect, useState, useMemo } from '@wordpress/element';

import {
	BORDER_STYLES
} from "./constants/constants";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_Spacing from '@Components/spacing';

import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		categorySwitcher,
		titleSwitcher,
		postMetaSwitcher,
		categoryGlobalTypographyData,
		categoryGlobalTypoSwitcher,
		categoryGlobalTypoType,
		categoryGlobalTypoOption,
		categoryFontFamily,
		categoryFontSize,
		categoryFontSizeUnits,
		categoryFontWeight,
		categoryFontStyle,
		categoryTextTransform,
		categoryTextDecoration,
		categoryLetterSpacing,
		categoryLetterSpacingUnits,
		categoryLineHeight,
		categoryLineHeightUnits,
		categoryBgColorSwitcher,
		categoryBgColor,
		categoryBgColorHover,
		categoryColorSwitcher,
		categoryColor,
		categoryHoverColor,
		categoryMarginUnits,
		categoryDesktopMargin,
		categoryTabMargin,
		categoryMobileMargin,
		categoryMarginLink,
		categoryPaddingUnits,
		categoryDesktopPadding,
		categoryTabPadding,
		categoryMobilePadding,
		categoryPaddingLink,
		categoryBorder,
		categoryBorderColorSwitcher,
		categoryBorderColor,
		categoryBorderHoverColor,
		categoryBorderUnits,
		categoryDesktopBorder,
		categoryTabBorder,
		categoryMobileBorder,
		categoryBorderLink,
		categoryBorderRadiusUnits,
		categoryDesktopBorderRadius,
		categoryTabBorderRadius,
		categoryMobileBorderRadius,
		categoryBorderRadiusLink,
		titleGlobalTypographyData,
		titleGlobalTypoSwitcher,
		titleGlobalTypoType,
		titleGlobalTypoOption,
		titleFontFamily,
		titleFontSize,
		titleFontSizeUnits,
		titleFontWeight,
		titleFontStyle,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLetterSpacingUnits,
		titleLineHeight,
		titleLineHeightUnits,
		titleBgColorSwitcher,
		titleBgColor,
		titleBgColorHover,
		titleColorSwitcher,
		titleColor,
		titleHoverColor,
		titleMarginUnits,
		titleDesktopMargin,
		titleTabMargin,
		titleMobileMargin,
		titleMarginLink,
		titlePaddingUnits,
		titleDesktopPadding,
		titleTabPadding,
		titleMobilePadding,
		titlePaddingLink,
		titleBorder,
		titleBorderColorSwitcher,
		titleBorderColor,
		titleBorderHoverColor,
		titleBorderUnits,
		titleDesktopBorder,
		titleTabBorder,
		titleMobileBorder,
		titleBorderLink,
		titleBorderRadiusUnits,
		titleDesktopBorderRadius,
		titleTabBorderRadius,
		titleMobileBorderRadius,
		titleBorderRadiusLink,
		authorGlobalTypographyData,
		authorGlobalTypoSwitcher,
		authorGlobalTypoType,
		authorGlobalTypoOption,
		authorFontFamily,
		authorFontSize,
		authorFontSizeUnits,
		authorFontWeight,
		authorFontStyle,
		authorTextTransform,
		authorTextDecoration,
		authorLetterSpacing,
		authorLetterSpacingUnits,
		authorLineHeight,
		authorLineHeightUnits,
		authorBgColorSwitcher,
		authorBgColor,
		authorBgColorHover,
		authorColorSwitcher,
		authorColor,
		authorHoverColor,
		authorMarginUnits,
		authorDesktopMargin,
		authorTabMargin,
		authorMobileMargin,
		authorMarginLink,
		authorPaddingUnits,
		authorDesktopPadding,
		authorTabPadding,
		authorMobilePadding,
		authorPaddingLink,
		authorBorder,
		authorBorderColorSwitcher,
		authorBorderColor,
		authorBorderHoverColor,
		authorBorderUnits,
		authorDesktopBorder,
		authorTabBorder,
		authorMobileBorder,
		authorBorderLink,
		authorBorderRadiusUnits,
		authorDesktopBorderRadius,
		authorTabBorderRadius,
		authorMobileBorderRadius,
		authorBorderRadiusLink,
		dateGlobalTypographyData,
		dateGlobalTypoSwitcher,
		dateGlobalTypoType,
		dateGlobalTypoOption,
		dateFontFamily,
		dateFontSize,
		dateFontSizeUnits,
		dateFontWeight,
		dateFontStyle,
		dateTextTransform,
		dateTextDecoration,
		dateLetterSpacing,
		dateLetterSpacingUnits,
		dateLineHeight,
		dateLineHeightUnits,
		dateColorSwitcher,
		dateColor,
		dateHoverColor,
		dateBgColorSwitcher,
		dateBgColor,
		dateBgColorHover,
		dateMarginUnits,
		dateDesktopMargin,
		dateTabMargin,
		dateMobileMargin,
		dateMarginLink,
		datePaddingUnits,
		dateDesktopPadding,
		dateTabPadding,
		dateMobilePadding,
		datePaddingLink,
		dateBorder,
		dateBorderColorSwitcher,
		dateBorderColor,
		dateBorderHoverColor,
		dateBorderUnits,
		dateDesktopBorder,
		dateTabBorder,
		dateMobileBorder,
		dateBorderLink,
		dateBorderRadiusUnits,
		dateDesktopBorderRadius,
		dateTabBorderRadius,
		dateMobileBorderRadius,
		dateBorderRadiusLink,
	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "fb-post-banner-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	return (
		<>
			<style>
				
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
								name: "styles",
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
							<div className={"fb-tab-controls " + tab.name}>
								{tab.name === 'general' && (
									<>
										<PanelBody title={__("Post Info", "frontis-blocks")} initialOpen={true}>
											<ToggleControl
												label={__("Show Category", "frontis-blocks")}
												checked={categorySwitcher}
												onChange={(value) => setAttributes({ categorySwitcher: value })}
											/>
											<ToggleControl
												label={__("Show Title", "frontis-blocks")}
												checked={titleSwitcher}
												onChange={(value) => setAttributes({ titleSwitcher: value })}
											/>
											<ToggleControl
												label={__("Show Post Meta", "frontis-blocks")}
												checked={postMetaSwitcher}
												onChange={(value) => setAttributes({ postMetaSwitcher: value })}
											/>
										</PanelBody>
									</>
								)}
								{tab.name === "styles" && (
									<>
										
									</>
								)}
								{tab.name === "advanced" && (
									<>
										<PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
											{/* Add advanced settings here */}
										</PanelBody>
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