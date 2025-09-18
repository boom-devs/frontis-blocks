import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import './style.scss';

export default function Save({ attributes }) {
    const { 
        blockID,
        featuresListGlobalWraperID,
        featuresListGlobalWraperClass,
        featuresListDesktopSwitcher,
        featuresListTabletSwitcher,
        featuresListMobileSwitcher,
        tickerLabel,
        tickerLabelIcon
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
                
                <div className='fb-news-ticker-label-container'>
                    <div className="fb-news-ticker-label-icon">
                        <div className="fb-icon-wrapper">
                            {renderSVG(tickerLabelIcon)}
                        </div>
                    </div>
                    <div className="fb-news-ticker-label">
                        <RichText.Content
                            tagName="span"
                            value={tickerLabel}
                        />
                    </div>
                </div>

                <div className="fb-news-ticker-content">
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
}