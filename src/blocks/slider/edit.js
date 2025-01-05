import { __ } from '@wordpress/i18n';
import {RichText, useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { blockId, sliderItems } = attributes;

    const blockProps = useBlockProps({
        className: `fb-slider-main-wrapper ${blockId}`,
    });

    return (
        <>
            <Inspector 
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            <div {...blockProps}>
                <Swiper
                    className='swiper-container-outer'
                    modules={[Navigation, Pagination]}
                    // spaceBetween={50}
                    slidesPerView={1}
                    speed={1000}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                >
                    {sliderItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={`fb-slider-content-wrapper item-${item.id}`}>
                                <div className='fb-slider-content-inner-wrapper'>
                                    <div className={`fb-slider-list-item`}>
                                        <div className="fb-slider-list-content">
                                            <RichText
                                                tagName="h3"
                                                className="fb-slider-title"
                                                value={item.title}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        sliderItems: sliderItems.map((sliderItem) =>
                                                            sliderItem.id === item.id
                                                                ? { ...sliderItem, title: value }
                                                                : sliderItem
                                                        ),
                                                    })
                                                }
                                                placeholder={__('Slider Title', 'frontis-blocks')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
