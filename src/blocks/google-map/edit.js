import { __ } from '@wordpress/i18n';
import { useEffect } from "@wordpress/element";
import {
    useBlockProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        blockStyle,
        googleMapLocation,
        googleMapZoomLevel,
        googleMapMapType,

        googleMapWraperID,
        googleMapWraperClass,
    } = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-google-map-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const blockProps = useBlockProps({
        className: `fb-google-map-main-wrapper ${blockId}`,
    });

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
            />
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
