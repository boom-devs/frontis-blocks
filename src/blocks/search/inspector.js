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
import FB_Range from '@Components/range';
import {useDeviceType} from "@Config/displayType";
import './editor.scss';

import { useEffect, useMemo } from '@wordpress/element';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		searchButtonWidth,
		searchButtonWidthUnits,
		searchButtonInputFieldWidth,
		searchButtonInputFieldWidthUnits,
	} = attributes;

	const deviceType = useDeviceType();

	const allBlockStyle = useMemo(() => ` `);


	useEffect(() => {
		setAttributes({ blockStyle: `${allBlockStyle}` });
	}, [allBlockStyle]);

	//   #F04438
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
										<PanelBody title={__("General Settings", "frontis-blocks")} initialOpen={true}>
											<FB_Range
												min={1}
												max={1000}
												label={__("Button Width", "frontis-blocks")}
												rangeValue={searchButtonWidth}
												onChangeHandler={(value) => setAttributes({ searchButtonWidth: value })}
												rangeUnitHandler={(value) => setAttributes({ searchButtonWidthUnits: value })}
												deviceType={deviceType}
												units={searchButtonWidthUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>

											<FB_Range
												min={1}
												max={1000}
												label={__("Search Field Width", "frontis-blocks")}
												rangeValue={searchButtonInputFieldWidth}
												onChangeHandler={(value) => setAttributes({ searchButtonInputFieldWidth: value })}
												rangeUnitHandler={(value) => setAttributes({ searchButtonInputFieldWidthUnits: value })}
												deviceType={deviceType}
												units={searchButtonInputFieldWidthUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
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