import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { withSelect, withDispatch, useDispatch, useSelect } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { useState, useEffect, useMemo } from "@wordpress/element";
import { compose } from '@wordpress/compose';
import Inspector from './inspector';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ALLOWED_BLOCKS = ['frontis-blocks/slider-item'];

// function Edit(props) {

const Edit = ( props ) => {

    const {
        attributes,
        setAttributes,
        clientId,
        block,
        insertBlock,
    } = props;
    
    const {
        blockId,
        autoplay,
        autoplaySpeed,
        navigationArrows,
        displayIndicators,
        indicatorColor,
        slideContent,
        slideItem,
    } = attributes;

    	// Centralize slider instance.
	const [ swiperInstance, setSwiperInstance ] = useState( null );

	props = { ...props, swiperInstance, setSwiperInstance };

    const { replaceInnerBlocks } = useDispatch('core/block-editor');
    const innerBlocks = useSelect(
        (select) => select('core/block-editor').getBlocks(clientId),
        [clientId]
    );

    const blockProps = useBlockProps({
        className: `fb-slider-main-wrapper ${blockId}`,
    });

    const getBlockControls = () => {
        return (
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="insert"
                        label={__('Add Slide', 'ultimate-addons-for-gutenberg')}
                        onClick={() => {
                            if (block && block.innerBlocks) {
                                const newSlideBlock = createBlock('frontis-blocks/slider-item');
                                insertBlock(newSlideBlock, block.innerBlocks.length, block.clientId);
                                setAttributes({ slideItem: attributes.slideItem + 1 });
                                
                                if (swiperInstance) {
                                    swiperInstance.slideNext();
                                }
                            }
                        }}
                    />
                </ToolbarGroup>
            </BlockControls>
        );
    };

    const getSliderTemplate = useMemo(() => {
        const sliderTemplate = [
            [
                'frontis-blocks/slider-item',
            ],
            [
                'frontis-blocks/slider-item',
            ],
            [
                'frontis-blocks/slider-item',
            ],
            [
                'frontis-blocks/slider-item',
            ],
        ];
    
        return sliderTemplate;
    }, []); // Removed dynamic dependencies
    

    const innerBlocksProps = useInnerBlocksProps(
		{
			className: `swiper-wrapper`,
			slot: 'container-start',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: getSliderTemplate,
			renderAppender: false,
			orientation: 'horizontal',
		}
	);

    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
            {getBlockControls()}

            <div {...blockProps}>
                <Swiper
                    className="swiper-container-outer"
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    speed={autoplaySpeed || 1000}
                    navigation={navigationArrows}
                    pagination={{ clickable: displayIndicators }}
                    loop
                    onSwiper={setSwiperInstance}
                >
                    <div {...innerBlocksProps} />
                </Swiper>
            </div>
        </>
    );
}

export default compose(
    withSelect((select, props) => {
        const { getSelectedBlock, getBlockParents } = select('core/block-editor');
        const selectedBlock = getSelectedBlock();
        const parentBlockIds = getBlockParents(selectedBlock?.clientId);
        const blockParents = select('core/block-editor').getBlocksByClientId(parentBlockIds);

        return {
            block: select('core/block-editor').getBlock(props.clientId),
            blockParents,
        };
    }),
    withDispatch((dispatch) => {
        const { insertBlock } = dispatch('core/block-editor');
        return {
            insertBlock,
        };
    })
)(Edit);
