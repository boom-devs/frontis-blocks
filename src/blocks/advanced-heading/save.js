import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

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
        headingIconAlign,
        headingIcon,
        headingIconSwitcher,
    } = attributes;

    const blockProps = useBlockProps.save({
        id: blockId,
    });


    return (
        <>
            <style>
                {`
                    .${blockId} .fb-advanced-icon {
                        width: 30px;
                        height: 30px;
                    }
                `}
            </style>
            <div {...blockProps}>
                <div className={`fb-advanced-wrapper ${blockId}`} style={{textAlign: headingAlignment}}>

                    {headingIconAlign === 'icon' && headingIconSwitcher && (
                        <div className="fb-advanced-icon">
                            {renderSVG(headingIcon)}
                        </div>
                    )}

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
