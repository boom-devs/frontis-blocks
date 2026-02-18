import { useBlockProps, RichText } from '@wordpress/block-editor';
import attributes from './attributes.js';

const v1_0_3 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            progressTextPosition,
            progressNumber,
            progressTitle,
            progressHeadingTag,
    
            progressGlobalWraperID,
            progressGlobalWraperClass,
    
            progressbarDesktopSwitcher,
            progressbarTabletSwitcher,
            progressbarMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-progress-bar-main-wrapper ${blockID} ${progressbarDesktopSwitcher && 'fb-desktop-responsive'} ${progressbarTabletSwitcher && 'fb-tablet-responsive'} ${progressbarMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper progress-bar-wrapper ${progressGlobalWraperClass}`} id={progressGlobalWraperID}>
                        {progressTextPosition === 'text-outSide' && (
                            <div className="progress-bar-text-outSide-wrapper">
                                <div className="progress-bar-label">
                                    <RichText.Content
                                        tagName={progressHeadingTag}
                                        value={progressTitle}
                                    />
                                </div>
                                <div className='progress-bar-line'>
                                    <div className="progress-bar">
                                        <span className="progress-bar-number">{progressNumber}%</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {progressTextPosition === 'text-inSide' && (
                            <div className="progress-bar-text-inSide-wrapper">
                                <div 
                                    className="progress-bar-label"
                                    data-level={progressNumber} 
                                    style={{ width: `${progressNumber}%` }}
                                >
                                    <div className="progress-bar-info">
                                        <RichText.Content
                                            className='progress-bar-name'
                                            tagName={progressHeadingTag}
                                            value={progressTitle}
                                        />
                                        <span className="progress-bar-number">{progressNumber}%</span>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </>
        );
    },
};

const v1_1_8 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            progressbarType,
            progressTextPosition,
            progressNumberPosition,
            progressNumber,
            progressTitle,
            progressHeadingTag,

            progressGlobalWraperID,
            progressGlobalWraperClass,

            progressbarDesktopSwitcher,
            progressbarTabletSwitcher,
            progressbarMobileSwitcher,

            showProgressTitle,
            showProgressNumber,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-progressbar-main-wrapper ${blockID} ${progressbarDesktopSwitcher && 'fb-desktop-responsive'} ${progressbarTabletSwitcher && 'fb-tablet-responsive'} ${progressbarMobileSwitcher && 'fb-mobile-responsive'}`,
        });
        
        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper fb-progressbar-wrapper ${progressGlobalWraperClass}`} id={progressGlobalWraperID}>
                            <div className="fb-progressbar-item" data-progressbar-type={progressbarType}  data-progress={progressNumber} data-progress-number-position={progressNumberPosition}>
                                {progressbarType === 'horizontal' && progressTextPosition === 'text-outSide' && (showProgressTitle || showProgressNumber) && (
                                    <div className="fb-progressbar-content">
                                        <RichText.Content
                                            tagName={progressHeadingTag}
                                            className="fb-progressbar-label"
                                            value={progressTitle}
                                        />
                                        {progressNumberPosition === 'default' && showProgressNumber && <span className="fb-progressbar-number">{progressNumber}%</span>}
                                    </div>
                                )}
                                {progressbarType === 'vertical' && progressNumberPosition === 'default' && showProgressNumber && (
                                    <div className="fb-progressbar-content">
                                        <span className="fb-progressbar-number">{progressNumber}%</span>
                                    </div>
                                )}
                                <div className='fb-progressbar-line-wrapper'>
                                    <div className="fb-progressbar-line">
                                        {progressNumberPosition === 'with-progressbar' && showProgressNumber && <span className="fb-progressbar-number">{progressNumber}%</span>}
                                    </div>
                                        {progressbarType === 'horizontal' && progressTextPosition === 'text-inSide' && (showProgressTitle || showProgressNumber) && (
                                            <div className="fb-progressbar-content">
                                                <RichText.Content
                                                    tagName={progressHeadingTag}
                                                    className="fb-progressbar-label"
                                                    value={progressTitle}
                                                />
                                                {progressNumberPosition === 'default' && showProgressNumber && <span className="fb-progressbar-number">{progressNumber}%</span>}
                                            </div>
                                        )}
                                </div>
                                {progressbarType === 'vertical' && showProgressTitle && (
                                    <div className="fb-progressbar-content">
                                        <RichText.Content
                                            tagName={progressHeadingTag}
                                            className="fb-progressbar-label"
                                            value={progressTitle}
                                        />
                                    </div>
                                )}
                            </div>
                    </div>
                </div>
            </>
        );
    },
};

export default [v1_0_3, v1_1_8];