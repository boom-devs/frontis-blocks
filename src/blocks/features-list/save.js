import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './style.scss'; // Ensure you have styles for the front end if needed

export default function Save({ attributes }) {
    const { blockID, FeatureItems, FeatureTag } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-feature-main-wrapper ${blockID}`,
    });

    return (
        <div {...blockProps}>
            <div className="fb-feature-wrapper">
                <div className="fb-feature-list-wrapper">
                    <ul className="fb-feature-list-items">
                        {FeatureItems.map(item => (
                            <li key={item.id} className="fb-feature-list-item">
                                <div className="fb-feature-list-icon-box">
                                    <div className="fb-feature-list-icon-inner">
                                        <span className="fb-feature-list-icon">
                                            {renderSVG(item.FeatureIcon)}
                                        </span>
                                    </div>
                                </div>
                                <div className="fb-feature-list-content">
                                   <RichText.Content
                                        tagName={FeatureTag}
                                        className="fb-feature-list-title"
                                        value={item.Title}
                                    />
                                    <RichText.Content
                                        tagName="p"
                                        className="fb-feature-list-text"
                                        value={item.Description}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

