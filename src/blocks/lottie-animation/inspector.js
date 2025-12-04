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

/**
 * Internal depencencies
 */
import {
	ICON_ALIGN,
	BORDER_STYLES,
	ICON_POSITION,
	BUTTONS_DIRECTION,
	PRESETS,
	OVERFLOW_OP,
	LOTTIE_RENDER_TYPE
} from "../../fbConstants/fbConstants";

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
import FB_ImageControl from '@Components/image-control';
import FB_UrlControl from '@Components/url-control';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		lottieAnimationJsonTypeSwitcher,
		lottieAnimationImageUrl,
		lottieAnimationImageAlt,
		lottieAnimationImageID,
		lottieAnimationJsonUrl,
		lottieAnimationJsonTargetUrl,
		lottieAnimationGlobalWraperCustomCSS,
		lottieRenderer,
		lottieLoop,
		lottieAutoplay,
		lottieAnimationSpeed
	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-lottie-animation-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	/* Load Google Fonts */
	useEffect(() => {
		loadGoogleFont();
	}, []);
	/* End Load Google Fonts */

	const lottieAnimationStyle = useMemo(
		() => `
		
		
	`,
		[
			attributes
		],
	);

	const customCss = getCustomCss(lottieAnimationGlobalWraperCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${lottieAnimationStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [lottieAnimationStyle, customCss]);

	const editorStyle = `${lottieAnimationStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<div className="fb-dual-button-pressets">
				<PanelBody
					title={__("Lottie", "frontis-blocks")}
					initialOpen={true}
				>
					<FB_SwitcherControl
						label={__("Select Json", "frontis-blocks")}
						globalSwitcher={lottieAnimationJsonTypeSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ lottieAnimationJsonTypeSwitcher: value })}
						options={[
							{ label: __('Json File', 'frontis-blocks'), value: 'json-file' },
							{ label: __('Json Url', 'frontis-blocks'), value: 'json-url' },
						]
						}
					/>
					{lottieAnimationJsonTypeSwitcher === 'json-file' && (
						<>
							<FB_ImageControl
								globalImageUrl={lottieAnimationImageUrl}
								setglobalImageUrl={(value) => setAttributes({ lottieAnimationImageUrl: value })}
								globalImageAlt={lottieAnimationImageAlt}
								setglobalImageAlt={(value) => setAttributes({ lottieAnimationImageAlt: value })}
								globalImageID={lottieAnimationImageID}
								setglobalImageID={(value) => setAttributes({ lottieAnimationImageID: value })}
								isImageSize={false}
							/>
						</>
					)}
					{lottieAnimationJsonTypeSwitcher === 'json-url' && (
						<>
							<FB_UrlControl
								url={lottieAnimationJsonUrl}
								onChangeUrl={(value) => setAttributes({ lottieAnimationJsonUrl: value })}
								openInNewTab={lottieAnimationJsonTargetUrl}
								onChangeOpenInNewTab={(value) => setAttributes({ lottieAnimationJsonTargetUrl: value })}
							/>
						</>
					)}
					<SelectControl
						label={__("Render Type", "frontis-blocks")}
						value={lottieRenderer}
						options={LOTTIE_RENDER_TYPE}
						onChange={(value) =>
							setAttributes({ lottieRenderer: value })
						}
					/>

					<ToggleControl
						label={__("Loop Animation", "frontis-block")}
						checked={lottieLoop}
						onChange={(value) =>
							setAttributes({ lottieLoop: value })
						}
					/>

					<ToggleControl
						label={__("Autoplay", "frontis-block")}
						checked={lottieAutoplay}
						onChange={(value) =>
							setAttributes({ lottieAutoplay: value })
						}
					/>

					<RangeControl
						label={__("Speed", "frontis-blocks")}
						value={lottieAnimationSpeed}
						onChange={(value) =>
							setAttributes({
								lottieAnimationSpeed: value === 0 ? undefined : value,
							})
						}
						min={0}
						max={100}
						step={1}
						resetFallbackValue={""}
					/>
				</PanelBody>

			</div>

		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody
				title={__("Lottie", "frontis-blocks")}
				initialOpen={false}
			>

			</PanelBody>
		</>
	);

	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>
			<div className="fb-setting-advanced-tab-wrapper">
				<div className="fb-setting-z-index-wrapper">
					<PanelBody
						title={__("Layout", "frontis-blocks")}
						initialOpen={true}
						className="fb-setting-layout-header"
					>

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
