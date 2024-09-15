import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockID,
        FeatureItems, // Added FeatureItems
    } = attributes;

    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} id={blockID}>
            <div 
                className={`fb-advanced-Feature-wrapper ${blockID}`} 
            >
                <div className="fb-feature-items">
                    {FeatureItems.map(item => (
                        <div key={item.id} className="fb-feature-item">
                            <RichText.Content
                                tagName="h4"
                                value={item.title}
                            />
                            <RichText.Content
                                tagName="p"
                                value={item.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
