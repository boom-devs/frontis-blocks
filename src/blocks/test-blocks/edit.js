import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
    BlockControls,
    AlignmentToolbar,
    MediaUpload,
    MediaUploadCheck,
    MediaPlaceholder,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockId,

    } = attributes;

    const blockProps = useBlockProps({
        className: `frontis-block fb-test-blocks-main-wrapper ${blockId}`,
    });



    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            
            <div {...blockProps}>
                <div className="fb-test-blocks-wrapper">
                    <h1>Hello World</h1>
                </div>
            </div>
        </>
    );
}
