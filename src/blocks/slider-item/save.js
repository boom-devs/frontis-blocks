import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const {
        blockId,
        slideTitle,
    } = attributes;

    return (
        <div className={`fb-slide-main-wrapper ${blockId} swiper-slide`}>
            <div className="fb-slide-content">
                <RichText.Content
                    tagName="h2"
                    className="fb-slide-title"
                    value={slideTitle}
                />
            </div>
        </div>
    );
}