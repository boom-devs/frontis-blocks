import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	SelectControl,
} from '@wordpress/components';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { store as editorStore } from '@wordpress/editor';
import {
	ANIMATION
} from "./constants/constants";
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
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		blockStyle,
		selectedTemplate,
		menuPosition,
		iconStyle,
		offCanvasPanelWidth,
		offCanvasPanelWidthUnits,
		offCanvasCustomCSS
	} = attributes;

	const deviceType = useDeviceType();

	const [patterns, setPatterns] = useState([]);

	const patternData = useSelect(select => {
		const allPatterns = select(coreStore) ? select(coreStore).getBlockPatterns() || [] : [];

		let userPatterns = [];
		try {
			if (select('core')) {
				userPatterns = select('core').getEntityRecords('postType', 'wp_block') || [];
			}
		} catch (error) {
			console.log('Error getting user patterns:', error);
		}

		return { allPatterns, userPatterns };
	}, []);

	useEffect(() => {
		const patternOptions = [
			{ value: '', label: __('Select a pattern', 'frontis-blocks') }
		];

		// Add all patterns
		if (patternData.allPatterns && patternData.allPatterns.length > 0) {
			patternOptions.push(
				{ value: 'core-separator', label: __('--- Theme Patterns ---', 'frontis-blocks'), disabled: true },
				...patternData.allPatterns.map(pattern => ({
					value: pattern.name,
					label: pattern.title
				}))
			);
		}

		// Add user patterns if any were found
		if (patternData.userPatterns && patternData.userPatterns.length > 0) {
			patternOptions.push(
				{ value: 'user-separator', label: __('--- User Patterns ---', 'frontis-blocks'), disabled: true },
				...patternData.userPatterns.map(pattern => ({
					value: 'user-' + pattern.id,
					label: pattern.title && pattern.title.raw ? pattern.title.raw : `Pattern ${pattern.id}`
				}))
			);

			console.log('User patterns found:', patternData.userPatterns);
		}
		setPatterns(patternOptions);
	}, [patternData]);

	// Handle pattern selection
	const getSelectedPatternContent = (patternId) => {
		if (!patternId) return '';

		try {
			// Check if it's a user pattern
			if (patternId.startsWith('user-')) {
				const id = parseInt(patternId.replace('user-', ''), 10);
				const userPattern = patternData.userPatterns.find(p => p.id === id);
				if (!userPattern) {
					console.warn(`User pattern with ID ${id} not found`);
					return '';
				}
				return userPattern?.content?.raw || '';
			} else {
				// Core pattern
				const corePattern = patternData.allPatterns.find(p => p.name === patternId);
				if (!corePattern) {
					console.warn(`Core pattern with name ${patternId} not found`);
					return '';
				}
				return corePattern?.content || '';
			}
		} catch (error) {
			console.error('Error retrieving pattern content:', error);
			return '';
		}
	};
	// Generate unique block ID if not set
	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "off-canvas-menu-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	// Icon style options
	const iconOptions = [
		{ value: 'hamburger', label: __('Hamburger', 'frontis-blocks') },
		{ value: 'dots', label: __('Three Dots', 'frontis-blocks') },
		{ value: 'plus', label: __('Plus Sign', 'frontis-blocks') },
	];

	const offCanvasStyle = useMemo(
		() => `
				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu{
				
					${offCanvasPanelWidth?.Desktop ? `width: ${offCanvasPanelWidth?.Desktop}${offCanvasPanelWidthUnits?.Desktop};` : ''}
				}
				@media only screen and (max-width: 1024px) {
					${offCanvasPanelWidth?.Tablet ? `width: ${offCanvasPanelWidth?.Tablet}${offCanvasPanelWidthUnits?.Tablet};` : ''}
				}
	
				@media only screen and (max-width: 768px) {
					${offCanvasPanelWidth?.Mobile ? `width: ${offCanvasPanelWidth?.Mobile}${offCanvasPanelWidthUnits?.Mobile};` : ''}
				}
			`,
		[
			attributes
		],
	);

	const customCss = getCustomCss(offCanvasCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${offCanvasStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [offCanvasStyle, customCss]);

	const editorStyle = `${offCanvasStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

	const generalControls = (
		<>
			<PanelBody title={__("Menu Content", "frontis-blocks")} initialOpen={true}>
				<SelectControl
					label={__("Select Pattern", "frontis-blocks")}
					value={selectedTemplate}
					options={patterns}
					onChange={(value) => {
						const content = getSelectedPatternContent(value);
						setAttributes({
							selectedTemplate: value,
							patternContent: content
						});
					}}
					help={__("Choose a block pattern to use as the content of your off-canvas menu", "frontis-blocks")}
				/>

				<SelectControl
					label={__("Animation", "frontis-blocks")}
					value={menuPosition}
					options={ANIMATION}
					onChange={(value) => setAttributes({ menuPosition: value })}
				/>

				<SelectControl
					label={__("Icon Style", "frontis-blocks")}
					value={iconStyle || 'hamburger'}
					options={iconOptions}
					onChange={(value) => setAttributes({ iconStyle: value })}
				/>
			</PanelBody>
		</>
	);

	const styleControls = (
		<>
			<PanelBody title={__("Off Canvas", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					min={1}
					max={2000}
					label={__("Panel Width", "frontis-blocks")}
					rangeValue={offCanvasPanelWidth}
					onChangeHandler={(value) => setAttributes({ offCanvasPanelWidth: value })}
					rangeUnitHandler={(value) => setAttributes({ offCanvasPanelWidthUnits: value })}
					deviceType={deviceType}
					units={offCanvasPanelWidthUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
			</PanelBody>

			<PanelBody title={__("Icon Styling", "frontis-blocks")} initialOpen={true}>
				{/* Add styling controls here for the icon */}
			</PanelBody>
		</>
	);
	const advancedControls = (
		<>
			<PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
				<PanelBody
					title={__("Custom CSS", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_CustomCSSEditor
						value={offCanvasCustomCSS}
						onChangeValue={(value) => setAttributes({ offCanvasCustomCSS: value })}
					/>
				</PanelBody>
			</PanelBody>
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