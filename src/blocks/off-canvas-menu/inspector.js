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
import {
	BORDER_STYLES,
	LAYOUT_ALIGNMENT,
	LAYOUT_TYPE,
	OVERFLOW_OP,
	PRESETS,
} from "./constants/constants";
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		selectedTemplate,
		menuPosition,
		iconStyle,
	} = attributes;

	const deviceType = useDeviceType();

	const [patterns, setPatterns] = useState([]);

	// Use useSelect to fetch block patterns directly from the core data
	const patternData = useSelect(select => {
		// Check if the patterns API is available
		if (select('core')) {
			return select('core').getBlockPatterns() || [];
		}
		return [];
	}, []);

	// Transform patterns for SelectControl whenever patternData changes
	useEffect(() => {
		if (patternData && patternData.length > 0) {
			const patternOptions = [
				{ value: '', label: __('Select a pattern', 'frontis-blocks') },
				...patternData.map(pattern => ({
					value: pattern.name,
					label: pattern.title
				}))
			];
			setPatterns(patternOptions);
		}
	}, [patternData]);

	// Generate unique block ID if not set
	useEffect(() => {
		if (clientId && typeof clientId === 'string' && !blockID) {
			setAttributes({
				blockID: "off-canvas-menu-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, blockID, setAttributes]);

	// Position options for the menu
	const positionOptions = [
		{ value: 'left', label: __('Left', 'frontis-blocks') },
		{ value: 'right', label: __('Right', 'frontis-blocks') },
		{ value: 'top', label: __('Top', 'frontis-blocks') },
		{ value: 'bottom', label: __('Bottom', 'frontis-blocks') },
	];

	// Icon style options
	const iconOptions = [
		{ value: 'hamburger', label: __('Hamburger', 'frontis-blocks') },
		{ value: 'dots', label: __('Three Dots', 'frontis-blocks') },
		{ value: 'plus', label: __('Plus Sign', 'frontis-blocks') },
	];

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
										<PanelBody title={__("Menu Content", "frontis-blocks")} initialOpen={true}>
											<SelectControl
												label={__("Select Pattern", "frontis-blocks")}
												value={selectedTemplate}
												options={patterns}
												onChange={(value) => setAttributes({ selectedTemplate: value })}
												help={__("Choose a block pattern to use as the content of your off-canvas menu", "frontis-blocks")}
											/>

											<SelectControl
												label={__("Menu Position", "frontis-blocks")}
												value={menuPosition || 'left'}
												options={positionOptions}
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
								)}
								{tab.name === "styles" && (
									<>
										<PanelBody title={__("Menu Styling", "frontis-blocks")} initialOpen={true}>
											{/* Add styling controls here for the menu */}
										</PanelBody>

										<PanelBody title={__("Icon Styling", "frontis-blocks")} initialOpen={true}>
											{/* Add styling controls here for the icon */}
										</PanelBody>
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