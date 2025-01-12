import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    BlockControls,
    useInnerBlocksProps,
    InnerBlocks,
    store as blockEditorStore
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { withSelect, withDispatch, useDispatch, useSelect } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { useState, useMemo, useEffect, useRef } from "@wordpress/element";
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import Inspector from './inspector';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Manipulation } from 'swiper/modules';
import { useDeviceType } from "@Config/displayType";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ALLOWED_BLOCKS = ['frontis-blocks/slider-item'];

const Edit = (props) => {
    const {
        attributes,
        setAttributes,
        clientId,
        block,
        blockParents,
        insertBlock,
    } = props;


    const {
        blockId,
        slideContent,
        slideItem,
        transitionSpeed,
        displayArrows,
		displayDots,
        autoplay,
        slidePerView,
        infiniteLoop,
        transitionSwitcher,
        allowTouchMove,
    } = attributes;


    const deviceType = useDeviceType();

    const swiperRef = useRef();
	const sliderPaginationRef = useRef();
	const sliderNavPrevRef = useRef();
	const sliderNavNextRef = useRef();

    const [swiperInstance, setSwiperInstance] = useState(null);
	const { selectBlock } = useDispatch( blockEditorStore );
    // const { replaceInnerBlocks } = wp.data.dispatch('core/block-editor');
    // const innerBlocks = wp.data.select('core/block-editor').getBlocks(clientId);

    const hasChildrenClass = hasChildren ? 'fb-slider-has-children' : '';
	const listViewClass = isListViewOpen ? 'fb-list-view-enabled' : '';
	const blockProps = useBlockProps( {
		className: `fb-block-${ blockId } ${ hasChildrenClass } ${ listViewClass } fb-slider-container fb-slider-editor-wrap fb-editor-preview-mode-${ deviceType.toLowerCase() }`,
	} );

    const { isListViewOpen, hasChildren } = useSelect( ( select ) => {
		const getStore = select( 'core/editor' ) || select( 'core/edit-widgets' );

		return {
			isListViewOpen: getStore?.isListViewOpened ? getStore.isListViewOpened() : false,
			hasChildren: 0 !== select( 'core/block-editor' )?.getBlocks( clientId ).length,
		};
	}, [] );


    const getSliderTemplate = useMemo(() => [
        ['frontis-blocks/slider-item'],
        ['frontis-blocks/slider-item'],
    ], [slideItem, slideContent]);

    // const innerBlocksProps = useInnerBlocksProps(
    //     {
    //         className: `swiper-wrapper`,
    //         slot: 'container-start',
    //     },
    //     {
    //         allowedBlocks: ALLOWED_BLOCKS,
    //         template: getSliderTemplate,
    //         renderAppender: InnerBlocks.ButtonBlockAppender,
    //         orientation: 'horizontal',
    //     }
    // );

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


    const setSwiperNavigationPagination = ( swiperInst ) => {
		if ( swiperInst?.params?.navigation ) {
			swiperInst.params.navigation.prevEl = sliderNavPrevRef.current;
			swiperInst.params.navigation.nextEl = sliderNavNextRef.current;

			// Re-init navigation
			swiperInst.navigation.destroy();
			swiperInst.navigation.init();
			swiperInst.navigation.update();
		}

		if ( swiperInst?.params?.pagination ) {
			swiperInst.params.pagination.el = sliderPaginationRef.current;
			swiperInst.params.pagination.clickable = true;

			// Re-init pagination
			swiperInst.pagination.init();
			swiperInst.pagination.render();
			swiperInst.pagination.update();
		}
	};


    const settings = {
		slidesPerView: slidePerView,
		autoplay: autoplay,
		speed: transitionSpeed,
		loop: infiniteLoop,
		effect: transitionSwitcher,
		allowTouchMove: allowTouchMove,
		onBeforeInit( swiperInst ) {
			swiperRef.current = swiperInst;
			setSwiperInstance( swiperInst );
		},
		onAfterInit( swiperInst ) {
			setTimeout( () => {
				setSwiperNavigationPagination( swiperInst );
			} );
		},
	};


    useEffect( () => {
		if ( swiperInstance ) {
			swiperInstance.update();
		}
	}, [ props ] );

    useEffect( () => {
		if ( swiperInstance ) {
			setSwiperNavigationPagination( swiperInstance );
		}
	}, [ displayArrows, displayDots ] );

    useEffect( () => {
		if ( swiperInstance && swiperInstance.slides ) {
			const slidesCount = swiperInstance.slides.length;

			// Slide to the slide index more than number of slides, this will reset slider UI.
			swiperInstance.slideTo( slidesCount + 1, transitionSpeed, false );

			setTimeout( () => {
				// Reset Slider to first slide to avoid UI break.
				swiperInstance.slideTo( 0, 0, false );
			}, 100 );

			const sliderBlocks = [ 'frontis-blocks/slider', 'frontis-blocks/slider-item' ];
			let hasSliderParent = false;

			for ( let index = 0; index < blockParents.length; index++ ) {
				if ( sliderBlocks.includes( blockParents[ index ].name ) ) {
					hasSliderParent = true;
					break;
				}
			}

			if ( hasSliderParent ) {
				selectBlock( block.clientId );
			}
		}
	}, [ isListViewOpen ] );

    // const getBlockControls = () => (
    //     <BlockControls>
    //         <ToolbarGroup>
    //             <ToolbarButton
    //                 icon="insert"
    //                 label={__('Add Slide', 'frontis-blocks')}
    //                 onClick={() => {
    //                     if (block && block.innerBlocks) {
    //                         const currentIndex = swiperInstance ? swiperInstance.activeIndex : 0;

    //                         const newSlideBlock = createBlock('frontis-blocks/slider-item');
    //                         const newInnerBlocks = [...innerBlocks, newSlideBlock];
    //                         replaceInnerBlocks(clientId, newInnerBlocks, true);

    //                         setAttributes({ slideItem: attributes.slideItem + 1 });

    //                         if (swiperInstance) {
    //                             swiperInstance.slideTo(currentIndex, 0);
    //                         }
    //                     }
    //                 }}
    //             />
    //         </ToolbarGroup>
    //     </BlockControls>
    // );


    const getBlockControls = () => {
		return (
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="insert"
						label={ __( 'Add Slide', 'ultimate-addons-for-gutenberg' ) }
						onClick={ () => {
							insertBlock( createBlock( 'frontis-blocks/slider-item' ), block.innerBlocks.length, block.clientId );

							setAttributes( { slideItem: attributes.slideItem + 1 } );
							swiperInstance.activeIndex = attributes.slideItem + 1;
						} }
					/>
				</ToolbarGroup>
			</BlockControls>
		);
	};


    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
            {getBlockControls()}

            <div {...blockProps}>
                <Swiper
                    ref={ swiperRef }
                    { ...settings }
                    modules={ [ Navigation, Pagination, Autoplay, Manipulation ] }

                    navigation={
                        displayArrows
                            ? {
                                    nextEl: '#block-' + clientId + ' .swiper-button-next',
                                    prevEl: '#block-' + clientId + ' .swiper-button-prev',
                              }
                            : false
                    }
                    pagination={
                        displayDots
                            ? {
                                    el: '#block-' + clientId + ' .swiper-pagination',
                                    clickable: true,
                              }
                            : false
                    }

                    onSwiper={(swiper) => {
                        setSwiperInstance(swiper);
                        swiper.on('slideChange', () => {
                            setAttributes({ currentSlideIndex: swiper.activeIndex });
                        });
                    }}
                >
                    <div {...innerBlocksProps} />
                </Swiper>
                { displayDots && <div className="swiper-pagination" ref={ sliderPaginationRef }></div> }
                { displayArrows && (
                    <>
                        <div className="swiper-button-prev" ref={ sliderNavPrevRef }></div>
                        <div className="swiper-button-next" ref={ sliderNavNextRef }></div>
                    </>
                ) }
            </div>
        </>
    );
};

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
