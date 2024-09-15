import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { blockID, FeatureItems } = attributes;

    const blockProps = useBlockProps({
        className: `fb-advanced-Feature-wrapper ${blockID}`,
    });

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            
            <div {...blockProps}>
                <div className="fb-feature-items">
                    {FeatureItems.map(item => (
                        <div key={item.id} className="fb-feature-item">
                            <RichText
                                tagName="h4"
                                value={item.title}
                                onChange={(value) => {
                                    const updatedItems = FeatureItems.map(i =>
                                        i.id === item.id ? { ...i, title: value } : i
                                    );
                                    setAttributes({ FeatureItems: updatedItems });
                                }}
                                placeholder={__('Feature Title', 'frontis-blocks')}
                            />
                            <RichText
                                tagName="p"
                                value={item.description}
                                onChange={(value) => {
                                    const updatedItems = FeatureItems.map(i =>
                                        i.id === item.id ? { ...i, description: value } : i
                                    );
                                    setAttributes({ FeatureItems: updatedItems });
                                }}
                                placeholder={__('Feature Description', 'frontis-blocks')}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
