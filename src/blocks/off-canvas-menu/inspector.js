import { __ } from "@wordpress/i18n";
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect, useMemo } from "@wordpress/element";
import "./editor.scss";
import { useDeviceType } from "@Config/displayType";
import { InspectorControls } from "@wordpress/block-editor";

import {
	SelectControl,
	PanelBody,
	TabPanel,
} from "@wordpress/components";


export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		selectedPatternContent
	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-off-canvas-menu-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	// Inside your component:
	const [patterns, setPatterns] = useState([]);

	// Fetch patterns when component mounts
	useEffect(() => {
		fetchPatterns();
	}, []);

	// Function to fetch patterns
	const fetchPatterns = async () => {
		try {
			// First attempt to use the WP REST API endpoint we created
			const fetchedPatterns = await apiFetch({ path: '/wp/v2/block-patterns' });

			// Transform patterns for the SelectControl
			const patternOptions = fetchedPatterns.map(pattern => ({
				label: pattern.title.rendered,
				value: pattern.slug
			}));

			setPatterns(patternOptions);
		} catch (error) {
			console.error('Error fetching patterns:', error);

			// If API fails, try to get patterns directly from the registry
			if (wp.blocks && wp.blocks.getBlockPatterns) {
				const registryPatterns = wp.blocks.getBlockPatterns();
				const patternOptions = registryPatterns.map(pattern => ({
					label: pattern.title,
					value: pattern.name
				}));
				setPatterns(patternOptions);
			}
		}
	};

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
								className: "fb-tab advanced",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === "general" && (
									<>
										<div className="fb-off-canvas-menu-container">
											{/* Connector */}
											<div className="fb-off-canvas-menu-connenctor-wrapper">
												<PanelBody
													title={__("All Patterns", "frontis-blocks")}
													initialOpen={false}
												>
													<SelectControl
														label={__("Patterns to show when menu appears", "frontis-blocks")}
														options={patterns}
														onChange={(selectedSlug) => {
															const selectedPattern = patterns.find((p) => p.value === selectedSlug);

															// Store pattern content in attributes
															if (selectedPattern) {
																setAttributes({
																	selectedPatternContent: selectedPattern.content,
																});
															}
														}}
													/>
												</PanelBody>
											</div>
										</div>
									</>
								)}

								{tab.name === "styles" && (
									<>
									</>
								)}
								{tab.name === "advanced" && (
									<>
										<div className="fb-setting-advanced-tab-wrapper">

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
