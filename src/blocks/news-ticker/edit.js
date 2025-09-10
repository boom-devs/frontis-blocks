import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
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
                clientId={clientId}
            />

            <div {...blockProps} id={featuresListGlobalWraperID}>
                <div className={`fb-news-ticker-inner ${featuresListGlobalWraperClass}`}>
                    <div className='fb-news-ticker-label-container'>
                        <div className="fb-news-ticker-label-icon">
                            <div className="fb-icon-wrapper">{renderSVG(tickerLabelIcon)}</div>
                        </div>
                        <div className="fb-news-ticker-label">
                            <RichText
                                tagName="span"
                                value={tickerLabel}
                                onChange={(value) => setAttributes({ tickerLabel: value })}
                                placeholder={__('Breaking News', 'frontis-blocks')}
                            />
                        </div>
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
