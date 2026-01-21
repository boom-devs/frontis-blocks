import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo, memo } from '@wordpress/element';
import { PanelBody, TabPanel, Button } from '@wordpress/components';
import FB_InputControl from '@Components/input-control';
import { useDeviceType } from '@Config/displayType';
import FB_InspectorControls from '@Components/InspectorControls';
import './editor.scss';

const Inspector = ({ attributes, setAttributes, clientId }) => {
    const { 
        blockId,
        sliderItems,
        blockStyle,
    } = attributes;
    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === "string") {
            setAttributes({ blockId: `fb-slider-item-${clientId.slice(0, 8)}` });
        }
    }, [clientId]);

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
		    <PanelBody title={__("Slider", "frontis-blocks")} initialOpen>
            {/* Add general settings here */}
            </PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
            <PanelBody title={__("Style", "frontis-blocks")} initialOpen>
                {/* Add style settings here */}
            </PanelBody>
		</>
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>
            <PanelBody title={__("Layout", "frontis-blocks")} initialOpen>
                {/* Add advanced settings here */}
            </PanelBody>
		</>
	);
    
    return (

        <>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}
export default memo(Inspector);
