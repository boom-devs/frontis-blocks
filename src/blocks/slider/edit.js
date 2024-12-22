import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
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
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    loop
                >
                    {sliderItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={`fb-slider-list-item single-item-${item.id}`}>
                                <ul className="fb-nested-items-list">
                                    {(item.nestedItems || []).map((nestedItem) => (
                                        <li key={nestedItem.id} className="fb-nested-item">
                                            <RichText
                                                tagName="span"
                                                className="fb-nested-item-title"
                                                value={nestedItem.title}
                                                onChange={(value) => {
                                                    const updatedNestedItems = item.nestedItems.map((nested) =>
                                                        nested.id === nestedItem.id
                                                            ? { ...nested, title: value }
                                                            : nested
                                                    );
                                                    setAttributes({
                                                        sliderItems: sliderItems.map((i) =>
                                                            i.id === item.id
                                                                ? { ...i, nestedItems: updatedNestedItems }
                                                                : i
                                                        ),
                                                    });
                                                }}
                                                placeholder={__('Add Title', 'frontis-blocks')}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
