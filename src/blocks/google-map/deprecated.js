import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import attributes from './attributes.js';

const v1_1_8 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            googleMapLocation,
            googleMapZoomLevel,
            googleMapMapType,
            googleMapWraperID,
            googleMapWraperClass,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-google-map-main-wrapper ${blockID}`,
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
    },
};

export default [v1_1_8];