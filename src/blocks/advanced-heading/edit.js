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
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
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
        headingIconAlign,
        headingIcon,
    } = attributes;
    
    const blockProps = useBlockProps({
        className: `fb-advanced-heading-main-wrapper ${blockId}`,
    });


    // Define the CSS as a string
    
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
            
            <div {...blockProps}>
                <div className={`fb-advanced-wrapper ${blockId}`} style={{textAlign: headingAlignment}}>


                    {headingIconAlign === 'icon' && (
                        <div className="fb-advanced-icon">{renderSVG(headingIcon)}</div>
                    )}

                    {showSeparatorSwitcher && separatorPosition === "top" && (
                        <div className='fb-advanced-title-separator'></div>
                    )}

                    {subHeadingSwitcher && subHeadingPosition === 'top' && (
                        <RichText
                            tagName={subHeadingTag}
                            value={subHeadingText}
                            onChange={(value) => setAttributes({ subHeadingText: value })}
                            placeholder={__('Sub heading...', 'frontis-blocks')}
                            className="fb-advanced-sub-heading"
                        />
                    )}
                    
                    <RichText
                        tagName={headingTag}
                        value={headingText}
                        onChange={(value) => setAttributes({ headingText: value })}
                        placeholder={__('Advanced Heading', 'frontis-blocks')}
                        className="fb-advanced-heading"
                    />

                    {subHeadingSwitcher && subHeadingPosition === 'bottom' && (
                        <RichText
                            tagName={subHeadingTag}
                            value={subHeadingText}
                            onChange={(value) => setAttributes({ subHeadingText: value })}
                            placeholder={__('Sub heading...', 'frontis-blocks')}
                            className="fb-advanced-sub-heading"
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
