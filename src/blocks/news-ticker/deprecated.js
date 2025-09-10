import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import attributes from './attributes.js';

const v1_0_3 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const { 
            blockID = '',
            featuresListGlobalWraperID = '',
            featuresListGlobalWraperClass = '',
            featuresListDesktopSwitcher = false,
            featuresListTabletSwitcher = false,
            featuresListMobileSwitcher = false,
            tickerLabel = '',
            tickerLabelIcon = null,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-news-ticker-wrapper ${blockID} 
                ${featuresListDesktopSwitcher && 'fb-desktop-responsive'} 
                ${featuresListTabletSwitcher && 'fb-tablet-responsive'} 
                ${featuresListMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        return (
            <div {...blockProps} id={featuresListGlobalWraperID || undefined}>
                <div className={`fb-news-ticker-inner ${featuresListGlobalWraperClass || ''}`}>
                    
                    {/* Label container with icon + text */}
                    <div className="fb-news-ticker-label-container">
                        <div className="fb-news-ticker-label-icon">
                            <div className="fb-icon-wrapper">
                                {/* Keep empty wrapper in deprecated version to avoid errors */}
                                {tickerLabelIcon ? (
                                    <span
                                        dangerouslySetInnerHTML={{ __html: tickerLabelIcon }}
                                    />
                                ) : null}
                            </div>
                        </div>

                        <div className="fb-news-ticker-label">
                            <RichText.Content tagName="span" value={tickerLabel} />
                        </div>
                    </div>

                    {/* Content area */}
                    <div className="fb-news-ticker-content">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        );
    },
};

export default [v1_0_3];