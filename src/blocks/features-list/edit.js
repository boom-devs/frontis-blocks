import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from "./inspector";
import { useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        FeatureItems,
        FeatureTag,
        FeatureIconShape,
        FeatureAlignment,
        FeatureIconAlignment,

     } = attributes;

    const blockProps = useBlockProps({
        className: `fb-feature-main-wrapper ${blockID}`,
    });

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            
            <div {...blockProps}>
                <div className="fb-feature-wrapper">
                    <div className={`fb-feature-list-wrapper fb-feature-list-${FeatureAlignment} fb-icon-position-${FeatureIconAlignment} `}>
                        <ul className="fb-feature-list-items">
                            {FeatureItems.map(item => (
                                  
                                <li key={item.id} className={`fb-feature-list-item single-item-${item.id}`}>

                                    { item.FeatureIconAlign !== 'none' && (
                                        <div className="fb-feature-list-icon-box">
                                            <div className={`fb-feature-list-icon-inner ${FeatureIconShape}`}>
                                                <span className="fb-feature-list-icon">
                                                    {item.FeatureIcon ? renderSVG(item.FeatureIcon) : ''}
                                                </span>
                                            </div>
                                        </div>
                                    ) }
                                    
                                    <div className="fb-feature-list-content">
                                        <RichText
                                            tagName={FeatureTag}
                                            className="fb-feature-list-title"
                                            value={item.Title}
                                            onChange={(value) => {
                                                const updatedItems = FeatureItems.map(i =>
                                                    i.id === item.id ? { ...i, Title: value } : i
                                                );
                                                setAttributes({ FeatureItems: updatedItems });
                                            }}
                                            placeholder={__('Feature Title', 'frontis-blocks')}
                                        />
                                        <RichText
                                            tagName="p"
                                            className="fb-feature-list-text"
                                            value={item.Description}
                                            onChange={(value) => {
                                                const updatedItems = FeatureItems.map(i =>
                                                    i.id === item.id ? { ...i, Description: value } : i
                                                );
                                                setAttributes({ FeatureItems: updatedItems });
                                            }}
                                            placeholder={__('Feature Description', 'frontis-blocks')}
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
