import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './style.scss'; // Ensure you have styles for the front end if needed

export default function Save({ attributes }) {
    const { 

        blockID,
        FeatureItems,
        FeatureIconShape,
        FeatureAlignment,
        FeatureIconAlignment,
        FeatureTag,

        featuresListGlobalWraperID,
        featuresListGlobalWraperClass,
        
        featuresListDesktopSwitcher,
		featuresListTabletSwitcher,
		featuresListMobileSwitcher,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-feature-main-wrapper ${blockID} ${featuresListDesktopSwitcher && 'fb-desktop-responsive'} ${featuresListTabletSwitcher && 'fb-tablet-responsive'} ${featuresListMobileSwitcher && 'fb-mobile-responsive'}`,
    });


    return (
        <>
            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-feature-wrapper ${featuresListGlobalWraperClass}`} id={featuresListGlobalWraperID}>
                    <div className={`fb-feature-list-wrapper fb-feature-list-${FeatureAlignment} fb-icon-position-${FeatureIconAlignment} `}>
                        <ul className="fb-feature-list-items">
                            {FeatureItems.map(item => (
                                  
                                  <li key={item.id} className={`fb-feature-list-item single-item-${item.id}`}>

                                    {item.FeatureIconAlign !== 'none' && (
                                        <div className="fb-feature-list-icon-box">
                                            <div className={`fb-feature-list-icon-inner ${FeatureIconShape}`}>
                                                {item.FeatureIconAlign === 'icon' || item.FeatureIconAlign === undefined ? (
                                                    <span className="fb-feature-list-icon">
                                                        {item.FeatureIcon ? renderSVG(item.FeatureIcon) : ''}
                                                    </span>
                                                    
                                                ) : item.FeatureIconAlign === 'image' && item.FeatureIconImageUrl ? (
                                                    <div className={`fb-feature-icon-image-wrapper ${FeatureIconShape}`}>

                                                        <img
                                                            src={item.FeatureIconImageUrl}
                                                            alt={item.FeatureIconImageAlt || 'Feature Image'}
                                                            className="fb-feature-icon-image"
                                                        />

                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    )}
                                    
                                    { (item.Title || item.Description) && (
                                        <div className="fb-feature-list-content">
                                            {item.Title && (
                                                <RichText.Content
                                                    tagName={FeatureTag}
                                                    className="fb-feature-list-title"
                                                    value={item.Title}
                                                />
                                            )}
                                            {item.Description && (
                                                <RichText.Content
                                                    tagName="p"
                                                    className="fb-feature-list-text"
                                                    value={item.Description}
                                                />
                                            )}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    );
}

