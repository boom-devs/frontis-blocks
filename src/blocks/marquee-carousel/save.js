import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const {
        blockId,
        sliderItems,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-marquee-carousel-container ${blockId}`,
    });

    return (
        <div {...blockProps}>
            <div className="swiper">
                <div className="swiper-wrapper fb-marquee-carousel-wrapper">
                    {sliderItems.map((item) => (
                        <div key={item.id} className={`swiper-slide`}>
                            <div className={`${blockId} fb-marquee-carousel-content-wrapper ${item.id}`}>
                                <div className="fb-marquee-carousel-content-inner-wrapper">
                                    <div className="fb-marquee-carousel-list-item">
                                        <div className="fb-marquee-carousel-list-content">
                                            {item.subTitle && (
                                                <div className="fb-marquee-carousel-subtitle-wrapper">
                                                    <RichText.Content
                                                        tagName="span"
                                                        className="fb-marquee-carousel-subtitle"
                                                        value={item.subTitle}
                                                    />
                                                </div>
                                            )}
                                            {item.title && (
                                                <div className="fb-marquee-carousel-title-wrapper">
                                                    <RichText.Content
                                                        tagName="h3"
                                                        className="fb-marquee-carousel-title"
                                                        value={item.title}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}