import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
export default function save({ attributes }) {
    const {
        blockId,
        googleMapLocation,
        googleMapZoomLevel,
        googleMapMapType,
        googleMapWraperID,
        googleMapWraperClass,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-google-map-main-wrapper ${blockId}`,
    });

    return (

        <>
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
        </>
    );
}
