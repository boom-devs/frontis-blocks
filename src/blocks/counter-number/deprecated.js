import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import attributes from './attributes.js';

const v1_1_8 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
       const {
            blockID,
            counterNumberStart,
            counterNumberEnd,
            counterDuration,
            counterTitle,
            counterTitleTag,
            counterTitleSwitch,
            counterPrefix,
            counterPrefixSwitch,
            counterSuffix,
            counterSuffixSwitch,
            showThousandsSeparator,
            showThousandsSeparatorType,
            icon,
            mediaSwitcher,
            counterMediaUrl,

            counterGlobalWraperID,
            counterGlobalWraperClass,

            counterDesktopSwitcher,
            counterTabletSwitcher,
            counterMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-counter-main-wrapper ${blockID} ${counterDesktopSwitcher && 'fb-desktop-responsive'} ${counterTabletSwitcher && 'fb-tablet-responsive'} ${counterMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        return (
            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-counter-wrapper ${blockID} ${counterGlobalWraperClass}`} id={counterGlobalWraperID}>
                    <div className="fb-counter-item">
                            {mediaSwitcher !== 'none' && <div className={`fb-counter-icon-wrapper`}>
                                {/* Conditionally render image or icon */}
                                {mediaSwitcher === 'image' && counterMediaUrl && (
                                    <img src={counterMediaUrl} alt={__('Counter media', 'text-domain')} />
                                )}
                                {mediaSwitcher === 'icon' && icon && (
                                    <div className="fb-counter-icon">{renderSVG(icon)}</div>
                                )}
                            </div>}
                        
                        <div className={`fb-counter-content-wrapper`}>
                            <div className={`fb-counter-number-wrapper`}>
                                {counterPrefixSwitch === true && <span className={`fb-counter-number-prefix`}>{counterPrefix}</span>}
                                <span
                                    className="fb-counter-number"
                                    counter-start={counterNumberStart}
                                    counter-end={counterNumberEnd}
                                    counter-duration={counterDuration}
                                    separator-switch={showThousandsSeparator === true ? 'true' : 'false'}
                                    separator-type={showThousandsSeparatorType}
                                >
                                0 {/* Initial value for animation */}</span>
                                {counterSuffixSwitch === true && <span className={`fb-counter-number-suffix`}>{counterSuffix}</span>}
                            </div>
                            {counterTitleSwitch === true && 
                                <RichText.Content
                                    tagName={counterTitleTag}
                                    value={counterTitle}
                                    className="fb-counter-title"
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};

export default [v1_1_8];