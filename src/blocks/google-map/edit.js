import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import {
    useBlockProps,
} from '@wordpress/block-editor';

/**
* Internal dependencies
*/
import './editor.scss';

import Inspector from "./inspector";
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generateGoogleMapStyle from "./styling";

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
    const {
        blockID,
        blockStyle,
        googleMapLocation,
        googleMapZoomLevel,
        googleMapMapType,

        googleMapWraperID,
        googleMapWraperClass,
    } = attributes;

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-google-map',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = generateGoogleMapStyle(attributes);
            if (blockStyle !== css) {
                setAttributes({ blockStyle: css });
            }
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

    const blockProps = useBlockProps({
        className: `fb-google-map-main-wrapper ${blockID}`,
    });


    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            
            <div {...blockProps}>
                <div className={`fb-google-map-wrapper ${googleMapWraperClass}`} id={googleMapWraperID}>
                    <iframe
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(googleMapLocation)}&t=${googleMapMapType}&z=${googleMapZoomLevel}&output=embed&iwloc=near`}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title={googleMapLocation}
                    ></iframe>
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}
