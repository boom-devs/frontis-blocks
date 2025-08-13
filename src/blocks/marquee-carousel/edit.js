    import { __ } from '@wordpress/i18n';
    import {
        RichText,
        useBlockProps,
        BlockControls,
        useInnerBlocksProps,
    } from '@wordpress/block-editor';
    import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
    import { useState, useEffect, useRef, useMemo } from '@wordpress/element';
    import { useDispatch, useSelect } from '@wordpress/data';
    import { createBlock } from '@wordpress/blocks';
    import Inspector from './inspector';
    import { Swiper } from 'swiper/react';

    import './editor.scss';

    const ALLOWED_BLOCKS = ['frontis-blocks/marquee-carousel-item'];


    import { 
        Navigation, 
        Pagination, 
        Autoplay, 
        Manipulation,
        Mousewheel,
        EffectFade,
        EffectCube,
        EffectCoverflow,
        EffectFlip,
        EffectCreative,
        EffectCards
    } from 'swiper/modules';
    
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/mousewheel';
    import 'swiper/css/effect-fade';
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/effect-flip';
    import 'swiper/css/effect-creative';

    export default function Edit({ attributes, setAttributes, clientId }) {

        const {
            blockId,
        } = attributes;
        
        const innerBlocks = useSelect(
            (select) => select('core/block-editor').getBlocks(clientId),
            [clientId]
        );

        const blockProps = useBlockProps({
            className: `fb-marquee-slider-container ${blockId}`,
        });

        const getSliderTemplate = useMemo(() => [
            ['frontis-blocks/marquee-carousel-item'],
            ['frontis-blocks/marquee-carousel-item'],
            ['frontis-blocks/marquee-carousel-item'],
            ['frontis-blocks/marquee-carousel-item'],
        ], []);


        const innerBlocksProps = useInnerBlocksProps(
            {
                className: `swiper-wrapper fb-swiper-wrapper`,
                slot: 'container-start',
            },
            {
                allowedBlocks: ALLOWED_BLOCKS,
                template: getSliderTemplate,
                renderAppender: false,
                orientation: 'horizontal',
            }
        );


         // First, move settings into a useMemo to avoid unnecessary recalculations
        const settings = useMemo(() => ({
            loop: true,
            slidesPerView:'auto',
            spaceBetween: 0,
            centeredSlides: true,
            speed: 6000,
            // autoplay: {
            // delay: 1,
            // },
            autoplay:false,
            allowTouchMove: false,
            disableOnInteraction: true
        }), []);
        
        return (
            <>
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    clientId={clientId}
                />

                <div {...blockProps} >

                    <Swiper
                        {...settings}
                        modules={[
                            Navigation,
                            Pagination,
                            Autoplay,
                            Manipulation,
                            Mousewheel,
                            EffectFade,
                            EffectCube,
                            EffectCoverflow,
                            EffectFlip,
                            EffectCreative,
                            EffectCards
                        ]}
                    >
                        <div {...innerBlocksProps} />
                    </Swiper>
                </div>
            </>
        );
    }