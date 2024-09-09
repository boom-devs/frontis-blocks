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
        HeadingText, 
        HeadingTag,
        HeadingAlignment,
        SubHeadingSwitcher,
        Separator,
        ShowSeparatorSwitcher,
        SubHeadingText,
        SubHeadingTag,
        SeperatorPosition,
        SubHeadingPosition,

    } = attributes;

    const blockProps = useBlockProps();

    // Define the CSS as a string
    const css = `
        #${blockID} {
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
            />

            <BlockControls>
                <AlignmentToolbar
                    value={HeadingAlignment}
                    onChange={(value) => setAttributes({ HeadingAlignment: value })}
                    controls={['left', 'center', 'right', 'justify']}
                />
            </BlockControls>
            
            <div {...blockProps} id={blockID}>
                <div className={`fb-advanced-wrapper ${blockID}`} style={{textAlign: HeadingAlignment}}>

                    {ShowSeparatorSwitcher && SeperatorPosition === "top" && (
                        <div className='fb-advanced-title-separator'></div>
                    )}

                    {SubHeadingSwitcher && SubHeadingPosition === 'top' && (
                        <RichText
                            tagName={SubHeadingTag}
                            value={SubHeadingText}
                            onChange={(value) => setAttributes({ SubHeadingText: value })}
                            placeholder={__('Sub heading...', 'frontis-blocks')}
                        />
                    )}
                    
                    <RichText
                        tagName={HeadingTag}
                        value={HeadingText}
                        onChange={(value) => setAttributes({ HeadingText: value })}
                        placeholder={__('Advanced Heading', 'frontis-blocks')}
                        className= "fb-advanced"
                    />

                    {SubHeadingSwitcher && SubHeadingPosition === 'bottom' && (
                        <RichText
                            tagName={SubHeadingTag}
                            value={SubHeadingText}
                            onChange={(value) => setAttributes({ SubHeadingText: value })}
                            placeholder={__('Sub heading...', 'frontis-blocks')}
                        />
                    )}
                    
                    {ShowSeparatorSwitcher && SeperatorPosition === "bottom" && (
                        <div className='fb-advanced-title-separator'></div>
                    )}

                </div>
            </div>
        </>
    );
}

