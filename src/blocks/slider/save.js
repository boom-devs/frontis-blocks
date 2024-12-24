import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './style.scss'; // Ensure you have styles for the front end if needed

export default function Save({ attributes }) {
    const { 

        blockId,
        sliderItems,
        
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-slider-main-wrapper ${blockId}`,
    });


    return (
        <>
            <div {...blockProps}>
                <div className="fb-parent-wrapper fb-slider-wrapper">
                    <div className={`fb-slider-list-wrapper `}>
                        <ul className="fb-slider-list-items">
                            {sliderItems.map(item => (
                                  <li key={item.id} className={`fb-slider-list-item single-item-${item.id}`}>

                                    <div className="fb-slider-list-content">
                                        <RichText.Content
                                            tagName="p"
                                            className="fb-slider-list-title"
                                            value={item.title}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    );
}
