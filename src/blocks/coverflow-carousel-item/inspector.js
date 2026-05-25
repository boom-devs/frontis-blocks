import { __ } from '@wordpress/i18n';
import { useEffect, memo } from '@wordpress/element';
import { PanelBody } from '@wordpress/components';
import { useDeviceType } from '@Config/displayType';
import FB_InspectorControls from '@Components/InspectorControls';
import './editor.scss';

const Inspector = ({ attributes, setAttributes, clientId }) => {
    const { 
        blockID,
    } = attributes;
    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === "string") {
            setAttributes({ blockID: `fb-coverflow-carousel-item-${clientId.slice(0, 8)}` });
        }
    }, [clientId]);

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
		    <PanelBody title={__("Carousel", "frontis-blocks")} initialOpen>
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