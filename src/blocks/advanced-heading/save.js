import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { 
        blockID,
        HeadingText, 
        HeadingTag, 
        HeadingBackgroundColor,
        HeadingAlignment,
        Separator,
        SubHeadingSwitcher,
        ShowSeparatorSwitcher,
        SubHeadingText,
        SubHeadingTag,
        SeperatorPosition,
        SubHeadingPosition,
        HeadingFontFamily,
        HeadingFontSize,
        HeadingFontSizeUnits,
        HeadingFontWeight,
        HeadingFontStyle,
        HeadingTextTransform,
        HeadingTextDecoration,
        HeadingLetterSpacing,
        HeadingLineHeight,
        HeadingLetterSpacingUnits,
        HeadingLineHeightUnits,
        HeadingColor,

    } = attributes;

    const blockProps = useBlockProps.save({
        id: blockID,
    });


    return (
        <>
            <style>
            {`
                .fb-advanced-heading-wrapper .fb-advanced-title-separator {
                    display: inline-block;
                    margin: 0 0 10px 0;
                    width: 12%;
                    margin-bottom: 15px;
                    border-top: 2px ${Separator} #0170b9;
                }
            `}
            </style>

            <div {...blockProps}>
                <div className="fb-advanced-heading-wrapper" style={{textAlign: HeadingAlignment}}>
                    {ShowSeparatorSwitcher && SeperatorPosition === "top" && (
                        <div className='fb-advanced-title-separator'></div>
                    )}

                    {SubHeadingSwitcher && SubHeadingPosition === 'top' && ( 
                        <RichText.Content
                            tagName={SubHeadingTag}
                            value={SubHeadingText}
                            style={{
                                fontFamily: HeadingFontFamily !== 'default' ? HeadingFontFamily : undefined,
                            }}
                        />
                    )}

                    <RichText.Content
                        tagName={HeadingTag}
                        value={HeadingText}
                        className= "fb-advanced-heading"
                    />

                    {SubHeadingSwitcher && SubHeadingPosition === 'bottom' && ( 
                        <RichText.Content
                            tagName={SubHeadingTag}
                            value={SubHeadingText}
                            style={{
                                fontFamily: HeadingFontFamily !== 'default' ? HeadingFontFamily : undefined,
                            }}
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
