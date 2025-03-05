import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import {
    PanelBody,
    BaseControl,
    TabPanel,
} from '@wordpress/components';


import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,
		deviceType,
		blockStyle,

    } = attributes;

	useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-feature-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    return (
        <>
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
								name:
									"styles",
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
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
									
									</>
								)}

								{tab.name === "styles" && (
									<>
									
									</>
								)}
								{tab.name === "advanced" && (
									<>
									
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