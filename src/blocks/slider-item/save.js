import {InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const {
        blockId,
        slideTitle,
    } = attributes;

    const blockProps = useBlockProps.save({
        id: blockId,
    });

    return (
        <>
            <div {...blockProps} key={blockId}>
                <div className="swiper-content">
                    <div className="fb-slide-content">
                        <RichText.Content
                            tagName="h2"
                            className="fb-slide-title"
                            value={slideTitle}
                        />
                    </div>
                    <InnerBlocks.Content />
                </div>
            </div>
        </>
    );
}