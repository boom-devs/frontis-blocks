import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        DeviceType,
        ButtonAlignment,
        ButtonText,
        ButtonUrl,
        ButtonTargetUrl,
        ButtonWidth,
        ButtonZIndex
    } = attributes;

    const blockProps = useBlockProps();
    

    // Prevent link navigation in the editor and focus on text
    const handleButtonClick = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId = {clientId}
            />

            <BlockControls>
                <AlignmentToolbar
                    value={ButtonAlignment}
                    onChange={(value) => setAttributes({ ButtonAlignment: value })}
                    controls={['left', 'center', 'right', 'justify']}
                />
            </BlockControls>
            
            <div {...blockProps} id={blockID}>
                <div className={`fb-advanced-button-wrapper ${blockID}`} style={{ textAlign: ButtonAlignment }}>
                    <a 
                        className="fb-advanced-button" 
                        href={ButtonUrl} 
                        target={ButtonTargetUrl ? '_blank' : ''}
                        rel={ButtonTargetUrl ? 'noopener noreferrer' : ''}
                        onClick={handleButtonClick}
                    >
                        <RichText
                            tagName="span"
                            value={ButtonText}
                            onChange={(value) => setAttributes({ ButtonText: value })}
                            placeholder={__('Enter button text...', 'frontis-blocks')}
                            className="fb-advanced-button-text"
                        />
                    </a>
                </div>
            </div>
        </>
    );
}
