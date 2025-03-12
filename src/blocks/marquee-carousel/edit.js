import { __ } from '@wordpress/i18n';
import {RichText, useBlockProps, BlockControls, } from '@wordpress/block-editor';
import { 
    Toolbar,
    ToolbarGroup,
    ToolbarButton
} from '@wordpress/components';
import Inspector from './inspector';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        sliderItems,
    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-marquee-carousel-container ${blockId}`,
    });


    const handleAddItem = () => {
        const newItem = {
            id: `item-${sliderItems.length + 1}`,
            subTitle: 'Enter your subtitle here',
            title: `Slider Item ${sliderItems.length + 1}`,
        };
        setAttributes({ sliderItems: [...sliderItems, newItem] });
    };

    const renderSliderToolbarControls = () => {
        return (
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="plus"
                        label={ __( 'Add New Slide', 'gutenslider-blocks' ) }
                        onClick={handleAddItem}
                    />
                </ToolbarGroup>
            </BlockControls>
        );
    };

    // Add this function inside the Edit component
    const updateItem = (index, field, value) => {
        const newItems = sliderItems.map((item, i) => {
            if (i === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setAttributes({ sliderItems: newItems });
    };

    return (
        <>
            <Inspector 
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
                onAddItem = {handleAddItem}
            />

            {renderSliderToolbarControls()}

            <div {...blockProps}>
                <div className="swiper">
                    <div className="swiper-wrapper fb-marquee-carousel-wrapper">
                        {sliderItems.map((item, index) => (
                            <div key={item.id} className={`swiper-slide`}>
                                <div className={`${blockId} fb-marquee-carousel-content-wrapper ${item.id}`}>
                                    <div className="fb-marquee-carousel-content-inner-wrapper">
                                        <div className="fb-marquee-carousel-list-item">
                                            <div className="fb-marquee-carousel-list-content">
                                                <div className="fb-marquee-carousel-subtitle-wrapper">
                                                    <RichText
                                                        tagName="span"
                                                        className="fb-marquee-carousel-subtitle"
                                                        value={item.subTitle}
                                                        onChange={(value) => updateItem(index, 'subTitle', value)}
                                                        placeholder="Enter subtitle"
                                                    />
                                                </div>
                                                <div className="fb-marquee-carousel-title-wrapper">
                                                    <RichText
                                                        tagName="h3"
                                                        className="fb-marquee-carousel-title"
                                                        value={item.title}
                                                        onChange={(value) => updateItem(index, 'title', value)}
                                                        placeholder="Enter title"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}