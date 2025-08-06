import { __ } from '@wordpress/i18n';
import {
    RichText,
    useBlockProps,
    BlockControls,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import { arrayMove } from '@dnd-kit/sortable';
import Inspector from './inspector';

import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {

	const {
        blockId,
        sliderItems,

        slideWidth,
        slideWidthUnits,
        slideHeight,
        slideHeightUnits,

        autoplay,
        autoplayDirection,
        reverseDirection,
        speed,
        showNavigation,
        showPagination,

    } = attributes;

	const blockProps = useBlockProps({
		className: `wp-block-uagb-container client-logo-wrapper ${blockId}`,
	});

    let defaultImageUrl = '';
    if (typeof FrontisBlocksData !== 'undefined') {
        defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
    }

    const [sliderItemList, setSliderItemList] = useState(() => {
        return sliderItems.map(item => ({
            ...item,
            marqueeCarouselImageUrl: item.marqueeCarouselImageUrl || defaultImageUrl,
        }));
    });

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = sliderItems.findIndex(item => item.id === active.id);
            const newIndex = sliderItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(sliderItems, oldIndex, newIndex);
            setAttributes({ sliderItems: updatedItems });
            setSliderItemList(updatedItems);
        }
    };

    const handleDuplicateItem = (id) => {
        const itemToDuplicate = sliderItems.find(item => item.id === id);
        if (itemToDuplicate) {
            const newItem = { ...itemToDuplicate, id: `item-${sliderItems.length + 1}` };
            setAttributes({ sliderItems: [...sliderItems, newItem] });
            setSliderItemList([...sliderItemList, newItem]);
        }
    };

    const handleAddItem = () => {
        const newItem = {
            id: `item-${sliderItems.length + 1}`,
            marqueeCarouselImageUrl: defaultImageUrl,
            marqueeCarouselImageAlt: '',
            marqueeCarouselImageID: '',
            showContentSwitcher: false,
            marqueeCarouselText: 'Carousel Text',
            marqueeCarouseHoverText: '',
        };
        setAttributes({ sliderItems: [...sliderItems, newItem] });
        setSliderItemList([...sliderItemList, newItem]);
    };

    const handleChangeItem = (id, key, value) => {
        
        const updatedItems = sliderItemList.map(item => {
            if (item.id === id) {
                if (key === 'marqueeCarouselImageID') { 
                    // Get the full image data from WordPress media library
                    const image = wp.media.attachment(value).toJSON();
                    return {
                        ...item,
                        [key]: value,
                        'marqueeCarouselImageUrl': image.url, 
                        'marqueeCarouselImageAlt': image.alt || '',
                    };
                }
                return { ...item, [key]: value };
            }
            return item;
        });
        
        setSliderItemList(updatedItems);
        setAttributes({ sliderItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = sliderItemList.filter(item => item.id !== id);
        setAttributes({ sliderItems: updatedItems });
        setSliderItemList(updatedItems);
    };

    //Sync sliderItemList with attributes.sliderItems
    useEffect(() => {
        setAttributes({ sliderItems: sliderItemList });
    }, [sliderItemList, setAttributes]);


	const slickRef = useRef(null);

	useEffect(() => {
		if (!window.jQuery || !slickRef.current) return;
		const $ = window.jQuery;
		const $slider = $(slickRef.current);

		if ($slider.hasClass('slick-initialized')) {
			$slider.slick('unslick');
		}

		$slider.slick({
			speed: 2000,
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 0,
			centerMode: true,
			cssEase: 'linear',
			arrows: true,
			dots: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			variableWidth: false,
			touchMove: false
		});

		return () => {
			if ($slider.hasClass('slick-initialized')) {
				$slider.slick('unslick');
			}
		};
	}, []);


	const renderSliderToolbarControls = () => {
        return (
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="plus"
                        label={ __( 'Add New Slide', 'frontis-blocks' ) } 
                        onClick={handleAddItem}
                    />
                    <ToolbarButton
                        icon="admin-page"
                        label={ __( 'Duplicate Slide', 'frontis-blocks' ) } 
                        onClick={() => handleDuplicateItem(sliderItems[sliderItems.length - 1].id)}
                    />
                </ToolbarGroup>
            </BlockControls>
        );
    };

    const updateItem = (index, field, value) => {
        const newItems = sliderItems.map((item, i) => {
            if (i === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setAttributes({ sliderItems: newItems });
    };

	const logos = [
		'https://wpspectra.com/wp-content/uploads/2025/03/ZipWP-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/Astra-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/Crafter-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/PP-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/ZipWP-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/Astra-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/Crafter-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/PP-logo.svg',
	];

	return (
		<>
		    <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
                handleDragEnd={handleDragEnd}
                handleAddItem={handleAddItem}
                handleChangeItem={handleChangeItem}
                handleDeleteItem={handleDeleteItem}
                handleDuplicateItem={handleDuplicateItem}
            />

			{renderSliderToolbarControls()}

			<div {...blockProps}>
				<div className="client-logos-list-before"></div>

				<div className="wp-block-uagb-image-gallery" style={{ visibility: 'visible' }}>
					<div className="spectra-image-gallery spectra-image-gallery__layout--carousel">
						<div className="uagb-slick-carousel" ref={slickRef}>
							{sliderItemList.map((item, index) => (
								<div key={item.id}>
									<div className="spectra-image-gallery__media-wrapper">
										<div className="spectra-image-gallery__media spectra-image-gallery__media--carousel">
											<img
												decoding="async"
												className="spectra-image-gallery__media-thumbnail spectra-image-gallery__media-thumbnail--carousel"
												src={item.marqueeCarouselImageUrl}
												alt={item.marqueeCarouselImageAlt || `Client Logo ${index + 1}`}
											/>
											<div className="spectra-image-gallery__media-thumbnail-blurrer"></div>
											<div className="spectra-image-gallery__media-thumbnail-caption-wrapper spectra-image-gallery__media-thumbnail-caption-wrapper--overlay"></div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="client-logos-list-after"></div>
			</div>
		</>
	);
}
