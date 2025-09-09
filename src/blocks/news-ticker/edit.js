import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import Inspector from "./inspector";
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const {
        blockID,
        featuresListGlobalWraperID,
        featuresListGlobalWraperClass,
        featuresListDesktopSwitcher,
        featuresListTabletSwitcher,
        featuresListMobileSwitcher,
        tickerLabel
    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-news-ticker-wrapper ${blockID} 
            ${featuresListDesktopSwitcher && 'fb-desktop-responsive'} 
            ${featuresListTabletSwitcher && 'fb-tablet-responsive'} 
            ${featuresListMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
            />

            <div {...blockProps} id={featuresListGlobalWraperID}>
                <div className={`fb-news-ticker-inner ${featuresListGlobalWraperClass}`}>
                    <div className="fb-news-ticker-label">
                        <RichText
                            tagName="span"
                            value={tickerLabel}
                            onChange={(value) => setAttributes({ tickerLabel: value })}
                            placeholder={__('Ticker Label', 'frontis-blocks')}
                        />
                    </div>

                    <div className="fb-news-ticker-content">
                        <InnerBlocks
                            allowedBlocks={['frontis-blocks/marquee-carousel']}
                            template={[
                                ['frontis-blocks/marquee-carousel', {}],
                            ]}
                            templateLock={false}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
