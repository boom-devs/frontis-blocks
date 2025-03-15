import { __ } from '@wordpress/i18n';
import {
	InspectorControls
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	SelectControl,
} from '@wordpress/components';
import Select2 from "react-select";
import './editor.scss';

import { useEffect, useMemo } from '@wordpress/element';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		location,
		officeHours,
		startTime,
		timezones,
		title
	} = attributes;


	function getAllTimezones() {
		// This is using the Intl API to get timezone names
		const timezonesSet = new Set();
		
		// Get the formatter which includes timezone info
		const formatter = new Intl.DateTimeFormat();
		
		// Get all available timezone names
		const timezones = Intl.supportedValuesOf('timeZone');
		
		return timezones;
	  }

	  useEffect(() => {
		setAttributes({
			timezones: getAllTimezones()
		});
	  }, []);

	  const allBlockStyle = useMemo(() => `
		.fb-timezone-container .fb-timezone-time {
			width: auto;
			background: #000000;
			display: inline-block;
			padding: 4px 12px;
			border-radius: 24px;
			color: #ffff;
			font-size: 14px;
			font-weight: 500;
			font-family: 'Radio Canada Big';
		}
		.fb-timezone-container .fb-timezone-time .fb-timezone-timezone {
			color: #717680;
		}
	  `, [attributes]);
	
	return (
		<>
			<style>
				{allBlockStyle}
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
										<PanelBody title={__("Select Location", "frontis-blocks")} initialOpen={true}>
											{/* <SelectControl
												label={__("Select Location", "frontis-blocks")}
												value={location}
												options={timezones}
												help={__("Choose a location to display the timezone", "frontis-blocks")}
												onChange={(value) => setAttributes({ location: value })}
											/> */}
											<Select2 
												options={timezones}
												value={location}
												onChange={(value) => setAttributes({ location: value })}
												className="fb-select2-control"
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