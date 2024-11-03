import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
        testBackgroundType,
        testCustomGradientSwitcher,
        testCustomGradientInputValue,
        testGradientColor,
        testBackgroundImageUrl,
        testBackgroundImagePosition,
        testBackgroundImageAttachment,
        testBackgroundImageRepeat,
        testBackgroundImageSize,
        testClassicColor,

        hoverBackgroundType,
        hoverCustomGradientSwitcher,
        hoverCustomGradientInputValue,
        hoverGradientColor,
        hoverBackgroundImageUrl,
        hoverBackgroundImagePosition,
        hoverBackgroundImageAttachment,
        hoverBackgroundImageRepeat,
        hoverBackgroundImageSize,
        hoverClassicColor,
        
    } = attributes;

    const blockProps = useBlockProps.save();

    return (
        <>
            <style>{`
                .fb-post-grid-title {
                    ${testBackgroundType === 'gradient' ? `
                        background: ${testCustomGradientSwitcher && testCustomGradientInputValue ? testCustomGradientInputValue : testGradientColor};
                    ` : testBackgroundImageUrl && testBackgroundImageUrl !== 'null' ? `
                        ${testBackgroundImageUrl ? `background-image: url(${testBackgroundImageUrl});` : ''}
                        ${testBackgroundImagePosition ? `background-position: ${testBackgroundImagePosition};` : ''}
                        ${testBackgroundImageAttachment ? `background-attachment: ${testBackgroundImageAttachment};` : ''}
                        ${testBackgroundImageRepeat ? `background-repeat: ${testBackgroundImageRepeat};` : ''}
                        ${testBackgroundImageSize ? `background-size: ${testBackgroundImageSize};` : ''}
                    ` : `
                        background: ${testClassicColor};
                    `}
                }
                .fb-post-grid-title:hover {
                    ${hoverBackgroundType === 'gradient' ? `
                        background: ${hoverCustomGradientSwitcher && hoverCustomGradientInputValue ? hoverCustomGradientInputValue : hoverGradientColor};
                    ` : hoverBackgroundImageUrl && hoverBackgroundImageUrl !== 'null' ? `
                        ${hoverBackgroundImageUrl ? `background-image: url(${hoverBackgroundImageUrl});` : ''}
                        ${hoverBackgroundImagePosition ? `background-position: ${hoverBackgroundImagePosition};` : ''}
                        ${hoverBackgroundImageAttachment ? `background-attachment: ${hoverBackgroundImageAttachment};` : ''}
                        ${hoverBackgroundImageRepeat ? `background-repeat: ${hoverBackgroundImageRepeat};` : ''}
                        ${hoverBackgroundImageSize ? `background-size: ${hoverBackgroundImageSize};` : ''}
                    ` : `
                        background: ${hoverClassicColor};
                    `}
                }
            `}</style>
            <div {...blockProps} id={blockId}>
                <h1 className="fb-post-grid-title">Post Grid</h1>
            </div>
        </>
    );
}
