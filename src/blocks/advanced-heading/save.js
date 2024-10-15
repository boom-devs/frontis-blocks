import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { 
        blockId,
        headingText, 
        headingTag,
        headingAlignment,
        subHeadingSwitcher,
        showSeparatorSwitcher,
        subHeadingText,
        subHeadingTag,
        separatorPosition,
        subHeadingPosition,

    } = attributes;

    const blockProps = useBlockProps.save({
        id: blockId,
    });


    return (
        <>
            <div {...blockProps}>
                <div className={`fb-advanced-wrapper ${blockId}`} style={{textAlign: headingAlignment}}>
                    {showSeparatorSwitcher && separatorPosition === "top" && (
                        <div className='fb-advanced-title-separator'></div>
                    )}

                    {subHeadingSwitcher && subHeadingPosition === 'top' && ( 
                        <RichText.Content
                            tagName={subHeadingTag}
                            value={subHeadingText}
                        />
                    )}
                    
                    <RichText.Content
                        tagName={headingTag}
                        value={headingText}
                        className="fb-advanced"
                    />

                    {subHeadingSwitcher && subHeadingPosition === 'bottom' && ( 
                        <RichText.Content
                            tagName={subHeadingTag}
                            value={subHeadingText}
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
