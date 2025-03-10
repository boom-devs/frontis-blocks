import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockId,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `frontis-block fb-test-blocks-main-wrapper ${blockId}`,
    });


    return (
        <>
            <div {...blockProps}>
                <div className="fb-test-blocks-wrapper">
                    <h1>Hello World</h1>
                </div>
            </div>
        </>
    );
}
