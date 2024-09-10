import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';

/**
 * Internal depencencies
 */
import Inspector from "./inspector";
import './editor.scss';

export default function Edit({ attributes, setAttributes}) {
    const { 
        blockID,
        DeviceType,
        ButtonAlignment,
        ButtonText,

    } = attributes;

    const blockProps = useBlockProps();
    
    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
            />

            <BlockControls>
                <AlignmentToolbar
                    value={ButtonAlignment}
                    onChange={(value) => setAttributes({ ButtonAlignment: value })}
                    controls={['left', 'center', 'right', 'justify']}
                />
            </BlockControls>
            
            <div {...blockProps} id={blockID}>
                <div className={`fb-advanced-button-wrapper ${blockID}`} style={{textAlign: ButtonAlignment}}>
                    <RichText
                        value={ButtonText}
                        onChange={(value) => setAttributes({ ButtonText: value })}
                        placeholder={__('Add Text', 'frontis-blocks')}
                        className= "fb-advanced-button"
                    />
                </div>
            </div>
        </>
    );
}

