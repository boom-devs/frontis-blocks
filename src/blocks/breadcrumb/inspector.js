import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	Button,
	ButtonGroup,
	ToggleControl,
	TextControl,
	TextareaControl,
	Dropdown,
	Dashicon,
	RangeControl,
	ColorPicker,
	ColorPalette,
} from "@wordpress/components";

import { useState, useEffect, useMemo } from "@wordpress/element";
import FBIconPicker from "../../components/icon-picker";
import "./editor.scss";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		separatorType,
		separatorText,
		separatorIcon,
		separatorGap,
		showHomeIcon,
		homeIcon,
		homeText,
		showItemIcon,
		itemIcon,
		breadcrumbTypography,
		textColor,
		linkColor,
		linkHoverColor,
		separatorColor,
		iconColor,
		align,
	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-breadcrumb-" + clientId,
			});
		}
	}, [clientId]);

	const homeIconHandler = (IconName) => {
		setAttributes({ homeIcon: IconName })
	}
	const separatorIconHandler = (IconName) => {
		setAttributes({ separatorIcon: IconName })
	}
	const itemIconHandler = (IconName) => {
		setAttributes({ itemIcon: IconName })
	}

	const breadcrumbStyle = useMemo(
		() => `
		.${blockID} .fb-breadcrumb-list {
			justify-content: ${align};
			gap: ${separatorGap}px;
		}
		.${blockID} .fb-breadcrumb-item, .${blockID} .fb-breadcrumb-separator {
			color: ${textColor};
		}
		.${blockID} .fb-breadcrumb-link {
			color: ${linkColor};
		}
		.${blockID} .fb-breadcrumb-link:hover {
			color: ${linkHoverColor};
		}
		.${blockID} .fb-breadcrumb-separator {
			color: ${separatorColor};
		}
		.${blockID} .fb-breadcrumb-icon {
			color: ${iconColor};
		}
	`,
		[
			blockID,
			align,
			separatorGap,
			textColor,
			linkColor,
			linkHoverColor,
			separatorColor,
			iconColor,
		],
	);

	const customCss = getCustomCss("", `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${breadcrumbStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [breadcrumbStyle, customCss]);

	const editorStyle = `${breadcrumbStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("Home Settings", "frontis-blocks")} initialOpen={true}>
				<ToggleControl
					label={__("Show Home Icon", "frontis-blocks")}
					checked={showHomeIcon}
					onChange={(value) => setAttributes({ showHomeIcon: value })}
				/>
				{showHomeIcon && (
					<div className="fb-control-wrapper">
						<label>{__("Home Icon", "frontis-blocks")}</label>
						<FBIconPicker
							value={homeIcon}
							setIconHandler={homeIconHandler}
						/>
					</div>
				)}
				<TextControl
					label={__("Home Text", "frontis-blocks")}
					value={homeText}
					onChange={(value) => setAttributes({ homeText: value })}
				/>
			</PanelBody>

			<PanelBody title={__("Separator Settings", "frontis-blocks")} initialOpen={false}>
				<SelectControl
					label={__("Separator Type", "frontis-blocks")}
					value={separatorType}
					options={[
						{ label: "Text", value: "text" },
						{ label: "Icon", value: "icon" },
					]}
					onChange={(value) => setAttributes({ separatorType: value })}
				/>
				{separatorType === "text" ? (
					<TextControl
						label={__("Separator Text", "frontis-blocks")}
						value={separatorText}
						onChange={(value) => setAttributes({ separatorText: value })}
					/>
				) : (
					<div className="fb-control-wrapper">
						<label>{__("Separator Icon", "frontis-blocks")}</label>
						<FBIconPicker
							value={separatorIcon}
							onChange={(value) => separatorIconHandler(value)}
						/>
					</div>
				)}
				<RangeControl
					label={__("Gap", "frontis-blocks")}
					value={separatorGap}
					onChange={(value) => setAttributes({ separatorGap: value })}
					min={0}
					max={100}
				/>
			</PanelBody>

			<PanelBody title={__("Item Settings", "frontis-blocks")} initialOpen={false}>
				<ToggleControl
					label={__("Show Item Icon", "frontis-blocks")}
					checked={showItemIcon}
					onChange={(value) => setAttributes({ showItemIcon: value })}
					help={__("Show an icon before every breadcrumb item (except Home).", "frontis-blocks")}
				/>
				{showItemIcon && (
					<div className="fb-control-wrapper">
						<label>{__("Item Icon", "frontis-blocks")}</label>
						<FBIconPicker
							value={itemIcon}
							setIconHandler={itemIconHandler}
						/>
					</div>
				)}
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody title={__("Colors", "frontis-blocks")} initialOpen={false}>

			</PanelBody>
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
