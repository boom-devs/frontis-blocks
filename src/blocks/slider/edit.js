import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, useInnerBlocksProps } from '@wordpress/block-editor';

import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { withSelect, useDispatch, useSelect } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { useEffect, useMemo } from "@wordpress/element";
import Inspector from './inspector';
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ALLOWED_BLOCKS = [ 'frontis-blocks/slider-item' ];

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Edit(props) {

    const {
        attributes,
        setAttributes,
        clientId,
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

    const { replaceInnerBlocks } = useDispatch('core/block-editor');
    const innerBlocks = useSelect(
        (select) => select('core/block-editor').getBlocks(clientId),
        [clientId]
    );

    const blockProps = useBlockProps({
        className: `fb-slider-main-wrapper ${blockId}`,
    });

    const applyWithSelect = withSelect( ( select, props ) => {
        // eslint-disable-line no-shadow
        const { insertBlock } = useDispatch( 'core/block-editor' );

        const { getSelectedBlock, getBlockParents } = select( 'core/block-editor' );
        const selectedBlock = getSelectedBlock();
        const parentBlockIds = getBlockParents( selectedBlock?.clientId );
        const blockParents = select( 'core/block-editor' ).getBlocksByClientId( parentBlockIds );

        return {
            insertBlock,
            block: ( select( 'core/block-editor' ) || select( 'core/editor' ) ).getBlock( props.clientId ),
            blockParents,
        };
    } );

    const getBlockControls = () => {
        return (
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="insert"
                        label={ __( 'Add Slide', 'ultimate-addons-for-gutenberg' ) }
                        onClick={ () => {
                            // Ensure that the block and innerBlocks are properly defined
                            const { block, insertBlock } = props;
                            if ( block && block.innerBlocks ) {
                                const newSlideBlock = createBlock( 'frontis-blocks/slider-item' );
                                // Insert the new block into the correct position
                                insertBlock( newSlideBlock, block.innerBlocks.length, block.clientId );

                                // Update attributes after inserting the block
                                setAttributes( { slideItem: attributes.slideItem + 1 } );
                                swiperInstance.activeIndex = attributes.slideItem + 1;
                            }
                        } }
                    />
                </ToolbarGroup>
            </BlockControls>
        );
    };





    const getSliderTemplate = useMemo(() => {
        const sliderTemplate = [
            [
                'frontis-blocks/slider-item',
                {},
                [
                    [
                        'Hello world 1',
                    ],
                ],
            ],
            [
                'frontis-blocks/slider-item',
                {},
                [
                    [
                        'Hello world 2',
                    ],
                ],
            ],
            [
                'frontis-blocks/slider-item',
                {},
                [
                    [
                        'Hello world 3',
                    ],
                ],
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
            { getBlockControls() }

            <div {...blockProps}>
                <Swiper
                    className="swiper-container-outer"
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    speed={autoplaySpeed || 1000}
                    navigation={navigationArrows}
                    pagination={{ clickable: displayIndicators }}
                    loop
                >

                    <div { ...innerBlocksProps } />
                </Swiper>
            </div>
        </>
    );
}
