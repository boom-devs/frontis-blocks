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
	} = attributes;

	const deviceType = useDeviceType();

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