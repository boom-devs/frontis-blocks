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
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { store as editorStore } from '@wordpress/editor';
import {
	ANIMATION
} from "./constants/constants";
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		selectedTemplate,
		menuPosition,
		iconStyle,
		animation
	} = attributes;

	const deviceType = useDeviceType();

	const [patterns, setPatterns] = useState([]);

	// Try to fetch patterns from different stores and methods
	const patternData = useSelect(select => {
		// First try to get all patterns from coreStore
		const allPatterns = select(coreStore) ? select(coreStore).getBlockPatterns() || [] : [];

		// Try to get user patterns from a different method or store
		let userPatterns = [];
		try {
			// Try from core-data store with different method
			if (select('core')) {
				userPatterns = select('core').getEntityRecords('postType', 'wp_block') || [];
			}
		} catch (error) {
			console.log('Error getting user patterns:', error);
		}

		return { allPatterns, userPatterns };
	}, []);

	// Transform patterns for SelectControl whenever patternData changes
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
			console.log('User patterns found:', patternData.allPatterns);
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

	// Add this function to handle pattern selection
	const getSelectedPatternContent = (patternId) => {
		if (!patternId) return '';

		try {
			// Check if it's a user pattern (starts with 'user-')
			if (patternId.startsWith('user-')) {
				const id = parseInt(patternId.replace('user-', ''), 10);
				const userPattern = patternData.userPatterns.find(p => p.id === id);
				if (!userPattern) {
					console.warn(`User pattern with ID ${id} not found`);
					return '';
				}
				return userPattern?.content?.raw || '';
			} else {
				// It's a core pattern
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
		if (clientId && typeof clientId === 'string' && !blockID) {
			setAttributes({
				blockID: "off-canvas-menu-" + clientId.slice(0, 8),
			});
		}
	}, [clientId, blockID, setAttributes]);

	// Position options for the menu
	// const positionOptions = [
	// 	{ value: 'default', label: __('Default', 'frontis-blocks') },
	// 	{ value: 'left', label: __('Left', 'frontis-blocks') },
	// 	{ value: 'right', label: __('Right', 'frontis-blocks') },
	// 	{ value: 'top', label: __('Top', 'frontis-blocks') },
	// 	{ value: 'bottom', label: __('Bottom', 'frontis-blocks') },
	// ];

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
											{/* <SelectControl
												label={__("Animation", "frontis-blocks")}
												value={animation}
												options={ANIMATION}
												onChange={(value) => setAttributes({ animation: value })}
											/> */}
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