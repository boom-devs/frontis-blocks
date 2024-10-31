import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
        testBackgroundColorStyle,
        testBackgroundImageUrl,
        testBackgroundImagePosition,
        testBackgroundImageAttachment,
        testBackgroundImageRepeat,
        testBackgroundImageSize
    } = attributes;

    const blockProps = useBlockProps.save();

    return (
        <>
            <style>{`
                .fb-post-grid-title {
                    ${testBackgroundImageUrl && testBackgroundImageUrl !== 'null' ? `
                        ${testBackgroundImageUrl ? `background-image: url(${testBackgroundImageUrl});` : ''}
                        ${testBackgroundImagePosition ? `background-position: ${testBackgroundImagePosition};` : ''}
                        ${testBackgroundImageAttachment ? `background-attachment: ${testBackgroundImageAttachment};` : ''}
                        ${testBackgroundImageRepeat ? `background-repeat: ${testBackgroundImageRepeat};` : ''}
                        ${testBackgroundImageSize ? `background-size: ${testBackgroundImageSize};` : ''}
                    ` : `
                        background: ${testBackgroundColorStyle};
                    `}
                }
            `}</style>
            <div {...blockProps} id={blockId}>
                <h1 className="fb-post-grid-title">Post Grid</h1>
            </div>
        </>
    );
}
