import { useBlockProps, RichText } from "@wordpress/block-editor";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import attributes from './attributes.js';

const v1_0_3 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-breadcrumb-main-wrapper ${blockID}`,
        });

        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper fb-breadcrumb-container ${blockID}`} id={blockID}>

                    </div>
                </div>
            </>
        );
    },
};

export default [v1_0_3];