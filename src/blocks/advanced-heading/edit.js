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

export default function Edit({ attributes, setAttributes, clientId}) {
    const { 
        blockId,
        headingText, 
        headingTag,
        headingAlignment,
        subHeadingSwitcher,
        separator,
        showSeparatorSwitcher,
        subHeadingText,
        subHeadingTag,
        separatorPosition,
        subHeadingPosition,
    } = attributes;
    
    const blockProps = useBlockProps();

    // Define the CSS as a string
    const css = `
        #${blockId} {
            padding: 20px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
        }
    `;
    
    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <BlockControls>
                <AlignmentToolbar
                    value={headingAlignment}
                    onChange={(value) => setAttributes({ headingAlignment: value })}
                    controls={['left', 'center', 'right', 'justify']}
                />
            </BlockControls>
            
            <div {...blockProps} id={blockId}>
                <div className={`fb-advanced-wrapper ${blockId}`} style={{textAlign: headingAlignment}}>

                    {showSeparatorSwitcher && separatorPosition === "top" && (
                        <div className='fb-advanced-title-separator'></div>
                    )}

                    {subHeadingSwitcher && subHeadingPosition === 'top' && (
                        <RichText
                            tagName={subHeadingTag}
                            value={subHeadingText}
                            onChange={(value) => setAttributes({ subHeadingText: value })}
                            placeholder={__('Sub heading...', 'frontis-blocks')}
                        />
                    )}
                    
                    <RichText
                        tagName={headingTag}
                        value={headingText}
                        onChange={(value) => setAttributes({ headingText: value })}
                        placeholder={__('Advanced Heading', 'frontis-blocks')}
                        className="fb-advanced"
                    />

                    {subHeadingSwitcher && subHeadingPosition === 'bottom' && (
                        <RichText
                            tagName={subHeadingTag}
                            value={subHeadingText}
                            onChange={(value) => setAttributes({ subHeadingText: value })}
                            placeholder={__('Sub heading...', 'frontis-blocks')}
                        />
                    )}
                    
                    {showSeparatorSwitcher && separatorPosition === "bottom" && (
                        <div className='fb-advanced-title-separator'></div>
                    )}

                </div>
            </div>
        </>
    );
}
