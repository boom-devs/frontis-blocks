import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import './style.scss';

export default function Save({ attributes }) {
    const { 
        blockID,
        featuresListGlobalWraperID,
        featuresListGlobalWraperClass,
        featuresListDesktopSwitcher,
        featuresListTabletSwitcher,
        featuresListMobileSwitcher,
        tickerLabel
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-news-ticker-wrapper ${blockID} 
            ${featuresListDesktopSwitcher && 'fb-desktop-responsive'} 
            ${featuresListTabletSwitcher && 'fb-tablet-responsive'} 
            ${featuresListMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    return (
        <div {...blockProps} id={featuresListGlobalWraperID}>
            <div className={`fb-news-ticker-inner ${featuresListGlobalWraperClass}`}>
                
                {/* Left side label */}
                <div className="fb-news-ticker-label">
                    <RichText.Content
                        tagName="span"
                        value={tickerLabel}
                    />
                </div>

                {/* Right side: InnerBlocks */}
                <div className="fb-news-ticker-content">
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
}